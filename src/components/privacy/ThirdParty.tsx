import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { introduction, mainContent } from "../../asset/privacypolicy";
import { Link } from "react-router-dom";
import { MobileSizeContainer } from "../../styles/template";
import * as Privacy from "../../styles/privacy.styled";

const PrivacyTemplate = () => {
  return (
    <MobileSizeContainer>
      <Privacy.PrivacyHeader>
        {/* Link 따로 스타일 들어간거 없음 */}
        <Link to="/form">
          <Privacy.GoBackButton>
            <MdArrowBackIos />
          </Privacy.GoBackButton>
        </Link>
        <Privacy.Title>서비스 이용약관</Privacy.Title>
      </Privacy.PrivacyHeader>
      <Privacy.PrivacyTitleBold>제3자</Privacy.PrivacyTitleBold>
      <Privacy.PrivacyTitle>정보제공에 대한 동의 안내</Privacy.PrivacyTitle>
      <Privacy.PrivacyIntro>{introduction}</Privacy.PrivacyIntro>
      <Privacy.PrivacyMain>{mainContent}</Privacy.PrivacyMain>
    </MobileSizeContainer>
  );
};

export default PrivacyTemplate;


