import React from "react";
import styled from "styled-components";
import { BiCaretDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

type Props = {};

const SearchFilter = {
  지원날짜: "date",
  지원자명: "name",
  성별: "gender",
  생년월일: "birthday",
  이용수단: "transportation",
  거주지: "region",
};

//드롭다운 이외의 부분 클릭시 닫히게 
//드롭다운에서 filter 선택시 input으로 포커스 => useRef()
const Search = (props: Props) => {
  const [openFilter, setOpenFilter] = React.useState(false);
    const [filter, setFilter] = React.useState("지원날짜");

  return (
    <SearchContainer>
      <SearchDropdown>
        <li onClick={()=>setOpenFilter(!openFilter)} style={{ display:"flex", justifyContent:"flex-end"}}>
          <p style={{}}>{filter}</p>
          <button style={{ cursor: "pointer", padding:"0 5px", borderRight:`2px solid var(--color-main-shade)`}}>
            <BiCaretDown style={{ color:`var(--color-main-shade)`}} size={15}/>
            </button>
        </li>
        {openFilter && Object.keys(SearchFilter).map((filter, index) => {
          return <li key={index} onClick={()=>{setFilter(filter); setOpenFilter(!openFilter)}}>{filter}</li>;
        })}
      </SearchDropdown>
      <SearchInput type="text" />
      <SearchButton>
        <FiSearch size={16} />
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 420px;
  height: 30px;
  display: flex;
  border: 2px solid var(--color-main-shade);
  border-radius: 12px;
  text-align: center;
`;

const SearchDropdown = styled.ul`
  width: 100px;

  li {
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  width: 280px;
  height: auto;
`;

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  color: var(--color-gray);
`;
