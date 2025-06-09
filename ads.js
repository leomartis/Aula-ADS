document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    document.querySelectorAll('.comprar-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const skinId = e.target.getAttribute('data-skin');
            alert(`Você comprou a skin com ID: ${skinId}`);

            // Atualiza contador do carrinho
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
        });
    });

    const form = document.getElementById('contato-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            this.reset(); // limpa o formulário
        });
    }
});