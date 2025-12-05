import styled from "styled-components";
import FullScreenGrid from "../components/layout/FullScreenGrid";
import { mt1Clans, mt2Clans } from "../util/data";
import { useMemo } from "react";
import Picker from "../components/Picker";
import GridArea from "../components/layout/GridArea";
import Randomizer from "../components/Randomizer";

const LayoutContainer = styled(FullScreenGrid)`
  grid-template-areas: "mt2 mt1 main";
  grid-template-columns: auto auto 1fr;
`;

const PickerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClanScroll = styled(GridArea)`
  max-height: 100vh;
  overflow: auto;
`;

const Main = () => {
  const mt1ClanPickers = useMemo(
    () =>
      mt1Clans.map((clanDef) => (
        <Picker primaryClanDef={clanDef} key={clanDef.clan} />
      )),
    []
  );
  const mt2ClanPickers = useMemo(
    () =>
      mt2Clans.map((clanDef) => (
        <Picker primaryClanDef={clanDef} key={clanDef.clan} />
      )),
    []
  );
  return (
    <LayoutContainer>
      <ClanScroll area="mt1">
        <PickerCol>{mt1ClanPickers}</PickerCol>
      </ClanScroll>
      <ClanScroll area="mt2">
        <PickerCol>{mt2ClanPickers}</PickerCol>
      </ClanScroll>
      <MainContent>
        <Randomizer />
      </MainContent>
    </LayoutContainer>
  );
};

export default Main;
