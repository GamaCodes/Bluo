import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold mb-4`}
  }
`;

const SubmitButton = tw.a`w-full sm:w-32 mt-6 p-4 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const SimpleContactUs = () => {
  return (
    <div id="contacto">
      <Container>
        <Content>
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <h2>Contáctanos</h2>

              <SubmitButton>turismo@operadorabluo.com</SubmitButton>
            </div>
            <SvgDotPattern1 />
          </FormContainer>
        </Content>
      </Container>
    </div>
  );
};

export default SimpleContactUs;
