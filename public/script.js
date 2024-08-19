//const {timeConvert} = require('./timeConvert');

const signUpButton = document.querySelector('.sign-up-button');
const emailBody = document.querySelector('.email');
const userNameBody = document.querySelector('.userName'); 

signUpButton.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { longitude, latitude } = position.coords;
            const email = emailBody.value;
            const userName = userNameBody.value;
           // const timeStamp = timeConvert(position.timestamp);

            try {
                const response = await fetch('/submit-form', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        longitude,
                        latitude,
                        email,
                        userName,
                        //time: timeStamp
                    })
                });

                const data = await response.json();
                console.log("Server response: ", data);

                // Redirect to the confirmation page or another existing page
                window.location.href = '/confirmation'; // Or '/' for home page
            } catch (error) {
                console.error(error);
            }
        }, (err) => {
            console.error(err);
        }, { timeout: 20000 });
    } else {
        console.error("Not able to get geolocation.");
    }
});
