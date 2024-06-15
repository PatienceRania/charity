document.addEventListener("DOMContentLoaded", function() {
    var galleryContainer = document.getElementById('gallery-container');

    galleryContainer.addEventListener('scroll', function() {
        if (galleryContainer.scrollTop + galleryContainer.clientHeight >= galleryContainer.scrollHeight) {
           
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('click', function () {
            const fullscreenImage = document.getElementById('fullscreen-image');
            fullscreenImage.src = this.src;
            document.getElementById('fullscreen-modal').classList.remove('hidden');
        });
    });

    document.getElementById('close-fullscreen-btn').addEventListener('click', function () {
        document.getElementById('fullscreen-modal').classList.add('hidden');
    });
});

// alert("click image to get a clear view");
