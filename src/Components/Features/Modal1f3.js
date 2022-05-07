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
            <ModalHeader>Les savoir-faire ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            Ce métier exige une multitude de savoir-faire voici une liste non exhaustive :<br/><br/>
            <ul style={{paddingLeft:"20px"}}>
              <li>Concevoir des indicateurs</li>
              <li>Piloter les indicateurs de gestion </li>
              <li>Identifier les risques liés à une gestion d'entreprise </li>
              <li>Déterminer des mesures correctives </li>
              <li>Mettre en place le contrôle interne d'une structure </li>
              <li>Proposer des solutions d'optimisation de rentabilité de la structure </li>
              <li>Conseiller une entreprise en matière de gestion comptable</li>
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