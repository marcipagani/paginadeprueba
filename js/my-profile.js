const fileInput = document.getElementById('file-input');
const profilePic = document.getElementById('profile-pic');

// Cargar la imagen guardada al abrir la página
window.onload = function() {
    const savedImage = localStorage.getItem('profilePic');
    if (savedImage) {
        profilePic.src = savedImage;
        profilePic.style.display = 'block'; // Muestra la imagen si hay una guardada
    }
};

// Manejar el cambio de la imagen
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageDataUrl = e.target.result;
            profilePic.src = imageDataUrl;
            profilePic.style.display = 'block'; // Muestra la imagen seleccionada
            
            // Guardar la imagen en localStorage
            localStorage.setItem('profilePic', imageDataUrl);
        };

        reader.readAsDataURL(file); // Leer la imagen como URL de datos
    }
});
