import './App.css';
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import MyCrossword from './Components/MyCrossword'
import Footer from './Components/Footer'
import Feature1 from './Components/Features/Feature1'
import Feature2 from './Components/Features/Feature2'
import Feature3 from './Components/Features/Feature3'
import Feature4 from './Components/Features/Feature4'
import Feature5 from './Components/Features/Feature5'
import Feature6 from './Components/Features/Feature6'
import HookForm from './Components/Questionnaire';
import Testimonial from './Components/Testimonial'
import {Box,Heading,SimpleGrid} from '@chakra-ui/react'
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import { AspectRatio} from '@chakra-ui/react'

import Quiz from './Components/Quiz3/QuizMain';
function App() {
  return (
    <>
    <Particles options={particlesOptions}/>
    <Navbar/>
    <Hero/>
    <Box padding={8}>
    <Heading as='h3' size='xl'>Vous vous posez surement de multiples questions :</Heading>
    <br></br>
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature1/>      
        <Feature2/>
        <Feature3/> 
      </SimpleGrid>
    </Box>
    <br/><br/>
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature4/>      
        <Feature5/>
        <Feature6/> 
      </SimpleGrid>
    </Box>

    </Box>

    <Box padding={10} >  
      <AspectRatio maxH={500} maxW={1800} ratio={2.5}>
      <iframe
        width="1200"
        height="300"
        title='naruto'
        src='https://www.youtube.com/embed/1dVucdKccH8'
        allow="accelerometer;autoplay;clipboard-write;picture-to-picture;"
        allowFullScreen
      />
    </AspectRatio>
    </Box>
    <Box padding={20}>
    <Heading as='h3' size='4xl'>Quiz</Heading><br/><br/>
    <Quiz/>
    </Box>
    <Box padding={20}>
    <Heading as='h3' size='4xl'>Jeu de mots croisés</Heading>
      <MyCrossword/>
    </Box>
    <Box paddingLeft={50} paddingRight={30}>
      <HookForm/>
    </Box>
    
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default App;
