document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle
    const toggles = document.querySelectorAll('.toggle-pwd');
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            btn.textContent = type === 'password' ? '👁' : '🙈';
        });
    });

    // 2. Form Validation
    const signUpForm = document.getElementById('signUpForm');
    
    signUpForm.addEventListener('submit', (e) => {
        const pwd = document.getElementById('password').value;
        const confirmPwd = document.getElementById('confirmPassword').value;

        if (pwd !== confirmPwd) {
            e.preventDefault();
            alert("Passwords do not match! Please try again.");
            return;
        }

        console.log("Form data valid. Sending to server...");
    });
});