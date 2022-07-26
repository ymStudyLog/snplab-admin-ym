import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import * as SearchStyle from "../../styles/Search.styled";
import { useRecoilState } from "recoil";
import { searchQuery } from "../../store/atom";

const SEARCH_QUERY = {
  지원날짜: `&submitdate_like=`,
  지원자명: "&name_like=",
  성별: "&gender_like=",
  생년월일: "&birthday_like=",
  이용수단: "&transportation_like=",
  거주지: "&region_like=",
};

//TODO : 드롭다운 이외의 부분 클릭시 닫히게
const Search = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<string>("지원날짜");
  const inputEl = React.useRef<HTMLInputElement>(null);

  const [search, setSearch] = useRecoilState<string>(searchQuery);
  const [value, setValue] = React.useState<string>(""); //TODO : SearchInput useRef로 최적화
  const handleChange = (event : any) : void => {
    setValue(event.target.value);
  };

  const handleSearch = () =>{
    setSearch(search.concat(value));
    console.log(search) //TODO : 검색 버튼을 누르면 value 값을 temp에 저장했다가 -> 최종 쿼리만 아톰 저장하고 싶음
    setValue("");
  };

  return (
    <SearchStyle.SearchContainer>
      <SearchStyle.SearchDropdown>
        <SearchStyle.SelectedDropdown>
          <p>{filter}</p>
        </SearchStyle.SelectedDropdown>
        {open &&
          Object.keys(SEARCH_QUERY).map((text, index) => {
            return (
              <SearchStyle.UnSelectedDropdown
                key={index}
                onClick={() => {
                  setFilter(text);
                  setOpen(!open);
                  setSearch(Object.values(SEARCH_QUERY)[index]);
                  inputEl.current?.focus();
                }}
              >
                <p>{text}</p>
              </SearchStyle.UnSelectedDropdown>
            );
          })}
      </SearchStyle.SearchDropdown>
      <SearchStyle.DropdownButton onClick={() => setOpen(!open)}>
        <BiCaretDown style={{ color: `var(--color-main-shade)` }} size={15} />
      </SearchStyle.DropdownButton>
      <SearchStyle.SearchInput type="text" onChange={handleChange} value={value} ref={inputEl}/>
      <SearchStyle.SearchButton onClick={handleSearch}>
        <FiSearch size={16} />
      </SearchStyle.SearchButton>
    </SearchStyle.SearchContainer>
  );
};

export default Search;
