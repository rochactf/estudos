// ===== Scroll suave ao clicar nos links do menu =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Animação ao rolar a página =====
const sections = document.querySelectorAll("section");

function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkSections);
checkSections(); // executa uma vez ao carregar

// ===== Validação do formulário de contato =====
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // impede envio automático

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Aqui futuramente pode enviar via backend/email API
    alert("Mensagem enviada com sucesso!");
    form.reset();
});
