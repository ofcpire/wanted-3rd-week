import { useState, useEffect } from 'react';
import { getSearchReco } from '../lib/api/api';
import { addCache, findCache } from '../lib/utils/cache';
let getTimeout: NodeJS.Timer | null = null;
const testWord = /[ㄱ-ㅎㅏ-ㅣ]/;

export default function useSearch() {
  const [query, setQuery] = useState('');
  const [reco, setReco] = useState<sickType[]>([]);
  const setQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (findCache(query)) setReco(findCache(query).data);
    else if (query.length > 0 && !testWord.test(query)) {
      if (getTimeout) clearTimeout(getTimeout);
      getTimeout = setTimeout(() => {
        getSearchReco(query)
          .then(data => {
            addCache(query, data);
            setReco(data);
          })
          .catch(() => {
            alert('api error!');
          });
      }, 300);
    } else if (query.length <= 0) setReco([]);
  }, [query]);

  return { query, setQueryValue, reco };
}
