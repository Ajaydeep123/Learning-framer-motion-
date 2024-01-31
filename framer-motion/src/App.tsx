import {motion } from 'framer-motion';
import { forwardRef } from 'react';

interface ChildProps {}

const Button = forwardRef<HTMLButtonElement,ChildProps>((props, ref)=>{
  console.log(ref)
  return <button ref={ref}>...</button>
})

const MotionButton = motion(Button);
//now we want to make the Button Element a MOTION component as well, So, we forward all the properties of motion to the element ^-^

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <motion.button>Click me!</motion.button>
    </h1>
  )
}