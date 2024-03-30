import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export function CalculusAnimation() {

    const svgRef = useRef<SVGSVGElement>(null)
    const dot = useRef<SVGCircleElement>(null)
    const line = useRef<SVGPathElement>(null)
    const accuracyBar = useRef<SVGRectElement>(null)
    const accuracyText = useRef<SVGTextElement>(null)
    const xAxis = useRef<SVGLineElement>(null)
    const yAxis = useRef<SVGLineElement>(null)
    

    useGSAP(() => {
        
        const path = line.current as SVGPathElement
        const pathLength = path.getTotalLength()
        
        const tl = gsap.timeline({ 
            repeat: -1,
            scrollTrigger: {
                trigger: svgRef.current,
                start: 'top center',
                end: '+=900px', 
                // markers: true,
                // enter, leave, enterBack, leaveBack
                toggleActions: 'play pause play pause',
            }
         })
        // start the animation with the line being invisible
        tl.set(line.current, { attr: { "stroke-dashoffset": pathLength, "stroke-dasharray": pathLength} })
        // the same with rect elements
        tl.set(xAxis.current, { scaleY: 0 })
        tl.set(yAxis.current, { scaleX: 0 })
        tl.set('.rect1', { scaleY: 0 })
        tl.set('.rect2', { scaleY: 0 })
        tl.set('.rect3', { scaleY: 0 })
        tl.set(accuracyBar.current, { scaleX:0 })
        tl.set(accuracyText.current, { opacity: 0})
        
        tl.to(xAxis.current, { scaleY: 1, duration: 1, ease: 'power4.inOut' })
        tl.to(yAxis.current, { scaleX: 1, duration: 1, ease: 'power4.inOut' }, '<')

        tl.to(line.current, { attr: { "stroke-dashoffset": 0, "stroke-dasharray": pathLength}, duration: 3, ease: 'power1.inOut'})
        tl.to(accuracyText.current, { opacity: 1, duration: 1, ease: 'power4.inOut' })
        // now scale the rect elements
        tl.to('.rect1', { scaleY: 1, stagger: 0.1, ease: 'power4.inOut' })
        tl.to(accuracyBar.current, { scaleX: 0.3, fill:"red", duration: 1, ease: 'power4.inOut' }, '<')
        tl.to('.rect1', { scaleY: 0, stagger: 0.1, ease: 'power4.inOut' })
        tl.to('.rect2', { scaleY: 1, stagger: 0.1, ease: 'power4.inOut' })
        tl.to(accuracyBar.current, { scaleX: 0.6, fill:"yellow", duration: 1, ease: 'power4.inOut' }, '<')
        tl.to('.rect2', { scaleY: 0, stagger: 0.1, ease: 'power4.inOut' })
        tl.to('.rect3', { scaleY: 1, stagger: 0.1, ease: 'power4.inOut' })
        tl.to(accuracyBar.current, { scaleX: 1, fill:"#0ff81a", duration: 1, ease: 'power4.inOut' }, '<')
        tl.to('.rect3', { scaleY: 0, stagger: 0.1, ease: 'power4.inOut' })
        tl.to(accuracyBar.current, { scaleX: 0, fill:"#0ff81a", duration: 1, ease: 'power4.inOut' })
        tl.to(accuracyText.current, { opacity: 0, duration: 1, ease: 'power4.inOut' }, "<")

        tl.to(line.current, { attr: { "stroke-dashoffset": pathLength, "stroke-dasharray": pathLength}, duration: 1, ease: 'power1.inOut'})
     
        tl.to(xAxis.current, { scaleY: 0, duration: 1, ease: 'power4.inOut' })
        tl.to(yAxis.current, { scaleX: 0, duration: 1, ease: 'power4.inOut' }, '<')
     
      })




    
  return (
    <div className='relative overflow-hidden'>
      <svg ref={svgRef} className="-scale-y-100 w-full h-full"   viewBox="-0 -20 100 100" xmlns="http://www.w3.org/2000/svg">

        {/* add a text */}
        <text ref={accuracyText} fontSize={5} x={50} y={40} style={{ transform:"scale(1, -1) translate(0, -100%)" }} fill='white' textAnchor='middle'>Accuracy</text>
        {/* make a kind of load bar */}
        <rect ref={accuracyBar} x={20} y={50} width={60} height={5} fill='white' />

        <line ref={xAxis} x1={1} y1={0} x2={1} y2={60} stroke='white' />
        <line ref={yAxis} x1={1} y1={0} x2={100} y2={0} stroke='white' />

        {/* draw a curve quadratic curve*/}
        {/* B(t) = (1-t)^2 * P0 + 2(1-t) * t * P1 + t^2 * P2 */}
        <path ref={line} id="line" d="M 1 0 Q 50 80 100 0" fill="transparent" stroke="white" strokeWidth="1" />
      
      
        {
            [0,12,24,33,38,38,33,24,12,0].map((height, index) => {
              return <rect className='rect1' key={index} x={index*10} y={0} width={100/10} height={height} fill='white' />
            }
          )
        }
        {
          [0, 6, 12, 18, 24, 29, 32.5, 35.5, 37.8, 39, 39, 37.8, 35.5, 32.5, 29, 24, 18, 12, 6, 0]
          .map((height, index) => {
            return <rect className='rect2' key={index} x={index*5} y={0} width={100/20} height={height} fill='white' />
          })         
        }
        {
          // now divide on 40 rectangles
          [0, 1.5, 5.5, 9, 12, 15.5, 19, 21.5, 24, 27, 29, 31, 32.7, 34.2, 35.6, 36.8, 37.7, 38.4, 39, 39.3, 39.3, 39, 38.5, 37.8, 36.9, 35.8, 34.5, 33, 31.3, 29.5, 27.5, 25.5, 22.5, 19.5, 16.5, 13.5, 10.4, 7, 3, .5, 0]
          .map((height, index) => {
            return <rect className='rect3' key={index} x={index*2.5} y={0} width={100/40} height={height} fill='white' />
          })
        }
      




      </svg>

    </div>
  )
}