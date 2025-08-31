'use client'

import styled, { keyframes } from 'styled-components';
import WhatsAppIcon from './WhatsAppIcon';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const sizeStyles = {
  small: {
    padding: '8px 16px',
    fontSize: '0.9rem',
    gap: '8px',
  },
  medium: {
    padding: '15px 30px',
    fontSize: '1rem',
    gap: '10px',
  },
};

const Button = styled.a`
  background-color: #25D366;
  color: #fff;
  padding: ${({ size }) => sizeStyles[size]?.padding || sizeStyles.medium.padding};
  font-size: ${({ size }) => sizeStyles[size]?.fontSize || sizeStyles.medium.fontSize};
  gap: ${({ size }) => sizeStyles[size]?.gap || sizeStyles.medium.gap};
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s;
  animation: ${pulse} 2.5s infinite;

  &:hover {
    background-color: #128C7E;
    animation: none;
  }
`;

const WhatsAppButton = ({ message, children, size = 'medium' }) => {
  const whatsappNumber = '+5511980808286';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size={size}>
      <WhatsAppIcon color="#fff" width={size === 'small' ? 16 : 24} height={size === 'small' ? 16 : 24} />
      {children}
    </Button>
  );
};

export default WhatsAppButton;