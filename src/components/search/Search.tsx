import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import SearchReco from './SearchReco';
import { SearchStyle } from '../../styles/searchStyle';
import useListVisible from '../../hook/useListVisible';
import { SearchContext } from '../../context/SearchContext';

export default function Search() {
  const { isFocus, makeListVisible, makeListHidden } = useListVisible();
  const { getKeyboardEvent, reco } = useContext(SearchContext);

  return (
    <SearchStyle onKeyDown={e => getKeyboardEvent(e, reco)}>
      <SearchInput makeListVisible={makeListVisible} makeListHidden={makeListHidden} />
      {isFocus && <SearchReco />}
    </SearchStyle>
  );
}
