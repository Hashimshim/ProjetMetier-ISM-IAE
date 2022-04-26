import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Textarea,Radio,RadioGroup,Stack,useColorModeValue,Popover,PopoverTrigger,PopoverArrow,PopoverBody,PopoverContent,PopoverCloseButton,PopoverHeader
  } from '@chakra-ui/react';
  import React from 'react';
  
  export default function Contact() {
    const [value1, setValue1] = React.useState('1')
    const [value2, setValue2] = React.useState('1')
    const [value3, setValue3] = React.useState('1')
    const [value4, setValue4] = React.useState('1')
    const [value5, setValue5] = React.useState('1')
    const [text,setText] = React.useState("")
    const reset = () => {
      setValue1('1')
      setValue2('1')
      setValue3('1')
      setValue4('1')
      setValue5('1')
      setText("")
    }
    return (
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
          bg={useColorModeValue('white', 'gray.1200')}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Formulaire</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    Remplissez le formulaire ci-dessous pour nous donner votre avis.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                          <FormControl>
                              <FormLabel>Quel est votre avis par rapport à ce métier ?</FormLabel>
                        <RadioGroup colorScheme="purple" onChange={setValue1} value={value1}>
                            <Stack direction='row'>
                                <Radio value='1'>Intéressant</Radio>
                                <Radio value='2'>Pénible</Radio>
                                <Radio value='3'>Ennuyeux</Radio>
                            </Stack>
                        </RadioGroup>
                        <br/>
                        <FormLabel>Envisagez vous de devenir contrôleur de gestion sociale ? </FormLabel>
                        <RadioGroup colorScheme="purple" onChange={setValue2} value={value2}>
                            <Stack direction='row'>
                                <Radio value='1'>Oui</Radio>
                                <Radio value='2'>Non</Radio>
                            </Stack>
                        </RadioGroup>
                        <br/>
                        <FormLabel>Comment évaluez vous le contenu de notre site ?</FormLabel>
                        <RadioGroup colorScheme="purple" onChange={setValue3} value={value3}>
                            <Stack direction='row'>
                                <Radio value='1'>Très bien</Radio>
                                <Radio value='2'>Bien</Radio>
                                <Radio value='3'>Acceptable</Radio>
                                <Radio value='4'>Mauvais</Radio>
                            </Stack>
                        </RadioGroup>
                        <br/>
                        <FormLabel>Comment évaluez vous le design et format de notre site ?</FormLabel>
                        <RadioGroup colorScheme="purple" onChange={setValue4} value={value4}>
                            <Stack direction='row'>
                                <Radio value='1'>Très bien</Radio>
                                <Radio value='2'>Bien</Radio>
                                <Radio value='3'>Acceptable</Radio>
                                <Radio value='4'>Mauvais</Radio>
                            </Stack>
                        </RadioGroup>
                        <br/>
                        <FormLabel>Que pensez-vous de la pertinence de nos informations ?</FormLabel>
                        <RadioGroup colorScheme="purple" onChange={setValue5} value={value5}>
                            <Stack direction='row'>
                                <Radio value='1'>Pertinentes</Radio>
                                <Radio value='2'>Impertinentes</Radio>
                            </Stack>
                        </RadioGroup>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box borderRadius="lg">
                    <Box m={8} >
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Avez-vous des préconisations à nous faire parvenir ?</FormLabel>
                          <Textarea
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          size="lg"
                          resize="vertical"
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Popover>
                          <PopoverTrigger>
                          <Button 
                          onClick={reset}
                            variant="solid"
                            colorScheme='purple'
                            _hover={{}}>
                            Envoyer
                          </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Confirmation!</PopoverHeader>
                            <PopoverBody>Le formulaire a été envoyé</PopoverBody>
                          </PopoverContent>
                          </Popover>
                        </FormControl>
                        <Text mt={{ sm: 6, md: 6, lg: 7 }}>
                        Merci pour votre intérêt porté à notre site et pour vos réponses.
                    </Text>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }