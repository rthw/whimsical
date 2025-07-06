// Design process animation with materials flowing into central square
class DesignProcessAnimation {
    static MANIFEST_PATH = 'images/case_gallery/case_gallery_manifest.json';
    static SPIRAL_DIRECTION = 'counterclockwise'; // 'clockwise' or 'counterclockwise'
    
    constructor(container) {
        this.container = document.querySelector(container);
        if (!this.container) {
            console.error(`Container "${container}" not found.`);
            return;
        }
        this.currentProject = 0;
        this.timeline = gsap.timeline();
        this.isAnimating = false;
        this.projects = [];
        this.init();
    }

    async init() {
        await this.loadProjectsFromManifest();
        if (!this.projects.length) {
            console.error('No projects loaded. Check your manifest file and paths.');
            this.container.innerHTML = '<div style="color:red;text-align:center;margin-top:2em;">No projects found for animation.</div>';
            return;
        }
        this.createContainer();
        this.startAnimation();
    }

    async loadProjectsFromManifest() {
        try {
            const resp = await fetch(DesignProcessAnimation.MANIFEST_PATH);
            if (!resp.ok) throw new Error('Manifest not found');
            this.projects = await resp.json();

            // Filter out projects that don't have a final screen.
            this.projects = this.projects.filter(p => p.finalScreen && p.finalScreen.length > 0);

            // The animation expects two screens, so create a `finalScreens` array
            // by duplicating the single screen from the manifest.
            this.projects.forEach(p => {
                p.finalScreens = [p.finalScreen[0], p.finalScreen[0]];
            });
        } catch (e) {
            console.error('Failed to load project manifest:', e);
            this.projects = [];
        }
    }
    
    createContainer() {
        this.container.innerHTML = `
            <div class="animation-stage">
                <div class="central-square">
                    <div class="square-glow"></div>
                    <div class="square-content"></div>
                </div>
                <div class="floating-elements"></div>
                <div class="final-reveal">
                    <div class="screen-1"></div>
                </div>
            </div>
        `;
        
        // Add CSS styles
        this.addStyles();
        
        // Get references to key elements
        this.stage = this.container.querySelector('.animation-stage');
        this.centralSquare = this.container.querySelector('.central-square');
        this.squareGlow = this.container.querySelector('.square-glow');
        this.elementsContainer = this.container.querySelector('.floating-elements');
        this.finalReveal = this.container.querySelector('.final-reveal');
    }
    
    addStyles() {
        const styles = `
            <style>
                .animation-stage {
                    position: relative;
                    width: 100%;
                    height: 70vw;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0);
                }
                
                .central-square {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 18.125vw;
                    height: 18.125vw;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    border: 0.1vw solid #333;
                    z-index: 5;
                }
                
                .square-glow {
                    position: absolute;
                    top: -0.5vw;
                    left: -0.5vw;
                    right: -0.5vw;
                    bottom: -0.5vw;
                    background: radial-gradient(circle, rgba(74, 144, 226, 0.3) 0%, transparent 70%);
                    opacity: 0;
                }
                
                .floating-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .element {
                    position: absolute;
                }
                
                .element-text {
                    max-width: 23.75vw;
                }
                
                .element-image, .element-reference {
                    width: 5vw;
                    background: #ddd;
                    background-size: cover;
                    background-position: center;
                }
                
                .final-reveal {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transform-origin: center center;
                    opacity: 0;
                    border: none;
                    outline: none;
                    box-shadow: none;
                    background: transparent;
                    will-change: transform, opacity;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                
                .screen-1 {
                    width: 42.5vw;
                    height: 42.5vw;
                    background: #333;
                    background-size: 101% 101%;
                    background-position: center;
                    border: none;
                    outline: none;
                    box-shadow: none;
                    border-radius: 0;
                    will-change: transform;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                    transform: translateZ(0);
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    async generateElements(project) {
        const elements = [];
        const centerX = 50; // 50vw - center of viewport
        const centerY = 35; // 50vw - center of viewport
        console.log('Center position (vw/vw):', centerX, centerY);
        
        // Define priority lists of locations in vw/vw units
        // up to 5 text elements
        const textLocations = [
            { x: centerX - 33.67, y: centerY - 15.45 },
            { x: centerX - 40, y: centerY - 12.35 }, 
            { x: centerX - 46.25, y: centerY - 9.375 },
            { x: centerX - 40, y: centerY + 5.85 },
            { x: centerX - 33.67, y: centerY + 1.25 },
        ];
        
        // Generate image locations programmatically for variable height images
        // Images: 5vw width, 1.25vw spacing, 22.5vw from center, cloud max 23.75vw wide
        // Y range: centerY-15vw to centerY+15vw (30vw total height)
        const generateImageLocations = (imageCount) => {
            const locations = [];
            const imageWidth = 5; // 5vw fixed width
            const spacing = 1.25; // 1.25vw spacing between images
            const cloudDistance = 22.5; // 22.5vw from center
            const cloudMaxWidth = 23.75; // 23.75vw max cloud width
            const verticalRange = 15; // ±15vw from centerY
            
            // Calculate horizontal cell size (fixed width + spacing)
            const cellWidth = imageWidth + spacing; // 6.25vw per column
            
            // Calculate how many columns fit in the cloud width
            // Last column doesn't need spacing, so: (maxWidth - imageWidth) / cellWidth + 1
            const maxCols = Math.floor((cloudMaxWidth - imageWidth) / cellWidth) + 1;
            
            // Cloud boundaries
            const cloudStartX = centerX + cloudDistance;
            const cloudStartY = centerY - verticalRange;
            const cloudEndY = centerY + verticalRange;
            
            console.log(`Image grid: ${maxCols} columns, cloud from Y=${cloudStartY}vw to Y=${cloudEndY}vw`);
            
            // Track the height of each column to place images efficiently
            const columnHeights = new Array(maxCols).fill(0);
            
            // Generate positions by placing images in the shortest column
            for (let i = 0; i < imageCount; i++) {
                // Find the column with the least height
                let shortestCol = 0;
                for (let col = 1; col < maxCols; col++) {
                    if (columnHeights[col] < columnHeights[shortestCol]) {
                        shortestCol = col;
                    }
                }
                
                // Calculate position in the shortest column
                const x = cloudStartX + shortestCol * cellWidth;
                const y = cloudStartY + columnHeights[shortestCol];
                
                // Add some estimated height for this image slot (will be refined with actual measurements)
                // We'll use a base height for now, actual placement will account for real image dimensions
                const estimatedImageHeight = 5; // Start with square assumption, will be adjusted
                
                // Check if this position fits within vertical bounds
                if (y + estimatedImageHeight <= cloudEndY) {
                    locations.push({ x, y, column: shortestCol });
                    // Reserve space in this column (height + spacing)
                    columnHeights[shortestCol] += estimatedImageHeight + spacing;
                } else {
                    // If we can't fit more images vertically, stop generating positions
                    console.log(`Reached vertical limit at image ${i + 1}`);
                    break;
                }
            }
            
            console.log(`Generated ${locations.length} image positions using column-based layout`);
            console.log('Column heights:', columnHeights.map(h => h.toFixed(1) + 'vw'));
            return locations;
        };
        
        const imageLocations = generateImageLocations(project.references.length);
        
        // Track occupied positions to avoid overlaps (in vw/vw units)
        const occupiedPositions = [];
        
        // Add central square to occupied positions (18.125vw square)
        const squareSize = 18.125; // vw units for both width and height
        const squarePosition = {
            x: centerX - squareSize/2, // Account for translate(-50%, -50%)
            y: centerY - squareSize/2,
            width: squareSize,
            height: squareSize
        };
        occupiedPositions.push(squarePosition);
        console.log('Square occupied area (vw/vw):', squarePosition);
        
        // Helper function to convert pixels to vw units
        const pxToVw = (px) => (px / window.innerWidth) * 100;
        
        // Helper function to get actual element dimensions in vw units
        const getElementDimensions = (element) => {
            // For images with background-image that already have height set, use those values directly
            if (element.classList.contains('element-reference') && element.style.height) {
                const widthVw = parseFloat(element.style.width.replace('vw', ''));
                const heightVw = parseFloat(element.style.height.replace('vw', ''));
                return {
                    width: widthVw,
                    height: heightVw
                };
            }
            
            // For text elements or elements that need measurement, measure normally
            // Temporarily make element visible to measure it
            const originalVisibility = element.style.visibility;
            const originalPosition = element.style.position;
            const originalLeft = element.style.left;
            const originalTop = element.style.top;
            
            // Ensure element is positioned and hidden but measurable
            element.style.visibility = 'hidden';
            element.style.position = 'absolute';
            element.style.left = '-9999px';
            element.style.top = '0px';
            
            this.elementsContainer.appendChild(element);
            
            // Force a layout to ensure accurate measurements
            element.offsetHeight;
            
            const rect = element.getBoundingClientRect();
            const dimensions = {
                width: pxToVw(rect.width),
                height: pxToVw(rect.height) // Convert height to vw units too for consistency
            };
            
            this.elementsContainer.removeChild(element);
            
            // Restore original styles
            element.style.visibility = originalVisibility;
            element.style.position = originalPosition;
            element.style.left = originalLeft;
            element.style.top = originalTop;
            
            console.log(`Element "${element.textContent || element.src || 'image'}" actual size: ${dimensions.width.toFixed(2)}vw x ${dimensions.height.toFixed(2)}vw`);
            console.log(`Raw pixel size: ${rect.width.toFixed(2)}px x ${rect.height.toFixed(2)}px`);
            return dimensions;
        };
        
        // Helper function to check if a position overlaps with existing elements (all vw units)
        const isPositionAvailable = (x, y, elementWidth, elementHeight) => {
            const buffer = 1; // 1vw buffer between elements
            for (const occupied of occupiedPositions) {
                if (x < occupied.x + occupied.width + buffer &&
                    x + elementWidth + buffer > occupied.x &&
                    y < occupied.y + occupied.height + buffer &&
                    y + elementHeight + buffer > occupied.y) {
                    console.log(`Position conflict at ${x.toFixed(1)}vw, ${y.toFixed(1)}vw with occupied area ${occupied.x.toFixed(1)}vw, ${occupied.y.toFixed(1)}vw`);
                    console.log(`Element size: ${elementWidth.toFixed(2)}vw x ${elementHeight.toFixed(2)}vw`);
                    return false;
                }
            }
            return true;
        };
        
        // Function to find the best available position for an element
        const findBestPosition = (locations, element) => {
            // Get actual element dimensions
            const dimensions = getElementDimensions(element);
            
            for (const location of locations) {
                if (isPositionAvailable(location.x, location.y, dimensions.width, dimensions.height)) {
                    console.log(`Placing element at ${location.x.toFixed(1)}vw, ${location.y.toFixed(1)}vw`);
                    occupiedPositions.push({ 
                        x: location.x, 
                        y: location.y, 
                        width: dimensions.width, 
                        height: dimensions.height 
                    });
                    return location;
                }
            }
            
            // If no prioritized location works, find a random available spot
            console.log('No prioritized location available, searching for fallback position...');
            for (let attempts = 0; attempts < 50; attempts++) {
                const x = Math.random() * (100 - dimensions.width);
                const y = Math.random() * (100 - dimensions.height);
                if (isPositionAvailable(x, y, dimensions.width, dimensions.height)) {
                    console.log(`Found fallback position at ${x.toFixed(1)}vw, ${y.toFixed(1)}vw`);
                    occupiedPositions.push({ 
                        x: x, 
                        y: y, 
                        width: dimensions.width, 
                        height: dimensions.height 
                    });
                    return { x, y };
                }
            }
            
            // Ultimate fallback - place at edge
            const fallbackX = Math.random() > 0.5 ? 5 : 75;
            const fallbackY = Math.random() * 80 + 10;
            console.log(`Using ultimate fallback position at ${fallbackX}vw, ${fallbackY}vw`);
            return { x: fallbackX, y: fallbackY };
        };

        // Place text elements
        project.texts.forEach((text, index) => {
            // Create a temporary element to measure actual size
            const tempDiv = document.createElement('div');
            tempDiv.textContent = text;
            tempDiv.className = 'normal-text element element-text'; // Add all relevant classes
            tempDiv.style.whiteSpace = 'normal'; // Allow text wrapping for max-width
            tempDiv.style.maxWidth = '23.75vw';
            tempDiv.style.position = 'absolute'; // Ensure positioning context
            tempDiv.style.visibility = 'hidden'; // Hide during measurement
            
            const position = findBestPosition(textLocations, tempDiv);
            
            elements.push({
                type: 'text',
                content: text,
                x: position.x,
                y: position.y,
                group: 0
            });
        });

        // Place reference elements with column-based layout for variable heights
        const placeImages = async () => {
            const columnHeights = {}; // Track actual heights of each column
            const columnSpacing = 1.25; // 1.25vw spacing
            const cloudDistance = 22.5; // 22.5vw from center
            const cloudMaxWidth = 23.75; // max cloud width
            const imageWidth = 5; // 5vw fixed width
            const cellWidth = imageWidth + columnSpacing; // 6.25vw per column
            // Calculate how many columns fit in the cloud width
            // Last column doesn't need spacing, so: (maxWidth - imageWidth) / cellWidth + 1
            const maxCols = Math.floor((cloudMaxWidth - imageWidth) / cellWidth) + 1;
            const verticalRange = 15; // ±15vw from centerY
            
            // Initialize column heights with staggered starting positions
            // Rules: 
            // - Right column (last) should only have one image
            // - Left column (first) should touch the bottom
            // - Only one column should start at the very top (centerY-15vw)
            const staggerOffsets = [0, 2.5, 1.25, 1.875]; // vw offsets for each of the 4 columns from the top
            for (let i = 0; i < maxCols; i++) {
                columnHeights[i] = staggerOffsets[i] || (Math.random() * 3); // Random offset for additional columns
            }
            
            // Reserve the rightmost column for exactly one image by setting a high initial height
            // We'll place one image there manually at the end
            const rightmostCol = maxCols - 1;
            const reservedRightColumnHeight = 999; // High value to prevent normal placement
            columnHeights[rightmostCol] = reservedRightColumnHeight;
            
            console.log('Initial column offsets:', Object.values(columnHeights).map(h => h === reservedRightColumnHeight ? 'RESERVED' : h.toFixed(1) + 'vw'));
            
            let rightColumnImage = null; // Store the image for the right column
            
            for (const [index, ref] of project.references.entries()) {
                // Reserve the last image for the right column
                if (index === project.references.length - 1) {
                    rightColumnImage = ref;
                    continue; // Skip normal placement for this image
                }
                
                // ...existing code...
                // Create a temporary element to measure actual size
                const tempImg = document.createElement('div');
                tempImg.className = 'element element-reference';
                tempImg.style.width = '5vw';
                tempImg.style.backgroundImage = `url(${ref})`;
                tempImg.style.backgroundSize = 'cover';
                tempImg.style.backgroundPosition = 'center';
                tempImg.style.position = 'absolute';
                tempImg.style.visibility = 'hidden';
                
                // Pre-calculate the height based on image aspect ratio
                const img = new Image();
                await new Promise((resolve) => {
                    img.onload = function() {
                        const aspectRatio = this.naturalHeight / this.naturalWidth;
                        const heightInVw = 5 * aspectRatio; // 5vw width * aspect ratio
                        tempImg.style.height = heightInVw + 'vw';
                        resolve();
                    };
                    img.onerror = function() {
                        // Fallback to square if image fails to load
                        tempImg.style.height = '5vw';
                        resolve();
                    };
                    img.src = ref;
                });
                
                // Get actual dimensions (now that height is properly set)
                const actualDimensions = getElementDimensions(tempImg);
                
                // Find the column with the least height (excluding the reserved right column)
                let shortestCol = 0;
                for (let col = 1; col < maxCols - 1; col++) { // Exclude rightmost column (now column 3)
                    if (columnHeights[col] < columnHeights[shortestCol]) {
                        shortestCol = col;
                    }
                }
                
                // Bias towards left column if it's not significantly taller and we need it to reach bottom
                const leftColumnHeight = columnHeights[0];
                const shortestHeight = columnHeights[shortestCol];
                const heightDifference = leftColumnHeight - shortestHeight;
                
                // If left column is not much taller (within 5vw), prefer it to help it reach the bottom
                if (heightDifference < 5 && Math.random() > 0.3) {
                    shortestCol = 0;
                }
                
                // Calculate position in the selected column
                const x = centerX + cloudDistance + shortestCol * cellWidth;
                const y = centerY - verticalRange + columnHeights[shortestCol];
                
                // Check if this image fits within vertical bounds
                if (y + actualDimensions.height <= centerY + verticalRange) {
                    elements.push({
                        type: 'reference',
                        content: ref,
                        x: x,
                        y: y,
                        group: 1,
                        actualHeight: actualDimensions.height // Store actual height for DOM creation
                    });
                    
                    // Update column height with actual image height + spacing
                    columnHeights[shortestCol] += actualDimensions.height + columnSpacing;
                    
                    console.log(`Placed image ${index + 1} in column ${shortestCol} at ${x.toFixed(1)}vw, ${y.toFixed(1)}vw (height: ${actualDimensions.height.toFixed(1)}vw)`);
                } else {
                    console.log(`Image ${index + 1} doesn't fit in any column, skipping`);
                }
            }
            
            // Place the reserved image in the rightmost column
            if (rightColumnImage) {
                const tempImg = document.createElement('div');
                tempImg.className = 'element element-reference';
                tempImg.style.width = '5vw';
                tempImg.style.backgroundImage = `url(${rightColumnImage})`;
                tempImg.style.backgroundSize = 'cover';
                tempImg.style.backgroundPosition = 'center';
                tempImg.style.position = 'absolute';
                tempImg.style.visibility = 'hidden';
                
                // Pre-calculate the height based on image aspect ratio
                const img = new Image();
                await new Promise((resolve) => {
                    img.onload = function() {
                        const aspectRatio = this.naturalHeight / this.naturalWidth;
                        const heightInVw = 5 * aspectRatio;
                        tempImg.style.height = heightInVw + 'vw';
                        resolve();
                    };
                    img.onerror = function() {
                        tempImg.style.height = '5vw';
                        resolve();
                    };
                    img.src = rightColumnImage;
                });
                
                const actualDimensions = getElementDimensions(tempImg);
                
                // Place in the rightmost column at a nice position (not at the very top)
                const rightColOffset = staggerOffsets[rightmostCol] || 3; // Use defined offset or default
                const x = centerX + cloudDistance + rightmostCol * cellWidth;
                const y = centerY - verticalRange + rightColOffset;
                
                elements.push({
                    type: 'reference',
                    content: rightColumnImage,
                    x: x,
                    y: y,
                    group: 1,
                    actualHeight: actualDimensions.height
                });
                
                console.log(`Placed right column image at ${x.toFixed(1)}vw, ${y.toFixed(1)}vw (height: ${actualDimensions.height.toFixed(1)}vw)`);
            }
            
            // Ensure the left column (column 0) touches the bottom by adding filler if needed
            const leftColumnCol = 0;
            const currentLeftHeight = columnHeights[leftColumnCol];
            const targetBottomY = centerY + verticalRange;
            const currentBottomY = centerY - verticalRange + currentLeftHeight;
            
            if (currentBottomY < targetBottomY - 2) { // If there's more than 2vw gap from bottom
                console.log(`Left column needs to reach bottom. Current bottom: ${currentBottomY.toFixed(1)}vw, Target: ${targetBottomY}vw`);
                // The left column will naturally extend when more images are placed, 
                // or we can add spacing logic here if needed
            }
            
            console.log('Final column heights:', Object.values(columnHeights).map((h, i) => 
                i === rightmostCol ? 'RIGHT_COL' : h.toFixed(1) + 'vw'));
        };
        
        await placeImages();
        
        return elements;
    }
    
    createElementDOM(element) {
        const div = document.createElement('div');
        div.className = `element element-${element.type}`;
        
        if (element.type === 'text') {
            div.classList.add('normal-text');
            div.textContent = element.content;
            div.style.whiteSpace = 'normal'; // Allow text wrapping for max-width
            div.style.maxWidth = '23.75vw';
        } else {
            // Encode the URL to handle spaces and special characters
            const encodedPath = encodeURI(element.content);
            console.log('Loading image:', encodedPath);
            div.style.backgroundImage = `url("${encodedPath}")`;
            div.style.width = '5vw'; // Fixed 5vw width
            
            // Use actual measured height if available, otherwise default to aspect ratio
            if (element.actualHeight) {
                div.style.height = element.actualHeight + 'vw';
            } else {
                // Fallback: try to maintain aspect ratio by loading the image
                const img = new Image();
                img.onload = function() {
                    const aspectRatio = this.naturalHeight / this.naturalWidth;
                    const heightInVw = 5 * aspectRatio; // 5vw width * aspect ratio
                    div.style.height = heightInVw + 'vw';
                    console.log(`Set image height to ${heightInVw.toFixed(2)}vw based on aspect ratio`);
                };
                img.src = encodedPath;
                // Temporary height until image loads
                div.style.height = '5vw';
            }
            
            div.style.backgroundSize = 'cover';
            div.style.backgroundPosition = 'center';
            
            // Test if image loads successfully
            const img = new Image();
            img.onload = () => console.log('Image loaded successfully:', encodedPath);
            img.onerror = () => console.error('Failed to load image:', encodedPath);
            img.src = encodedPath;
        }
        
        // Use vw/vw units for positioning 
        div.style.position = 'absolute';
        div.style.left = element.x + 'vw';
        div.style.top = element.y + 'vw';
        div.style.opacity = '0';
        div.style.scale = '0';
        div.style.transformOrigin = 'center';
        
        console.log(`Element positioned at: left=${element.x}vw, top=${element.y}vw`);
        
        return div;
    }
    
    animateElementsToCenter(elements) {
        const centerX = 45; // looks more balanced than 50vw
        const centerY = 35;
        const groups = [[], []]; // Only 2 groups now: texts and references
        
        // Group elements
        elements.forEach(el => groups[el.group].push(el.dom));
        
        return new Promise(resolve => {
            const tl = gsap.timeline();
            
            // Animate texts (group 0) first - fade in, then move to center
            if (groups[0].length > 0) {
                // All texts fade in with a slight stagger
                groups[0].forEach((element, index) => {
                    tl.to(element, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    }, index * 0.1);
                });
                
                // Wait a bit, then all texts move to center with smooth curved paths
                groups[0].forEach((element, index) => {
                    const textsInView = 2;
                    const delay = textsInView + index * 0.05; // Small stagger for visual appeal
                    
                    // Get current position
                    const startX = parseFloat(element.style.left.replace('vw', ''));
                    const startY = parseFloat(element.style.top.replace('vw', ''));
                    
                    // Calculate distance from center for spiral intensity
                    const distanceFromCenter = Math.sqrt(
                        Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2)
                    );
                    
                    // Golden ratio for smooth curves
                    const phi = 1.618034; // Golden ratio
                    const spiralIntensity = Math.min(distanceFromCenter * 0.32, 16);
                    
                    // Calculate spiral direction based on element position relative to center
                    const angleToCenter = Math.atan2(centerY - startY, centerX - startX);
                    
                    // Create spiral direction based on configuration
                    const spiralDirectionMultiplier = DesignProcessAnimation.SPIRAL_DIRECTION === 'clockwise' ? 1 : -1;
                    const spiralAngle = angleToCenter + (Math.PI / 2) * spiralDirectionMultiplier; // +90 degrees for clockwise, -90 for counterclockwise
                    
                    // First control point: 1/φ of the way (golden ratio first sector)
                    const control1X = startX + (centerX - startX) / phi + Math.cos(spiralAngle) * spiralIntensity;
                    const control1Y = startY + (centerY - startY) / phi + Math.sin(spiralAngle) * spiralIntensity;
                    
                    // Second control point: 1/φ² of the way from first control (golden ratio second sector)
                    const control2X = control1X + (centerX - control1X) / phi + Math.cos(spiralAngle + 0.5) * spiralIntensity * 0.6;
                    const control2Y = control1Y + (centerY - control1Y) / phi + Math.sin(spiralAngle + 0.5) * spiralIntensity * 0.6;
                    
                    // Calculate transform offsets for each point
                    const offsetX1 = control1X - startX;
                    const offsetY1 = control1Y - startY;
                    const offsetX2 = control2X - startX;
                    const offsetY2 = control2Y - startY;
                    const offsetXFinal = centerX - startX;
                    const offsetYFinal = centerY - startY;
                    
                    // Create smooth golden spiral curve using more control points
                    tl.to(element, {
                        keyframes: [
                            // First golden ratio sector
                            { x: offsetX1 * 0.5 + 'vw', y: offsetY1 * 0.5 + 'vw', duration: 0.55 },
                            // Peak of first spiral
                            { x: offsetX1 + 'vw', y: offsetY1 + 'vw', duration: 0.5 },
                            // Second golden ratio sector
                            { x: offsetX2 + 'vw', y: offsetY2 + 'vw', duration: 0.42 },
                            // Final approach to center
                            { x: offsetXFinal + 'vw', y: offsetYFinal + 'vw', duration: 0.3 }
                        ],
                        scale: 0.2,
                        opacity: 0.45,
                        ease: "power2.in",
                        onComplete: () => {
                            element.remove();
                        }
                    }, delay);
                });
            }
            
            // Animate references (group 1) after texts - fade in, then move to center
            if (groups[1].length > 0) {
                const referencesStartTime = groups[0].length > 0 ? 0.5 : 0;
                
                // All references fade in with a slight stagger
                groups[1].forEach((element, index) => {
                    tl.to(element, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    }, referencesStartTime + index * 0.1);
                });
                
                // Wait a bit, then all references move to center with smooth curved paths
                groups[1].forEach((element, index) => {
                    const imagesInView = 1.7;
                    const delay = index > (groups[1].length / 2) ? (referencesStartTime + imagesInView + 0.05 * (groups[1].length / 2)) : (referencesStartTime + imagesInView + 0.05 * (groups[1].length / 2 - index)); // Stagger for visual appeal
                    
                    // Get current position
                    const startX = parseFloat(element.style.left.replace('vw', ''));
                    const startY = parseFloat(element.style.top.replace('vw', ''));
                    
                    // Calculate distance from center for spiral intensity
                    const distanceFromCenter = Math.sqrt(
                        Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2)
                    );
                    
                    // Golden ratio for smooth curves (more dramatic for images)
                    const phi = 1.618034; // Golden ratio
                    const spiralIntensity = Math.min(distanceFromCenter * 0.42, 18); // Max 16vw spiral for images
                    
                    // Calculate spiral direction based on element position relative to center
                    const angleToCenter = Math.atan2(centerY - startY, centerX - startX);
                    
                    // Create spiral direction based on configuration
                    const spiralDirectionMultiplier = DesignProcessAnimation.SPIRAL_DIRECTION === 'clockwise' ? 1 : -1;
                    const spiralAngle = angleToCenter + (Math.PI / 2) * spiralDirectionMultiplier; // +90 degrees for clockwise, -90 for counterclockwise
                    
                    // First control point: 1/φ of the way (golden ratio first sector)
                    const control1X = startX + (centerX - startX) / phi + Math.cos(spiralAngle) * spiralIntensity;
                    const control1Y = startY + (centerY - startY) / phi + Math.sin(spiralAngle) * spiralIntensity;
                    
                    // Second control point: 1/φ² of the way from first control (golden ratio second sector)
                    const control2X = control1X + (centerX - control1X) / phi + Math.cos(spiralAngle + 0.5) * spiralIntensity * 0.6;
                    const control2Y = control1Y + (centerY - control1Y) / phi + Math.sin(spiralAngle + 0.5) * spiralIntensity * 0.6;
                    
                    // Calculate transform offsets for each point
                    const offsetX1 = control1X - startX;
                    const offsetY1 = control1Y - startY;
                    const offsetX2 = control2X - startX;
                    const offsetY2 = control2Y - startY;
                    const offsetXFinal = centerX - startX;
                    const offsetYFinal = centerY - startY;
                    
                    // Create smooth golden spiral curve using more control points
                    tl.to(element, {
                        keyframes: [
                            // First golden ratio sector
                            { x: offsetX1 * 0.5 + 'vw', y: offsetY1 * 0.5 + 'vw', duration: 0.55 },
                            // Peak of first spiral
                            { x: offsetX1 + 'vw', y: offsetY1 + 'vw', duration: 0.5 },
                            // Second golden ratio sector
                            { x: offsetX2 + 'vw', y: offsetY2 + 'vw', duration: 0.42 },
                            // Final approach to center
                            { x: offsetXFinal + 'vw', y: offsetYFinal + 'vw', duration: 0.3 }
                        ],
                        scale: 0.25,
                        opacity: 0.45,
                        ease: "power2.in",
                        onComplete: () => {
                            element.remove();
                        }
                    }, delay);
                });
            }
            
            tl.call(resolve, null, tl.duration());
        });
    }
    
    revealFinalScreen(project) {
        return new Promise(resolve => {
            const screen1 = this.finalReveal.querySelector('.screen-1');
            
            // Set background images using the newly created finalScreens array
            screen1.style.backgroundImage = `url(${project.finalScreens[0]})`;
            
            const tl = gsap.timeline();
            
            // Instead of dissolving, morph the central square into the final screen
            // First, prepare the final screen to match the square's initial state
            gsap.set(this.finalReveal, {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(0.426)", // Scale to match square size (18.125vw / 42.5vw ≈ 0.426)
                zIndex: 2 // Above the square
            });
            
            // Hide the original square instantly as we start the morph
            tl.to(this.centralSquare, {
                opacity: 0,
                duration: 0.1,
                ease: "power2.out"
            });
            
            // Simultaneously reveal and scale up the final screen to create morphing effect
            tl.to(this.finalReveal, {
                transform: "translate(-50%, -50%) scale(1)",
                duration: 1.1,
                ease: "power3.inOut"
            }, 0);
            
            // Hold for 2 seconds
            tl.to({}, { duration: 2 });
            
            // Fade out and reset
            tl.to(this.finalReveal, {
                opacity: 0,
                transform: "translate(-50%, -50%) scale(0.35)",
                duration: 0.7,
                ease: "power2.inOut"
            });
            
            // Restore the original square
            tl.to(this.centralSquare, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                onComplete: resolve
            });
        });
    }
    
    async animateProject(projectIndex) {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        const project = this.projects[projectIndex];
        const elements = await this.generateElements(project);
        
        // Clear previous elements
        this.elementsContainer.innerHTML = '';
        
        // Create DOM elements
        elements.forEach(element => {
            element.dom = this.createElementDOM(element);
            this.elementsContainer.appendChild(element.dom);
        });
        
        // Animate elements to center
        await this.animateElementsToCenter(elements);
        
        // Reveal final screens
        await this.revealFinalScreen(project);
        
        this.isAnimating = false;
    }
    
    async startAnimation() {
        while (true) {
            await this.animateProject(this.currentProject);
            this.currentProject = (this.currentProject + 1) % this.projects.length;
            await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause between projects
        }
    }
}

// Initialize animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Make sure GSAP and MotionPathPlugin are loaded
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
        gsap.registerPlugin(MotionPathPlugin);
        
        // Initialize animation, targeting the '.demo-animation-container' element in index.html
        const animation = new DesignProcessAnimation('.demo-animation-container');
    } else {
        console.error('GSAP and MotionPathPlugin are required for this animation');
    }
});
