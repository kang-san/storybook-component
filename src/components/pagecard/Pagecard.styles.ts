import styled from "styled-components";

interface PageCardContainerProps {
  cardCount: number;
}

export const PageCardContainer = styled.div<PageCardContainerProps>`
  display: grid;
  grid-template-columns: ${({ cardCount }) => {
    return `repeat(${cardCount}, 1fr)`;
  }};
  grid-gap: 20px;
`;
