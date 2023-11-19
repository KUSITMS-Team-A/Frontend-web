import React, { useState } from "react";
import * as styles from "@/components/styles/Search.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import Image from "next/image";

interface SIProps {
  isSearch: boolean;
  setIsSearch: Function;
}

const SearchInput = ({ isSearch, setIsSearch }: SIProps) => {
  const handleOnClickSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      {isSearch ? (
        <styles.SearchExpandBox>
          <styles.SearchInput placeholder="제휴하려는 가게를 찾아보세요!" />
          <styles.SearchIconBox>
            <SearchIcon alt="search icon" />
          </styles.SearchIconBox>
        </styles.SearchExpandBox>
      ) : (
        <styles.SearchBox onClick={handleOnClickSearch}>
          <SearchIcon alt="search icon" />
        </styles.SearchBox>
      )}
    </>
  );
};

export default SearchInput;
