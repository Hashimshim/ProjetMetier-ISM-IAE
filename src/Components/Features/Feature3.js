import {  Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcApprove } from 'react-icons/fc';
import Modal1f3 from './Modal1f3'



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
      <Modal1f3/>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    
        <Feature2
          icon={<Icon as={FcApprove} w={10} h={10} />}
          title={'Les savoir-faire ?'}
          text={
            'Ce métier exige une multitude de savoir-faire voici une liste non exhaustive: ...'
          }
        />
  );
}