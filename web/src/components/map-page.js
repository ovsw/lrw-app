/** @jsx jsx */
import React from 'react' // eslint-disable-line
import { jsx, Styled, Container } from 'theme-ui'
import { Box, Flex } from '@theme-ui/components'

import { Map, Marker, ImageOverlay, Tooltip } from 'react-leaflet'
import L from 'leaflet'

import mapimage from '../images/laurelwood-map-design-2.jpg'
import emptyIcon from '../images/px.png'

import 'leaflet/dist/leaflet.css'

import MapLightBox from './map-lightBox'

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: emptyIcon,
    iconUrl: emptyIcon,
    shadowUrl: emptyIcon
  })
}

export default class MapPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
      currLightboxItem: null,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.markerClick = this.markerClick.bind(this)

    this.escFunction = event => {
      if (event.keyCode === 27) {
        // esc key pressed
        this.closeLightBox()
      }
    }
  }

  componentDidMount() {
    this.updateWindowDimensions()
    document.addEventListener('keydown', this.escFunction, false)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  markerClick = index => {
    const {
      locations: { edges },
    } = this.props
    this.setState({ currLightboxItem: edges[index].node })
  }

  calcLabelOffset = labelDir => {
    switch (labelDir) {
      case 'top':
        return [0, 25]
      case 'bottom':
        return [0, -5]
      case 'left':
        return [20, 20]
      case 'right':
        return [-20, 25]
      default:
        return [15, 25]
    }
  }

  closeLightBox = () => {
    this.setState({ currLightboxItem: null })
  }

  updateWindowDimensions() {
    // console.log(window.innerWidth, window.innerHeight)
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { currLightboxItem, height } = this.state
    const { locations } = this.props

    if (typeof window !== 'undefined') {
      return (
        <>
          {currLightboxItem && <MapLightBox content={currLightboxItem} closeLightBox={this.closeLightBox} />}
          <Map
            className='map'
            crs={L.CRS.Simple}
            bounds={[
              [0, 0],
              [1260, 1920],
            ]}
            minZoom={-0.5}
            maxZoom={0.5}
            zoomSnap={0.1}
            // center={[20, 960]}
            style={{ height: `${(height - 116).toString()}px`, marginTop: '116px' }}
          >
            <ImageOverlay
              url={mapimage}
              bounds={[
                [0, 0],
                [1260, 1920],
              ]}
            />
            {/* <Polygon
            positions={[[300, 900], [300, 600], [600, 600], [600, 900]]}
            color="blue"
            onClick={this.MarkerClick}
          /> */}
            {locations.edges.map(({ node }, index) => {
              const latLong = [node.y, node.x]
              const currOffset = this.calcLabelOffset(node.labelDirection)
              // console.log(node.labelDirection)

              return (
                <Marker
                  key={latLong}
                  position={latLong}
                  onClick={() => this.markerClick(index)}
                >
                  <Tooltip permanent interactive direction={node.labelDirection} offset={currOffset}>
                    {node.title}
                  </Tooltip>
                </Marker>
              )
            })}
          </Map>
        </>
      )
    }
    return null
  }
}

