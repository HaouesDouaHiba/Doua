document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate a successful login
    alert(`Welcome, ${email}!`);
  });