function login() {

            const username =
                document.getElementById("username").value;

            const password =
                document.getElementById("password").value;

            const message =
                document.getElementById("message");

            if (username === "abcd" && password === "1234") {

                message.style.color = "#ffffff";

                message.innerHTML =
                    "✔ Login Successful";

            }

            else {

                message.style.color = "#ff4d4d";

                message.innerHTML =
                    "✖ Invalid Username or Password";

            }

        }