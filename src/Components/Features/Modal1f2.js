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
            <ModalHeader>Formation et pré-requis ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Si ce métier vous intéresse il faut savoir que pour y accéder il vous faut au minimum un :
              <ul style={{paddingLeft:"20px"}}>
                <li>Master en contrôle de gestion sociale.</li>
                <li>Master en statistiques ou économétrie.</li>
                <li>Master spécialisé en gestion des ressources humaines.</li>
                <li>École d’ingénieurs orientée statistiques.</li>
                <li>École de commerce. </li>
                <li>IEP avec une spécialisation en ressources humaines.</li>
              </ul>
            <br/><br/> Une expérience ou une connaissance du secteur d'activité de l'entreprise peut être demandée. La pratique d'une langue étrangère, en particulier l'anglais, 
             peut être exigée. Ces formations peuvent être accessible en alternance.
            
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