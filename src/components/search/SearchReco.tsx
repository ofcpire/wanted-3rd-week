import React from 'react';
import { SearchRecoStyle } from '../../styles/searchStyle';

interface SearchRecoProps {
  reco: sickType[];
}

export default function SearchReco({ reco }: SearchRecoProps) {
  return (
    <>
      {reco.length > 0 && (
        <SearchRecoStyle>
          {reco.map((obj, idx) => {
            if (idx < 10) return <div key={obj.sickCd}>{obj.sickNm}</div>;
          })}
        </SearchRecoStyle>
      )}
    </>
  );
}
