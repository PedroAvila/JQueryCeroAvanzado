(function () {
  $.ajax({
    type: "GET",
    url: "https://posapimarket.azurewebsites.net/api/table",
    dataType: "json",
  })
    .done(function (data) {
      var tablas = data;
      console.log(data);
      for (var i = 0; i < tablas.length; i++) {
        var tabla = tablas[i];

        var html = "";
        html += "<tr>";
        html += "<td>" + tabla.Name + "</td>";
        html += "<td>" + tabla.Status + "</td>";
        html += "<td>xxx</td>";

        $(".table").append(html);
      }
    })
    .fail(function () {
      console.log("Fallo!");
    })
    .always(function () {
      console.log("Completo!");
    });
})();
