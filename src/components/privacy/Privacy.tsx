import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { introduction, mainContent } from "../../asset/privacypolicy";
import { Link } from "react-router-dom";
import { MobileSizeContainer } from "../../styles/template";
import * as Privacy from "../../styles/privacy.styled";

const PrivacyTemplate = ({ setShowPrivacyModal }: any) => {
  return (
    <MobileSizeContainer>
      <Privacy.PrivacyContainer>
        <Privacy.PrivacyHeader>
          {/* Link 따로 스타일 들어간거 없음 */}
          <div>
            <Privacy.GoBackButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPrivacyModal(false);
              }}
            >
              <MdArrowBackIos />
            </Privacy.GoBackButton>
          </div>
          <Privacy.Title>서비스 이용약관</Privacy.Title>
        </Privacy.PrivacyHeader>
        <Privacy.PrivacyTitleBold>개인(신용)정보</Privacy.PrivacyTitleBold>
        <Privacy.PrivacyTitle>처리방침에 대한 동의 안내</Privacy.PrivacyTitle>
        <Privacy.PrivacyIntro>{introduction}</Privacy.PrivacyIntro>
        <Privacy.PrivacyMain>{mainContent}</Privacy.PrivacyMain>
      </Privacy.PrivacyContainer>
    </MobileSizeContainer>
  );
};

export default PrivacyTemplate;
