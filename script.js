function validateForm() {
    var regName = /^[A-Za-z]+$/;
    var firstname = document.forms["Registration"]["firstname"].value;
    if (firstname == "" || firstname == null) {
        alert('First Name cannot be blank');
        return false;
    }
    if (!(regName.test(firstname))) {
        alert('Invalid first name given.');
        return false;
    }

    var regName = /^[A-Za-z]+$/;
    var lastname = document.forms["Registration"]["lastname"].value;
    if (lastname == "" || lastname == null) {
        alert('Last Name cannot be blank');
        return false;
    }
    if (!(regName.test(lastname))) {
        alert('Invalid last name given.');
        return false;
    }
    var regName = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var password = document.forms["Registration"]["password"].value;
    if (password == "" || password == null) {
        alert('Password cannot be empty');
        return false;
    }
    if (!(regName.test(password))) {
        alert('Invalid password should contain atleast capital letter and small letter and number and special character');
        return false;
    }

    
    var regName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var email = document.forms["Registration"]["email"].value;
    if (email == "" || email == null) {
        alert('Email cannot be empty');
        return false;
    }
    if (!(regName.test(email))) {
        alert('Invalid Email');
        return false;
    }
}

function addData()

{
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;

    localStorage.setItem('firstname', first_name);
    localStorage.setItem('lastname', last_name);

}


function Toogle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }

}



