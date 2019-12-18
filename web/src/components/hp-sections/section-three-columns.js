/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import {Box, Flex} from '@theme-ui/components'

import Column from './section-three-columns-column'

const SectionThreeColumns = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <Container sx={{px: 0}}>
        <Styled.h1 as='h2' sx={{textAlign: 'center'}}>Connecticut's Premier Jewish Summer Camp.</Styled.h1>
        <div sx={{variant: 'styles', mt: 5, px: 2, textAlign: 'center', maxWidth: '3xl', mx: 'auto'}}>
          <p>We offer both Overnight and Day Camp <Link to='/programs/'>programs</Link>, lots of fun <Link to='/activities/'>activites</Link> and a warm welcoming community. </p>
        </div>
        <Flex sx={{mt: 5}}>
          {columnsContent.map(column => (
            <Box key={column.title} sx={{width: '1/3', px: 3, display: 'flex'}}><Column {...column} /></Box>
          ))}
        </Flex>
      </Container>
    </section >
  )
}

const columnsContent = [
  {
    title: 'Our Mission',
    icon: 'teenagers',
    text: 'Create a fun, safe and inclusive environment that builds self-esteem and encourages personal growth for children ages 5-15.'
  },
  {
    title: 'Our Vision',
    icon: 'starOfDavid',
    text: 'Promoting, exploring and enhancing the Jewish identity and values in a fun, safe and inclusive enviroment.'
  },
  {
    title: 'Our Approach',
    icon: 'leader',
    text: 'Inspire campers and staff to learn, grow and explore, creating lasting memories that strengthen the community.'
  }
]

export default SectionThreeColumns
