import React from 'react';
import SearchInput from './SearchInput';
import SearchReco from './SearchReco';
import useSearch from '../../hook/useSearch';
import { SearchStyle } from '../../styles/searchStyle';

export default function Search() {
  const { query, setQueryValue, reco } = useSearch();

  return (
    <SearchStyle>
      <SearchInput query={query} setQueryValue={setQueryValue} />
      <SearchReco reco={reco} />
    </SearchStyle>
  );
}
