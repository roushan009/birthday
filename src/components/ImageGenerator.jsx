// src/components/ImageGenerator.js
import React, { useRef, useEffect } from 'react';

function ImageGenerator() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = 500;
    canvas.height = 300;

    // Background gradient
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ffcccb');
    gradient.addColorStop(1, '#ffebcc');
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Text settings
    context.fillStyle = '#ff1493';
    context.font = '48px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    // Add text to canvas
    context.fillText('Ennavale AZHAGI', canvas.width / 2, canvas.height / 2);
  }, []);

  return (<canvas ref={canvasRef} />);
}

export default ImageGenerator;