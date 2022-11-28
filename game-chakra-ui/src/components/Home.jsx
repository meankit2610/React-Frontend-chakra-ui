import React from 'react'
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";

const headingOptions = {
  pos: 'relative',
  left: '50%',
  right: '50%',
  bottom:'10%',
  transform: 'translate(-50%,-50%)',
  size: '2xl',
  textTransform: 'uppercase',
  p: '4',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} maxH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Modi eveniet commodi quia inventore enim sapiente fugit
            consectetur odit soluta eaque hic quibusdam officia sequi, delectus, corrupti magni? Sint amet
            dignissimos eligendi commodi quibusdam quidem est, alias dolor nobis dicta laborum
            consectetur odit soluta eaque hic quibusdam officia sequi, delectus, corrupti magni? Sint amet
            dignissimos eligendi commodi quibusdam quidem est, alias dolor nobis dicta laborum
            accusantium possimus veniam placeat, aliquam consectetur illum earum quis nesciunt.

          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'}></Image>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
       Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home
