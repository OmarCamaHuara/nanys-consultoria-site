"use client";

import styled from "styled-components";
import Image from "next/image";
import CitaImage from "../img/ListoParaMiCita.svg";

const HowItWorksContainer = styled.section`
  padding: 80px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Step = styled.div`
  max-width: 300px;
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0057ff;
  margin-bottom: 10px;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StepDescription = styled.p``;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 40px auto 0;
`;

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <Title>¿Cómo Funciona?</Title>
      <StepsContainer>
        <Step>
          <StepNumber>1</StepNumber>
          <StepTitle>Contacto Inicial</StepTitle>
          <StepDescription>
            Nos contactas por WhatsApp y nos cuentas qué trámite necesitas. Te
            enviaremos la lista de documentos y resolveremos tus dudas.
          </StepDescription>
        </Step>
        <Step>
          <StepNumber>2</StepNumber>
          <StepTitle>Envío de Documentos</StepTitle>
          <StepDescription>
            tu nos envías tus documentos de forma digital. Verificamos que todo
            esté correcto para evitar cualquier problema.
          </StepDescription>
        </Step>
        <Step>
          <StepNumber>3</StepNumber>
          <StepTitle>Agendamos en la Policía Federal</StepTitle>
          <StepDescription>
            Nos encargamos de todo el proceso en la Policía Federal. Te
            avisaremos cuando sera tu cita y te explicaremos los plazos.
          </StepDescription>
        </Step>
        <Step>
          <StepNumber>4</StepNumber>
          <StepTitle>Pagamos el resto de la cuota</StepTitle>
          <StepDescription>
            Nos encargamos de pagar los boletos restantes
          </StepDescription>
        </Step>
        <Step>
          <StepNumber>5</StepNumber>
          <StepTitle>Ya esta listo para ir a tu cita agendada</StepTitle>
          <StepDescription>
            Te entregamos todos tus documento en ordem para ir a tu cita
            agendada
          </StepDescription>
        </Step>
      </StepsContainer>
      <ImageWrapper>
        <Image
          src={CitaImage}
          alt="Ilustración de persona con documentos listos para su cita"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ImageWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
