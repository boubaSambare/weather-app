import React from 'react'
import PropTypes from 'prop-types'
import  styled from "@emotion/styled"
import defautImage from "../image/meteo.jpg"
import MnavBar from './navbar/MnavBar'

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
`
const Background = styled.div`
    background: url(${defautImage})
`

const App = props => {
    return (
        <Background>
            <MnavBar/>
             <Wrapper>
            <h1>meteo</h1>
        </Wrapper>
        </Background>
       
    )
}

App.propTypes = {

}

export default App
