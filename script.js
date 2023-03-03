function matchPassword() {
  var pw1 = document.getElementById("password");
  var pw2 = document.getElementById("confirm-password");

  if (pw1 !== pw2) {
    alert("Passwords do not match.");
  }
}
