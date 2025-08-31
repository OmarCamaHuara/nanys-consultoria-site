'use client'

import styled from 'styled-components';

const ProblemContainer = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Problem = () => {
  return (
    <ProblemContainer>
      <Title>¿Un Proceso Lleno de Obstáculos?</Title>
      <Text>
        Sabemos que el proceso para obtener el RNM puede ser confuso y estresante. Un pequeño error en la documentación o en los plazos puede generar grandes demoras y dolores de cabeza. Estamos aquí para que evites todo eso.
      </Text>
    </ProblemContainer>
  );
};

export default Problem;
