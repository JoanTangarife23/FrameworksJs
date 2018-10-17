var puntuacion = 0;
var movimientos =0;
var clicks = 0;

$('.btn-reinicio').click(function startTimer() {


  var timer = 120;
  var interval= setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $('#timer').text(minutes + ":" + seconds);

    if (--timer < 0) {
      $("body").trigger("finTiempo");
      clearInterval(interval);
      $('.main-titulo').stop();
      finalizarTiempo()
    }
  }, 1000);

  efectoTitulo();

});

//*************************************************************
//Reinicia la página luego de pasar los dos minutos de tiempo
//*************************************************************
function finalizarTiempo(){
  $('.panel-tablero').hide(900);
  $('.panel-score')
  .animate({
    width: '100%'
  }, 1000, function(){
    $(this).prepend("<h2 class='titulo-over'>Juego Terminado</h2>")
  })
  $('.time').hide(500)
  $('#score-text').hide()
  $('.score').append("<span class='data-info' id='score-final'>"+puntuacion+"</span>")
}

//***************************************************
//Animación que cambia de color el título del juego
//***************************************************
function efectoTitulo(){
  //cambia el color del título a blanco
  $('.main-titulo').animate({fontSize:"3em"},500,function()
  {
    $('.main-titulo').css('color','white')
    //cambia el color del título a amarillo
    $('.main-titulo').animate({fontSize:"3em"},500,function()
    {
      $('.main-titulo').css('color','yellow')
      $('.main-titulo').animate({fontSize:"3em"},500,parpadear)
    })
  })
};
