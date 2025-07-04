import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Loading = () => {
  return (
    <>
    <div className="type">
      <TypeAnimation
        sequence={[
        "WELCOME TO SAI's PORTFOLIO",
          5000
        ]}
        speed={10}
        wrapper="span"
        repeat={0}
      />
    </div>
    <center style={{marginTop:"50px", fontSize:"20px"}} >
      <p>Made with Passion</p>
    </center>
    </>
  );
};

export default Loading;
