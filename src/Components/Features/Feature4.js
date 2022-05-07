import {  Icon, Text, Stack, Flex} from '@chakra-ui/react';
import {FcKindle } from 'react-icons/fc';
import Modal2f1 from './Modal2f1'



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
      <Modal2f1/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
        <Feature1
          icon={<Icon as={FcKindle} w={10} h={10} />}
          title={'Les savoirs ?'}
          text={
            'Ce métier exige une multitude de savoir ,voici une liste non exhaustive : '
          }
        />       
      
  );
}