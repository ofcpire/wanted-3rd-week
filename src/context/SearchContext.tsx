import React, { useRef } from 'react';
import useSearchList from '../hook/useSearchList';

const SearchContext = React.createContext<SearchContextType>({
  query: '',
  setQuery: (query: string) => {},
  setQueryFromEvent: (e: React.ChangeEvent<HTMLInputElement>) => {},
  reco: [],
  select: -1,
  getKeyboardEvent: (e: React.KeyboardEvent<HTMLDivElement>, reco: sickType[]) => {},
  searchInputRef: null,
  setSelectByMouseOver: (idx: number) => {},
});

function SearchProvider({ children }: { children: React.ReactElement }) {
  const {
    query,
    setQuery,
    setQueryFromEvent,
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
        setQuery,
        setQueryFromEvent,
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
