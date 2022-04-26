import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// const NavLink = ({ children }= { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} style={{ overflow: 'hidden',position:'fixed',top:'0',width:'100%' }} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Projet métier contrôleur de gestion sociale ISM-IAE</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} >
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}