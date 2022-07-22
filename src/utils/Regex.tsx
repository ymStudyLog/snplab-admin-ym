//한국어+글자수(3글자 이상,10글자 이하)
const nickname = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{3,10}$/;

//email형식
const email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

//영어소문자+숫자+특수문자(_,-)+글자수(6글자 이상, 10글자 이하)
const phone =  /^[0-9]{11}/g;

const regex = { nickname, email, phone };

export default regex;

