import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "./misc/Headings.js";
import { ReactComponent as ArrowLeftIcon } from "../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../images/arrow-right-2-icon.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const ImageContainer = tw.div`m-auto`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = tw.div`mt-4 md:mt-16`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;

const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const TwoColumnWithImage = () => {
  const testimonials = [
    {
      quote:
        "Responsable de la gestión y administración de la empresa, así como la mejora en los procesos y en la calidad de los servicios del Operadora Turistica Bluo.",
      customerName: "CEO",
    },
    {
      quote:
        "Responsable de validarla calidad en el servicio, ampliar la base de promoción, coordinar las diferentes áreas de producto y comercialización por los diferentes canales que actualmente opera Turismo Travel.",
      customerName: "Dirección Ventas",
    },
    {
      quote:
        "Encargada por región de la administración, calidad, servicio y procesos que junto a los acuerdos comerciales beneficien la marca.",
      customerName: "Direcciones Regionales.",
    },
    {
      quote:
        "Se encarga de llevar la administración de Operadora Turistica Bluo así como la capacitación administrativa, teniendo a su cargo los departamentos de caja, Facturación y Recursos Humanos.",
      customerName: "Gerencia Administración.",
    },
    {
      quote:
        "Es quien se encarga de organizar y crear los diferentes paquetes que se ofrecen y promocionan a través de nuestras sucursales, franquicias, agencias de viajes, publicaciones en medios impresos, electrónicos y clientes. Tiene a su cargo los departamentos de página web.",
      customerName: "Gerencia Producto",
    },
    {
      quote:
        "Se encarga de mantener la p lata forma tecnológica disponible así como la red general de Operadora Turistica Bluo, mantenimiento a la oficina matriz, sucursales y franquicias.",
      customerName: "Gerencia Sistemas/Comunicación.",
    },
    {
      quote:
        "Es quien tiene la labor de realizar las gestiones comerciales de producto nacional y acuerdos ante los operadores, agencias de viajes, proveedores de servicio (hoteles, trasladistas, transportes).",
      customerName: "Jefatura Nacional y Cuentas Especiales",
    },
    {
      quote:
        "Desarrollo de programas publicitarios dirigidos a nuestros principales Grupos de clientes, y actualmente redirigido al mercado virtual participando en redes sociales e integración XML.",
      customerName: "Jefatura Publicidad e E-bussines.",
    },
    {
      quote:
        "Se encarga de la emisión, revisa dos y rembolsos de boletos de todo el grupo.",
      customerName: "Jefatura Boletaje.",
    },
  ];
  return (
    <div id="organizacion">
      <Container>
        <Content>
          <HeadingInfoContainer>
            <HeadingTitle>Nuestra Organización</HeadingTitle>
            <HeadingDescription></HeadingDescription>
          </HeadingInfoContainer>
          <ImageContainer>
            <img
              className="img-orga"
              src="https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="equipo"
            />
          </ImageContainer>
          <TestimonialSliderContainer>
            <TestimonialSlider
              nextArrow={<NextArrow />}
              prevArrow={<PreviousArrow />}
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <TextContainer>
                    <CustomerInfo>
                      <CustomerName>{testimonial.customerName}</CustomerName>
                    </CustomerInfo>
                    <QuoteContainer>
                      <Quote>{testimonial.quote}</Quote>
                    </QuoteContainer>
                  </TextContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TestimonialSliderContainer>
        </Content>
      </Container>
    </div>
  );
};

export default TwoColumnWithImage;
