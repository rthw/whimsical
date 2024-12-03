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
