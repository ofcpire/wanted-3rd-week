import React, { createContext, useMemo, useState } from 'react';
import useSearchList from '../hook/useSearchList';

const SearchContext = React.createContext<SearchContextType>({
  query: '',
  setQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => {},
  reco: [],
  select: -1,
  getKeyboardEvent: (e: React.KeyboardEvent<HTMLDivElement>, reco: sickType[]) => {},
  searchInputRef: null,
  setSelectByMouseOver: (idx: number) => {},
});

function SearchProvider({ children }: { children: React.ReactElement }) {
  const {
    query,
    setQueryValue,
    reco,
    select,
    getKeyboardEvent,
    searchInputRef,
    setSelectByMouseOver,
  } = useSearchList();

  return (
    <SearchContext.Provider
      value={{
        query,
        setQueryValue,
        reco,
        select,
        getKeyboardEvent,
        searchInputRef,
        setSelectByMouseOver,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
