
let otp;

function sendOTP() {
    const signupMessage = document.getElementById('signup-message');
    
    fetch('http://127.0.0.1:5005/user/sendOTP', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'user@example.com' }) 
    })
    .then(response => response.json())
    .then(data => {
        if (data.data) {
            otp = data.data.otp;
            signupMessage.textContent = `Successfully sent OTP`;
            window.location.href = './verify-email.html';
        } else {
            signupMessage.textContent = `Failed to send OTP. Please try again.`;
        }
    })
    .catch(error => {
            console.error(error);
    });
}





