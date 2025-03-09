document.addEventListener('DOMContentLoaded', () => {
    // Create projects directory if it doesn't exist
    const projectsDir = 'grapejs_projects';
    if (!window.fs) {
        // Ensure directory exists in a browser-safe way
        try {
            window.localStorage.setItem('grapejs_projects_initialized', 'true');
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    }

    // Initialize GrapesJS
    const editor = grapesjs.init({
        container: '#gjs',
        plugins: ['gjs-preset-webpage', 'grapesjs-plugin-export'],
        pluginsOpts: {
            'grapesjs-plugin-export': {
                addExportBtn: true,
                btnLabel: 'Export to ZIP',
                filenamePfx: 'my-template',
            },
            'gjs-preset-webpage': {
                exportOptions: {
                    html: true,
                    css: true,
                    js: true,
                    exportBtn: true,
                },
            },
        },
        fromElement: true,
        height: '100vh',
        width: 'auto',
        storageManager: false,
        canvas: {
            styles: [
                'css/webflow-style.css',
                'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap',
                'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap',
                'https://fonts.googleapis.com/css2?family=Orbit&display=swap',
                'https://fonts.googleapis.com/css2?family=Alef&display=swap',
                'https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap'
            ]
        }
    });

    // Initialize the Block Manager
    editor.BlockManager.add('div-block', {
        label: 'Div Block',
        category: 'Basic',
        content: '<div style="padding: 20px; min-height: 100px; background-color: #f1f1f1;">This is a div block</div>',
        media: '<svg viewBox="0 0 24 24"><rect width="100%" height="100%" fill="#3b97e3"/></svg>'
    });

    editor.BlockManager.add('section-block', {
        label: 'Section',
        category: 'Basic',
        content: '<section style="padding: 50px 0; background-color: #ffffff;"><div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;"></div></section>',
        media: '<svg viewBox="0 0 24 24"><rect width="100%" height="100%" fill="#4CAF50"/></svg>'
    });

    editor.BlockManager.add('text-block', {
        label: 'Text',
        category: 'Basic',
        content: '<p style="margin-bottom: 15px;">Add your text here</p>',
        media: '<svg viewBox="0 0 24 24"><text x="50%" y="60%" text-anchor="middle" font-size="14">T</text></svg>'
    });

    // Add a paragraph block
    editor.BlockManager.add('paragraph-block', {
        label: 'Paragraph',
        category: 'Basic',
        content: `<div style="padding: 15px; margin-bottom: 20px;">
                    <p style="font-size: 16px; line-height: 1.6; margin: 0;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                        rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                    </p>
                  </div>`,
        media: '<svg viewBox="0 0 24 24"><text x="50%" y="60%" text-anchor="middle" font-size="14">¶</text></svg>'
    });

    // Add a list block
    editor.BlockManager.add('list-block', {
        label: 'List',
        category: 'Basic',
        content: `<div style="padding: 15px; margin-bottom: 20px;">
                    <ul style="padding-left: 20px; margin: 0;">
                        <li style="margin-bottom: 10px; font-size: 16px; line-height: 1.5;">First list item</li>
                        <li style="margin-bottom: 10px; font-size: 16px; line-height: 1.5;">Second list item</li>
                        <li style="margin-bottom: 10px; font-size: 16px; line-height: 1.5;">Third list item</li>
                        <li style="margin-bottom: 0; font-size: 16px; line-height: 1.5;">Fourth list item</li>
                    </ul>
                  </div>`,
        media: '<svg viewBox="0 0 24 24"><text x="30%" y="60%" text-anchor="start" font-size="12">• • •</text></svg>'
    });

    // Configure the Blocks Panel to show up
    editor.Panels.addPanel({
        id: 'blocks',
        el: '.blocks-panel',
        buttons: [],
        content: {
            blocks: {
                appendTo: '#blocks-container'
            }
        }
    });

    // Add a container for blocks in the editor
    const blocksContainer = document.createElement('div');
    blocksContainer.id = 'blocks-container';
    blocksContainer.style.cssText = 'position: absolute; top: 0; right: 0; width: 250px; height: 100%; overflow-y: auto; background-color: #f5f5f5; padding: 10px; border-left: 1px solid #ddd;';
    document.getElementById('gjs').appendChild(blocksContainer);

    // Add custom buttons to the panel
    const panelManager = editor.Panels;
    
    // Add Import button
    panelManager.addButton('options', {
        id: 'import-button',
        className: 'fa fa-download',
        command: 'import-project',
        attributes: {
            title: 'Import Project'
        }
    });

    // Add Export button
    panelManager.addButton('options', {
        id: 'export-button',
        className: 'fa fa-upload',
        command: 'export-project',
        attributes: {
            title: 'Export Project'
        }
    });

    // Add commands for import/export
    const commands = editor.Commands;

    // Import command
    commands.add('import-project', {
        run: function(editor) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            
            input.onchange = e => {
                const file = e.target.files[0];
                const reader = new FileReader();
                
                reader.onload = function() {
                    try {
                        const projectData = JSON.parse(reader.result);
                        editor.setComponents(projectData.components || '');
                        editor.setStyle(projectData.styles || '');
                        editor.Modal.close();
                        editor.Notifications.success('Project imported successfully!');
                    } catch (error) {
                        editor.Notifications.error('Error importing project: Invalid file format');
                    }
                };
                
                reader.readAsText(file);
            };
            
            input.click();
        }
    });

    // Export command
    commands.add('export-project', {
        run: function(editor) {
            const projectData = {
                components: editor.getComponents(),
                styles: editor.getStyle(),
                timestamp: new Date().toISOString()
            };

            const jsonStr = JSON.stringify(projectData, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `grapejs-project-${Date.now()}.json`;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            editor.Notifications.success('Project exported successfully!');
        }
    });

    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .gjs-notification {
            padding: 10px 15px;
            border-radius: 3px;
            margin-bottom: 10px;
        }
        .gjs-notification-success {
            background-color: #4CAF50;
            color: white;
        }
        .gjs-notification-error {
            background-color: #f44336;
            color: white;
        }
    `;
    document.head.appendChild(style);
});
