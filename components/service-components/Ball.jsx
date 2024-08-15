"use client"
import { motion } from 'framer-motion';

const Ball = ({ x, y }) => {
  return (
    <motion.div
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'red',
        position: 'absolute',
        top: y,
        left: x,
      }}
    />
  );
};

export default Ball;
