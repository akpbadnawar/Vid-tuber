import React from 'react'
import {   Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p="16">
          <form>
            <VStack
              alignItems={'stretch'}
              spacing={'8'}
              w={['full','96']}
              m={'auto'}
              my={'16'}
            >
              <Heading textAlign={"center"}> Vid-Tuber</Heading>
              <Avatar alignSelf={'center'} boxSize={'32'}/>
    
              <Input
                placeholder={'Name'}
                type={'Text'}
                required
                focusBorderColor={'purple.500'}
              />
              <Input
                placeholder={'Email'}
                type={'email'}
                required
                focusBorderColor={'purple.500'}
              />
              <Input
                placeholder={'Password'}
                type={'password'}
                required
                focusBorderColor={'purple.500'}
              />
    
              <Button colorScheme='purple' type='submit'>
                Sing Up
              </Button>
    
            
    
              <Text textAlign={'right'}>
                Have an Account? {" "}
                <Button textAlign= 'center' variant={'link'} colorScheme={'purple'}> <Link to={'/login'}>Login</Link>  
                </Button>
    
                
    
              </Text>
    
            </VStack>
          </form>
        </Container>
      );
    };

export default Signup