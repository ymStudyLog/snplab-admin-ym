import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsCheckCircle, BsCheck } from 'react-icons/bs';
// import axios from "axios";
import * as FormStyle from './Form.styled';
import ValidationInput from '../ValidationInput';
import regex from '../../utils/Regex';
import ModalBackground from '../modal/ModalBackground';
import Region from '../modal/Region';
import Confirm from '../modal/Confirm';
import { SubmitButton } from '../../styles/SubmitButton.styled';
import { RadioState, PolicyState, CheckboxState } from './Form.type';

//TODO : 리팩토링 = radio,policy,checkbox 이랑 onclick 함수들
const transportations = [
  '버스',
  '지하철',
  '택시',
  'KTX/기차',
  '도보',
  '자전거',
  '전동킥보드',
  '자가용', //위치 옮기기
];

const Form = () => {
  const [radio, setRadio] = React.useState<RadioState>({
    female: false,
    male: false,
  });

  const [policy, setPolicy] = React.useState<PolicyState>({
    privacy: false,
    thirdparty: false,
  });

  const [showRegionModal, setShowRegionModal] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState<boolean>(false);

  const [checkbox, setCheckbox] = React.useState<CheckboxState>(new Array(8).fill(false));
  const handleClick = (checkbox: CheckboxState, index: number) => {
    checkbox.splice(index, 1, !checkbox[index]);
    setCheckbox(checkbox.splice(0, 8).concat(checkbox));
  };

  const [nickInput, setNickInput] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [phoneInput, setPhoneInput] = React.useState('');
  const [dateInput, setDateInput] = React.useState('');

  // console.log(dateInput)

  return (
    <FormStyle.Container>
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
            setRadio((prevState: RadioState) => {
              return { ...prevState, female: true, male: false };
            });
          }}
        >
          <FormStyle.NoneDisplayInput type='radio' name='gender' id='female' value='여' />
          <BsCheckCircle size={24} />
          여자
        </FormStyle.RadioLabel>
        <FormStyle.RadioLabel
          htmlFor='male'
          selected={radio.male}
          onClick={() => {
            setRadio((prevState: RadioState) => {
              return { ...prevState, male: true, female: false };
            });
          }}
        >
          <FormStyle.NoneDisplayInput type='radio' name='gender' id='male' value='남' />
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
          setShowRegionModal(true);
          console.log('모달 Open');
        }}
      />
      {showRegionModal && (
        <ModalBackground>
          <Region setShowRegionModal={setShowRegionModal} />
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
        {transportations.map((transportation: string, index: number): JSX.Element => {
          return (
            <FormStyle.CheckBoxLabel
              htmlFor={transportation}
              key={index}
              selected={checkbox[index]}
              onClick={() => {
                handleClick(checkbox, index);
              }}
            >
              <FormStyle.NoneDisplayInput
                type='checkbox'
                name='transportation'
                id={transportation}
                value={transportation}
                onClick={(event) => {
                  event.stopPropagation(); //이벤트 버블링 방지용
                }}
              />
              {transportation}
            </FormStyle.CheckBoxLabel>
          );
        })}
      </FormStyle.CheckBoxContainer>

      <FormStyle.DataTitleRow>
        <FormStyle.DataToggleContainer>
          <FormStyle.DataToggle
            agreement={policy.privacy && policy.thirdparty}
            onClick={() => {
              setPolicy((prevState: PolicyState) => {
                return { ...prevState, privacy: !policy.privacy, thirdparty: !policy.thirdparty };
              });
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
                setPolicy((prevState: PolicyState) => {
                  return { ...prevState, privacy: !policy.privacy };
                });
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
                setPolicy((prevState: PolicyState) => {
                  return { ...prevState, thirdparty: !policy.thirdparty };
                });
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

      {/* submit버튼 disabled = true 일때는 --color-gray, false --color-dark-gray */}
      <SubmitButton
        type='submit'
        //disabled
        onClick={() => {
          setShowConfirmModal(true);
          console.log('submit click');
        }}
      >
        지원하기
      </SubmitButton>
      {showConfirmModal && (
        <ModalBackground>
          <Confirm />
        </ModalBackground>
      )}
    </FormStyle.Container>
  );
};

export default Form;
