import React from 'react';
import { SearchForm } from '../../styles/searchStyle';
import { Input, Button } from '../../styles/global';

interface SearchInputProps {
  query: string;
  setQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ query, setQueryValue }: SearchInputProps) {
  return (
    <SearchForm>
      <Input value={query} onChange={setQueryValue} placeholder="질환명을 입력해 주세요."></Input>
      <Button>🔍︎</Button>
    </SearchForm>
  );
}
