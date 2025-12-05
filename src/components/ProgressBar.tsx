import styled from "styled-components";

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
`;

const Bar = styled.progress`
  height: 24px;
  width: 256px;
  border-radius: 8px;
  background-color: var(--red);
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
`;

interface ProgressBarProps {
  current: number;
  max: number;
  showPct?: boolean;
  text?: string;
}
const ProgressBar = ({ current, max, showPct, text }: ProgressBarProps) => {
  const pct = (current / max).toLocaleString("en-US", { style: "percent" });

  return (
    <ProgressWrapper>
      <Text>
        {text ? `${text}:` : ""} {current} / {max} {showPct && pct}
      </Text>
      <Bar value={current} max={max} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
