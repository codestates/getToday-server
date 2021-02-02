# im25project11-server

api
###
-Base URL
http://52.78.206.149:3000

:회원가입

-회원가입 조회
HTTP Method: GET
URL: {baseURL}/:id/userinfo
Response: JSON, 메시지 객체가 담긴 배열
{
  results: [
    { "id": number,"userid":string ,"username": string, "useremail": string,"password": string, "date": string },
    ...
  ]
}

단일 메시지 형식
id: number - unique id
userid :string
username: string
useremail: string
password: string
date: string
예) 2017-07-28T03:54:21.134

회원가입 전송
HTTP Method: POST
URL: {baseURL}/:userid/userinfo
Body: application/json
{
  "username": string,
  "userid": string,
  "password": string,
  "useremail" :string
}
Response: application/json
{ id: number }
id: unique id of your message
Hint: How to send request to server?

server에 보내야 하는 메세지 오브젝트의 형식은 다음과 같습니다.

let userinfo = {
  username: 'ingikim',
  userid : 'FullIM25'
  password: 'hello',
  useremail: 'asda@naver.com'
};
다음은 서버에 메세지를 저장하기 위해서 POST 요청을 보내고 응답을 처리하는 과정입니다.

// This is the url you should use to communicate with the AWS server.
const serverURL = 'http://52.78.206.149:3000/getToday/userinfo';
window
  .fetch(serverURL, {
    method: 'POST',
    body: JSON.stringify(userinfo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    // 회원가입 완료
  });
  ###