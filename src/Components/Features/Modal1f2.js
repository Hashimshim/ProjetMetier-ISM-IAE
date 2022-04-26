import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
export default function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} colorScheme='purple' size='xs'>Voir plus</Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='scale'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Les formations ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Si ce métier vous intéresse il faut savoir que pour y accéder il vous faut au minimum un master (M1, DSCG, Master professionnel, diplôme de grandes écoles, ...) en comptabilité, contrôle de gestion,
             gestion financière, gestion d'entreprise.<br/><br/> Une expérience ou une connaissance du secteur d'activité de l'entreprise peut être demandée. La pratique d'une langue étrangère, en particulier l'anglais, 
             peut être exigée. C’est formation peuvent être accessible en alternance.
            
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='purple' mr={3} onClick={onClose}>
                Fermer
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }