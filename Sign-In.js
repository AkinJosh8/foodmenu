document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePassword');

    toggleBtn.addEventListener('click', () => {
        // Switch between 'password' and 'text' types
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Optional: Change the icon based on state
        toggleBtn.textContent = type === 'password' ? '👁' : '🙈';
    });

    // Form Submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
    });
});