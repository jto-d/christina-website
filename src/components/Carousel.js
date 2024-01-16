import React, { useRef, useEffect} from 'react'
import styled, { keyframes } from 'styled-components'
import { Photo } from '../assets/about'
import { ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine } from '../assets/about/Photography'

const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 75px;
    width: 100vw;
    height: auto;
    position: relative;
    display: grid;
    place-items: center;

    overflow: hidden;
`

const scroll = keyframes`
    from { 
        transform: translateX(0);
    }

    to {
        transform: translateX(-2700px);
    }

`

const SlideTrack = styled.div`
    display: flex;
    width: calc(300px * 18);
    animation: ${scroll} 75s linear infinite;

`

const Slide = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    padding-right: 20px;
`

const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    height: auto;
`

const images = [
    ImageOne,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageSeven,
    ImageEight,
    ImageNine
]



const Carousel = () => {

  return (
    <Container>
        <SlideTrack>
            {images.map((image, index) => (
                <Slide>
                    <Image key={index} src={image} />
                </Slide>
            ))}

            {images.map((image, index) => (
                <Slide>
                    <Image key={index+9} src={image} />
                </Slide>
            ))}
        </SlideTrack>
    </Container>
  )
}

export default Carousel