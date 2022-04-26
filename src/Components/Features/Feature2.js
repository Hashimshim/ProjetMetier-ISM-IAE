import { Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcGraduationCap } from 'react-icons/fc';
import Modal1f2 from './Modal1f2'



const Feature2 = ({ title, text, icon }) => {
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
      <Modal1f2/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    
        <Feature2
          icon={<Icon as={FcGraduationCap} w={10} h={10} />}
          title={'Les formations ?'}
          text={
            'Si ce métier vous intéresse il faut savoir que pour y accéder il vous faut au minimum ...'
          }
        />
      
  );
}