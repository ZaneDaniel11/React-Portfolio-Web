import React, { useState } from "react";
import Abouts from "./About";
import StockTicker from "./Components/Infinitescroll";
import Portfolio from "./Portfolio";
import Technology from "./Technology";
import LoadingScreen from "./Loading";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Abouts />
          <Technology />
          <StockTicker />
          <Portfolio />
        </>
      )}
    </>
  );
}

export default App;
