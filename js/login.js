const form = document.querySelector('.form');
const inputUsername = document.querySelector('.form__input-username');
const inputPassword = document.querySelector('.form__input-password');
const API_URL = 'https://dummyjson.com';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let user = {
        username: inputUsername.value,
        password: inputPassword.value
    };

    try {
        let response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        
        let res = await response.json();
        if (res.token) {
            localStorage.setItem('x-auth-token', res.token);
            window.location.href = '/pages/admin.html';
        } else {
            alert('Username or password is incorrect');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
});
