import axios from "axios";

async function joinUser({ userId, userName, userPw, userNum }) {
  try {
    const res = await axios({
      url: "http://localhost:3000/api/insert",
      method: "post",
      data: { userId, userName, userPw, userNum },
    });
    res.status === 200 && alert("회원가입완료");
  } catch (err) {
    console.log(err);
  }
}
export { joinUser };
