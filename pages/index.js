import Head from 'next/head'
import CampusSelection from './CampusSelection'
import Application from './_app'
import netlifyIdentity from 'netlify-identity-widget'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Home() {
  
  
  return (
    <div className="container">
      <Head>
      
        <title>Uni Universe</title>


      
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            /* Reset some default styles */
            body, h1, p {
              margin: 0;
              padding: 0;
            }
            
            /* Apply a background color to the entire page */
            body {
              background-color: black;
              color: white;
              font-family: Arial, sans-serif;
            }
            
            /* Style the container for the content */
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            
            /* Style the header component */
            .header {
              text-align: center;
              background-color: black;
              color: white;
              padding: 20px;
            }
            
            /* Style the description paragraph (if needed) */
            .description {
              font-size: 1.2rem;
              margin-top: 20px;
            }
            
            /* Style the button (if needed) */
            .netlify-identity-button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff; /* Blue color, change as needed */
              color: white;
              text-decoration: none;
              border: none;
              border-radius: 5px;
              margin-top: 20px;
              transition: background-color 0.3s ease;
            }
            
            /* Change button color on hover */
            .netlify-identity-button:hover {
              background-color: #0056b3; /* Darker blue color on hover */
            }
            
            /* Style the footer component */
            .footer {
              text-align: center;
              background-color: black;
              color: white;
              padding: 10px 0;
            }
            
          `}
        </style>
      </Head>

      <main>
 
        <Zoom>
          <h1>Choose your Campus</h1>
        <CampusSelection/>
        </Zoom>
        
        
        <p className="description">
        
        </p>


      

      <a className="netlify-identity-button" href="loginTest">Log in</a>
    
 
      </main>
    </div>
  )
}
