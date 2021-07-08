var textName = $("#textName");
var textProgram = $("#textProgram");
var textTitle = $("#textTitle");
var textEmail = $("#textEmail");
var textPhone = $("#textPhone");

$("#nameInput").on("input", function (e) {
  var nameInput = $("#nameInput").val();
  textName.text(nameInput);
});

$("#programInput").on("input", function (e) {
  var programInput = $("#programInput").val();
  textProgram.text(programInput);
});

$("#titleInput").on("input", function (e) {
  var titleInput = $("#titleInput").val();
  textTitle.text(titleInput);
});

$("#emailInput").on("input", function (e) {
  var emailInput = $("#emailInput").val();
  textEmail.text(emailInput);
  textEmail.attr("href", "mailto:" + emailInput);
});

$("#phoneInput").on("input", function (e) {
  var phoneInput = $("#phoneInput").val();
  textPhone.text(phoneInput);
});

// copy to clipboard

// function copyToClipboard(element) {
//   var $temp = $("<input>");
//   $("body").append($temp);
//   $temp.val($(element).text()).select();
//   document.execCommand("copy");
//   $temp.remove();
// }
