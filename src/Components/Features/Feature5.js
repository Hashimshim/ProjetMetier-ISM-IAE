import { Icon, Text, Stack, Flex} from '@chakra-ui/react';
import { FcMoneyTransfer } from 'react-icons/fc';
import Modal2f2 from './Modal2f2'




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
      <Modal2f2/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
  
        <Feature1
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'La rémunération ?'}
          text={
            'En moyenne un contrôleur de gestion social peut gagner un salaire moyen d\'environ 3 000 euros bruts par mois ...'
          }
        />       
      
  );
}