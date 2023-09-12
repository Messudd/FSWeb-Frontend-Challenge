import React from 'react'
import {motion} from 'framer-motion';

const AnimatedPage = ({children}) => {
    const animations = {
        initial : {opacity: 0, x:200},
        animate : {opacity: 1, x:0},
        exit : {opacity: 0, x: -200}

    }
  return (
    <motion.div
    variants= {animations}
    initial = 'initial'
    animate = 'animate'
    exit= 'exit'
    transition= {{duration: 1}}
    >
        {children}
    </motion.div>
   
  )
}

export default AnimatedPage;
