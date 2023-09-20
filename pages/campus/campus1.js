import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CampusSelection from 'pages/CampusSelection.js'
import NavigationMenu from 'pages/NavigationMenu';
import InterviewHelp from 'pages/implementation/interviewHelp';

function Campus1() {
  return (
    <div>
      <Head>
        <title>Campus 1</title>
        {/* Add any other head meta tags or links as needed */}
      </Head>

      <main>
        <h1>Welcome to Campus 1</h1>
        {/* Add content specific to Campus 1 */}

      </main>
    <aside>
        <NavigationMenu/>
    </aside>
      <Footer/>
    </div>
  );
}

export default Campus1;
