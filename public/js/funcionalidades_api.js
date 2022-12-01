function registrar(){
    // alert("hola desde funcion registar")

    var datos={
        "nombre":document.getElementById("nombre").value,
        "apellido":document.getElementById("apellido").value,
        "cedula":document.getElementById("cedula").value,
        "telefono":document.getElementById("telefono").value,
        "correo":document.getElementById("correo").value
    }
    console.log(datos)

    $.ajax({
        type:"post",
        url:"http://localhost:3005/insertar_cliente",
        data:datos,
        datatype:"json",
        success:function(data){
            if(data.save==1)
            {
                alert("usuario almacenado")
                console.log("usuario almacenado")
                location.href="/"
            }
            else
            {
                alert("error")
            }
        }


    })


}