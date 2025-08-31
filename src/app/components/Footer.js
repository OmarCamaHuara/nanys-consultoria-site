'use client'

import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.white};
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Nany's Consultoria. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
