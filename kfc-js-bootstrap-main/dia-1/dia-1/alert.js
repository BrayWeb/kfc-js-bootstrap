let boton = document.getElementById('boton')
    boton.addEventListener('click',function(){
    let nombre = document.getElementById('names')
    let apellido = document.getElementById('last_name')

    if(nombre.value!= "" && apellido.value != ""){
        console.log(nombre.value)
        console.log(apellido.value)
            Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
            });
        names.classList.remove('is-invalid')
        last_name.classList.remove('is-invalid')
        names.classList.add('is-valid')
        last_name.classList.add('is-valid')

        
        


    }else{
        names.classList.remove('is-valid')
        last_name.classList.remove('is-valid')
        names.classList.add('is-invalid')
        last_name.classList.add('is-invalid')
        Swal.fire({
        title: "Bad job!",
        text: "You clicked the button!",
        icon: "error"
        });
    }
    
        
         
    });