import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const MotionBox = motion(Box);

const styles = {
    MotionBox: {
        overflowX: 'hidden', 
        width: '100vw', 
        position: 'relative', 
        background: 'grey',
        padding: '20px',
        color: 'white',
        fontSize: '15px',
        fontWeight: 'bold',
        opacity: '0.8',
    }
}
const SlidingText = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    const fullWidth = text.length * 10;  // Estimate the full width based on character count
    controls.start({
      x: [0, `-${fullWidth}px`], // Adjust according to text width
      transition: {
        x: {
          type: 'tween',
          ease: 'linear',
          repeat: Infinity,
          duration: 20, // Adjust duration to control the speed
        }
      }
    });
  }, [controls, text]);

  return (
    <div style={styles.MotionBox}>
        <MotionBox
            initial={{ x: 0 }}
            animate={controls}
            style={{ whiteSpace: 'nowrap', display: 'inline-block'}}
            >
            {Array.from({ length: 20 }, () => `${text} `).join('')} {/* Repeat text multiple times */}
        </MotionBox>
    </div>
  );
};

export default SlidingText;
