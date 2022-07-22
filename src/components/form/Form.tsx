import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheckCircle, BsCheck } from "react-icons/bs";
import * as FormStyle from "./Form.styled";

type Props = {};
type RadioType = {
  female: string;
  male: string;
};

const transportations = [
  ["bus", "버스" ],
  [ "subway", "지하철" ],
  [ "taxi", "택시" ],
  [ "KTX/train", "KTX/기차" ],
  [ "walk", "도보" ],
  [ "bicycle", "자전거" ],
  [ "electric scooter", "전동킥보드" ],
  [ "automobile", "자가용" ],
];

// radio, checkbox 잘 선택되는지 확인 필요
// checkbox 클릭시 색상 변환 설정
// 이용약관 버튼 연결하기 - useState와 toggle 처리
// onSubmit 이벤트 연결하기 - button disabled 속성 핸들 처리
const Form = (props: Props) => {
  const [color, setColor] = React.useState<RadioType>({
    female: "",
    male: "",
  });

  return (
    <form>
      <FormStyle.DataTitle>이름</FormStyle.DataTitle>
      <FormStyle.DataInput type="text" name="name" placeholder="홍길동" />
      <FormStyle.DataTitle>성별</FormStyle.DataTitle>
      <FormStyle.RadioContainer>
        <FormStyle.RadioLabel
          htmlFor="gender"
          color={color.female}
          onClick={() => {
            setColor({ ...color, female: "black", male: "" });
          }}
        >
          <FormStyle.NoneDisplayInput type="radio" name="gender" value="female" />
          <BsCheckCircle size={24} />
          여자
        </FormStyle.RadioLabel>
        <FormStyle.RadioLabel
          htmlFor="gender"
          color={color.male}
          onClick={() => {
            setColor({ ...color, male: "black", female: "" });
          }}
        >
          <FormStyle.NoneDisplayInput type="radio" name="gender" value="male" />
          <BsCheckCircle size={24} />
          남자
        </FormStyle.RadioLabel>
      </FormStyle.RadioContainer>
      <FormStyle.DataTitle>생년월일</FormStyle.DataTitle>
      <FormStyle.DataInput type="datetime" name="birthday" placeholder="YYYY.MM.DD" />
      <FormStyle.DataTitle>거주지역</FormStyle.DataTitle>
      {/* 거주지역 value 부분에 모달에서 저장한 recoil값 저장예정 = 지금은 임시값 */}
      <FormStyle.DataInput
        type="text"
        name="region"
        placeholder="거주지역 선택"
        onClick={() => {
          console.log("모달 오픈");
        }}
      />
      <FormStyle.DataTitle>연락처</FormStyle.DataTitle>
      <FormStyle.DataInput
        type="tel"
        name="contact"
        placeholder="'-'없이 입력해 주세요"
      />
      <FormStyle.DataTitle>이메일</FormStyle.DataTitle>
      <FormStyle.DataInput type="email" name="email" placeholder="MYD@snplab.com" />
      <FormStyle.DataTitle>
        주로 이용하는 교통수단
        <FormStyle.SubTitle>주로 이용하는 교통수단을 모두 선택해주세요</FormStyle.SubTitle>
      </FormStyle.DataTitle>
      <FormStyle.CheckBoxContainer>
        {transportations.map(
          (transportation: string[]): JSX.Element => {
            return (
              <FormStyle.CheckBoxLabel
                htmlFor="transportation"
                onClick={() => {
                  console.log("체크박스");
                }}
                key={transportation[0]}
              >
                <FormStyle.NoneDisplayInput
                  type="checkbox"
                  name="transportation"
                  value={transportation[0]}
                />
                {transportation[1]}
              </FormStyle.CheckBoxLabel>
            );
          }
        )}
      </FormStyle.CheckBoxContainer>

      <FormStyle.DataTitleRow>
        <FormStyle.DataToggleContainer>
          <FormStyle.DataToggle>
            <BsCheckCircle
              size={24}
              onClick={() => {
                console.log("이용약관 전체 동의");
              }}
            />
          </FormStyle.DataToggle>
          이용약관 모두 동의
        </FormStyle.DataToggleContainer>
      </FormStyle.DataTitleRow>

      <FormStyle.Positioner>
        <FormStyle.Stretcher>
          <FormStyle.DataToggleContainer>
            <FormStyle.DataToggle>
              <BsCheck
                size={24}
                onClick={() => {
                  console.log("개인정보");
                }}
              />
            </FormStyle.DataToggle>
            개인정보 처리방침 고지(필수)
          </FormStyle.DataToggleContainer>
          <FormStyle.LinkButton to="/privacypolicy">
            <MdArrowForwardIos />
          </FormStyle.LinkButton>
        </FormStyle.Stretcher>
        <FormStyle.Stretcher>
          <FormStyle.DataToggleContainer>
            <FormStyle.DataToggle>
              <BsCheck
                size={24}
                onClick={() => {
                  console.log("제3자");
                }}
              />
            </FormStyle.DataToggle>
            제3자 정보제공 동의(필수)
          </FormStyle.DataToggleContainer>
          <FormStyle.LinkButton to="/agreement">
            <MdArrowForwardIos />
          </FormStyle.LinkButton>
        </FormStyle.Stretcher>
      </FormStyle.Positioner>

      <FormStyle.SubmitButton
        type="submit"
        onClick={() => {
          console.log("폼 제출");
        }}
        disabled
      >
        지원하기
      </FormStyle.SubmitButton>
    </form>
  );
};

export default Form;