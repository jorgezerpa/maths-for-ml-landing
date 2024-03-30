import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const initialFill = 'transparent'

const axonStrokeWidth = 0.5

export function MLAlgorithmsAnimation() {

    const svgRef = useRef<SVGSVGElement>(null)
    const NNPartsRect = useRef<SVGRectElement>(null)
    

    useGSAP(() => {
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
      

      // // -----------
      tl.set('.neuron', {scale:0, fill: "white"})
      tl.to('.neuron', {duration: 2, scale:1, stagger: .1, ease: 'elastic'})

      const axonsN1ToN2 = document.querySelectorAll('.axon1')
      axonsN1ToN2.forEach((axon) => {
        tl.set(axon, { duration:0, attr: { stroke:"white", "stroke-dashoffset": (axon as SVGPathElement).getTotalLength(), "stroke-dasharray": (axon as SVGPathElement).getTotalLength()} })
        tl.to(axon, { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (axon as SVGPathElement).getTotalLength()}, duration: .1, ease: 'power1.inOut'})
      })

      // -----------

      const axonsN2ToN3 = document.querySelectorAll('.axon2')
      axonsN2ToN3.forEach((axon) => {
        tl.set(axon, { duration:0, attr: { stroke:"white", "stroke-dashoffset": (axon as SVGPathElement).getTotalLength(), "stroke-dasharray": (axon as SVGPathElement).getTotalLength()} })
        tl.to(axon, { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (axon as SVGPathElement).getTotalLength()}, duration: .1, ease: 'power1.inOut'})
      })

      // -----------

      const axonsN3ToN4 = document.querySelectorAll('.axon3')
      axonsN3ToN4.forEach((axon) => {
        tl.set(axon, { duration:0, attr: { stroke:"white", "stroke-dashoffset": (axon as SVGPathElement).getTotalLength(), "stroke-dasharray": (axon as SVGPathElement).getTotalLength()} })
        tl.to(axon, { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (axon as SVGPathElement).getTotalLength()}, duration: .1, ease: 'power1.inOut'})
      })

      // -----------

            // <rect x={0} y={0} width={20} height={50} fill="rgba(0, 255, 26, 0.2)" />
      // <rect x={20} y={0} width={60} height={50} fill="rgba(0, 255, 255, 0.2)" />
      // <rect x={80} y={0} width={20} height={50} fill="rgba(255, 0, 0, 0.2)" />

      tl.from(NNPartsRect.current, {fill: "rgba(0, 255, 26, 0.6)", x:-20, duration:0 })
      tl.to(NNPartsRect.current, {fill: "rgba(0, 255, 26, 0.6)", x:0, duration: 2, ease: 'power1.inOut'})
      tl.to(".NNLayer1", {fill: "white", duration: 2, ease: 'power1.inOut'}, "<")
      tl.to(NNPartsRect.current, {fill: "rgba(255, 255, 255, 0.6)",scaleX:3, x:20, duration: 2, ease: 'power1.inOut'})
      tl.to(".NNLayer1", {fill: "transparent", duration: 0, ease: 'power1.inOut',}, "<")
      tl.to(".NNLayer2", {fill: "white", duration: 2, ease: 'power1.inOut'}, "<")
      tl.to(NNPartsRect.current, {fill: "rgba(0, 255, 255, 0.6)", scaleX:1, x:80, duration: 2, ease: 'power1.inOut'})
      tl.to(".NNLayer2", {fill: "transparent", duration: 0, ease: 'power1.inOut'}, "<")
      tl.to(".NNLayer3", {fill: "white", duration: 2, ease: 'power1.inOut'}, "<")

      // now scale everything to 0
      tl.to('.neuron', {duration: 1, scale:0})
      tl.to(".axon1", {duration:1, scale:0}, "<")
      tl.to(".axon2", {duration:1, scale:0}, "<")
      tl.to(".axon3", {duration:1, scale:0}, "<")
      tl.to(NNPartsRect.current, {duration:1, scale:0}, "<")
      tl.to(".NNLayer", { duration: 1, scale:0 }, "<")



      // ----------------------------------------------
      const xDisp = 20
      const randomYDisp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(() => Math.random())
      const errYaccepted = 20

      tl.to('.LRPoint', { duration:1, attr:{ fill:"white" } })
      tl.to('.LRPoint', { duration:1, attr:{ fill:"white" } }) // anchor point

      const LRPoints = document.querySelectorAll('.LRPoint')
      LRPoints.forEach((point, index) => {
        tl.to(point, { 
          duration: 2,
          attr: { 
            cx: (index*(80/20)+1)+xDisp,
            cy: linearFunction(index*((80/20)+1)+xDisp, .6) + (index%2===0 ? errYaccepted : -errYaccepted)*randomYDisp[index],
            fill:"white" 
          },
          ease: 'elastic'
        }, "<")
      })

      tl.set('.LRLine', { duration:2, attr: { stroke:"white", "stroke-dashoffset": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength(), "stroke-dasharray": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength()} })
      tl.to('.LRLine', { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength()}, duration: 2, ease: 'power1.inOut'})


      const LRDashPaths = document.querySelectorAll('.LRDashPath')

      LRDashPaths.forEach((path, index) => {
        tl.to(path, { 
          duration: 0,
          attr: { 
            x1: (index*(80/20)+1)+xDisp,
            y1: linearFunction(index*((80/20)+1)+xDisp, .6) + (index%2===0 ? errYaccepted : -errYaccepted)*randomYDisp[index],
            x2: (index*(80/20)+1)+xDisp,
            y2: linearFunction(index*((80/20)+1)+xDisp, .6) + (index%2===0 ? errYaccepted : -errYaccepted)*randomYDisp[index],
            stroke:"white" 
          },
          ease: 'power4.inOut'
        }, "<")
      })

      tl.to('.LRLine', { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength()}, duration: 0, ease: 'power1.inOut'}) //anker point
      
      LRDashPaths.forEach((path, index) => {
        tl.to(path, { 
          duration: 1,
          attr: { 
            x1: (index*(80/20)+1)+xDisp,
            y1: linearFunction(index*((80/20)+1)+xDisp, .6) + (index%2===0 ? errYaccepted : -errYaccepted)*randomYDisp[index],
            x2: (index*(80/20)+1)+xDisp,
            y2: linearFunction(index*(80/20)+1+xDisp, .6),
            stroke:"white" 
          },
          ease: 'power4.inOut'
        }, "<")
      })

      tl.to('.LRLine', { attr: { "stroke-dashoffset": 0, "stroke-dasharray": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength()}, duration: 0, ease: 'power1.inOut'}) //anker point



      // implement linear regression (align the points to the line)
      LRPoints.forEach((point, index) => {
        tl.to(point, { 
          duration: 1,
          attr: { 
            cy: linearFunction(index*(80/20)+1+xDisp, .6),
            fill:"white" 
          },
          ease: 'power4.inOut'
        }, "<")
      })

      LRDashPaths.forEach((path, index) => {
        tl.to(path, { 
          duration: 1,
          attr: { 
            y1: linearFunction(index*(80/20)+1+xDisp, .6),
            stroke:"white" 
          },
          ease: 'power4.inOut'
        }, "<")
      })

      // scale to 0 all dots 
      tl.to(".LRPoint", { duration: 1, scale:0, ease: 'power4.inOut' })
      // undraw the line
      tl.to('.LRLine', { attr: { "stroke-dashoffset": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength(), "stroke-dasharray": (document.querySelector('.LRLine') as SVGPathElement).getTotalLength()}, duration: 1, ease: 'power1.inOut'})
        

            
    })


    const linearFunction = (x: number, slope=1, yDisp=0) => slope*x + yDisp
    

    
  return (
    <div className='relative overflow-hidden'>
      <svg ref={svgRef} className="-scale-y-100 w-full h-full"   viewBox="-0 -20 100 100" xmlns="http://www.w3.org/2000/svg">

        <text className='NNLayer NNLayer1' fill={initialFill} fontSize={4} x={10} y={40} style={{ transform:"scale(1, -1) translate(0, -100%)" }}>Input Layer</text>
        <text className='NNLayer NNLayer2' fill={initialFill} fontSize={4} x={38} y={40} style={{ transform:"scale(1, -1) translate(0, -100%)" }}>Hidden Layer</text>
        <text className='NNLayer NNLayer3' fill={initialFill} fontSize={4} x={70} y={40} style={{ transform:"scale(1, -1) translate(0, -100%)" }}>Output Layer</text>
        
        <rect ref={NNPartsRect} x={0} y={0} width={20} height={50} fill={initialFill} />
        
        <circle className='neuron neuron1' cx="5" cy="35" r="3" fill={initialFill} />
        <circle className='neuron neuron1' cx="5" cy="25" r="3" fill={initialFill} />
        <circle className='neuron neuron1' cx="5" cy="15" r="3" fill={initialFill} />

        {/* draw  lines that comes from the center of each above circle to each of the next 4 circles */}
        <line className='axon1' x1="5" y1="15" x2="35" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="15" x2="35" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="15" x2="35" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="15" x2="35" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />

        <line className='axon1' x1="5" y1="25" x2="35" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="25" x2="35" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="25" x2="35" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="25" x2="35" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />

        <line className='axon1' x1="5" y1="35" x2="35" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="35" x2="35" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="35" x2="35" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon1' x1="5" y1="35" x2="35" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />



        <circle className='neuron neuron2' cx="35" cy="40" r="3" fill={initialFill} />
        <circle className='neuron neuron2' cx="35" cy="30" r="3" fill={initialFill} />
        <circle className='neuron neuron2' cx="35" cy="20" r="3" fill={initialFill} />
        <circle className='neuron neuron2' cx="35" cy="10" r="3" fill={initialFill} />

        {/* draw  lines that comes from the center of each above circle to each of the next 4 circles */}
        <line className='axon2' x1="35" y1="10" x2="65" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="10" x2="65" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="10" x2="65" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="10" x2="65" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />

        <line className='axon2' x1="35" y1="20" x2="65" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="20" x2="65" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="20" x2="65" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="20" x2="65" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />

        <line className='axon2' x1="35" y1="30" x2="65" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="30" x2="65" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="30" x2="65" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="30" x2="65" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />

        <line className='axon2' x1="35" y1="40" x2="65" y2="10" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="40" x2="65" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="40" x2="65" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon2' x1="35" y1="40" x2="65" y2="40" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        
        <circle className='neuron neuron3' cx="65" cy="40" r="3" fill={initialFill}  />
        <circle className='neuron neuron3' cx="65" cy="30" r="3" fill={initialFill}  />
        <circle className='neuron neuron3' cx="65" cy="20" r="3" fill={initialFill}  />
        <circle className='neuron neuron3' cx="65" cy="10" r="3" fill={initialFill}  />

        {/* draw  lines that comes from the center of each above circle to each of the next 2 circles */}
        <line className='axon3' x1="65" y1="10" x2="95" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon3' x1="65" y1="10" x2="95" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
       
        <line className='axon3' x1="65" y1="20" x2="95" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon3' x1="65" y1="20" x2="95" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        
        <line className='axon3' x1="65" y1="30" x2="95" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth} />
        <line className='axon3' x1="65" y1="30" x2="95" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth} />
       
        <line className='axon3' x1="65" y1="40" x2="95" y2="20" stroke={initialFill} strokeWidth={axonStrokeWidth}  />
        <line className='axon3' x1="65" y1="40" x2="95" y2="30" stroke={initialFill} strokeWidth={axonStrokeWidth}  />

      
        <circle className='neuron neuron4' cx="95" cy="30" r="3" fill={initialFill} strokeWidth="1" />
        <circle className='neuron neuron4' cx="95" cy="20" r="3" fill={initialFill} strokeWidth="1" />



        {/* --------------------------------- */}

        <line className='LRLine' x1="1" y1="0" x2="90" y2={linearFunction(90, .6)} stroke={initialFill} strokeWidth={.5} />
        {
          [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, index) => {
            return (
              <>
                <circle className={`LRPoint LRPoint${item}`} cx="50" cy="25" r="1" fill={initialFill} />
                <line className={`LRDashPath LRDashPath${item}`} x1={50} y1={25} x2={50} y2={25} stroke="red" strokeWidth={.3} strokeDasharray={"2,2"} /> 
              </>
            )
          })
        }





      </svg>

    </div>
  )
}