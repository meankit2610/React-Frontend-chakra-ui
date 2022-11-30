import React from 'react'
import {Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerHeader,DrawerOverlay,Button,VStack,HStack,useDisclosure, Link} from '@chakra-ui/react'
import {BiMenuAltLeft} from  'react-icons/bi'
function Header() {
    const {isOpen,onClose,onOpen} = useDisclosure()
  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header
