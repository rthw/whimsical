const fs = require('fs');
const path = require('path');

const CASE_GALLERY_DIR = path.join(__dirname, '../images/case_gallery');
const OUTPUT_PATH = path.join(CASE_GALLERY_DIR, 'case_gallery_manifest.json');

function readLines(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);
    } catch {
        return [];
    }
}

function listImages(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => /\.(png|jpe?g|gif|webp)$/i.test(f))
        .map(f => path.posix.join(
            'images/case_gallery',
            path.basename(path.dirname(dir)),
            path.basename(dir),
            f
        ));
}

function getProjectData(projectDir) {
    const name = path.basename(projectDir);
    const textsPath = path.join(projectDir, 'texts.txt');
    const sketchesDir = path.join(projectDir, 'sketches');
    const referencesDir = path.join(projectDir, 'references');
    const finalImagePath = path.join(projectDir, 'final.png');
    const finalScreen = [];
    if (fs.existsSync(finalImagePath)) {
        finalScreen.push(path.posix.join(
            'images/case_gallery',
            name,
            path.basename(finalImagePath)
        ));
    }

    return {
        name,
        texts: readLines(textsPath),
        sketches: listImages(sketchesDir),
        references: listImages(referencesDir),
        finalScreen: finalScreen
    };
}

function main() {
    const projects = [];
    fs.readdirSync(CASE_GALLERY_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .forEach(dirent => {
            const projectDir = path.join(CASE_GALLERY_DIR, dirent.name);
            projects.push(getProjectData(projectDir));
        });

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(projects, null, 2));
    console.log(`Manifest generated: ${OUTPUT_PATH}`);
}

main();
