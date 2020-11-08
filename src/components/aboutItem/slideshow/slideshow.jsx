import React, {useRef, useState} from 'react';
import { Card, makeStyles, Slide } from '@material-ui/core';
import './slideshow.scss';
import SLIDE_INFO from '../../../data/slide-content.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Arrow = (props) => {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

  return <div className='arrow' onClick={clickFunction}>{icon}</div>;
}

const CenterCarouselCard = (props) => {
  const {backgroundColor, title} = props.content;
  const useStyles = makeStyles(() => ({//customized the slides content card.
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '613px',
      height: '472px',
      // boxShadow: '20px 20px 20px black',
      display: 'flex',
      justifyContent: 'center'
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.card}/>
  )
}

const LeftCarouselCard = (props) => {
  const {backgroundColor, title} = props.content;
  const useStyles = makeStyles(() => ({//customized the slides content card.
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '299px',
      height: '284px',
      // boxShadow: '20px 20px 20px black',
      display: 'flex',
      justifyContent: 'center'
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/*<h1>{title}</h1>*/}
    </Card>
  )
}

const RightCarouselCard = (props) => {
  const {backgroundColor, title} = props.content;
  const useStyles = makeStyles(() => ({//customized the slides content card.
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: '75px 50px',
      margin: '0px 25px',
      width: '299px',
      height: '284px',
      // boxShadow: '20px 20px 20px black',
      display: 'flex',
      justifyContent: 'center'
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/*<h1>{title}</h1>*/}
    </Card>
  )
}

const CarouselSlide = () => {
  // const [slideShowArray, setSlideShowArray] = useState(SLIDE_INFO);
  const [index, setIndex] = useState(1);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const numSlides = SLIDE_INFO.length;

  const left_content = SLIDE_INFO[(index-1+numSlides) % numSlides];
  const right_content = SLIDE_INFO[(index+1+numSlides) % numSlides];
  const content = SLIDE_INFO[index];

  const onArrowClick = (direction) => {

    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {//delay for the reappearance of the card.
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 300);
  };

  return (
    <div className='slideshow'>
      <Arrow
        direction='left'
        clickFunction={() => onArrowClick('left')}
      />
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <LeftCarouselCard content={left_content}/>
        </div>
      </Slide>
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <CenterCarouselCard content={content}/>
        </div>
      </Slide>
      <Slide in={slideIn} direction={slideDirection}>
        <div>
          <RightCarouselCard content={right_content}/>
        </div>
      </Slide>
      <Arrow
        direction='right'
        clickFunction={() => onArrowClick('right')}
      />
    </div>
  );
}

export default CarouselSlide;

