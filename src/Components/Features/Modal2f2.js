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
            <ModalHeader>La rémunération ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Voici quelques chiffres moyens sur la rémunération d’un contrôleur de gestion :<br/>
            <br/>En moyenne un contrôleur de gestion social peut gagner un salaire moyen d'environ 3 000 euros bruts par mois (soit 36 000 par an). 
<br/><br/>En début de carrière, il peut gagner entre 2 500 et 2 900 euros bruts par mois (soit entre 30 000 et 34 800 par an)
<br/><br/>En fin de carrière avec le profil senior il peut gagner jusqu'à 4 200 euros bruts par mois (soit 50 400 par an).

            
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