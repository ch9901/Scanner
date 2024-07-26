import { joinUser } from "../global_assets/js/infra";

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  const userId = document.getElementById("id").value;
  const userPw = document.getElementById("password").value;
  const userName = document.getElementById("name").value;
  const userNum = document.getElementById("tel").value;

  const userData = {
    userId,
    userPw,
    userName,
    userNum,
  };
  joinUser(userData);
});
