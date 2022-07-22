//한국어+글자수(3글자 이상,10글자 이하)
const nickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$/;

//email형식
const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

//phone형식 (숫자만, 11글자 이하)
const phone =  /^[0-9]{11}/g;

const date = /^(([0-9]+).{4}([0-9]+).{2}([0-9]+){2})/g;


const regex = { nickname, email, phone, date };

export default regex;

