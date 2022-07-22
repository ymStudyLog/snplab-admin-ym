//나중에 삭제 될 컴포넌트! 

import React, { useState } from 'react'
import regex from '../utils/Regex';
import ValidationInput from './ValidationInput'

type Props = {}

const Regexp = (props: Props) => {
    const [nickInput, setNickInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");

  return (
    <div> <ValidationInput
    label="이름"
    value={nickInput}
    setValue={setNickInput}
    maxValue={10}
    regexCheck={regex.nickname}
    defaultText="닉네임을 입력해주세요!"
    errorText="한글로 3자 이상 입력해주세요."
  />
  <ValidationInput
              label="이메일"
              value={emailInput}
              setValue={setEmailInput}
              regexCheck={regex.email}
              defaultText="이메일을 입력해주세요!"
              errorText="이메일 양식!" maxValue={undefined}  />
  <ValidationInput
    label="연락처"
    type="text"
    value={phoneInput}
    setValue={setPhoneInput}
    regexCheck={regex.phone}
    maxValue={11}
    defaultText="연락처를 입력해주세요!"
    errorText="연락처 0100000000 형태로 입력해주세요!"
  />
    
  </div>
  )
}

export default Regexp