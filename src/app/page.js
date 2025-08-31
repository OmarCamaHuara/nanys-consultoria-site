'use client'

import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import FloatingShareButton from './components/FloatingShareButton'

const Main = styled.main`
  font-family: 'Inter', sans-serif;
  background-color: #FFFFFF;
  color: #333333;
`;

export default function Home() {
  return (
    <Main>
      <Header />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <CallToAction />
      <Footer />
      <FloatingShareButton />
    </Main>
  )
}
