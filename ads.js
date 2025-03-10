document.querySelectorAll('.comprar-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const skinId = e.target.getAttribute('data-skin');
        alert(`Você comprou a skin com ID: ${skinId}`);
    });
});