
    const track = document.querySelector('.gallery-track');
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let currentIndex = 0;

    function updateGallery() {
        // Reordenamos las imágenes para que la activa esté en el centro
        const half = Math.floor(items.length / 2);
        const reorderedItems = [
            ...items.slice(currentIndex, items.length),
            ...items.slice(0, currentIndex)
        ];

        // Limpiamos el contenedor y añadimos las imágenes reordenadas
        track.innerHTML = '';
        reorderedItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === half) {
                item.classList.add('active'); // La imagen activa estará en el centro
            }
            track.appendChild(item);
        });

        // Ajustamos la posición del track para centrar la imagen activa
        const trackRect = track.getBoundingClientRect();
        const activeItemRect = reorderedItems[half].getBoundingClientRect();
        const offset = (trackRect.width / 2) - (activeItemRect.width / 2) - (activeItemRect.left - trackRect.left);

        track.style.transform = `translateX(${offset}px)`;
    }

    function autoScroll() {
        currentIndex = (currentIndex + 1) % items.length; // Avanzamos en el índice de la imagen activa
        updateGallery();
    }

    updateGallery(); // Inicializamos la galería
    setInterval(autoScroll, 3000); // Cambia la imagen cada 3 segundos

