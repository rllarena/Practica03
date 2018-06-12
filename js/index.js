$(document).ready(function(){
  $('#mensajeConfirmacion').hide();
  $('#mensajeCanelacion').fadeOut();

  //evento click para el botón de guardar
  $('#Guardar').click(function(){
    //obtener valores del formulario
    var nombre=$('#txt_Nombre').val();
    var apellidos=$('#txt_apellidos').val();
    var sexo=$('#Lista_sexo').val();

    //asignar valores a etiquetas en el mensaje de confirmación
    $("#lbl_Nombre").text(nombre);
    $("#lbl_Apellido").text(apellidos);
    $("#lbl_Sexo").text(sexo);

    $("mesnsajeConfirmacion").show();
  });

  //evento click para el botón Cancelar
  $("#btn_Cancelar").click(function(){
    $('#mesnsajeCanelacion').fadeIn();
  });

});
