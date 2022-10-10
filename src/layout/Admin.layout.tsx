import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0 1.5rem;
  background-color: var(--color-black);
  color: var(--color-white);
`;

export const Sidebar = styled.div`
  position: relative;
  top: 50px;
  left: 0;
  width: 200px;
  background: var(--color-sidebar);
`;

export const Content = styled.div`
  position: relative;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
`;

