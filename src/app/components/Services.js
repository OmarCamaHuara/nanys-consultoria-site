'use client'

import styled from 'styled-components';
import WhatsAppButton from './WhatsAppButton';
import { FilePlus2, RefreshCw, Home, Fingerprint } from 'lucide-react';

const ServicesContainer = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Intro = styled.p`
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  margin-bottom: 20px;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;

  li {
    margin-bottom: 10px;
    &::before {
      content: '✓';
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
  }
`;

const IconWrapper = styled.div`
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    margin: 0 auto 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const services = [
  {
    title: 'Trámite de Primera Vez',
    description: 'Para quienes solicitan su documento por primera vez en Brasil.',
    requirements: ['Carnet actualizado', 'Certificado de nacimiento', 'Visto de entrada', 'Certificado de antecedentes (consulado)', 'CPF', 'Factura de servicios (luz, agua o internet)'],
    whatsappMessage: 'Hola, quiero ayuda con mi trámite de RNM por primera vez.',
    icon: <FilePlus2 size={30} />,
  },
  {
    title: 'Renovación (Continuación por 10 años)',
    description: 'Para quienes ya tienen el documento y necesitan renovarlo.',
    requirements: ['Carnet actualizado', 'Certificado de nacimiento', 'CPF', 'Factura de servicios (a nombre del solicitante)'],
    whatsappMessage: 'Hola, quiero ayuda con la renovación de mi RNM.',
    icon: <RefreshCw size={30} />,
  },
  {
    title: 'Trámite Permanente',
    description: 'Para quienes buscan la residencia permanente en Brasil.',
    requirements: ['Carnet actualizado', 'Certificado de nacimiento', 'CPF', 'Factura de servicios (a nombre del solicitante)'],
    whatsappMessage: 'Hola, quiero ayuda con mi trámite de residencia permanente.',
    icon: <Home size={30} />,
  },
  {
    title: 'Trámite de CPF',
    description: 'Ayuda para obtener tu CPF, documento esencial en Brasil.',
    requirements: ['Certificado de Nacimiento', 'Carnet', 'Factura de servicios'],
    whatsappMessage: 'Hola, quiero ayuda para obtener mi CPF.',
    icon: <Fingerprint size={30} />,
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Nuestros Servicios</Title>
      <Intro>Ofrecemos una gama de servicios para facilitar tu vida en Brasil. Conoce nuestras soluciones y elige la que mejor se adapte a tus necesidades.</Intro>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <RequirementsList>
              {service.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </RequirementsList>
            <WhatsAppButton message={service.whatsappMessage}>Solicitar Ayuda</WhatsAppButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;