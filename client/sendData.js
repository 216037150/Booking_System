function sendDataToServer() {
    var formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email2").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };
  
    fetch('/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Form submitted successfully!');
        document.getElementById("form").reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
  }
  