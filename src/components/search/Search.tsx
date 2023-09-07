import React from 'react';
import SearchInput from './SearchInput';
import SearchReco from './SearchReco';
import useSearchList from '../../hook/useSearchList';
import { SearchStyle } from '../../styles/searchStyle';
import useListVisible from '../../hook/useListVisible';

export default function Search() {
  const { query, setQueryValue, reco, select, getKeyboardEvent, searchInputRef } = useSearchList();
  const { isFocus, makeListVisible, makeListHidden } = useListVisible();

  const searchHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputRef.current) {
      window.location.href = `https://clinicaltrialskorea.com/studies?conditions=${searchInputRef.current.value}`;
    }
  };

  return (
    <SearchStyle onKeyDown={e => getKeyboardEvent(e, reco)}>
      <SearchInput
        query={query}
        setQueryValue={setQueryValue}
        select={select}
        reco={reco}
        searchInputRef={searchInputRef}
        searchHandler={searchHanlder}
        makeListVisible={makeListVisible}
        makeListHidden={makeListHidden}
      />
      {isFocus && <SearchReco reco={reco} select={select} />}
    </SearchStyle>
  );
}
