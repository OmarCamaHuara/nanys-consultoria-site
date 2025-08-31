'use client';

import styled from "styled-components";
import WhatsAppButton from "./WhatsAppButton";
import HeroImage from "./HeroImage";

const HeroContainer = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 1.4;
`;

const Highlight = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 40px;
`;

const Hero = () => {
  const message =
    "Hola Nany's Consultoria, me gustaría recibir más información sobre los trámites de documentos.";

  return (
    <HeroContainer>
      <Title>
        Agiliza tu
        <Highlight>Trámite RNM</Highlight>
        Consigue tu
        <Highlight>Documento</Highlight>
        Sin estrés y sin filas.
      </Title>
      <Subtitle>
        Te ayudamos a realizar todos tus trámites en la Policía Federal de forma
        rápida y segura. ¡Habla con nosotros por WhatsApp!
      </Subtitle>
      <ImageWrapper>
        <HeroImage />
      </ImageWrapper>
      <WhatsAppButton message={message}>
        ¡Habla con nosotros por WhatsApp!
      </WhatsAppButton>
    </HeroContainer>
  );
};

export default Hero;