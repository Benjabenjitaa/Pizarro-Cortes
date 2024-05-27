document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Validar los campos del formulario antes de enviar
        if (validateForm()) {
            // Aquí puedes enviar el formulario a través de AJAX o realizar cualquier otra acción necesaria
            alert("Formulario enviado con éxito!");
            form.reset();
        }
    });

    function validateForm() {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const comuna = document.getElementById("comuna").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("te lefono").value.trim();
        const servicio = document.getElementById("servicio").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || apellido === "" || comuna === "" || email === "" || telefono === "" || servicio === "" || mensaje === "") {
            alert("Por favor completa todos los campos.");
            return false;
        }

        // Validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor ingresa un correo electrónico válido.");
            return false;
        }

        return true;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square3");

    squares.forEach(square => {
        square.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
        });

        square.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});
