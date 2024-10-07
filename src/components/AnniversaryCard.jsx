import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AnniversaryCard.css';
import './Balloons.css';
import { useRef } from 'react';
import Confetti from 'react-confetti';

const slidesContent = [
  "There will be something i want to share today",
  "You are my today and all of my tomorrows.",
  "You’re my favorite person, and today is my favorite day.",
  "Every moment with you is a treasure.",
  "You light up my world in the most beautiful way.",
  "With you, every day is a celebration of love.",
  "You’re the reason my heart beats with happiness.",
  "You're not just the love of my life, you're my reason for everything.",
  "In your arms, I find my home",
  "I LOVE YOU SAYONI FOREVER "
];

const AnniversaryCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startSlideshow, setStartSlideshow] = useState(false);
  const [allSlidesShown, setAllSlidesShown] = useState(false);
  const [started, setStarted] = useState(false)
  const [startAudio, setStartAudio] = useState(false)
  const [cut, setCut] = useState(false);

  const audioRef = useRef(null);
  const numberOfBalloons = 35;
  const colors = ['#FF69B4', '#FF4500', '#FFD700', '#00FF7F', '#1E90FF', '#9370DB', '#FF6347'];

  // Generate an array of 1000 balloon elements
  const balloons = Array.from({ length: numberOfBalloons }, (_, i) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div
        key={i}
        className="balloon"
        style={{
          backgroundColor: randomColor,
          animationDelay: `${Math.random() * 5}s`,
          left: `${Math.random() * 100}vw`
        }}
      ></div>
    )
  });


  useEffect(() => {
    let interval;
    if (startSlideshow) {
      setStarted(true)
      interval = setInterval(() => {
        if (currentIndex === slidesContent.length - 1) {
          clearInterval(interval); // Stop the interval once all slides are shown
          setAllSlidesShown(true); // Set state to indicate all slides are shown
        } else {
          setCurrentIndex(prevIndex => prevIndex + 1);
        }
      }, 15000); // Change slide every 15 seconds
    }

    return () => clearInterval(interval);
  }, [currentIndex, startSlideshow]);


  // const handleExit = () => {
  //   window.close(); // Close the window
  // };


  const handleStartSlideshow = () => {
    // e.preventDefault();
    console.log("handleStartSlideshow")
    setStartSlideshow(true);
  };

  const playSong = () => {
    setCut(true)
    setStartAudio(true);
    audioRef.current.play();
  }

  const stopSong = () => {
    setStartAudio(false);
    console.log("current :", audioRef.current)
    audioRef.current.pause();
  }

  return (
    <div style={{ paddingBottom: '20em' }}>
      {cut && <Confetti />}
      <motion.img
        src="/cake.png"
        alt="Cake"
        height={'200px'}
        className="cake"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      />
      {/* <button onClick={handleCutCake} className="cut-button">
        Cut the Cake!
      </button> */}
      <motion.div
        className={`card ${allSlidesShown ? 'exit' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ paddingBottom: '1em' }}>Happy Birthday To Sayoni!! </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <h1>I Love You My Wife</h1> */}
        <div> {currentIndex === 13 ?
          <h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1>
          : currentIndex === 9 ? <h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1>
            : currentIndex === 14 ? <div>
              <h1>You are my light, my heart, my story, my forever. All of you is mine, and I am endlessly yours. 😍🥰😘</h1><h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1> <h3>bye</h3></div>
              :
              <div>
                <p>{startSlideshow ? slidesContent[currentIndex] : ''}</p>
              </div>
        }
        </div>
        {/* <img
          src="/heart.png"
          alt="Heart"
          className="heart" */}
        {/* // animate={{ rotate: 360 }}
        // transition={{ repeat: Infinity, duration: 2 }} */}
        {/* /> */}
      </motion.div>
      {
        (!started && startAudio) ? <button onClick={handleStartSlideshow}> lets start </button> : <div><br /> {started && "My Wife ,  ❤️ 💕💕 It's Your Day"} </div>
      }
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      {
        startAudio ? <button onClick={stopSong}>stop the song</button> : ''
      }
      {
        !startAudio ? <button onClick={playSong}> Play the song Surprise me</button> : ''
      }
      <audio ref={audioRef} src="/Happy-Birthday.mp3" />
      <div className='container'>
        {balloons}
      </div>
    </div>
  );
};

export default AnniversaryCard;
