(function () {
  $.ajax({
    type: "GET",
    url: "https://api.json-generator.com/templates/wsorsc5u6IAF/data",
    dataType: "json",
  })
    .done(function (data) {
      console.log("Hecho correcto");
    })
    .fail(function () {
      console.log("Fallo");
    })
    .always(function () {
      console.log("Completo");
    });
})();
