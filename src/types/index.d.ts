interface sickType {
  sickCd: string;
  sickNm: string;
}

interface searchObjType {
  query: string;
  date: string;
  data: sickType[];
}

interface SearchContextType {
  query: string;
  setQueryValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reco: sickType[];
  select: number;
  getKeyboardEvent: (e: React.KeyboardEvent<HTMLDivElement>, reco: sickType[]) => void;
  searchInputRef: React.RefObject<HTMLInputElement> | null;
  setSelectByMouseOver: (idx: number) => void;
}
