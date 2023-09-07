import { styled } from 'styled-components';

const SearchForm = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
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

const SearchRecoListStyle = styled.div`
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  position: absolute;
  transform: translateY(50px);
  .list-header {
    color: grey;
    font-size: small;
    padding: 10px;
  }
`;

const SearchRecoItemStyle = styled.div<SearchRecoItemProps>`
  background-color: ${props => (props.$select === props.$idx ? 'lightblue' : 'white')};
  color: ${props => (props.$select === props.$idx ? 'white' : 'black')};
  padding: 5px;
`;

interface SearchRecoItemProps {
  $select: number;
  $idx: number;
}

export { SearchForm, SearchPageStyle, SearchStyle, SearchRecoListStyle, SearchRecoItemStyle };
