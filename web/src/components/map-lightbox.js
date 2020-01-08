/** @jsx jsx */
import React, { useState } from 'react' // eslint-disable-line

import {jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import Img from 'gatsby-image'
import {FaTimesCircle} from 'react-icons/fa'

import LoaderImage from '../images/loader.gif'

const LightBox = ({content: {title, description, images}, closeLightBox}) => {
  const [activeImage, setActiveImage] = useState(0)

  const getCurrImage = (e, index) => {
    e.preventDefault()
    setActiveImage(index)
  }

  return (
    <div sx={{
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 11,
      pt: '127px'
    }}>
      <div onClick={closeLightBox} sx={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'rgba(15, 31, 5, 0.62)',
        zIndex: '11'
      }} />
      <div sx={{
        bg: 'white',
        borderRadius: 'default',
        display: 'flex',
        position: 'relative',
        p: 4,
        flexDirection: ['column', 'column', 'row'],
        maxHeight: '90%',
        width: ['95%', '95%', '700px', '800px', '1000px'],
        zIndex: '12'
      }}>
        <div onClick={closeLightBox} sx={{
          position: 'absolute',
          cursor: 'pointer',
          color: 'primary',
          bottom: '1rem',
          right: '0.75rem',
          top: '1rem'
        }}>
          <FaTimesCircle />
        </div>
        <Img fluid={images[activeImage].asset.large} sx={{
          width: ['100%', '100%', '1/2'],
          backgroundImage: `url('${LoaderImage}')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          border: '1px solid #006600'
        }} />
        <div sx={{width: ['auto', 'auto', '1/2'], p: 4, fontSize: 'small'}}>
          <h2>{title}</h2>
          <p sx={{display: ['none', 'none', 'block']}}
          // dangerouslySetInnerHTML={{
          //   __html: description
          // }}
          >{description}</p>
          <div sx={{display: 'flex', flexWrap: 'wrap'}}>
            {images.map((image, index) => (
              <a
                url={image.url}
                key={image.url}
                role='button'
                tabIndex={0}
                onClick={e => getCurrImage(e, index)}
                onKeyUp={e => getCurrImage(e, index)}
              >
                <Img fluid={image.asset.thumb} sx={{
                  width: ['3rem', '3rem', '3rem', '3rem', '4rem'],
                  m: '1px',
                  cursor: 'pointer'
                }} />
              </a>
            ))}
          </div>
        </div>
        {/* <button type="button" onClick={closeLightBox}>
      Close
    </button> */}
      </div>
    </div>
  )
}

export default LightBox
