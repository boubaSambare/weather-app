import React from "react";
import styled from "@emotion/styled";
import defautImage from "../image/meteo.jpg";
import MnavBar from "./navbar/MnavBar";
import MeteoCard from "./meteo/MeteoCard";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
const Background = styled.div(({ photo }) => ({
  backgroundImage: `url(${photo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const App = (props) => {
  const photos = useSelector((state) => state.meteoData.cityPhotos);
  console.log(photos);
  return (
    <Background
      photo={(photos && photos?.results[0]?.urls?.regular) || defautImage}
    >
      <MnavBar />
      <Wrapper>
        <MeteoCard />
      </Wrapper>
    </Background>
  );
};

export default App;
