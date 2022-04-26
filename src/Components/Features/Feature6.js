import {Icon, Text, Stack, Flex } from '@chakra-ui/react';
import {FcDepartment } from 'react-icons/fc';
import Modal2f3 from './Modal2f3'




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
      <Modal2f3/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
  
        <Feature1
          icon={<Icon as={FcDepartment} w={10} h={10} />}
          title={'Dans quels types d’établissement je peux travailler ?'}
          text={
            'L\'activité de ce métier s\'exerce au sein de grandes entreprises, de Petites et Moyennes Entreprises de plus de 200 salariés ...'
          }
        />       
      
  );
}