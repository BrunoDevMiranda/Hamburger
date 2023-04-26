// Obtém o link "Entrar" e o modal de login
const loginLink = document.getElementById("login-link");
const loginModal = document.getElementById("login-modal");

// Adiciona um event listener ao link "Entrar"
loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link recarregue a página

    // Exibe o modal de login
    loginModal.style.display = "block";
});

// Obtém o botão de fechar o modal
const closeBtn = loginModal.querySelector(".close");

// Adiciona um event listener ao botão de fechar o modal
closeBtn.addEventListener("click", function() {
    // Fecha o modal de login
    loginModal.style.display = "none";
});
