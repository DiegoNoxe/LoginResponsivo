function Mostrando(event) 
{

    event.preventDefault();

    var firstName = document.getElementById("FirstName").value;
    var secondName = document.getElementById("SecondName").value;
    var userEmail = document.getElementById("UserEmail").value;
    var password = document.querySelector('input[type="password"]').value;
    alert(`Nome: ${firstName}${secondName}\nEmail: ${userEmail}\nSenha: ${password}`);
}