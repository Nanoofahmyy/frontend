
function checkToken() {
    const token = localStorage.getItem('token'); 

    if (!token) {
        alert('You must be logged in to access this page.'); 
        window.location.href = 'login.html';
    }

   
    fetch('http://127.0.0.1:5005/user/check-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            
        } else {
            alert('You must be logged in to access this page.'); 
            window.location.href = 'login.html';
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function checkout() {
  
    fetch('http://127.0.0.1:5005/Transaction/getTrxByID/1', {
        method: 'GET',
        dataType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then(response => response.json())
    .then((data) => {
       if(typeof(data) === "string"){data = JSON.parse(data)}
        data.forEach(function(element){
                   console.log(element);
               });
        const message = data.message;
        document.getElementById('message').textContent = message;
    })
    .catch(error => {
        console.error(error);
        document.getElementById('An error occurred during payment processing.');
    });
    window.location.href = '../paymob/paymob.html';
}
