import React, { useContext } from 'react';
import { SearchRecoItemStyle } from '../../styles/searchStyle';
import { SearchContext } from '../../context/SearchContext';

interface RecoItemProps {
  sickNm: string;
  idx: number;
}

export default function SearchRecoItem({ sickNm, idx }: RecoItemProps) {
  const { setSelectByMouseOver, select, setQuery } = useContext(SearchContext);

  return (
    <SearchRecoItemStyle
      $select={select}
      $idx={idx}
      onMouseOver={() => setSelectByMouseOver(idx)}
      onClick={() => setQuery(sickNm)}
    >
      {sickNm}
    </SearchRecoItemStyle>
  );
}
