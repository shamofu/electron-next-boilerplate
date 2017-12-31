import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: xx-large;
  color: skyblue;
`

export default () =>
  <React.Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <Paragraph>Electron + Next</Paragraph>
    <Link href='/caution'><a>Caution</a></Link>
  </React.Fragment>;