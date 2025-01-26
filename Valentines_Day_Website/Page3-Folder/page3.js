const sendEmailButton = document.querySelector('button');
const h1Element = document.querySelector('#message');

function sendEmail () {
    let params = {
        name: "Vani Banani",
        email: "vanigangstera@gmail.com",
        subject: "Покана за Свети Валентин",
        message: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        background-color: #fecdcb;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .email-card {
                        width: 100%;
                        max-width: 600px;
                        margin-top: 100px;
                        background-color: #f4f4f4;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        font-family: 'Arial', sans-serif;
                    }

                    .card-header {
                        background-color: #FF6347;
                        color: white;
                        padding: 15px;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        text-align: center;
                        font-size: 1.5rem;
                    }

                    .card-body {
                        padding: 20px;
                        background-color: #fff;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        text-align: center;
                        font-size: 1.5em;
                        color: #333;
                    }

                    .card-footer {
                        text-align: left;
                        padding-top: 10px;
                        font-size: 1.2rem;
                        color: #555;
                    }

                    .btn {
                        background-color: #FF6347;
                        color: white;
                        padding: 10px 20px;
                        font-size: 1rem;
                        border-radius: 5px;
                        text-decoration: none;
                        margin-top: 15px;
                    }

                    .btn:hover {
                        background-color: #ff4500;
                    }
                </style>
            </head>
            <body>
                <div class="email-card">
                    <div class="card-header">
                        Поздравелния!!!
                    </div>
                    <div class="card-body">
                        <p>Ти успешно получи моята картичка за Свети Валентин! Много се радвам, че ТОЧНО ТИ ще бъдеш моята валентинка и нямам търпение да дойде 14-ти Февруари 😊🧡🧡</p>
                    </div>
                    <div class="card-footer">
                        С много обич от,<br>
                        Вани банани 🧡🧡
                    </div>
                </div>
                </body>
            </html>`,
    }

    emailjs.send("service_iedbrpe", "template_eq4olqn", params)
    .then(() => {
        alert("Писмото беше успешно изпратено! \nМожеш да си провериш Gmail пощата 😋🧡");
    })
    .catch(error => {
        console.log("Error sending email:", error);
    });
}
