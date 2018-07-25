import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>For life's ups & downs.</h1>
        <p>A community to support you in your journey of life. Through your struggles and happy moments, we are here for you!</p>
        <Link to="/page-2/">Watch Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
