'use client'

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ShareButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const FloatingShareButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setShowButton(true);
    }
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        text: 'Hola, te comparto esta página que ayuda con los trámites de documentos en Brasil. ¡Puede ser muy útil!',
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!showButton) {
    return null;
  }

  return (
    <ShareButton onClick={handleShare}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    </ShareButton>
  );
};

export default FloatingShareButton;
