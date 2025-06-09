document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('nova-skin-form');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome-skin').value.trim();
      const imagem = document.getElementById('imagem-url').value.trim();
      const preco = document.getElementById('preco').value.trim();

      if (!nome || !imagem || !preco) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      alert(`Skin "${nome}" adicionada com sucesso!\n(Nota: Essa ação é apenas visual neste protótipo)`);
      form.reset();
    });
  }
});