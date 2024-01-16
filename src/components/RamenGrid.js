import React from 'react'
import styled from 'styled-components'
import { EAK, Ganko, HanaMichi, Ichiran, Ippudo, Koku, Kyuramen, OverTheMoon, Tonchin, Tori, Yamitsuki } from '../assets/about/Ramen Rankings'

const cardInfo = [
    {
        image: Tonchin,
        header: "01 - TONCHIN",
        body: "New York, NY"
    },
    {
        image: Ichiran,
        header: "02 - ICHIRAN Ramen",
        body: "New York, NY"
    },
    {
        image: Ippudo,
        header: "03 - Ippudo 5th Avenue",
        body: "New York, NY"
    },
    {
        image: EAK,
        header: "04 - E.A.K. Ramen",
        body: "New York, NY"
    },
    {
        image: Ganko,
        header: "05 - Ganko Ittetsu Ramen",
        body: "Brookline, MA"
    },
    {
        image: Koku,
        header: "06 - KOKU RAMEN",
        body: "New York, NY"
    },
    {
        image: Kyuramen,
        header: "07 - KYURAMEN",
        body: "New York, NY"
    },
    {
        image: Yamitsuki, 
        header: "08 - Yamitsuki Ramen",
        body: "Philadelphia, PA"
    },
    {
        image: HanaMichi,
        header: "09 - Hana Michi",
        body: "New York, NY"
    },
    {
        image: OverTheMoon,
        header: "10 - Over the Moon Cafe",
        body: "Bali, Indonesia"
    },
    {
        image: Tori,
        header: "11 - Tori Ramen Chicken",
        body: "Ridgewood, NY"
    },
]


const Container = styled.div`
    margin: 50px 13.4% 50px 13.4%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    // add media queries for responsiveness here

`

const Item = styled.div`
    padding-bottom: 30px;

    h1 {
        margin-top: 5px;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 0.8rem;
    }

    p {
        margin-top: 5px;
        font-weight: 400;
        font-size: 0.7rem;
    }

`

const ItemImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;

`

const RamenGrid = () => {
  return (
    <Container>
        {cardInfo.map((info, index) => (
            <Item key={index}>
                <ItemImage src={info.image} />
                <h1>{info.header}</h1>
                <p>{info.body}</p>
            </Item>
        ))}
    </Container>
  )
}

export default RamenGrid