import React from "react";
import styled from "styled-components";
import { BiCaretDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

type Props = {};

//검색어를 input이라고 가정했을 때 => includes로? 예) '여자'검색 => '여자'.includes("여") === true => '여'로 검색
 /* 1) admin tab 특정 기간 불러오기 => 1차모집 : 2022-07-01 ~ 2022-07-31, 2차모집 : 2022-08-01 ~ 2022-08-31, 3차모집 : 2022-09-01 ~ 2022-09-30 등
    => `?submitdate_gte=2022-07-01&submitdate_lte=2022-07-31` 날짜를 변수 처리 해도 되겠다
   2) 1)에다가 + 검색창에서 검색했을 때 옵션도 추가 _like 사용
    => 예) 성별이 여자일떄 `&gender_like=여`
 */
const SearchFilter = {
  지원날짜: `&submitdate_like=input`,
  지원자명: "&name_like=input",
  성별: "&gender_like=input",
  생년월일: "&birthday_like=input",
  이용수단: "&transportation_like=input",
  거주지: "&region_like=input",
};

//드롭다운 이외의 부분 클릭시 닫히게
//드롭다운에서 filter 선택시 input으로 포커스 => useRef()
const Search = (props: Props) => {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [filter, setFilter] = React.useState("지원날짜");

  return (
    <SearchContainer>
      <SearchDropdown>
        <li style={{ display: "flex", justifyContent: "flex-end" }}>
          <p style={{}}>{filter}</p>
          <button
            onClick={() => setOpenFilter(!openFilter)}
            style={{
              padding: "0 5px",
              borderRight: `2px solid var(--color-main-shade)`,
            }}
          >
            <BiCaretDown
              style={{ color: `var(--color-main-shade)` }}
              size={15}
            />
          </button>
        </li>
        {openFilter &&
          Object.keys(SearchFilter).map((filter, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setFilter(filter);
                  setOpenFilter(!openFilter);
                }}
              >
                {filter}
              </li>
            );
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
    cursor: default;
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
