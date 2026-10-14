document.addEventListener('DOMContentLoaded', () => {
    // Referencias del Modal
    const modal = document.getElementById('donationModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const backdrop = document.getElementById('modalBackdrop');

    // Funciones
    const openModal = () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Previene scroll de fondo
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restaura scroll
    };

    // Event Listeners
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Actualizar año en el footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
