/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import Slider from 'react-slick'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// images
import SectionBg from '../../../images/img-bg-2.png'

function NextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      // style={{...style}}
      onClick={onClick}
      sx={{
        left: '-2rem',
        '&::before': {
          color: 'primary',
          fontSize: '2rem'
        }
      }}
    />
  )
}

function PrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      // style={{...style}}
      className={className}
      sx={{
        right: '-1rem',
        '&::before': {
          fontSize: '2rem',
          color: 'primary'
        }
      }}
      onClick={onClick}
    />
  )
}

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    // fade: true,
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul style={{
          position: 'relative', top: '50px', padding: '0'}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          bg: 'primary',
          color: 'light',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'accent',
            color: 'light',
            boxShadow: '0 0 6px #008080'
          }
        }}
      >
        {i + 1}
      </div>
    )
  }
  return (
    <section sx={{
      variant: 'sections.hpSection',
      py: [5, 5, 5, 6],
      pb: [6, 5, 5, 6],
      background: `url(${SectionBg}) repeat-x bottom left`,
      marginBottom: '-3rem',
      position: 'relative',
      zIndex: '2'
    }}>
      <Styled.h1 as='h2' sx={{textAlign: 'center', color: 'accent'}}>What Parents Say</Styled.h1>
      <Container sx={{maxWidth: '6xl', px: ['2.8rem', 5, 0]}}>
        <Slider {...settings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </Container>
    </section>
  )
}

const testimonialsContentTemp = [
  {
    name: 'Beth F. Milles',
    text: 'Camp Laurelwood has been a source of great joy and wonderful memories for my family - happiness abounds at camp.'
  },
  {
    name: 'Laura Stuken',
    text: 'They always provide incredible warmth to the children and their parents. If you are looking for a camp that isn’t large where your child will get lost in, an extremely inclusive group of children and counselors, with both sports and arts, this is the best camp.'
  },
  {
    name: 'Emily Cooper',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world, and I wouldn\'t be the person I am today with out camp and the people who help make it home'
  },
  {
    name: 'Jenna Turner',
    text: 'This camp is the best. The Camp has such a warm close knit feel. The staff is amazing the activities are great. Your camper is surely not just a number here.'
  },
  {
    name: 'Marci L. Marcus',
    text: 'This camp is the best. The Camp has such a warm close knit feel. The staff is amazing the activities are great. Your camper is surely not just a number here.'
  },
  {
    name: 'Marci L. Marcus',
    text: 'This camp is the best. The Camp has such a warm close knit feel. The staff is amazing the activities are great. Your camper is surely not just a number here.'
  },
  {
    name: 'Marci L. Marcus',
    text: 'This camp is the best. The Camp has such a warm close knit feel. The staff is amazing the activities are great. Your camper is surely not just a number here.'
  }
]

export default TestimonialsSection
