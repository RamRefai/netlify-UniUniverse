import Head from 'next/head'
import CampusSelection from './CampusSelection'
import Application from './_app'
import netlifyIdentity from 'netlify-identity-widget'
import Zoom from 'react-reveal/Zoom';
import { Bounce } from 'react-reveal';
import Fade from 'react-reveal/Fade';
import TypeIt from 'typeit-react';

export default function Home() {


  return (

    <div className="container">
      <Head>

        <title>uni.pal</title>
        <link rel="icon" href="/unipal-logo.png" />

      </Head>

      <main>

      <TypeIt
        options={{
          strings: ['uni.pal'], // Text to be typed
          speed: 100, // Typing speed (adjust as needed)
          loop: true, // Enable looping
          loopDelay: 2000, // Delay before restarting the loop (in milliseconds)
        }}
        className="unipal"
      />
          <h1>Choose your Campus</h1>
          <CampusSelection />

        
        {/* <a className="netlify-identity-button" href="loginTest">Log in</a> */}


      </main>
    </div>
  )
}
