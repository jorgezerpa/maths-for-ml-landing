'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";

import styled from 'styled-components'

const GradientText = styled.div`
  background: linear-gradient(to bottom, #f00, #00f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export default function TextAnim(
    {
        text="Your text here as prop",
        type="body",
        duration=null,
        delay=null,
        hasGradientBG=false
    }
    : 
    {
        text:string,
        type: "body"|"title",
        duration?:number|null,
        delay?:number|null,
        hasGradientBG?:boolean
    }
    ) {
  const baseText = text as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

useEffect(() => {
    const controls = animate(count, baseText.length, {
        type: "tween",
        duration: duration || baseText.length*.1,
        ease: "easeInOut",
        delay: delay || 0
    });

    return () => controls.stop();
}
, []);



  return (
    <span className="shrink-0">
        <motion.span
        style={
          hasGradientBG
          ?
          {
          background: "linear-gradient(to right, #10e0e0, #c902fd)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",      
          }
          :
          {}
      }
            className={
                type === "body" 
                ? "mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
                : "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
            }
        >
            {displayText}
        </motion.span>
    </span>
  );
}
