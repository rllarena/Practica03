$(document).ready(function(){
  
  $("#mensajeConfirmacion").hide();
  $('#mensajeCancelacion').fadeOut();

  //evento click para el botón de guardar
  $('#btn_Guardar').click(function(){
    //obtener valores del formulario
    var nombre=$('#txt_Nombre').val();
    var apellidos=$("#txt_Apellidos").val();
    var sexo=$('#Lista_sexo').val();
    var correo=$('#txt_correo').val();
    var ocupacion=$('#txt_ocupacion').val();

    //evento para ocultar los valores del formulario

   /* $("#txt_Nombre").hide();
    $("#txt_Apellidos").hide();
    $("#txt_correo").hide();
    $("#txt_ocupacion").hide();  */


    //asignar valores a etiquetas en el mensaje de confirmación
    $("#lbl_Nombre").text(nombre);
    $("#lbl_Apellidos").text(apellidos);
    $("#lbl_Sexo").text(sexo);
    $("#lbl_correo").text(correo);
    $("#lbl_ocupacion").text(ocupacion);

    $("#mensajeConfirmacion").show();
});

  //evento click para el botón Cancelar
  $("#btn_Cancelar").click(function(){

    $('#mensajeCancelacion').fadeIn();
    $("#mensajeConfirmacion").hide();
    });
});
