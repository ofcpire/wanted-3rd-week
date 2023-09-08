import { useState, useEffect, useRef } from 'react';
import { getSearchReco } from '../lib/api/api';
import { addCache, findCache } from '../lib/utils/cache';
let getTimeout: NodeJS.Timer | null = null;
const testWord = /[ㄱ-ㅎㅏ-ㅣ]/;
const debounceTime = 300;

export default function useSearchList() {
  const [query, setQuery] = useState('');
  const [reco, setReco] = useState<sickType[]>([]);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const setQueryFromEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (findCache(query)) {
      if (getTimeout) clearTimeout(getTimeout);
      setReco(findCache(query).data);
    } else if (query.length > 0 && !testWord.test(query)) {
      if (getTimeout) clearTimeout(getTimeout);
      getTimeout = setTimeout(() => {
        getSearchReco(query)
          .then(data => {
            const sliceData = data.slice(0, 10);
            addCache(query, sliceData);
            setReco(sliceData);
          })
          .catch(() => {
            alert('api error!');
          });
      }, debounceTime);
    } else {
      if (getTimeout) clearTimeout(getTimeout);
      setReco([]);
    }
  }, [query]);

  const [select, setSelect] = useState(-1);

  const getKeyboardEvent = (e: React.KeyboardEvent<HTMLDivElement>, reco: sickType[]) => {
    if (e.key === 'ArrowUp') {
      setSelect(prevState => {
        if (prevState < 0) return prevState;
        else return prevState - 1;
      });
    } else if (e.key === 'ArrowDown') {
      setSelect(prevState => {
        if (prevState >= reco.length - 1) return prevState;
        else return prevState + 1;
      });
    }
  };

  const setSelectByMouseOver = (idx: number) => {
    setSelect(idx);
  };

  useEffect(() => {
    setSelect(-1);
  }, [reco]);

  useEffect(() => {
    if (searchInputRef.current)
      if (reco.length > 0 && select >= 0) searchInputRef.current.value = reco[select].sickNm;
      else searchInputRef.current.value = query;
  }, [select]);

  return {
    query,
    setQuery,
    setQueryFromEvent,
    reco,
    select,
    getKeyboardEvent,
    searchInputRef,
    setSelectByMouseOver,
  };
}
