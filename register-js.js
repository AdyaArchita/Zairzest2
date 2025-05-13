function toggleVisibility(pass, eye) {
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password';
    pass.setAttribute('type', type);

    if (eye.src.match("Images/eye.svg")) {
        eye.src = "Images/eye_open.svg";
    } else {
        eye.src = "Images/eye.svg";
    }
}

const pass = document.getElementById('password');
const eye = document.getElementById('eye');
eye.addEventListener('click', ()=> toggleVisibility(pass, eye));