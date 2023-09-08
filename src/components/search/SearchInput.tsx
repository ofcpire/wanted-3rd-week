import React, { useContext } from 'react';
import { SearchForm } from '../../styles/searchStyle';
import { Input, Button } from '../../styles/global';
import { SearchContext } from '../../context/SearchContext';

interface SearchInputProps {
  makeListVisible: () => void;
  makeListHidden: () => void;
}

export default function SearchInput({ makeListVisible, makeListHidden }: SearchInputProps) {
  const { searchInputRef, query, setQueryValue } = useContext(SearchContext);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputRef?.current) {
      window.location.href = `https://clinicaltrialskorea.com/studies?conditions=${searchInputRef.current.value}`;
    }
  };

  return (
    <SearchForm onSubmit={searchHandler}>
      <Input
        onFocus={makeListVisible}
        onBlur={makeListHidden}
        ref={searchInputRef}
        value={query}
        onChange={setQueryValue}
        placeholder="질환명을 입력해 주세요."
      ></Input>
      <Button>🔍︎</Button>
    </SearchForm>
  );
}
