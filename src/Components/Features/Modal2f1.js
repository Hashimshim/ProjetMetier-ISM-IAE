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
            <ModalHeader>Les savoirs ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Ce métier exige une multitude de savoir voici une liste non exhaustive :
            <br/><br/>
            <ul style={{paddingLeft:"20px"}}>
              <li>Fiscalité</li>
              <li>Droit des sociétés </li>
              <li>Comptabilité générale </li>
              <li>Comptabilité analytique </li>
              <li>Audit financier </li>
              <li>Gestion financière </li>
              <li>Gestion comptable</li>
              <li>Gestion administrative</li>
              <li>Réaliser un reporting</li>
            </ul>
            
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