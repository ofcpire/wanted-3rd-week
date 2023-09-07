import React from 'react';
import { SearchForm } from '../../styles/searchStyle';
import { Input, Button } from '../../styles/global';

interface SearchInputProps {
  query: string;
  setQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  select: number;
  reco: sickType[];
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  makeListVisible: () => void;
  makeListHidden: () => void;
}

export default function SearchInput({
  query,
  setQueryValue,
  select,
  reco,
  searchInputRef,
  searchHandler,
  makeListVisible,
  makeListHidden,
}: SearchInputProps) {
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
