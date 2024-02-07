/* import {motion } from 'framer-motion';
// import { forwardRef } from 'react';

// interface ChildProps {}

// const Button = forwardRef<HTMLButtonElement,ChildProps>((props, ref)=>{
//   console.log(ref)
//   return <button ref={ref}>...</button>
// })

// const MotionButton = motion(Button);
// //now we want to make the Button Element a MOTION component as well, So, we forward all the properties of motion to the element ^-^

export default function App() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <motion.button 
      className='bg-black text-white px-3 py-2 rounded-md shadow-[5px_5px_2px_1px_rgba(109,40,217)]'
      animate={{
        backgroundColor:"#f00",
        scale:2,
        y:50
      }}
      >
        Click ME!
      </motion.button>
    </div>
  )
} */


import { motion } from "framer-motion";


const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
      <div className="h-full fadeout">
        <motion.div
          className="text-[80px] [font-family:monospace] origin-top-left leading-[0.8] inset-1 absolute break-all"
          animate={{
            opacity: [0, 1, 1, 1, 1, 1, 0],
            scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
            scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],
            duration: 18
          }}
        >
          responsive
        </motion.div>
      </div>
      <p className="mt-auto  p-2">Make your animations work on all devices</p>
      </div>
    </div>
  );
};


export default App;