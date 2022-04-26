import { Avatar, Box, Stack, Text, useColorModeValue,SimpleGrid } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Si vous avez envie de mêler finance et ressources humaines 
        et vous avez un certain goût pour les chiffres 
        ce métier est fait pour vous !
      </Text>
      <Box textAlign={'center'}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Box>
        <Avatar
          src={'logo'}
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>EL BAHI Mohamed</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Dev Team
        </Text>
        </Box>
        <Box>
        <Avatar
          src={'logo'}
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>FAVEREAU Emma </Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Dev Team
        </Text>
        </Box>
        <Box>
        <Avatar
          src={'logo'}
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>EL HIRECH Saad </Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Dev Team
        </Text>
        </Box>
        <Box>
        <Avatar
          src={'logo'}
          alt={'Jenny Wilson'}
          mb={2}
        />
        <Text fontWeight={600}>MARTINET Flavie </Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Dev Team
        </Text>
        </Box>
      </SimpleGrid>
      </Box>
    </Stack>
  );
}