const send = document.getElementById('send');
const resultDiv = document.getElementById('result');
const night = document.getElementById('night');

send.onclick = function() {
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (surname === "" || name === "" || email === "" || phone === "") {
        alert("Заполните все поля!");
        return;
    }
    
    resultDiv.innerHTML = "<h3>Ваши данные:</h3>" +
        "<p><strong>Фамилия:</strong> " + surname + "</p>" +
        "<p><strong>Имя:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Телефон:</strong> " + phone + "</p>";
};

let dark = false;
    night.onclick = function() {
        if (dark) {
            document.body.classList.remove('dark');
            night.innerHTML = '🌙 Ночной режим';
            dark = false;
        } else {
            document.body.classList.add('dark');
            night.innerHTML = '☀️ Дневной режим';
            dark = true;
        }
    };
