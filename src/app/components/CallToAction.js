'use client'

import styled from 'styled-components';
import WhatsAppButton from './WhatsAppButton';

const CallToActionContainer = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
`;

const CallToAction = () => {
  const message = "Hola Nany's Consultoria, me gustaría recibir más información sobre los trámites de documentos.";

  return (
    <CallToActionContainer>
      <WhatsAppButton message={message} size="medium">¡Contáctanos Ahora!</WhatsAppButton>
    </CallToActionContainer>
  );
};

export default CallToAction;