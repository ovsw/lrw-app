/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import {FaChevronRight} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../../containers/section-with-sidebar'
// commponents
import ProgramItem from './program'

// images
import SectionBg from '../../../images/yellow-paper-bg.jpg'
import {relative} from 'path'

const Programs = () => {
  return (
    <section sx={{
      variant: 'sections.hpSection',
      background: `url(${SectionBg}) repeat center center`
    }}>
      <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} />
    </section>
  )
}

const Sidebar = () => {
  return (
    <>
      <Styled.h1 as='h2'>Programs</Styled.h1>
      <p>Camp Laurelwood is proud to offer a variety of session options to meet the needs of each Laurelwood family.</p>
      <p><strong>What makes our Programs so special?</strong></p>
      <p>At Laurelwood we believe that our <strong>program structure</strong> is as important as the relationships the campers make.</p>
      <p>To ensure our campers are receiving high quality programming, we have developed <strong>Camp Activity Plans (CAPs)</strong></p>
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
  {
    name: 'Trial Sessions',
    age: '2nd-9th graders',
    icon: 'sun',
    layout: 'wide',
    description: 'The perfect way for rookies and first time campers to fully immerse themselves in the excitement and wonder of the Laurelwood sleepaway experience.',
    link: '/programs/pine-cone-camp/'
  },
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
    description: 'The 2020 Bonim Teen & Travel Program is a recreational, educational and cultural experience for 10th graders, building character and social skills along with a strong Jewish identity.',
    link: '/programs/teen-camp/'
  },
  {
    name: 'SIT Program',
    age: '11th graders',
    icon: 'leader',
    description: 'Laurelwood\'s SIT program provides rising 11th graders the tools and experience they need to become future leaders, strong role models as well as Camp Laurelwood staff.',
    link: '/programs/leader-in-training/'
  },
  {
    name: 'Specialty Programs',
    age: '11th graders',
    icon: 'leader',
    layout: 'wide',
    description: 'How could we make a Camp Laurelwood summer even better? Check out our week-long intensive specialty camp offerings!',
    link: '/programs/leader-in-training/'
  }
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
