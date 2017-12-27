import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import stylesheet from '../styles/start.css';

export default () =>
  <React.Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p>Electron + Next</p>
    <Link href='/caution'><a>Caution</a></Link>
  </React.Fragment>;