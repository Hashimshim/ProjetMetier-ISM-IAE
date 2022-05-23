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
              <li>Collecter des informations sur la masse salariale de l’entreprise (gestion du temps, grève, mobilité, turn-over, absentéisme…). </li>
              <li>Effectuer un reporting mensuel des données. </li>
              <li>Réaliser les documents obligatoires : bilan social, déclaration annuelle obligatoire d’emploi des travailleurs handicapés, NAO…</li>
              <li>Proposer des actions aux ressources humaines pour améliorer la gestion de la masse salariale. </li>
              <li>Calculer les coûts de la politique RH.</li>
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