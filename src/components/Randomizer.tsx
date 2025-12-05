import styled from "styled-components";
import useProgress from "../services/useProgress";
import { useCallback, useMemo, useState } from "react";
import { clanDefs, type Clan } from "../util/data";
import ProgressBar from "./ProgressBar";
import Flex from "./common/Flex";
import BaseButton from "./common/BaseButton";

const RandoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const RandomizeButton = styled(BaseButton)`
  background-color: var(--green);
`;

interface MarkButtonProps {
  $undo: boolean;
}
const MarkButton = styled(BaseButton)<MarkButtonProps>`
  background-color: ${(p) => (p.$undo ? "var(--red)" : "var(--green)")};
`;

const ClanSBS = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const Randomizer = () => {
  const { missing, toggleClanProgress } = useProgress();
  const [chosen, setChosen] = useState<[Clan, Clan] | null>();

  const randomize = useCallback(() => {
    const index = Math.floor(Math.random() * missing.length);
    setChosen(missing[index]);
  }, [missing, setChosen]);

  const markButton = useMemo(() => {
    if (!chosen) return null;
    const primaryClan = clanDefs[chosen[0]];
    const secondaryClan = clanDefs[chosen[1]];

    const comboIsMissing = missing.some(
      ([p, s]) => p === primaryClan.clan && s === secondaryClan.clan
    );

    const text = comboIsMissing ? "Mark complete" : "Undo";

    return (
      <MarkButton
        $undo={!comboIsMissing}
        onClick={() => toggleClanProgress(primaryClan.clan, secondaryClan.clan)}
      >
        {text}
      </MarkButton>
    );
  }, [chosen, missing]);

  const chosenClans = useMemo(() => {
    if (!chosen) return null;
    const primaryClan = clanDefs[chosen[0]];
    const secondaryClan = clanDefs[chosen[1]];

    return (
      <Flex $dir="col">
        <ClanSBS>
          <Flex $dir="col">
            <img src={primaryClan.icon} alt={`Primary: ${primaryClan.name}`} />
            {primaryClan.name}
          </Flex>
          <Flex $dir="col">
            <img
              src={secondaryClan.icon}
              alt={`Secondary: ${secondaryClan.name}`}
            />
            {secondaryClan.name}
          </Flex>
        </ClanSBS>
      </Flex>
    );
  }, [chosen]);

  return (
    <RandoWrapper>
      <ProgressBar
        current={90 - missing.length}
        max={90}
        text="Overall"
        showPct
      />
      {chosenClans}
      <Flex $space>
        <RandomizeButton onClick={randomize}>Randomize</RandomizeButton>
        {markButton}
      </Flex>
    </RandoWrapper>
  );
};

export default Randomizer;
