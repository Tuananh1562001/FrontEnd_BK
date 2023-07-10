// let userName = document.getElementsByName(firstName).values.trim()
// console.log(userName)
function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let passWord = document.getElementById("passWord").value;
  var letters = /^[A-Za-z]+$/;

  

  if (firstName == "" || lastName == "" || email == "" || passWord == "") {
    alert("Cần điền đủ thông tin");

    return false;
  } else  if (firstName.match(letters) || lastName.match(letters) ) {
    alert("Tạo tài khoản thành công");
    return true;
  } else {
    alert("Tên không được chứa kí tự số");
    return false;
  }
  
}
