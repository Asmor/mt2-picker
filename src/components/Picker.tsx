import styled from "styled-components";
import { Clan, mt1Clans, mt2Clans, type ClanDef } from "../util/data";
import { useMemo } from "react";
import GridArea from "./layout/GridArea";
import BlankButton from "./common/BlankButton";
import type { ClanProgress } from "../util/types";
import useProgress from "../services/useProgress";
import ProgressBar from "./ProgressBar";

const iconSize = 80;

const PickerGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "primary mt2"
    "primary mt1"
    "progress progress";
  width: fit-content;
  gap: 8px;
  padding: 16px;
  background-color: var(--panel-fill);
  margin: 8px;
  border-radius: 8px;
`;

const PriClanImg = styled.img`
  height: ${iconSize}px;
  width: ${iconSize}px;
`;

interface SecClanImgProps {
  $disabled: boolean;
}
const SecClanImg = styled.img<SecClanImgProps>`
  height: ${iconSize / 2}px;
  width: ${iconSize / 2}px;
  filter: ${(p) => (p.$disabled ? "grayscale(1)" : "none")};
  transition: filter 0.5s;
`;

interface PickerProps {
  primaryClanDef: ClanDef;
}
const Picker = ({ primaryClanDef }: PickerProps) => {
  const { getClanProgress, toggleClanProgress: setClanProgress } =
    useProgress();
  const progress = getClanProgress(primaryClanDef.clan);
  const setProgress = setClanProgress.bind(null, primaryClanDef.clan);

  const mt2Icons = useMemo(
    () =>
      getIcons(
        mt2Clans.filter((secClanDef) => secClanDef !== primaryClanDef),
        progress,
        setProgress
      ),
    [progress, primaryClanDef, setProgress]
  );

  const mt1Icons = useMemo(
    () =>
      getIcons(
        mt1Clans.filter((secClanDef) => secClanDef !== primaryClanDef),
        progress,
        setProgress
      ),
    [progress, primaryClanDef, setProgress]
  );

  const completeCount = Object.values(progress).filter(
    (complete) => complete
  ).length;
  console.log("xxy", { clan: primaryClanDef.name, completeCount, progress });

  return (
    <PickerGrid>
      <GridArea area="primary" vAlign="center">
        <PriClanImg
          src={primaryClanDef.icon}
          alt={`Primary clan: ${primaryClanDef.name}`}
        />
      </GridArea>
      <GridArea area="mt2" align="center" gap={4}>
        {mt2Icons}
      </GridArea>
      <GridArea area="mt1" align="center" gap={4}>
        {mt1Icons}
      </GridArea>
      <GridArea area="progress" align="center">
        <ProgressBar current={completeCount} max={9} />
      </GridArea>
    </PickerGrid>
  );
};

export default Picker;

const getIcons = (
  clanDefs: ClanDef[],
  progress: ClanProgress,
  setProgress: (secondaryClan: Clan) => void
) => {
  return clanDefs.map((clanDef) => {
    const checked = progress[clanDef.clan];

    return (
      <label key={clanDef.clan}>
        <BlankButton onClick={() => setProgress(clanDef.clan)}>
          <SecClanImg
            src={clanDef.icon}
            alt={`Secondary clan: ${clanDef.name}`}
            title={clanDef.name}
            $disabled={!checked}
          />
        </BlankButton>
      </label>
    );
  });
};
