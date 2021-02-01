import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Navbar,Form,Button,FormControl} from "react-bootstrap"
import {fetchMeteodata} from '../../features/meteoDataSlice'
import {useDispatch} from "react-redux"

const MnavBar = props => {
  const [queryString , setQueryString] = useState("")
  const dispatch = useDispatch()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Meteo app</Navbar.Brand>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={queryString} onChange={(e) => setQueryString(e.target.value)}/>
                    <Button variant="outline-success" onClick={() => dispatch(fetchMeteodata(queryString))}>Search</Button>
                    </Form>
            </Navbar>
        </div>
    )
}

MnavBar.propTypes = {

}

export default MnavBar
