// ================================
// BOTÃO DE CHECKOUT
// ================================



const mainTitle = document.querySelector(".hero h1");

if (mainTitle) {

    mainTitle.style.opacity = "0";
    mainTitle.style.transform = "translateY(35px) scale(0.97)";

    mainTitle.style.transition =
        "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)";

    setTimeout(function () {

        mainTitle.style.opacity = "1";
        mainTitle.style.transform = "translateY(0) scale(1)";

    }, 150);

}

const checkoutButton = document.getElementById("checkoutButton");

if (checkoutButton) {

    checkoutButton.addEventListener("click", function () {

        console.log("Cliente clicou no botão de checkout.");

    });

}


// ================================
// ANIMAÇÃO DOS ELEMENTOS
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos que terão animação
    const animatedElements = document.querySelectorAll(
        ".badge, .hero h1, .hero-description, .product-left, .product-right, .content-item, footer"
    );

    // Estado inicial
    animatedElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform = "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    // Observador para animar quando aparecerem na tela
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });


    // ================================
    // ANIMAÇÃO DO TÍTULO
    // ================================

    const title = document.querySelector(".hero h1");

    if (title) {

        title.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    }


    // ================================
    // ANIMAÇÃO DOS CARDS
    // ================================

    const cards = document.querySelectorAll(".content-item");

    cards.forEach(function (card, index) {

        card.style.transition =
            `opacity 0.6s ease ${index * 0.08}s,
             transform 0.6s ease ${index * 0.08}s`;

    });


    // ================================
    // EFEITO NO BOTÃO
    // ================================

    if (checkoutButton) {

        checkoutButton.addEventListener("mouseenter", function () {

            checkoutButton.style.transform = "scale(1.03)";

        });


        checkoutButton.addEventListener("mouseleave", function () {

            checkoutButton.style.transform = "scale(1)";

        });

    }


    // ================================
    // PULSO SUAVE NO BOTÃO
    // ================================

    if (checkoutButton) {

        setInterval(function () {

            checkoutButton.style.transform = "scale(1.02)";

            setTimeout(function () {

                checkoutButton.style.transform = "scale(1)";

            }, 300);

        }, 4000);

    }

});

// ================================
// ANIMAÇÃO DO TEXTO PRINCIPAL
// ================================

