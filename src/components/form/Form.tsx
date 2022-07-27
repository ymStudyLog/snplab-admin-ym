import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheckCircle, BsCheck } from "react-icons/bs";
import ModalBackground from "../modal/ModalBackground";
import FormInput from "./FormInput";
import { useForm, FormProvider } from "react-hook-form";
import { applyService, postApplicantsData } from "../../api/api";
import * as FormStyle from "../../styles/Form.styled";
import Region from "../modal/Region";
import Confirm from "../modal/Confirm";
import { SubmitButton } from "../../styles/template";
import { RadioState, PolicyState, CheckboxState } from "../../types/Form.type";
import transportations from "../../asset/transportaions";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { radioState, radioInitialState } from "../../store/radioAtom";

interface IFormInputs {
  name: string;
  birthday: number;
  contact: number;
  email: string;
  gender: string;
  transportation: any;
  agreement: boolean;
}

const Form = () => {
  const methods = useForm<IFormInputs>({
    defaultValues: {
      gender: 'femail',
      transportation: '',
      agreement: false,
    },
    mode: 'onBlur',
  });
  const {
    register,
    formState: { errors, isDirty, isValid },
  } = methods;

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    postApplicantsData(applyService, data);
  };

  //  React.useEffect(()=>{
  //   postApplicantsData(applyService)
  //  })
  const [showRegionModal, setShowRegionModal] = React.useState<boolean>(false);
  const [showConfirmModal, setShowConfirmModal] =
    React.useState<boolean>(false);

  const setRadio = useSetRecoilState(radioInitialState);
  const radio = useRecoilValue<RadioState>(radioState);
  const [policy, setPolicy] = React.useState<PolicyState>({
    privacy: false,
    thirdparty: false,
  });
  const [checkbox, setCheckbox] = React.useState<CheckboxState>(
    new Array(8).fill(false)
  );
  const handleClick = (checkbox: CheckboxState, index: number) => {
    checkbox.splice(index, 1, !checkbox[index]);
    setCheckbox(checkbox.splice(0, 8).concat(checkbox));
  };

  return (
    <FormProvider {...methods}>
      <FormStyle.StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        <FormStyle.DataTitle>이름</FormStyle.DataTitle>

        <FormInput
          placeholder='홍길동'
          name='name'
          options={{
            required: true,
            pattern: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,5}$/,
          }}
        />
        {errors?.name?.type === 'required' && <p>이름을 입력해주세요</p>}
        {errors?.name?.type === 'pattern' && <p>한글을 입력해주세요</p>}

        <FormStyle.DataTitle>성별</FormStyle.DataTitle>
        <FormStyle.RadioContainer>
          <FormStyle.RadioLabel
            htmlFor='female'
            selected={radio.female}
            onClick={() => setRadio("female")}
          >
            <FormStyle.NoneDisplayInput {...register('gender')} type='radio' name='gender' id='female' value='여' />
            <BsCheckCircle size={24} />
            여자
          </FormStyle.RadioLabel>
          <FormStyle.RadioLabel
            htmlFor='male'
            selected={radio.male}
            onClick={() => setRadio("male")}
          >
            <FormStyle.NoneDisplayInput {...register('gender')} type='radio' name='gender' id='male' value='남' />
            <BsCheckCircle size={24} />
            남자
          </FormStyle.RadioLabel>
        </FormStyle.RadioContainer>

        <FormStyle.DataTitle>생년월일</FormStyle.DataTitle>

        <FormInput
          placeholder='YYYY.MM.DD'
          name='birthday'
          options={{
            required: true,
            maxLength: 10,
            pattern: /^(([0-9]+).{4}([0-9]+).{2}([0-9]+){2})/g,
          }}
        />
        {errors?.birthday?.type === 'required' && <p>생년월일을 입력해주세요</p>}
        {errors?.birthday?.type === 'pattern' && <p>YYYY.MM.DD형식으로 입력해주세요</p>}
        <FormStyle.DataTitle>거주지역</FormStyle.DataTitle>

        <FormStyle.DataInput
          type='text'
          name='region'
          placeholder='거주지역 선택'
          onClick={() => {
            setShowRegionModal(true);
          }}
        />
        {showRegionModal && (
          <ModalBackground>
            <Region setShowRegionModal={setShowRegionModal} />
          </ModalBackground>
        )}

        <FormStyle.DataTitle>연락처</FormStyle.DataTitle>

        <FormInput placeholder="'-'제외하고입력" name={'contact'} options={{ required: true, maxLength: 11, pattern: /^[0-9]{11}/g }} />
        {errors?.contact?.type === 'required' && <p>연락처를 입력해주세요</p>}
        {errors?.contact?.type === 'pattern' && <p>'-'제외하고 숫자만 입력해주세요</p>}

        <FormStyle.DataTitle>이메일</FormStyle.DataTitle>

        <FormInput
          placeholder="'@', '.com'포함해주세요"
          name={'email'}
          options={{
            required: true,
            maxLength: undefined,
            pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
          }}
        />
        {errors?.email?.type === 'required' && <p>이메일을 입력해주세요</p>}
        {errors?.email?.type === 'pattern' && <p>'@', '.com'을 포함하여 입력해주세요</p>}
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
                  {...register('transportation')}
                  type='checkbox'
                  name='transportation'
                  id={transportation}
                  value={transportation}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                />
                {transportation}
              </FormStyle.CheckBoxLabel>
            );
          })}
        </FormStyle.CheckBoxContainer>

        <FormStyle.DataTitleRow>
          <FormStyle.DataToggleContainer>
            <FormStyle.ButtonLabel
              // {...register("agreement", {
              //   required: true,
              // })}
              agreement={policy.privacy && policy.thirdparty}
            >
              {/* input의 value값으로는 boolean을 줄수 없음 */}
              <FormStyle.NoneDisplayInput
                type='button'
                name='agreement'
                value='true'
                onClick={() => {
                  setPolicy((prevState: PolicyState) => {
                    return {
                      ...prevState,
                      privacy: !policy.privacy,
                      thirdparty: !policy.thirdparty,
                    };
                  });
                }}
              />
              <BsCheckCircle size={24} />
            </FormStyle.ButtonLabel>
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
                {/* <input
                  type="checkbox"
                  {...register("agreement", {
                    required: true,
                  })}
                /> */}
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

        <SubmitButton
          type='submit'
          disabled={!isDirty || !isValid}
          //disabled
          onClick={() => {
            setShowConfirmModal(true);
          }}
        >
          지원하기
        </SubmitButton>
        {showConfirmModal && (
          <ModalBackground>
            <Confirm />
          </ModalBackground>
        )}
      </FormStyle.StyledForm>
    </FormProvider>
  );
};

export default Form;
