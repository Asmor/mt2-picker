import type { PropsWithChildren } from "react";
import styled from "styled-components";

interface GridAreaElProps {
  $area: string;
  $align: string;
  $allowOverflow?: boolean;
}
const GridAreaEl = styled.div<GridAreaElProps>`
  overflow: ${(p) => (p.$allowOverflow ? "visible" : "hidden")};
  display: flex;
  justify-content: ${(p) => p.$align};
  grid-area: ${(p) => p.$area};
`;

interface GridAreaProps extends PropsWithChildren {
  area: string;
  align?: string;
  className?: string;
  overflow?: boolean;
}
const GridArea = ({
  area,
  children,
  align = "left",
  className,
  overflow = false,
}: GridAreaProps) => {
  return (
    <GridAreaEl
      $area={area}
      $align={align}
      className={className}
      $allowOverflow={overflow}
    >
      {children}
    </GridAreaEl>
  );
};

export default GridArea;
