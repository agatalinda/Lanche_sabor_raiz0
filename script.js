// Exemplo: Alerta ao clicar em um benefício parq desconto, carinho e entrega
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.querySelector('p').innerText;
        alert('Você selecionou: ' + texto);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // impede envio padrão

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const telefone = document.getElementById("telefone").value.trim();

        // Validações simples
        if (nome.length < 3) {
            alert("O nome deve ter pelo menos 3 caracteres.");
            return;
        }
        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }
        if (!/^\d{10,11}$/.test(telefone)) {
            alert("O telefone deve conter apenas números (10 ou 11 dígitos).");
            return;
        }

        // Guarda o nome no navegador para usar no cardápio
        localStorage.setItem("usuarioNome", nome);

        // Redireciona para o cardápio
        window.location.href = "cardapio.html";
    });
});