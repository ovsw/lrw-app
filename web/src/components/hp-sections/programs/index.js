/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {jsx, Container, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

// import {FaChevronRight} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../../containers/section-with-sidebar'
// commponents
import ProgramItem from './program'

// images
import SectionBg from '../../../images/yellow-paper-bg.jpg'
// import {relative} from 'path'

const Programs = () => {
  const {trialSessionsImage, specialtyCampImage} = useStaticQuery(
    graphql`
    query {
      trialSessionsImage: file(relativePath: { eq: "ropes-jordan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 780, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 700, height: 600, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      specialtyCampImage: file(relativePath: { eq: "circus-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 780, quality: 100) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 700, height: 550, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
  )
  return (
    <section sx={{
      variant: 'sections.hpSection',
      background: `url(${SectionBg}) repeat center center`
    }}>
      <Container sx={{
        maxWidth: '7xl',
        'h3': {
          fontFamily: 'body', fontWeight: 'normal', letterSpacing: '-0.1rem', fontSize: 4
        }
      }}>

        <Flex>

          <div sx={{width: ['full', 'full', '1/2']}}>
            <Styled.h2 as='h2' sx={{mb: 2, mt: 0}}>Trial Sessions</Styled.h2>

            {/* <Styled.h2 as='h2' sx={{mb: 2, mt: 0}}>Trial Sessions</Styled.h2> */}
            <Flex sx={{
              flexWrap: 'wrap',
              'div': {
                pr: 4,
                // width: ['full', 'full', '1/2', '1/5'],
                'p': {
                  ml: 1,
                  borderLeft: '2px solid',
                  borderColor: 'accent',
                  pl: 3
                }
              }
            }}>

              <Box>
                <Styled.h3>Rookie Camp:</Styled.h3>
                <p> An opportunity for rookie or first time campers to fully immerse themselves in the excitement and wonder of the Laurelwood sleepaway experience.</p>
              </Box>
              <Box>
                <Styled.h3>Taste of Laurelwood:</Styled.h3>
                <p> Three wonderful days to introduce your camper to Laurelwood and the sleepaway camp experience. Drop off is Thursday at 10 am and pick up is Sunday at 1:00 pm.
                </p>

              </Box>
              <Link to='/programs/trial-sessions/' sx={{variant: 'buttons.3DAccent', mt: 4, display: 'inline-block'}}>More about Trial Sessions</Link>

            </Flex>
          </div>
          <div sx={{width: ['full', 'full', '1/2'], pl: 4}}>
            {/* <Styled.h2 as='h2' sx={{mb: 2, mt: 0}}>Specialty Camps</Styled.h2> */}
            <Flex sx={{
              flexWrap: 'wrap',
              'div': {
                // width: ['full', 'full', '1/2', '1/5'],
                'p': {
                  ml: 1,
                  borderLeft: '2px solid',
                  borderColor: 'accent',
                  pl: 3
                }
              }
            }}>

              {/* <Box>
                <Styled.h3>Enhance your summer fun with Laurelwood Specialty Camps! </Styled.h3>
                <p> Each program will combine immersive, professional instruction and skill development with our high-energy summer camp fun for an intense, well-rounded experience.<br /> <br /> Campers will master new skills, make new friends and gain a stronger sense of community with an emphasis on the values of teamwork, cooperation and sportsmanship. <Link to='/programs/specialty-camps/' sx={{variant: 'buttons.3DAccent', mt: 4, display: 'inline-block'}}>More about Specialty Camps</Link></p>

              </Box> */}
              <Box sx={{width: ['full', 'full', '1/2']}}>
                <Img fixed={trialSessionsImage.childImageSharp.fixed} sx={{width: ['100px', '600px']}} />
              </Box>
            </Flex>
          </div>
        </Flex>

      </Container>

      <Container sx={{maxWidth: '7xl'}}><Styled.h2 sx={{mt: '0'}}>Laurelwood Main Programs:</Styled.h2></Container>

      <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} />
      <Container sx={{maxWidth: '7xl'}}>
        <Flex>
          <Box sx={{width: ['full', 'full', '1/2'], position: 'relative'}}>
            <div sx={{position: 'absolute', right: '2rem', top: '0'}}>

              <Img fixed={specialtyCampImage.childImageSharp.fixed} sx={{width: ['100px', '600px']}} />
            </div>
          </Box>
          <Box sx={{width: ['full', 'full', '1/2']}}>
            <Styled.h2>Specialty Camps</Styled.h2>
            <Styled.h3>Enhance your summer fun with Laurelwood Specialty Camps! </Styled.h3>
            <p> Each program will combine immersive, professional instruction and skill development with our high-energy summer camp fun for an intense, well-rounded experience.<br /> <br /> Campers will master new skills, make new friends and gain a stronger sense of community with an emphasis on the values of teamwork, cooperation and sportsmanship. <Link to='/programs/specialty-camps/' sx={{variant: 'buttons.3DAccent', mt: 4, display: 'inline-block'}}>More about Specialty Camps</Link></p>
          </Box>
        </Flex>
      </Container>
    </section >
  )
}

const Sidebar = () => {
  return (
    <>
      <p>Camp Laurelwood is proud to offer a variety of session options to meet the needs of each Laurelwood family.</p>
      <p><strong>What makes our Programs so special?</strong></p>
      <p>At Laurelwood we believe that our <strong>program structure</strong> is as important as the relationships the campers make.</p>
      <p>To ensure our campers are receiving high quality programming, we have developed <strong>Camp Activity Plans (CAPs)</strong>, which:</p>
      <ul>
        <li>Provide Age-appropriate activities</li>
        <li>Provide campers the opportunity to learn or a grow a new skill</li>
        <li>Ensure the activities are Fun</li>
      </ul>
      <div >
        <Link to='/programs/' sx={{variant: 'buttons.3DAccent', display: 'inline-block', mr: 3, mt: 4}}>More on CAPs </Link>
        <Link to='/dates-and-rates/' sx={{variant: 'buttons.3D', display: 'inline-block', mt: 4}}>Dates &amp; Rates </Link>
      </div>

      {/* <FaChevronRight sx={{position: 'relative', top: '3px'}} /> */}
    </>
  )
}

const programs = [
  // {
  //   name: 'Trial Sessions',
  //   age: '2nd-9th graders',
  //   icon: 'sun',
  //   layout: 'wide',
  //   description: 'The perfect way for rookies and first time campers to fully immerse themselves in the excitement and wonder of the Laurelwood sleepaway experience.',
  //   link: '/programs/pine-cone-camp/'
  // },
  {
    name: 'Overnight Camp',
    age: '2nd-9th graders',
    icon: 'moon',
    description: 'We need a description here for the Overnight Camp for 2nd to 9th graders, couldn\'t find anything on the old website',
    link: '/programs/pine-cone-camp/'
  },
  {
    name: 'Day Camp',
    age: 'K-7th graders',
    icon: 'dayCamp',
    description: 'Laurelwood Day Camp is run by Camp Laurelwood and is a great way for campers (K to 7th grade) to start their camping experience.',
    link: '/programs/day-camp/'
  },
  {
    name: 'Bonim Travel',
    age: '10th graders',
    icon: 'teenagers',
    description: 'A recreational, educational and cultural experience for 10th graders, building character and social skills along with a strong Jewish identity.',
    link: '/programs/teen-camp/'
  },
  {
    name: 'SIT Program',
    age: '11th graders',
    icon: 'leader',
    description: 'Provides rising 11th graders the tools and experience they need to become future leaders, strong role models  Camp Laurelwood staff.',
    link: '/programs/leader-in-training/'
  }
  // {
  //   name: 'Specialty Programs',
  //   age: '11th graders',
  //   icon: 'leader',
  //   layout: 'wide',
  //   description: 'How could we make a Camp Laurelwood summer even better? Check out our week-long intensive specialty camp offerings!',
  //   link: '/programs/leader-in-training/'
  // }
]

const MainContent = () => {
  return (
    <Flex sx={{pl: [0, 0, 4], flexWrap: 'wrap'}}>
      {programs.map(program => {
        const width = program.layout ? '100%' : '1/2'
        return (
          <Box key={program.name} sx={{width: ['full', 'full', `${width}`], display: 'flex'}}>
            <ProgramItem {...program} />
          </Box>
        )
      })}
    </Flex>
  )
}

export default Programs
