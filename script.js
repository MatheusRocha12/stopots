document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const welcomeMessage = document.getElementById("welcome-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulando a validação de login
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "math" && password === "123") {
            // Mostrar mensagem de boas-vindas com o nome do usuário
            welcomeMessage.textContent = `Bem-vindo, ${username}!`;
            welcomeMessage.style.display = "block"; // Exibir a mensagem

            // Limpar mensagem de erro (se houver)
            errorMessage.textContent = "";

            // Ocultar o formulário após o login bem-sucedido
            loginForm.style.display = "none";
        } else {
            // Exibir mensagem de erro
            errorMessage.textContent = "Credenciais inválidas. Tente novamente.";
        }
    });
});
