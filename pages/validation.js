function form() {
    var name = document.getElementById("iname").value;
    var email = document.getElementById("iemail").value;
    var mobile = document.getElementById("imob").value;
    var pass = document.getElementById("ipass").value;

    var namepattern = /[a-zA-Z.]/;
    var emailpattern = /(cse|eee|law)_\d{10}@lus\.ac\.bd/;
    var mobpattern = /(\+88)?-?01[3-9]\d{8}/;
    var passpattern = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*><?()*&+_])).{8,20}/;

    //first name
    if (name.length < 2 || name.length > 20) {
        // alert("length must be 2-20");
        document.getElementById("name").innerHTML = "length must be 2-20";
        return false;
    }
    else if (!name.match(namepattern)) {
        // alert("invalid input");
        document.getElementById("name").innerHTML = "invalid input";
        return false;
    }
    else {
        // alert("valid");
        document.getElementById("name").innerHTML = "";

    }

    //email
    if (!email.match(emailpattern)) {
        // alert("invalid input");
        document.getElementById("eemail").innerHTML = "invalid input";
        return false;
    }
    else {
        // alert("valid");
        document.getElementById("eemail").innerHTML = "";

    }

    //mobile
    if (!mobile.match(mobpattern)) {
        // alert("invalid input");
        document.getElementById("emob").innerHTML = "invalid input";
        return false;
    }
    else {
        // alert("valid");
        document.getElementById("emob").innerHTML = "";

    }

    //password
    if (!pass.match(passpattern)) {
        // alert("invalid input");
        document.getElementById("epass").innerHTML = "invalid input";
        return false;
    }
    else {
        // alert("valid");
        document.getElementById("epass").innerHTML = "";

    }

    //Confirm password
    if (!pass.match(passpattern)) {
        // alert("invalid input");
        document.getElementById("ecpass").innerHTML = "Password didn't match";
        return false;
    }
    else {
        // alert("valid");
        document.getElementById("ecpass").innerHTML = "";

    }

}