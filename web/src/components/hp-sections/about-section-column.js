/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Flex} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import Icon from '../icon'

const Column = ({title, text, icon}) => {
  return (
    <Flex sx={{
      flexDirection: 'column',
      textAlign: 'center',
      p: 3,
      border: '1px dashed',
      borderColor: 'primary',
      borderRadius: 'lg'
    }}>
      <div sx={{
        width: '48px',
        height: '48px',
        mx: 'auto',
        mt: 3,
        fontSize: 6,
        color: 'primary'
      }}>
        <Icon symbol={icon} />
      </div>
      <h3 as='h3' sx={{fontWeight: 'bold', mb: 1, mt: 4, color: 'primary'}}>{title}</h3>
      <Styled.p sx={{fontSize: '1.1rem', color: 'textMuted', mb: '0'}}>{text}</Styled.p>
    </Flex >
  )
}

export default Column
