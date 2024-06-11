var pass = document.getElementById("inputPassword4");
        var pass2 = document.getElementById("inputPassword5");
        var emailField = document.getElementById("inputEmail4");
        var phoneField = document.getElementById("phone");
        var signupButton = document.getElementById("signup");
        var gridCheck = document.getElementById("gridCheck");
        var gridCheck2 = document.getElementById("gridCheck2");

        pass.addEventListener("input", short);
        pass2.addEventListener("input", confirmpass);
        emailField.addEventListener("input", email);
        phoneField.addEventListener("input", checkphone);
        gridCheck.addEventListener("change", checkbox);
        gridCheck2.addEventListener("change", checkbox);

        let a ,
            b ,
            c ,
            d ,
            e ,
            f ;

        function short() {
            const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            a = regexp.test(pass.value);
            document.getElementById("pw1_check").innerHTML = a ? "" : "Wrong format password";
            confirmpass(); // Check password match immediately after password format validation
            toggleSignupButton();
        }

        function confirmpass() {
            b = pass2.value === pass.value;
            document.getElementById("pw2_check").innerHTML = b ? "" : "Passwords do not match";
            toggleSignupButton();
        }

        function email() {
            const regexe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            c = regexe.test(emailField.value);
            document.getElementById("email_check").innerHTML = c || emailField.value.length === 0 ? "" : "Wrong format email";
            toggleSignupButton();
        }

        function checkphone() {
            const regexph = /^077\d{7}$/;
            d = regexph.test(phoneField.value);
            document.getElementById("phone_check").innerHTML = d || phoneField.value.length === 0 ? "" : "Enter correct Orange phone number";
            toggleSignupButton();
        }

        function checkbox() {
            e = gridCheck.checked;
            f = gridCheck2.checked;
            document.getElementById("check").innerHTML = e && f ? "" : "You have to agree to the terms";
            toggleSignupButton();
        }

        function toggleSignupButton() {
            signupButton.disabled = !(a && b && c && d && e && f);
        }



        document.getElementById("signup").addEventListener("click", signup);
        function signup() {
            if (a && b && c && d && e) {
                const nameValue = document.getElementById("signupName").value;
                const emailValue = emailField.value;
                const passwordValue = pass.value;
                const phoneValue = phoneField.value;


                localStorage.setItem("name", nameValue);
                localStorage.setItem("email", emailValue);
                localStorage.setItem("password", passwordValue);
                localStorage.setItem("phone", phoneValue);

                alert("Sign up successful");
                window.location.href = "login.html";
            } else {
                alert("Please fill out all fields correctly.");
            }
        }

        document.getElementById("login").addEventListener("click", function () {
            window.location.href = "login.html";
        });