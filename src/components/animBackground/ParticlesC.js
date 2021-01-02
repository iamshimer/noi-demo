import React from 'react'
import Particles from "react-particles-js";

function ParticlesC() {
    return (
        <Particles
        style={{ position: "absolute" }}
        height="100vh"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#ffffff"
            },
            line_linked: {
              color: {
                value: "#ffffff"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
      />
    )
}

export default ParticlesC
