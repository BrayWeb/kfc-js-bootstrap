users = [];
counter = 0;
const tbody = document.getElementById('tbody')
const botoncito = document.getElementById('botoncito');
botoncito.addEventListener('click', function(){
   
    names = document.getElementById('names');
    last_name = document.getElementById('last_name');
    email = document.getElementById('email');

    new_user = {
        idUsers : counter++,
        names : names.value,
        last_name : last_name.value,
        email : email.value
    }

    users.push(new_user)

    tbody.innerHTML =""

    users.forEach(user => {
        row = `<tr>
                    <td>${user.idUsers}</td>
                    <td>${user.names}</td>
                    <td>${user.last_name}</td>
                    <td>${user.email}</td>
                                        
                    <td>
                        <a href="" class="btn btn-sm btn-info">Detalles</a>
                        <a href=""  class="btn btn-sm btn-warning">Editar</a>
                        <a href=""  class="btn btn-sm btn-danger">Eliminar</a>
                    </td>
                </tr>`
        tbody.innerHTML += row;
    });
})