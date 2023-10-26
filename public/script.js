

function submitSignup() {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const newUsername = document.getElementById('new-username').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const signupMessage = document.getElementById('signup-message');

    fetch('http://127.0.0.1:5005/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword,  username:newUsername , phoneNumber:phone , gender: gender }),
    })
    .then(response => {
            return response.json()
    })
    .then(data => {
           if (data.token) {
            signupMessage.textContent = `${data.message}`;
            window.location.href = './acess/otp-request.html';
  
        } else {
            signupMessage.textContent = `${data.message}`;

        }
            
    });
}


function requestOTP() {
    const email = document.getElementById("email").value;

        fetch('http://127.0.0.1:5005/user/sendOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email :email })
    })
    .then(response => response.json())
    .then(data => {
              if (data.phoneNumber) {
            alert('Login successful');
            window.location.href = './donatePage/donate.html';
                  } else {
            alert('Login failed: ' + data.message);
           
        }
    });
}

function submitLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
      fetch('http://127.0.0.1:5005/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email :email, password :password })
    })
    .then(response => response.json())
    .then(data => {
       if (data.phoneNumber) {
            alert('Login successful');
            window.location.href = './donatePage/donate.html';
            
        } else {
            alert('Login failed: ' + data.message);
            
        }
    });
}

function showSignup() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

function showLogin() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
   
}
