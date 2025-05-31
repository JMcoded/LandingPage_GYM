document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleSwitch');
    const temaGuardado = localStorage.getItem('tema');

    if (temaGuardado === 'oscuro') {
        document.body.classList.add('tema-oscuro');
        toggle.checked = true;
    } else {
        document.body.classList.add('tema-claro');
        toggle.checked = false;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('tema-oscuro');
            document.body.classList.remove('tema-claro');
            localStorage.setItem('tema', 'oscuro');
        } else {
            document.body.classList.remove('tema-oscuro');
            document.body.classList.add('tema-claro');
            localStorage.setItem('tema', 'claro');
        }
    });
});

