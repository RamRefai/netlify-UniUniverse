import '@styles/globals.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}


export default Application
