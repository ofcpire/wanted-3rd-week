import React from 'react';
import { SearchRecoListStyle } from '../../styles/searchStyle';
import SearchRecoItem from '../SearchRecoItem';

interface SearchRecoProps {
  reco: sickType[];
  select: number;
}

export default function SearchReco({ reco, select }: SearchRecoProps) {
  return (
    <SearchRecoListStyle>
      <div className="list-header">추천 검색어</div>
      {reco.length > 0 ? (
        <div>
          {reco.map((obj, idx) => {
            if (idx < 10)
              return (
                <SearchRecoItem key={obj.sickCd} select={select} sickNm={obj.sickNm} idx={idx} />
              );
          })}
        </div>
      ) : (
        <div>검색어 없음</div>
      )}
    </SearchRecoListStyle>
  );
}
