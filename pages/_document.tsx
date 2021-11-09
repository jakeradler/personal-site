import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/karla.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" as="image" href="/img/Jake.png" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Jake Adler | Developer and Inventor"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
