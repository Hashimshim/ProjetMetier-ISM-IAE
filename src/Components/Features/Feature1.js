import { Icon, Text, Stack, Flex} from '@chakra-ui/react';
import { FcManager } from 'react-icons/fc';
import Modal1f1 from './Modal1f1'


const Feature1 = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={800}>{title}</Text>
      <Text color={'black.300'}>{text}</Text>
      <Modal1f1/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
  
        <Feature1
          icon={<Icon as={FcManager} w={10} h={10} />}
          title={'C’est quoi le métier ?'}
          text={
            'Le rôle principal du contrôleur de gestion sociale (CGS) consiste à replacer l’humain au cœur des statistiques ...'
          }
        />       
      
  );
}