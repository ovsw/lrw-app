/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaSwimmer} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

const FoodSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLightNoBottom'}}>
      <SectionWithSidebar leftSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
    </section>
  )
}

const MainContent = () => {
  // const {foodImage} = useStaticQuery(
  //   graphql`
  //   query {
  //     foodImage: file(relativePath: { eq: "lunch-time-illustration.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 726) {
  //           ...GatsbyImageSharpFluid_tracedSVG
  //         }
  //       }
  //     }
  //   }
  //   `
  // )
  return (
    <div sx={{
      // mx: [0, 5, 4, 5, 6]
    }}>
      {/* <Img fluid={foodImage.childImageSharp.fluid} /> */}
      <img src='https://via.placeholder.com/726x600' sx={{pr: 4}} />
    </div>
  )
}

const Sidebar = () => {
  return (
    <div sx={{p: {lineHeight: 'snug'}}}>
      <Styled.h1 as='h2'>Swim Lessons</Styled.h1>
      <p>Camp Laurelwood is a great place for your child to learn to swim!  We have a beautiful lake, 2 pools, and lots of opportunity for campers to participate in aquatics programming.  </p>
      <p>In addition to recreational swimming, campers in grades K-7 have instructional swim approximately 5 times throughout the week.  Our qualified instructors teach them on their level, and provide safe and fun activities to promote swim development.</p>
      <Link to='/' sx={{variant: 'buttons.3D', display: 'inline-block', my: 3, mr: 3, position: 'relative', pl: '3.5rem'}}>
        <FaSwimmer sx={{position: 'absolute', top: '1rem', left: '1rem', fontSize: 4}} /> Our Swimming Program
      </Link>
      {/* <a href='tel:2034213736' sx={{variant: 'buttons.3DAccent', display: 'inline-block'}}><FaPhone /> Call Us: (203) 421-3736</a> */}
    </div>
  )
}

export default FoodSection
