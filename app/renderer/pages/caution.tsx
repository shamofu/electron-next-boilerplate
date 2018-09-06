import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default () => (
  <React.Fragment>
    <Head>
      <title>Caution</title>
    </Head>
    <h1>Caution</h1>
    <p>If you add or remove some pages, <br />you need to edit exportPathMap() in next.config.js
    before exporting.</p>
    <Link href='/start'><a>Back</a></Link>
  </React.Fragment>
);
