// form validation
function sendContacts() {
  var userName = document.querySelector("input#name");
  var userPhone = document.querySelector("input#phone");
  var userMail = document.querySelector("input#mail");

    if (userName.value == "" || userPhone.value == "" || userMail.value == "") {
      alert("Внимание! Поля 'Имя', 'Телефон' и 'Email' являются обязательными к заполнению");
    } else if (userMail.validity.valid == false) {
      alert("Введен некорректный адрес электронной почты");
    } else {
      alert("Спасибо за проявленный интерес, я свяжусь с Вами в ближайшее время!");
      return;
    }
}
// open modal window for Coordination
function openModalWindowCoord() {
    var shadow = document.querySelector("#shadow");
    var modal = document.querySelector("#modal");
    var coordination = document.querySelector("#modal-coordination")

    shadow.classList.add("modal_open");
    modal.classList.add("modal_open");
    coordination.classList.add("modal_open");
  }
  // open modal window for Organization
  function openModalWindowOrg() {
    var shadow = document.querySelector("#shadow");
    var modal = document.querySelector("#modal");
    var organization = document.querySelector("#modal-organization")

    shadow.classList.add("modal_open");
    modal.classList.add("modal_open");
    organization.classList.add("modal_open");
  }
  // close modal window
  function closeModalWindow() {
    var shadow = document.querySelector("#shadow");
    var modal = document.querySelector("#modal");
    var organization = document.querySelector("#modal-organization")
    var coordination = document.querySelector("#modal-coordination")

    shadow.classList.remove("modal_open");
    modal.classList.remove("modal_open");
    organization.classList.remove("modal_open");
    coordination.classList.remove("modal_open");
  }