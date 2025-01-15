document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Add logic for authentication here (e.g., API call)
    if (email && password) {
      alert('Sign in successful!');
    } else {
      alert('Please fill in all fields.');
    }
  });
  