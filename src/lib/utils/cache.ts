const expireRule = 1000 * 60 * 60 * 24;

const findCache = (query: string) => {
  const searchCache = getCacheFromStorage();
  return searchCache.find((searchObj: searchObjType) => searchObj.query === query);
};

const addCache = (query: string, data: sickType[]) => {
  const searchObj = { query, data, date: new Date().toISOString() };
  const searchCache = getCacheFromStorage();
  searchCache.push(searchObj);
  setCacheFromStorage(searchCache);
};

const getCacheFromStorage = () => {
  const searchCache = localStorage.getItem('searchCache');
  if (searchCache) return JSON.parse(searchCache);
  else return [];
};

const setCacheFromStorage = (searchCache: searchObjType[]) => {
  const currentDate = new Date();
  const cleanExpiredCache = searchCache.filter((searchObj: searchObjType) => {
    const createDate = new Date(searchObj.date);
    if (Number(currentDate) - Number(createDate) <= expireRule) {
      return true;
    } else return false;
  });
  const searchCacheJson = JSON.stringify(cleanExpiredCache);
  localStorage.setItem('searchCache', searchCacheJson);
};

export { findCache, addCache };
