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
            <ModalHeader>C’est quoi le métier ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Le rôle principal du <span style={{ fontWeight: 'bold' }}>contrôleur de gestion sociale (CGS) </span>  – également appelé chargé d’études RH - consiste à replacer l’humain au cœur des statistiques. Il permet aux ressources humaines de proposer des actions concrètes pour améliorer la gestion des RH. Toutefois, il ne faut pas confondre le métier de CGS avec celui de contrôleur de gestion, chargé de la gestion financière de l’entreprise.
            
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