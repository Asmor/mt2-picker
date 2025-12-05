import type { PropsWithChildren } from "react";
import styled from "styled-components";

interface GridAreaElProps {
  $area: string;
  $align: string;
  $vAlign: string;
  $allowOverflow?: boolean;
  $gap?: number;
}
const GridAreaEl = styled.div<GridAreaElProps>`
  overflow: ${(p) => (p.$allowOverflow ? "visible" : "hidden")};
  display: flex;
  justify-content: ${(p) => p.$align};
  align-items: ${(p) => p.$vAlign};
  grid-area: ${(p) => p.$area};
  gap: ${(p) => p.$gap ?? 0}px;
`;

interface GridAreaProps extends PropsWithChildren {
  area: string;
  align?: string;
  vAlign?: string;
  className?: string;
  overflow?: boolean;
  gap?: number;
}
const GridArea = ({
  area,
  children,
  align = "left",
  vAlign = "top",
  className,
  overflow = false,
  gap,
}: GridAreaProps) => {
  return (
    <GridAreaEl
      $area={area}
      $align={align}
      $vAlign={vAlign}
      className={className}
      $allowOverflow={overflow}
      $gap={gap}
    >
      {children}
    </GridAreaEl>
  );
};

export default GridArea;
