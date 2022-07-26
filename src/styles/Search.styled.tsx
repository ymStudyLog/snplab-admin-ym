import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 420px;
  height: 30px;
  display: flex;
  justify-content: center;
  border: 2px solid var(--color-main-shade);
  border-radius: 12px;
  text-align: center;
`;

export const SearchDropdown = styled.ul`
  width: 80px;
  font-size: 14px;
  z-index: 50;
`;

export const SelectedDropdown = styled.li`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export const UnSelectedDropdown = styled(SelectedDropdown)`
  background: var(--color-white);
  border: 0.5px solid var(--color-border);
  cursor: pointer !important;
`;

export const DropdownButton = styled.button`
  height: 70%;
  margin: auto 0;
  padding: 0 5px;
  border-right: 2px solid var(--color-main-shade);
  z-index: 10;
`;

export const SearchInput = styled.input`
  width: 240px;
  padding: 0 10px;
  height: auto;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  color: var(--color-gray);
`;
