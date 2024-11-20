const scriptURL =
  "https://script.google.com/macros/s/AKfycbzgLx1BNp9Z6GVhBlJEzCcRx0WvahN3qEbLu57GtbfO4iJ7ZiWLzUfV-r74QU5HM60bwQ/exec";
const form = document.forms["simpan"];
// const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".overlay");
const fom = document.querySelector(".fm1");
const fom2 = document.querySelector(".fm2");
const fom3 = document.querySelector(".fm3");
document.querySelector(".btn-sp").addEventListener("click", () => {
  fom.value = "1";
});
document.querySelector(".btn-s").addEventListener("click", () => {
  fom2.value = "1";
});
document.querySelector(".btn-t").addEventListener("click", () => {
  fom3.value = "1";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // fom2.value = "1";
  btnLoading.classList.toggle("d-none");
  // btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      // btnKirim.classList.toggle("d-none");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Terimakasih Atas Penilaian Anda",
      }).then(function () {
        window.location = "index.html";
      });
    })
    .catch((error) => console.error("Error!", error.message));
});
$("#basic-usage").select2({
  theme: "bootstrap-5",
  width: $(this).data("width")
    ? $(this).data("width")
    : $(this).hasClass("w-100")
    ? "100%"
    : "style",
  placeholder: $(this).data("placeholder"),
});

window.setTimeout("waktu()", 1000);

function waktu() {
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = waktu.getHours();
  document.getElementById("menit").innerHTML = waktu.getMinutes();
  document.getElementById("detik").innerHTML = waktu.getSeconds();
}
var date = new Date();
var current_date =
  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
document.getElementById("p1").innerHTML = current_date;
