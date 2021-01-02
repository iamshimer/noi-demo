import React from 'react'
import {ReactNavbar} from "react-responsive-animate-navbar";
import NOI from '../images/NOIP.png'

function MyNavbar() {
    return (
        <React.Fragment  >
            <ReactNavbar
            
        color="rgb(25, 25, 25)"
        logo={NOI}
        menu={[
          { name: "HOME", to: "/" },
          { name: "Resources", to: "/resources" },
          { name: "Awards", to: "/awards" },
          { name: "Timeline", to: "/timeline" },
          { name: "Sign up", to: "/signup" },
          { name: "Sign in portal", to: "/signin" },
        ]}
        social={[
          {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UC2RgFroDzxQwKLKV5pH1dMQ",
            icon: ["fab", "youtube"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/noisrilanka/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/noi.srilanka/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "https://twitter.com/NOISL4",
            icon: ["fab", "twitter"],
          },
        ]}
      />
        </React.Fragment>
    )
}

export default MyNavbar
