
        //Efecto logo móvil Amovan

        document.addEventListener("DOMContentLoaded", function () {
            const logoNombre = document.querySelector(".logo__nombre");

            // Comprueba si la animación ya se ha reproducido durante esta sesión
            const animationPlayed = sessionStorage.getItem("animationPlayed");

            if (!animationPlayed) {
                // Calcula el 10% de la altura de la ventana
                const stopPosition = window.innerHeight * 0.10;

                // Agrega un evento de animación que se activa al final de la animación
                logoNombre.addEventListener("animationend", function () {
                    // Establece el estado final de la animación
                    logoNombre.style.animation = "none";

                    // Marca que la animación ya se ha reproducido durante esta sesión
                    sessionStorage.setItem("animationPlayed", "true");
                });

                // Comienza la animación
                logoNombre.style.animationPlayState = "running";
            }
        });

        //Fin efecto móvil Amovan

        
        //Comienzo efecto hidden

        document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll('.hidden');

            function checkVisibility() {
                const windowHeight = window.innerHeight;

                elements.forEach((element) => {
                    const rect = element.getBoundingClientRect();

                    if (rect.top < windowHeight && rect.bottom >= 0) {
                        element.classList.add('visible');
                    }
                });
            }

            // Inicialmente verifica la visibilidad
            checkVisibility();

            // Verifica la visibilidad cada vez que el usuario desplaza la página
            window.addEventListener('scroll', checkVisibility);
        });

        //FIN EFECTO HIDDEN
