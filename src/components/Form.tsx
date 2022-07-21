import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <p>크라우드 워커에 지원하기 위해 필요한 정보를 입력해 주세요</p>
        </div>

        <form>
          <p>이름</p>
          <input type="text" name="name" placeholder="홍길동" />
          <p>성별</p>
          <div style={{ display: "flex" }}>
            <input type="radio" name="gender" value="female" />
            여자
            <input type="radio" name="gender" value="male" />
            남자
          </div>
          <p>생년월일</p>
          <input type="datetime" name="birthday" placeholder="YYYY.MM.DD" />
          <p>거주지역</p>
          {/* 거주지역 value 부분에 모달에서 저장한 recoil값 저장예정 = 지금은 임시값 */}
          <input
            type="text"
            name="region"
            placeholder="거주지역 선택"
            onClick={() => {
              console.log("모달 오픈");
            }}
          />
          <p>연락처</p>
          <input
            type="tel"
            name="contact"
            placeholder="'-'없이 입력해 주세요"
          />
          <p>이메일</p>
          <input type="email" name="email" placeholder="MYD@snplab.com" />
          <p>주로 이용하는 교통수단</p>
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
            <input
              type="checkbox"
              name="transportation"
              value="electric scooter"
            />
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
        </form>
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
          <button
            onClick={() => {
              console.log("페이지 이동");
            }}
          >
            뿅
          </button>
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
          <button
            onClick={() => {
              console.log("페이지 이동");
            }}
          >
            뿅
          </button>
        </div>
        <button
          onClick={() => {
            console.log("폼 제출");
          }}
          disabled
        >
          지원하기
        </button>
      </div>
    </div>
  );
};

export default Form;
