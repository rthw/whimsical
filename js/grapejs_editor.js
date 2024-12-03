document.addEventListener('DOMContentLoaded', () => {
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
});
