document.addEventListener('DOMContentLoaded', function() {
    const files = [
        { name: 'Archivo1.rar', url: 'archivos/Archivo1.rar' },
        { name: 'Archivo2.zip', url: 'archivos/Archivo2.zip' },
        // Agrega más archivos aquí
    ];

    const fileContainer = document.querySelector('.file-container');
    
    files.forEach(file => {
        const fileElement = document.createElement('div');
        fileElement.classList.add('file');
        
        fileElement.innerHTML = `
            <img src="https://via.placeholder.com/200x150?text=${file.name}" alt="${file.name}">
            <p>${file.name}</p>
            <a href="${file.url}" download>Descargar</a>
        `;
        
        fileContainer.appendChild(fileElement);
    });
});
