import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "./misc/Headings.js";
import styled from "styled-components";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto pt-20 lg:pt-24`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;

const VerticalWithAlternateImageAndText = () => {
  const blogPosts = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      category:
        "Dar una respuesta ágil a toda solicitud de nuestros clientes ofreciéndoles alternativas viables y procurando la superación de sus expectativas. Recibir, asesorar y transmitir confiabilidad a todos los que nos solicitan nuestros servicios con innovaciones constantes que nos permitan mantener un estándar de calidad superior a cualquier empresa de la competencia contando para ello con un equipo altamente motivado.",
      title: "Misión",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      category:
        "Ser una empresa eficientemente organizada, capaz de ofrecer el mejor servicio en la relación, precio-valor, alcanzando el más alto nivel de calidad y liderazgo en el sector. Siendo una empresa sólida e institucional en todos los aspectos, capaz de cubrir satisfactoriamente los requerimientos de nuestros diferentes consumidores: Clientes, Colaboradores, Socios Comerciales, Accionistas.",
      title: "Visión",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      category:
        "En nuestros valores, practicamos el LIDERAZGO basado en la confianza, reconocemos el valor de cada persona y lo que esta puede generar, estimulamos la participación, intercambio de ideas y puntos de vista. Nuestros líderes estimulan un ambiente de trabajo en el cual la dignidad de la gente, la alegría en el trabajo y las emociones sean tomadas en cuenta.",
      title: "Valores",
    },
  ];
  return (
    <div id="acerca">
      <Container>
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>Acerca de</HeadingTitle>
            <HeadingDescription>
              Operadora Turistica Bluo, empresa 100% mexicana fundada en 2016 y
              con nueva administración a partir de 2018 está lista para afrontar
              cualquier reto y prueba del mercado, ofrece los servicios
              turísticos de la más alta calidad, confiando siempre en nuestra
              selecta elección de proveedores.
              <br />
              <br />
              Constantemente innovando en el mercado turístico con g randes
              ideas y desafíos para incorporar va lores agregados sin costo
              adicional a l exigente cliente mexicano.
              <br />
              <br />
              Cumplimos con las necesidades de los viajes de placer y negocios a
              través de las agencias de viajes, somos un Operador MULTIDESTINOS
              en los 3 Continentes con producto Nacional e Internacional
              transmitiendo SEGURIDAD, CONFIANZA Y PROFESIONALISMO, con un
              recurso humano capacitado en todas sus áreas y la más avanzada
              plataforma tecnológica en beneficio de todos nuestros clientes.
            </HeadingDescription>
          </HeadingInfoContainer>
        </SingleColumn>
        <Container>
          <Content>
            <ThreeColumn>
              {blogPosts.map((post, index) => (
                <Column key={index}>
                  <Card>
                    <Image imageSrc={post.imageSrc} />
                    <Title>{post.title}</Title>
                    <Category>{post.category}</Category>
                  </Card>
                </Column>
              ))}
            </ThreeColumn>
          </Content>
        </Container>
        <SvgDotPattern1 />
        <SvgDotPattern2 />
        <SvgDotPattern3 />
        <SvgDotPattern4 />
      </Container>
    </div>
  );
};

export default VerticalWithAlternateImageAndText;
