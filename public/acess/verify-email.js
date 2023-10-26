
function verifyEmail() {
    const signupMessage = document.getElementById('signup-message');

    fetch('http://127.0.0.1:5005/user/verifyEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'docnonoo2000@gmail.com', otp: "j3krskqh35" }) // Replace with actual email and OTP
    })
    .then(response => response.json())
    .then(data => {
        console.log("🚀 ~ file: verify-email.js:15 ~ verifyEmail ~ data:", data)
        if (data.status === 1) {
            signupMessage.textContent = `${data.message}`;
           
             window.location.href = '../donatePage/donate.html';
        } else {
            signupMessage.textContent = `Email verification failed. Please try again.`;
        }
    })
    .catch(error => {
        console.error(error);
    });
}
