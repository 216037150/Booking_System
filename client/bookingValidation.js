function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateForm() {
  var nameInput = document.getElementById("fullName");
  var emailInput = document.getElementById("email2");
  var phoneInput = document.getElementById("phone");
  var dateInput = document.getElementById("date");
  var timeInput = document.getElementById("time");

  removeAlert();

  if (!nameInput.value.trim()) {
      showAlert("Please enter your name.");
      return;
  }

  if (!emailInput.value.trim()) {
      showAlert("Please enter your email address.");
      return;
  }

  if (!validateEmail(emailInput.value)) {
      showAlert("Please enter a valid email address.");
      return;
  }

  if (!phoneInput.value.trim()) {
      showAlert("Please enter your phone number.");
      return;
  }

  if (!phoneInput.value.match(/^\d{10}$/)) {
      showAlert("Please enter a 10-digit phone number.");
      return;
  }

 if (!dateInput.value) {
     showAlert("Please choose a date.");
     return;
  }

var currentDate = new Date();
var selectedDate = new Date(dateInput.value);

if (selectedDate <= currentDate) {
 showAlert("Please choose a future date.");
  return;
}

  if (!timeInput.value) {
      showAlert("Please choose a time.");
      return;
  }

  sendDataToServer(); 
}

function showAlert(message) {
  var alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.style.backgroundColor = 'red';
  alertBox.style.color = 'white';
  alertBox.style.padding = '10px';
  alertBox.style.borderRadius = '5px';
  alertBox.style.marginBottom = '10px';
  alertBox.style.width = '200px';
  alertBox.style.textAlign = 'center';
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.id = 'alertBox';
  document.body.appendChild(alertBox);

  setTimeout(function () {
      removeAlert();
  }, 3000);
}

function removeAlert() {
  var existingAlert = document.getElementById('alertBox');
  if (existingAlert) {
      existingAlert.parentNode.removeChild(existingAlert);
  }
}

