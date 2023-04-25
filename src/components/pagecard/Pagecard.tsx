import React from "react";
import Card from "./card/Card";
import { PageCardContainer } from "./Pagecard.styles";

interface Props {
  cardCount: number;
  labelList: string[];
  content?: React.ReactNode;
}

const PageCard = ({ cardCount, labelList, content }: Props) => {
  return (
    <PageCardContainer cardCount={cardCount}>
      {Array(cardCount)
        .fill(0)
        .map((_, index) => {
          return <Card label={labelList[index]}>{content}</Card>;
        })}
    </PageCardContainer>
  );
};

export default PageCard;
