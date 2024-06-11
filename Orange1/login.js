document.getElementById("login").addEventListener("click", login);
        function login() {
            var uemail = document.getElementById("inputEmail4").value
            var upass = document.getElementById("inputPassword4").value
            var e = localStorage.getItem("email");
            var p = localStorage.getItem("password");
            
            var userName = localStorage.getItem("name");
            if (e == uemail && p == upass) {
                
                sessionStorage.setItem("userName", userName);

                alert("Hello again, " + userName); 
            }
            else {
                alert("wrong email or password");
            }

        }
