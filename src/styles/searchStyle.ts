import { styled } from 'styled-components';

const SearchForm = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 300px;
  height: 50px;
`;

const SearchPageStyle = styled.main`
  background-color: lightblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SearchRecoStyle = styled.div`
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  position: absolute;
  transform: translateY(50px);
`;

export { SearchForm, SearchPageStyle, SearchStyle, SearchRecoStyle };
