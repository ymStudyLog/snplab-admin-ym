import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheckCircle, BsCheck } from "react-icons/bs";

type Props = {};
type RadioType = {
  female: string;
  male: string;
};

//코드 양이 많아서 어떻게 줄일지 생각해보기
// checkbox 잘 선택되는지 확인하기
// 이용약관 버튼 연결하기 - useState와 toggle 처리
// onSubmit 이벤트 연결하기 - button disabled 속성 핸들 처리

const Form = (props: Props) => {
  const [color, setColor] = React.useState<RadioType>({
    female: "",
    male: "",
  });

  return (
    <form>
      <InputTitle>이름</InputTitle>
      <StyledInput type="text" name="name" placeholder="홍길동" />
      <InputTitle>성별</InputTitle>
      <RadioContainer>
        <RadioInputLabel
          htmlFor="gender"
          color={color.female}
          onClick={() => {
            setColor({ ...color, female: "black", male: "" });
          }}
        >
          <RadioInput type="radio" name="gender" value="female" />
          <BsCheckCircle size={24} />
          여자
        </RadioInputLabel>
        <RadioInputLabel
          htmlFor="gender"
          color={color.male}
          onClick={() => {
            setColor({ ...color, male: "black", female: "" });
          }}
        >
          <RadioInput type="radio" name="gender" value="male" />
          <BsCheckCircle size={24} />
          남자
        </RadioInputLabel>
      </RadioContainer>
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
      <StyledInput
        type="tel"
        name="contact"
        placeholder="'-'없이 입력해 주세요"
      />
      <InputTitle>이메일</InputTitle>
      <StyledInput type="email" name="email" placeholder="MYD@snplab.com" />

      <InputTitle>
        주로 이용하는 교통수단
        <SubTitle>주로 이용하는 교통수단을 모두 선택해주세요</SubTitle>
      </InputTitle>
      <TransportationOptions>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="bus" />
          버스
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="subway" />
          지하철
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="taxi" />
          택시
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="KTX/train" />
          KTX/기차
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="walk" />
          도보
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="bicycle" />
          자전거
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox
            type="checkbox"
            name="transportation"
            value="electric scooter"
          />
          전동킥보드
        </CheckBoxLabel>
        <CheckBoxLabel
          htmlFor="transportation"
          onClick={() => {
            console.log("체크박스");
          }}
        >
          <CheckBox type="checkbox" name="transportation" value="automobile" />
          자가용
        </CheckBoxLabel>
      </TransportationOptions>

      {/* div임 */}
      <AgreementTitle>
        <InnerAgreement>
          <AgreementButton>
          <BsCheckCircle
            size={24}
            onClick={() => {
              console.log("이용약관");
            }}
          />
          </AgreementButton>
          이용약관 모두 동의
        </InnerAgreement>
      </AgreementTitle>

      <AgreementContainer>
        <Agreement>
          <InnerAgreement>
            <AgreementButton>
            <BsCheck
              size={24}
              onClick={() => {
                console.log("이용약관 버튼 클릭");
              }}
            />
            </AgreementButton>
            개인정보 처리방침 고지(필수)
          </InnerAgreement>
          <LinkButton to="/privacypolicy">
            <MdArrowForwardIos />
          </LinkButton>
        </Agreement>
        <Agreement>
          <InnerAgreement>
            <AgreementButton>
            <BsCheck
              size={24}
              onClick={() => {
                console.log("이용약관 버튼 클릭");
              }}
            />
            </AgreementButton>
            제3자 정보제공 동의(필수)
          </InnerAgreement>
          <LinkButton to="/agreement">
            <MdArrowForwardIos />
          </LinkButton>
        </Agreement>
      </AgreementContainer>

      <SubmitButton
        onClick={() => {
          console.log("폼 제출");
        }}
        disabled
      >
        지원하기
      </SubmitButton>
    </form>
  );
};

export default Form;

const StyledInput = styled.input`
  width: 90%;
  border-bottom: 1.5px solid #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const SubTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  color: #9a9a9a;
  margin-top: 8px;
`;

const InputTitle = styled.div`
  padding: 20px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const RadioContainer = styled(InputTitle)`
  flex-direction: row;
  padding: 0;
  padding-left: 12px;
`;

const RadioInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 4rem;
  margin-right: 3rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

type RadioProps = {
  color: string;
  children: React.ReactNode;
  htmlFor: string;
  onClick: () => void;
};

const RadioInputLabel = (props: RadioProps) => (
  <StyledLabel {...props}>{props.children}</StyledLabel>
);

const AgreementTitle = styled(InputTitle)`
  flex-direction: row;
`;

const AgreementContainer = styled.div`
  width: 90%;
  padding: 15px 0;
  margin: 0 auto;
  border-top: 2px solid black;
`;

const Agreement = styled.div`
  font-weight: bold;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;

const TransportationOptions = styled.div`
  height: 74px;
  padding: 5px 10px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckBoxLabel = styled.label`
  border: 2px solid;
  border-radius: 20px;
  padding: 8px 10px;
  margin-left: 8px;
  color: #c4c4c4;
  font-size: 13px;
`;

const CheckBox = styled.input`
  display: none;
`;

const LinkButton = styled(Link)`
  padding: 0 5px;
  display: flex;
  align-items: center;
`;

const InnerAgreement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AgreementButton = styled.div`
  display: flex;
  align-items:center;
  padding-right: 8px;
`
const SubmitButton = styled.button`
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  background-color: #1cc5f7;
  color: white;
  border-radius: 12px;
  font-weight: bold;
`;