import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsCheckCircle, BsCheck } from 'react-icons/bs';
// import axios from "axios";
import * as FormStyle from './Form.styled';
import ValidationInput from '../ValidationInput';
import regex from '../../utils/Regex';
import { SubmitButton } from '../../styles/SubmitButton.styled';
import ModalBackground from '../modal/ModalBackground';
import Region from '../modal/Region';

type RadioType = {
  female: boolean;
  male: boolean;
};

type PolicyType = {
  privacy: boolean;
  thirdparty: boolean;
};

const transportations = [
  ['bus', '버스'],
  ['subway', '지하철'],
  ['taxi', '택시'],
  ['KTX/train', 'KTX/기차'],
  ['walk', '도보'],
  ['bicycle', '자전거'],
  ['electric scooter', '전동킥보드'],
  ['automobile', '자가용'],
];

//TODO : checkbox 클릭시 색상 변환 설정
//TODO : onSubmit 이벤트 axios로 form 데이터 전송 바로 안되고 FormData 라이브러리 필요 - button disabled 속성 핸들 처리
const Form = () => {
  const [radio, setRadio] = React.useState<RadioType>({
    female: false,
    male: false,
  });

  const [policy, setPolicy] = React.useState<PolicyType>({
    privacy: false,
    thirdparty: false,
  });

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const [nickInput, setNickInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  //console.log(dateInput);
  return (
    <form>
      <FormStyle.DataTitle>이름</FormStyle.DataTitle>

      <ValidationInput
        type='text'
        name='name'
        placeholder='홍길동'
        value={nickInput}
        setValue={setNickInput}
        maxValue={10}
        regexCheck={regex.nickname}
        defaultText='닉네임을 입력해주세요!'
        errorText='한글로 3자 이상 입력해주세요.'
      />
      <FormStyle.DataTitle>성별</FormStyle.DataTitle>
      <FormStyle.RadioContainer>
        <FormStyle.RadioLabel
          htmlFor='female'
          selected={radio.female}
          onClick={() => {
            setRadio({ ...radio, female: true, male: false });
          }}
        >
          <FormStyle.NoneDisplayInput type='radio' name='gender' id='female' value='female' />
          <BsCheckCircle size={24} />
          여자
        </FormStyle.RadioLabel>
        <FormStyle.RadioLabel
          htmlFor='male'
          selected={radio.male}
          onClick={() => {
            setRadio({ ...radio, male: true, female: false });
          }}
        >
          <FormStyle.NoneDisplayInput type='radio' name='gender' id='male' value='male' />
          <BsCheckCircle size={24} />
          남자
        </FormStyle.RadioLabel>
      </FormStyle.RadioContainer>
      <FormStyle.DataTitle>생년월일</FormStyle.DataTitle>

      <ValidationInput
        type='text'
        name='birthday'
        placeholder='YYYY.MM.DD'
        value={dateInput}
        setValue={setDateInput}
        maxValue={10}
        regexCheck={regex.date}
        defaultText='생년월일을 입력해주세요!'
        errorText='YYYY.MM.DD 형태로 입력해주세요!'
      />

      <FormStyle.DataTitle>거주지역</FormStyle.DataTitle>
      {/* 거주지역 value 부분에 모달에서 저장한 recoil값 저장예정 = 지금은 임시값 */}

      <FormStyle.DataInput
        type='text'
        name='region'
        placeholder='거주지역 선택'
        onClick={() => {
          setShowModal(true);
          console.log('모달 Open');
        }}
      />
      {showModal && (
        <ModalBackground>
          <Region setShowModal={setShowModal} />
        </ModalBackground>
      )}

      <FormStyle.DataTitle>연락처</FormStyle.DataTitle>

      <ValidationInput
        type='tel'
        name='contact'
        placeholder="'-'없이 입력해 주세요"
        value={phoneInput}
        setValue={setPhoneInput}
        regexCheck={regex.phone}
        maxValue={11}
        defaultText='연락처를 입력해주세요!'
        errorText='연락처 01012345678 형태로 입력해주세요!'
      />
      <FormStyle.DataTitle>이메일</FormStyle.DataTitle>

      <ValidationInput
        type='email'
        name='email'
        placeholder='MYD@snplab.com'
        value={emailInput}
        setValue={setEmailInput}
        regexCheck={regex.email}
        defaultText='이메일을 입력해주세요!'
        errorText='이메일 양식을 맞춰주세요!'
        maxValue={undefined}
      />

      <FormStyle.DataTitle>
        주로 이용하는 교통수단
        <FormStyle.SubTitle>주로 이용하는 교통수단을 모두 선택해주세요</FormStyle.SubTitle>
      </FormStyle.DataTitle>
      <FormStyle.CheckBoxContainer>
        {transportations.map((transportation: string[]): JSX.Element => {
          return (
            <FormStyle.CheckBoxLabel
              htmlFor={transportation[0]}
              onClick={() => {
                console.log(transportation[0]);
              }}
              key={transportation[0]}
            >
              <FormStyle.NoneDisplayInput type='checkbox' name='transportation' id={transportation[0]} value={transportation[0]} />

              {transportation[1]}
            </FormStyle.CheckBoxLabel>
          );
        })}
      </FormStyle.CheckBoxContainer>

      <FormStyle.DataTitleRow>
        <FormStyle.DataToggleContainer>
          <FormStyle.DataToggle
            agreement={policy.privacy && policy.thirdparty}
            onClick={() => {
              setPolicy({ ...policy, privacy: true, thirdparty: true });
            }}
          >
            <BsCheckCircle size={24} />
          </FormStyle.DataToggle>
          이용약관 모두 동의
        </FormStyle.DataToggleContainer>
      </FormStyle.DataTitleRow>

      <FormStyle.Positioner>
        <FormStyle.Stretcher>
          <FormStyle.DataToggleContainer>
            <FormStyle.DataToggle
              agreement={policy.privacy}
              onClick={() => {
                setPolicy({ ...policy, privacy: !policy.privacy });
              }}
            >
              <BsCheck size={24} />
            </FormStyle.DataToggle>
            개인정보 처리방침 고지(필수)
          </FormStyle.DataToggleContainer>
          <FormStyle.LinkButton to='/privacypolicy'>
            <MdArrowForwardIos />
          </FormStyle.LinkButton>
        </FormStyle.Stretcher>
        <FormStyle.Stretcher>
          <FormStyle.DataToggleContainer>
            <FormStyle.DataToggle
              agreement={policy.thirdparty}
              onClick={() => {
                setPolicy({ ...policy, thirdparty: !policy.thirdparty });
              }}
            >
              <BsCheck size={24} />
            </FormStyle.DataToggle>
            제3자 정보제공 동의(필수)
          </FormStyle.DataToggleContainer>
          <FormStyle.LinkButton to='/agreement'>
            <MdArrowForwardIos />
          </FormStyle.LinkButton>
        </FormStyle.Stretcher>
      </FormStyle.Positioner>

      {/* disabled = true 일때는 회색 바탕 */}
      <SubmitButton
        type='submit'
        onClick={() => {
          console.log('submit click');
        }}
      >
        지원하기
      </SubmitButton>
    </form>
  );
};

export default Form;
