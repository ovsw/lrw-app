/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import {jsx} from 'theme-ui'
import Figure from './Figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Table from './Table'
import Embed from './Embed'

import {GoLinkExternal} from 'react-icons/go'

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const button = props => {
  const url = props.mark.href
  const isExternal = isAbsoluteURL(url)
  if (isExternal) {
    return <a href={url} rel='noopener noreferrer' target='_blank' className='contentButton'>{props.children}  <GoLinkExternal sx={{position: 'relative', top: '3px'}} /></a>
  } else {
    return <Link to={url} activeClassName='active' className='contentButton'>{props.children}</Link>
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    mytable: Table,
    iframeEmbed: Embed
  },
  marks: {
    button
  }
}

export default serializers
