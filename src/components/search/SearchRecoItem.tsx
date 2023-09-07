import React from 'react';
import { SearchRecoItemStyle } from '../../styles/searchStyle';

interface RecoItemProps {
  sickNm: string;
  select: number;
  idx: number;
}

export default function SearchRecoItem({ sickNm, select, idx }: RecoItemProps) {
  return (
    <SearchRecoItemStyle $select={select} $idx={idx}>
      {sickNm}
    </SearchRecoItemStyle>
  );
}
