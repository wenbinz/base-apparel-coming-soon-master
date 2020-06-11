const arrow = document.getElementById("arrow");
const error = document.getElementById("error");
const email = document.getElementById("email");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessage = document.getElementById("error-message");
arrow.addEventListener("click", validateForm);

function validateForm() {
  if (!emailFormat.test(email.value)) {
    error.style.opacity = 1;
    errorMessage.style.display = "inline-block";
  } else {
    error.style.opacity = 0;
    errorMessage.style.display = "none";
    Swal.fire({
      title: "Sweet!",
      text: "Have A Great Day.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }
}
