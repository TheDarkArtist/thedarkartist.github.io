import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetWrapper = () => {
  return (
    <Helmet>
      <title>TheDarkArtist</title>
      <meta name="description" content="To Infinity & Beyond" />
      <meta name="keywords" content="TheDarkArtist, Kushagra, tda, coding, mitrc, rajgarh, kushagra sharma, The Dark Artist, thedarkartist, the dark artist" />
      <meta name="author" content="TheDarkArtist" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://www.thedarkartist.github.io/" />
      <meta property="og:title" content="TheDarkArtist - Portfolio" />
      <meta property="og:description" content="To Infinity & Beyond" />
      {/* <meta property="og:image" content="https://www.yourportfolio.com/thumbnail.jpg" /> */}
      <meta property="og:url" content="https://www.thedarkartist.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@TheDarkArtist00" />
      <meta name="twitter:title" content="TheDarkArtist" />
      <meta name="twitter:description" content="To Infinity & Beyond" />
      <meta name="twitter:image" content="https://www.thedarkartist.github.io/thumbnail.jpg" />
    </Helmet>
  )
}

export default HelmetWrapper
