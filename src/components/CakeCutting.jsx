// // src/components/CakeCutting.js
// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Confetti from 'react-confetti';
// import './CakeCutting.css';

// const CakeCutting = () => {
//   const [cut, setCut] = useState(false);
//   const audioRef = useRef(null);

//   const handleCutCake = () => {
//     setCut(true);
//     audioRef.current.play();
//   };

//   return (
//     <div className="cake-section">
//       {/* {cut && <Confetti />}
//       <motion.img
//         src="/cake.png"
//         alt="Cake"
//         className="cake"
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         transition={{ type: 'spring', stiffness: 100 }}
//       /> */}
//       <button onClick={handleCutCake} className="cut-button">
//         Cut the Cake!
//       </button>
//       {cut && <p className="message">Yay! Enjoy the cake!</p>}
//       <audio ref={audioRef} src="/celebration.mp3" />
//     </div>
//   );
// };

// export default CakeCutting;
