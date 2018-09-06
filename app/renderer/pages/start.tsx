import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <React.Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <React.Fragment>
      <p>Electron + Next</p>
      <style jsx>{`
        p {
          font-size: xx-large;
          color: skyblue;
        }
      `}</style>
    </React.Fragment>
    <Link href='/caution'><a>Caution</a></Link>
  </React.Fragment>
)
