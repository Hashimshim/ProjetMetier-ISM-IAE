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
            <ModalHeader>C’est quoi le contrôle gestion ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <span style={{ fontWeight: 'bold' }}>Le contrôle de gestion</span> consiste à organiser et contrôler la gestion économique (définition d'objectifs, indicateurs d'activité, mesure de performance, ...) mais aussi d'une structure (entreprise, filiale, collectivité territoriale, ...) et en optimise la rentabilité financière selon les choix stratégiques décidés par les instances dirigeantes et les règlementations (commerciales, fiscales et financières). 
            <br/><br/><br/>Le contrôleur de gestion peut réaliser des études prospectives de résultats de la structure mais aussi peut jouer un rôle de manager est coordonner une équipe.
            
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