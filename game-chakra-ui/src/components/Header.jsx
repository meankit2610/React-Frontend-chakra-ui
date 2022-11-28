import React from 'react'
import {Drawer,DrawerBody,DrawerCloseButton,DrawerContent,DrawerHeader,DrawerOverlay,Button,VStack,HStack,useDisclosure} from '@chakra-ui/react'
import {BiMenuAltLeft} from  'react-icons/bi'
function Header() {
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
          > 
              <BiMenuAltLeft size={'20'} />
          </Button>
          <Drawer>
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerHeader>
                      VIDEO HUB
                  </DrawerHeader>
              </DrawerContent>
          </Drawer>
      </>
  )
}

export default Header
