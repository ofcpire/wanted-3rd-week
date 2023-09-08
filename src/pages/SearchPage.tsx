import React from 'react';
import Search from '../components/search/Search';
import { SearchPageStyle } from '../styles/searchStyle';
import { SearchProvider } from '../context/SearchContext';

export default function SearchPage() {
  return (
    <SearchProvider>
      <SearchPageStyle>
        <Search />
      </SearchPageStyle>
    </SearchProvider>
  );
}
