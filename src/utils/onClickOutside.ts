import React from "react";

//TODO 드롭다운 외부 클릭시 닫게 하는거 만들기
const useOnClickOutside = (
  ref: React.RefObject<HTMLLIElement>,
  open: boolean,
  handler: React.Dispatch<React.SetStateAction<boolean>>
) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (ref.current !== event.target)
        handler(false);
    };
    if (open) {
      window.addEventListener("click", listener);
    }
    return () => { //clean up
      window.removeEventListener("click", listener);
    };
  }, [ref, open, handler]);
};

export default useOnClickOutside;
