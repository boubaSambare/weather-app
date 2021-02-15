import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { fechtDaylyWeather } from "../../api/weather";
import VerticalAlign from "../../styles/components/VerticalAlign";

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
      {!!meteoData && (
        <Card style={{ width: "60%", height: "auto" }}>
          <Card.Header className="text-center">
            <Card.Title>{meteoData?.name}</Card.Title>
            <Card.Text>{meteoData?.weather[0]?.main}</Card.Text>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <img
                      width={100}
                      height={100}
                      className="mr-3"
                      src={`../../icons/${meteoData?.weather[0].icon}.svg`}
                      alt="Generic placeholder"
                      loading="lazy"
                    />
                  </Col>
                  <Col>
                    <p>
                      <MfontSize size={40}>
                        {Math.floor(meteoData.main.temp - 273)}
                      </MfontSize>
                      <MfontSize>&#8451;</MfontSize>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ display: "flex", flexWrap: "nowrap" }}>
              {meteoDailyData &&
                meteoDailyData?.daily.map((data, k) => (
                  <Col key={k}>
                    <VerticalAlign>
                      <span>
                        {" "}
                        {
                          new Date(data.dt * 1000).toDateString().split(" ")[0]
                        }{" "}
                      </span>
                      <span>
                        <img
                          width={30}
                          height={30}
                          className="mr-3"
                          src={`../../icons/${data.weather[0].icon}.svg`}
                          alt="Generic placeholder"
                          loading="lazy"
                        />
                      </span>
                      <span>{data.weather[0].description}</span>
                      <span>
                        Temp: {Math.floor(data.temp.day - 273)}{" "}
                        <MfontSize>&#8451;</MfontSize>
                      </span>
                    </VerticalAlign>
                  </Col>
                ))}
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MeteoCard;
