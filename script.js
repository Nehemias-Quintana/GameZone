
$(document).ready(function () {

  // Filtrar videojuegos por categoría
  $(".filter-btn").click(function () {
    const categoria = $(this).attr("data-filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (categoria === "todos") {
      $(".game-item").show();
    } else {
      $(".game-item").hide();
      $('.game-item[data-genre="' + categoria + '"]').show();
    }
  });

  // Mostrar detalles del videojuego
  $(".btn-details").click(function () {
    const titulo = $(this).attr("data-title");
    const descripcion = $(this).attr("data-description");

    $("#detalle-titulo").text(titulo);
    $("#detalle-descripcion").text(descripcion);

    $("#detalle-juego").removeClass("d-none").hide().slideDown();
  });

  // Cerrar detalles
  $("#cerrar-detalle").click(function () {
    $("#detalle-juego").slideUp(function () {
      $(this).addClass("d-none");
    });
  });

});
