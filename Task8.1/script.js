function validateName(name) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePincode(pincode) {
  const regex = /^\d{6}$/;
  return regex.test(pincode);
}

function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodElements = document.querySelectorAll('input[name="food"]:checked');
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  if (!validateName(firstName)) {
    alert("First name must contain only letters.");
    document.getElementById("firstName").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("firstName").classList.remove("is-invalid");
  }

  if (!validateName(lastName)) {
    alert("Last name must contain only letters.");
    document.getElementById("lastName").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("lastName").classList.remove("is-invalid");
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    document.getElementById("email").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("email").classList.remove("is-invalid");
  }

  if (address === "") {
    alert("Address is required.");
    document.getElementById("address").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("address").classList.remove("is-invalid");
  }

  if (!validatePincode(pincode)) {
    alert("Please enter a valid 6-digit pincode.");
    document.getElementById("pincode").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("pincode").classList.remove("is-invalid");
  }

  if (gender === null) {
    alert("Gender is required.");
    return;
  }

  if (foodElements.length < 2) {
    alert("Please select at least 2 food options.");
    return;
  }

  if (state === "") {
    alert("State is required.");
    document.getElementById("state").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("state").classList.remove("is-invalid");
  }

  if (country === "") {
    alert("Country is required.");
    document.getElementById("country").classList.add("is-invalid");
    return;
  } else {
    document.getElementById("country").classList.remove("is-invalid");
  }

  if (!document.getElementById("formapplication").checkValidity()) {
    document.getElementById("formapplication").classList.add("was-validated");
    return;
  }
  const foods = Array.from(foodElements)
    .map((food) => food.value)
    .join(", ");

  const table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = firstName;
  newRow.insertCell(1).innerText = lastName;
  newRow.insertCell(2).innerText = email;
  newRow.insertCell(3).innerText = address;
  newRow.insertCell(4).innerText = pincode;
  newRow.insertCell(5).innerText = gender;
  newRow.insertCell(6).innerText = foods;
  newRow.insertCell(7).innerText = state;
  newRow.insertCell(8).innerText = country;

  document.getElementById("formapplication").reset();
}

//test suite
function testsuite() {
    function assert(condition, message) {
        if (!condition) {
            throw message || "Assertion failed";
        }
    }

    // Test: Check form submission with valid data
    document.getElementById('firstName').value = 'santhosh';
    document.getElementById('lastName').value = 's';
    document.getElementById('email').value = 'sk@example.com';
    document.getElementById('address').value = '17a';
    document.getElementById('pincode').value = '625002';
    document.getElementById('male').checked = true;
    document.getElementById('food4').checked = true;
    document.getElementById('food3').checked = true;
    document.getElementById('state').value = 'tamilnadu';
    document.getElementById('country').value = 'india';

    submitForm();

    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let row = table.rows[0];
    assert(row.cells[0].textContent === 'santhosh', 'First name should be santhosh');
    assert(row.cells[1].textContent === 's', 'Last name should be s');
    assert(row.cells[2].textContent === 'sk@example.com', 'Email should be sk@example.com');
    assert(row.cells[3].textContent === '17a', 'Address should be 17a');
    assert(row.cells[4].textContent === '625002', 'Pincode should be 625002');
    assert(row.cells[5].textContent === 'Male', 'Gender should be Male');
    assert(row.cells[6].textContent === 'Nan, Dosa', 'Food should be Nan, Dosa');
    assert(row.cells[7].textContent === 'tamilnadu', 'State should be tamilnadu');
    assert(row.cells[8].textContent === 'india', 'Country should be india');

    console.log("All tests passed!");
}

document.addEventListener('DOMContentLoaded', (event) => {
    testsuite();
});