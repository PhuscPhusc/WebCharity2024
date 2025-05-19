// participation_info_form
document.addEventListener("DOMContentLoaded", function () {
  const participationForm = document.getElementById("form");

  if (participationForm) {
    participationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const transaction = document.getElementById("transaction").value.trim();
      const role = document.querySelector("input[name='role']:checked");

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!name || !email || !phone || !transaction || !role) {
        alert("❗ Vui lòng điền đầy đủ tất cả các trường.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("❗ Email không hợp lệ.");
        return;
      }

      alert("✅ Đăng ký thành công!");
    });
  }
});
