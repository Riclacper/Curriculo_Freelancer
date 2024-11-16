document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function(event) {
        let value = telefoneInput.value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        const formattedValue = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        telefoneInput.value = formattedValue;
    });

    telefoneInput.addEventListener('keypress', function(event) {
        const charCode = event.charCode;
        if (charCode < 48 || charCode > 57) {
            event.preventDefault();
        }
    });
});
