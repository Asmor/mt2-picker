import styled from "styled-components";

const alignMap = {
  column: {
    center: "center",
    left: "baseline",
    right: "end",
    top: "start",
    bottom: "end",
  },
  row: {
    center: "center",
    left: "start",
    right: "end",
    top: "baseline",
    bottom: "end",
  },
};

interface FlexProps {
  $gap?: number;
  $dir?: "row" | "col";
  $hAlign?: "left" | "right" | "center";
  $vAlign?: "top" | "center" | "bottom";
  $space?: boolean;
}
const Flex = styled.div<FlexProps>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${(p) => getCssVals(p).dir};
  justify-content: ${(p) => getCssVals(p).main};
  align-items: ${(p) => getCssVals(p).cross};
  gap: ${(p) => p.$gap ?? 4}px;
`;

const getCssVals = (p: FlexProps) => {
  const dir = p.$dir === "col" ? "column" : "row";
  const hAlign = p.$hAlign ?? "center";
  const vAlign = p.$vAlign ?? "center";
  const map = alignMap[dir];
  let mainAxis = dir === "row" ? hAlign : vAlign;
  const crossAxis = dir === "row" ? vAlign : hAlign;

  const main = p.$space ? "space-between" : map[mainAxis];

  return {
    dir,
    main,
    cross: map[crossAxis],
  };
};

export default Flex;
