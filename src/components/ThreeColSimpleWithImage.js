import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "./misc/Headings.js";

const Container = tw.div`relative bg-primary-500`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-white text-center max-w-sm `;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose text-white`;
const List = tw.ul`my-4 text-white`;

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

const ThreeColSimpleWithImage = () => {
  const cards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/2058140/pexels-photo-2058140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Cuentas",
      description:
        "Contamos con cuentas especiales a las cuales les brindamos el servicio de asesoría, venta de boletos, circuitos nacionales e internacionales, organización de Operadora Turistica Bluos, incentivos y convenciones.",
      description1:
        "Ellas han depositado su confianza en nosotros por la capacidad de respuesta y atención a nivel nacional. Entre ellas y muchas más contamos con:",
      l1: "AAPA UNAM",
      l2: "TURISSSTE",
      l3: "CHRYSLER",
      l4: "UNAM",
      l5: "CNBV",
      l6: "Instituto Nacional de Camcerologia",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3746932/pexels-photo-3746932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Sucursales",
      description:
        "Ahora, para estar más cerca de nuestros aliados comerciales y amigos agentes de viajes, nos hemos estructurado en 5 sucursales:",
      l1: "NOROESTE – Culiacán ",
      l2: "NORESTE – Monterrey",
      l3: "OCCIDENTE / PACIFICO – Guadalajara",
      l4: "CENTRO – Distrito Federal",
      l5: "SURESTE – Cancún",
      l6: "SUROESTE – Chiapas",
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/1963557/pexels-photo-1963557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Franquicias",
      description:
        "Para ofrecer respuesta inmediata a las solicitudes de las agencias que confían en nosotros además de presencia en Bogotá, Colombia y Madrid, España.",
      description1:
        "También contamos con una amplia red de Franquicias que ofrecen la calidad de Turismo Travel, ubicadas en:",
      l1: "Aragón-Chihuahua",
      l2: "Coapa-Cuauhtémoc",
      l3: "Cuautitlán-Cuernavaca",
      l4: "Nativitas-Roma Norte",
      l5: "San Ángel-Satélite",
      l6: "PLAN DE AYALA SUR",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/5137963/pexels-photo-5137963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Otros",
      description:
        "En TURISMO TRAVEL nuestros objetivos para el crecimiento se basan en “INNOVAR, RENOVAR Y BUSCAR LA MEJORA CONTINUA” por tal motivo ofrecemos valores agregados para todos nuestros clientes como:",
      l1: "Integración en Línea “XML”",
      l2: "Apoyo vía Chat en línea en dispositivos móviles para facilitar los viajes.",
      l3: "El programa ATREVE-T CO N TURISMO TRAVEL diseñado con paquetes de playa.",
      l4: "Ofrecemos el SEGURO INTERMUNDIAL para los pasajeros a Europa.",
      l5: "TURISMO TRAVEL-HELP (ASISTENCIA LAS 24 HORAS)",
      l6: "Servicios adicionales...",
    },
  ];

  return (
    <div id="servicios">
      <Container>
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>Servicios</HeadingTitle>
            <HeadingDescription>
              Nos anticipamos y nos adaptamos a los cambios, estimulamos y
              apoyamos el trabajo en equipo, abordamos los trabajos y retos como
              unidades sinérgicas basándonos en una visión compartida.
            </HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            {cards.map((card, i) => (
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Title>{card.title}</Title>
                  {card.description && (
                    <Description>{card.description}</Description>
                  )}
                  {card.description1 && (
                    <Description>{card.description1}</Description>
                  )}
                  <List>
                    <li>{card.l1}</li>
                    <li>{card.l2}</li>
                    <li>{card.l3}</li>
                    <li>{card.l4}</li>
                    <li>{card.l5}</li>
                    <li>{card.l6}</li>
                  </List>
                </Details>
              </Card>
            ))}
          </Content>
        </SingleColumn>
        <SvgDotPattern1 />
        <SvgDotPattern2 />
        <SvgDotPattern3 />
        <SvgDotPattern4 />
      </Container>
    </div>
  );
};

export default ThreeColSimpleWithImage;
