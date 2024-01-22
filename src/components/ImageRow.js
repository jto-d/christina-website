import React from 'react'
import styled from 'styled-components'

const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 40px;
  margin: 40px 0;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

`

export default ImageRow