interface sickType {
  sickCd: string;
  sickNm: string;
}

interface searchObjType {
  query: string;
  date: string;
  data: sickType[];
}
