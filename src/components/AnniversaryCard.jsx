import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AnniversaryCard.css';
import { useRef } from 'react';
import Confetti from 'react-confetti';

const slidesContent = [
  "There will be something i want to share today",
  "Babe, these past few weeks with you have been nothing short of magical.",
  "I can't even begin to express how deeply I've fallen for you. Every moment spent together feels like a treasure",
  "And I've dedicated so much time just reveling in your presence, cherishing every smile, every laugh, every shared glance",
  "You've become my priority, my muse, my everything. I find myself daydreaming about us, about a future where we're together, hand in hand, navigating life's ups and downs as a team.",
  "I want you to know that I'm willing to do anything, absolutely anything, to make you happy, to see that beautiful smile of yours light up your face every single day.",
  "And now, I'm at a point where I can't imagine my life without you. I want to wake up next to you every morning, share my dreams, my fears, my joys with you, and create a life filled with love and adventure.",
  "So, with all the sincerity in my heart, I have to ask: Do you feel the same way? Could you see yourself spending forever with me? Because if you do, I want nothing more than to make you my wife and spend the rest of my days making you the happiest person on earth.",
  "I know nothing is guaranteed, but all the Previous slides, that's my heartfelt wish. Love you Mam",
  "but",
  "These past few days have been an incredible journey, haven't they? It's like we've been living in a dream, it is actually a Dream life 😂😂😂😂 only. but with each moment more beautiful than the last.",
  "Do you remember how it all began, just a month ago? It feels like a lifetime ago, yet it's still so fresh in my mind.",
  "Together, we've laughed, we've cried, and we've shared our deepest thoughts and dreams",
  "So here's to us, to the love we've shared and the memories we've created in just one short month. I'm grateful for every moment we've spent together, and I look forward to many more adventures in the days to come.",
  "Love You My Love "
];

const AnniversaryCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startSlideshow, setStartSlideshow] = useState(false);
  const [allSlidesShown, setAllSlidesShown] = useState(false);
  const [started, setStarted] = useState(false)
  const [startAudio, setStartAudio] = useState(false)
  const [cut, setCut] = useState(false);

  const audioRef = useRef(null);


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
        <h1>Happy First Month Anniversary! </h1>
        <br />
        <h1>My Love </h1>
        <div> {currentIndex === 13 ?
          <h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1>
          : currentIndex === 9 ? <h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1>
            : currentIndex === 14 ? <div>
              <h1>You are my Brightness, You're my soul, You are my myth, You're Just mine 😍😍🥰😘</h1><h1>{startSlideshow ? slidesContent[currentIndex] : ''}</h1> <h3>bye</h3></div>
              :
              <div>
                <p>{startSlideshow ? slidesContent[currentIndex] : ''}</p>
              </div>
        }
        </div>
        <img
          src="/heart.png"
          alt="Heart"
          className="heart"
        // animate={{ rotate: 360 }}
        // transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
      {
        (!started && startAudio) ? <button onClick={handleStartSlideshow}> lets start </button> : <div><br /> {started && "My Love , Ennavale ❤️ 💕💕  M A M  ! Close this tab If you don't want to continue"} </div>
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
      <audio ref={audioRef} src="/surprisMe.mp3" /> 
    </div>
  );
};

export default AnniversaryCard;
