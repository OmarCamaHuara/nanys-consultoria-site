"use client";

import styled from "styled-components";
import WhatsAppButton from "./WhatsAppButton";
import { NanysLogo } from "./NanysLogo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoWrapper = styled.div`
  width: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 300px;
  }
`;

const Header = () => {
  const message =
    "Hola Nany's Consultoria, me gustaría recibir más información sobre los trámites de documentos.";

  return (
    <HeaderContainer>
      <LogoWrapper>
        <NanysLogo />
      </LogoWrapper>
      <WhatsAppButton message={message} size="small">Contacto</WhatsAppButton>
    </HeaderContainer>
  );
};

export default Header;