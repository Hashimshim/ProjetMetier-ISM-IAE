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
            <ModalHeader>Dans quels types d’établissement je peux travailler ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            L'activité de ce métier s'exerce au sein de grandes entreprises, de Petites et Moyennes Entreprises de plus
             de 200 salariés. <br/><br/>Vous l’avez bien compris on peut travailler dans tous les secteurs
             d’activités et au sein de plein de structures différentes comme Association, Cabinet comptable,
              Collectivité territoriale, Entreprise Moyenne ou encore les entreprises publiques/établissements publics. 

            
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