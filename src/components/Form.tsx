import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

type Props = {};

const InputTitle = styled.h3`
  padding: 20px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  width: 90%;
  border-bottom: 1.5px solid #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;

  &::placeholder{
    color: #c4c4c4
  }
`;

const Form = (props: Props) => {
  return (
    <form>
      <InputTitle>이름</InputTitle>
      <StyledInput type="text" name="name" placeholder="홍길동" />
      <InputTitle>성별</InputTitle>
      <div style={{ display: "flex" }}>
        <input type="radio" name="gender" value="female" />
        여자
        <input type="radio" name="gender" value="male" />
        남자
      </div>
      <InputTitle>생년월일</InputTitle>
      <StyledInput type="datetime" name="birthday" placeholder="YYYY.MM.DD" />
      <InputTitle>거주지역</InputTitle>
      {/* 거주지역 value 부분에 모달에서 저장한 recoil값 저장예정 = 지금은 임시값 */}
      <StyledInput
        type="text"
        name="region"
        placeholder="거주지역 선택"
        onClick={() => {
          console.log("모달 오픈");
        }}
      />
      <InputTitle>연락처</InputTitle>
      <StyledInput type="tel" name="contact" placeholder="'-'없이 입력해 주세요" />
      <InputTitle>이메일</InputTitle>
      <StyledInput type="email" name="email" placeholder="MYD@snplab.com" />
      <InputTitle>주로 이용하는 교통수단</InputTitle>
      <p>주로 이용하는 교통수단을 모두 선택해주세요</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input type="checkbox" name="transportation" value="bus" />
        버스
        <input type="checkbox" name="transportation" value="subway" />
        지하철
        <input type="checkbox" name="transportation" value="taxi" />
        택시
        <input type="checkbox" name="transportation" value="KTX/train" />
        KTX/기차
        <input type="checkbox" name="transportation" value="walk" />
        도보
        <input type="checkbox" name="transportation" value="bicycle" />
        자전거
        <input type="checkbox" name="transportation" value="electric scooter" />
        전동킥보드
        <input type="checkbox" name="transportation" value="automobile" />
        자가용
      </div>
      <input
        type="button"
        style={{
          width: "20px",
          height: "20px",
          border: "1px solid black",
          borderRadius: "50px",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log("이용약관 버튼 클릭");
        }}
      />
      이용약관 모두 동의
      <hr />
      <div style={{ display: "flex" }}>
        <input
          type="button"
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid black",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("이용약관 버튼 클릭");
          }}
        />
        개인정보 처리방침 고지(필수)
        <Link to="/privacypolicy">
          <MdArrowForwardIos />
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="button"
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid black",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("이용약관 버튼 클릭");
          }}
        />{" "}
        제3자 정보제공 동의(필수)
        <Link to="/agreement">
          <MdArrowForwardIos />
        </Link>
      </div>
      <button
        onClick={() => {
          console.log("폼 제출");
        }}
        disabled
      >
        지원하기
      </button>
    </form>
  );
};

export default Form;
