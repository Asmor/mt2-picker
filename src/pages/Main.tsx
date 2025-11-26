import styled from "styled-components";
import FullScreenGrid from "../components/layout/FullScreenGrid";

const LayoutContainer = styled(FullScreenGrid)`
  grid-template-areas: "right center left";
  grid-template-columns: auto auto auto;
`;

const Fill = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Right = styled(Fill)`
  grid-area: right;
`;
const Left = styled(Fill)`
  grid-area: left;
`;
const Center = styled(Fill)`
  grid-area: center;
`;

const Main = () => {
  return (
    <LayoutContainer>
      <Right></Right>
      <Left></Left>
      <Center>Welcome!</Center>
    </LayoutContainer>
  );
};

export default Main;
