import React from 'react'
import {AiFillVideoCamera, AiFillHome, AiOutlineVideoCamera,AiOutlineVideoCameraAdd,AiFillInfoCircle} from 'react-icons/ai'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {
const {isOpen,onOpen,onClose} = useDisclosure()
  return ( <>
    <Button
    zIndex={'overlay'}
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme='purple'
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    >
        <BiMenuAltLeft size={'20'}/>
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>

        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Vid-tuber</DrawerHeader>
            <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <AiFillHome size={20}/>
                    <Link to={'/'}>&nbsp; Home</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <AiFillVideoCamera size={20}/>
                    <Link to={'/videos'}>&nbsp; Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <AiOutlineVideoCamera size={20}/>
                    <Link to={'/videos?category=free'}>&nbsp; Free Videos</Link>                   
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <AiOutlineVideoCameraAdd size={20}/>
                    <Link to={'/upload'}>&nbsp; Upload Video</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <AiFillInfoCircle size={20}/>
                    <Link to={'/about'}>&nbsp; About</Link>
                </Button>

            </VStack>

            <HStack 
            pos={'absolute'} 
            bottom={'10'} 
            left={'1'}
            w={'full'}
            justifyContent={'space-evenly'}
            >

                <Button onClick={onClose} colorScheme='purple'>
                    <Link to={'/login'}> Log In</Link>
                </Button>

                <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                    <Link to={'/signup'}> Sign Up</Link>
                </Button>

            </HStack>

            </DrawerBody>

        </DrawerContent>
    </Drawer>

  </>
  )
}

export default Header