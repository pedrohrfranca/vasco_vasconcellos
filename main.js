
// Essa função 
function clickMenu() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth <= 768) { // Certifique-se de que a lógica só afeta dispositivos móveis
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    } else {
        menu.style.display = ""; // Restaura o estilo padrão no desktop
    }
}