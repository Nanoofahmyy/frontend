
function validateAndDonate() {
    const donationAmount = parseFloat(document.getElementById("donation-amount").value);
    const signupMessage = document.getElementById('signup-message');
    if (donationAmount >= 10) {
        fetch('http://127.0.0.1:5005/Transaction/createTRX', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount :donationAmount })
    })
    .then(response => response.json())
    .then(data => {
          if (data.message) {
          
           signupMessage.textContent = `${data.message}`;
         
        } else {
            signupMessage.textContent = `${data.message}`;
            alert('Login failed: ' + data.message);
          
        }
    });
       signupMessage.textContent = `Thank you for your donation of ${donationAmount} EGP!`;
       window.location.href = '../chechout/checkout.html';
      

    } else {
        signupMessage.textContent = `Donation amount must be at least 10 EGP.`;
    }
   
}

