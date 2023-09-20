
        
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
