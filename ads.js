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
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const senha = document.getElementById('login-senha').value.trim();

        if (email === "" || senha === "") {
            alert("Preencha todos os campos.");
        } else {
            alert("Login realizado com sucesso!");
            loginForm.reset();
        }
    });
}

// Validação Cadastro
const cadastroForm = document.getElementById('cadastro-form');
if (cadastroForm) {
    cadastroForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('cadastro-nome').value.trim();
        const email = document.getElementById('cadastro-email').value.trim();
        const senha = document.getElementById('cadastro-senha').value.trim();

        if (!nome || !email || senha.length < 6) {
            alert("Preencha todos os campos corretamente. A senha deve ter pelo menos 6 caracteres.");
        } else {
            alert("Cadastro realizado com sucesso!");
            cadastroForm.reset();
        }
    });
}