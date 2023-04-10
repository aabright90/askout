import { Container, Typography, Button } from "@mui/material";
import { ReactFloatingBalloons } from "react-floating-balloons";
import { useState } from "react";

import gif from "../assets/kittenGif.gif";

const name = window.location.pathname.split("/")[1];

const Home = () => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [bottom, setBottom] = useState(true);
  const [caution, setCaution] = useState(false)

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#57cbcb",
      }}
    >
      {!yes && (
        <h4 className="heading">
          {name !== "" ? `${name}...` : ""}Would you like to do something
          together?
        </h4>
      )}
      {yes && <h3 className="heading">YAAAYYYY!!!! Congratulations!</h3>}
      <div
        style={{
          height: "50px",
        }}
      >
        {!bottom && caution && (
          <Button
            onClick={() => {
              setBottom(!bottom);
            }}
            variant="contained"
            color="error"
          >
            😦 Are you sure ?
          </Button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img src={gif} width="40%" />
        <p
          style={{
            position: "absolute",
            bottom: "0",
            color: "white",
          }}
        >
          🥺 Please
        </p>
      </div>
      <br />
      <Button onClick={() => {
        setYes(true);
        setNo(true);
        setCaution(false)
      }} variant="contained" color="success">
        🙂 Yes!
      </Button>
      <br />
      {bottom && !no && !caution && (
        <Button onClick={() => setCaution(true)} variant="contained" color="error">
          😦 No
        </Button>
      )}
      {bottom && caution && (
        <Button
          onClick={() => {
            setBottom(!bottom);
          }}
          variant="contained"
          color="error"
        >
          😦 Are you sure ?
        </Button>
      )}
      {yes && (
        <ReactFloatingBalloons
          count={24}
          msgText={`You made the right choice ${name}!`}
          colors={["yellow", "green", "blue", "red", "orange", "purple"]}
          loop={true}
          popVolumeLevel={1}
        />
      )}
    </Container>
  );
};

export default Home;
