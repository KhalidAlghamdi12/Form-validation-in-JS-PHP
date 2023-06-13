document.getElementById('contact-form').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var commentsInput = document.getElementById('comments');
    var errorMessage = document.getElementById('error-message');
    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var comments = commentsInput.value.trim();
    
    errorMessage.innerHTML = '';
    
    if (name === '') {
      event.preventDefault();
      errorMessage.innerHTML = 'Please enter your name.';
      nameInput.focus();
      return;
    }
    
    if (!validateEmail(email)) {
      event.preventDefault();
      errorMessage.innerHTML = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }
    
    if (comments === '') {
      event.preventDefault();
      errorMessage.innerHTML = 'Please enter your comments.';
      commentsInput.focus();
      return;
    }
    
    if (comments.length > 150) {
      event.preventDefault();
      errorMessage.innerHTML = 'Comments cannot exceed 150 characters.';
      commentsInput.focus();
      return;
    }
  });
  
  function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  