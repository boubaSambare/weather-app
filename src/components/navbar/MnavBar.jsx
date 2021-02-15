import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Form, Button, FormControl } from "react-bootstrap";
import { fetchMeteodata, fetchCityPhotos } from "../../features/meteoDataSlice";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MnavBar = (props) => {
  const [queryString, setQueryString] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <NavFlex>
          <Navbar.Brand href="#home">Meteo app</Navbar.Brand>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={queryString}
              onChange={(e) => setQueryString(e.target.value)}
            />
            <Button
              variant="outline-success"
              onClick={() => {
                dispatch(fetchMeteodata(queryString));
                dispatch(fetchCityPhotos(queryString));
                setQueryString("");
              }}
            >
              Search
            </Button>
          </Form>
        </NavFlex>
      </Navbar>
    </div>
  );
};

MnavBar.propTypes = {};

export default MnavBar;
