import React from "react";
import tw from "twin.macro";

import LogoImage from "../images/blu_log.svg";

const Container = tw.div`relative bg-variant-600 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-4 lg:py-4 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.a`font-bold text-white`;

const LogoContainer = tw.div`flex items-center justify-center`;
const LogoImg = tw.img`w-16 py-4`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const SimpleFiveColumn = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg src={LogoImage} />
      </LogoContainer>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoText>2021</LogoText>
          </LogoContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Bluo</ColumnHeading>
        </Column>
        <Column>
          <ColumnHeading>Operadora </ColumnHeading>
        </Column>
        <Column>
          <ColumnHeading>Turistica</ColumnHeading>
        </Column>
      </FiveColumns>
    </Container>
  );
};

export default SimpleFiveColumn;
