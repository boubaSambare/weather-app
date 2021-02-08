import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { fechtDaylyWeather } from "../../api/weather";

const MfontSize = styled.span(({ size = 15 }) => ({
  fontSize: `${size}px`,
}));

const MeteoCard = (props) => {
  const meteoData = useSelector((state) => state.meteoData.value);
  const isLoading = useSelector((state) => state.meteoData.isLoading);
  const [meteoDailyData, setMeteoDailyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fechtDaylyWeather(
        meteoData.coord.lon,
        meteoData.coord.lat
      );
      setMeteoDailyData(data);
    };
    if (meteoData?.cod === 200) {
      fetchData();
    }
  }, [meteoData]);

  console.log(meteoDailyData);
  return (
    <>
      {isLoading && <h2>loading</h2>}
      {meteoData && (
        <Card style={{ width: 300 }}>
          <Card.Header className="text-center">
            <Card.Title>{meteoData.name}</Card.Title>
            <Card.Text>{meteoData.weather[0].main}</Card.Text>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={`../../icons/${meteoData.weather[0].icon}.svg`}
                  alt="Generic placeholder"
                />
              </Col>
              <Col>
                <p>
                  <MfontSize size={40}>
                    {Math.floor(meteoData.main.temp - 273.15)}
                  </MfontSize>
                  <MfontSize>&#8451;</MfontSize>
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MeteoCard;
