document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const error = document.getElementById('error');

    // Basic form validation
    if (username && email && password && confirmPassword) {
        // Check if passwords match
        if (password !== confirmPassword) {
            error.textContent = 'Passwords do not match!';
            error.style.display = 'block';
            return;
        }

        try {
            // Make API request to sign up the user
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password, confirmPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Sign Up Successful! Redirecting to Login page...');
                error.style.display = 'none';
                
                // Hide sign-up form and show login form
                document.getElementById('signup').classList.add('hidden');
                document.getElementById('login').classList.remove('hidden');
            } else {
                error.textContent = data.message || 'Sign Up Failed!';
                error.style.display = 'block';
            }
        } catch (err) {
            error.textContent = 'An error occurred. Please try again later.';
            error.style.display = 'block';
        }
    } else {
        error.textContent = 'All fields are required!';
        error.style.display = 'block';
    }
});
