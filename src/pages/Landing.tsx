import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../styles/template';
import LogoImgSrc from '../asset/logo-snplab.png';
import { Link } from 'react-router-dom';

type Props = {};

const Landing = (props: Props) => {
  return (
    <PageTemplate>
      <LandingContainer>
        <LogoImg src={LogoImgSrc} alt='SNPLab logo' />
        <Title>AI 학습용 데이터 크라우드 워커 모집 페이지</Title>
        <Link to='/form'>
          <GoToFormButton>지원하기</GoToFormButton>
        </Link>
      </LandingContainer>
    </PageTemplate>
  );
};

export default Landing;

const LandingContainer = styled.div`
  position: fixed;
  top: 130px;
  width: 100%;
  height: 54%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 300px;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  padding: 10px;
`;

const GoToFormButton = styled.button`
  width: 170px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  background: var(--color-main);
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
  }
`;
