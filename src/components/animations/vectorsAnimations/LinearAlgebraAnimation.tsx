import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export function LinearAlgebraAnimation() {

    const svgRef = useRef<SVGSVGElement>(null)
    const vect1 = useRef<SVGLineElement>(null)
    const vect2 = useRef<SVGLineElement>(null)
    const vect3 = useRef<SVGLineElement>(null)
    const vectSum = useRef<SVGLineElement>(null)

    const [currentLabel, setCurrentLabel] = React.useState(0)



    useGSAP(()=>{
        const tl = gsap.timeline({ 
          repeat: -1, yoyo: false, defaults: {ease: 'power3.inOut'},
          scrollTrigger: {
              trigger: svgRef.current,
              start: 'top center',
              end: '+=900px', 
              // markers: true,
              // enter, leave, enterBack, leaveBack
              toggleActions: 'play pause play pause',
          }
        })
        
        tl.to(vect1.current, {duration: 0, attr: {x1:0, y1:0, x2: 0, y2: 0}, onStart: () => setCurrentLabel(0)})
        tl.to(vect1.current, {duration: 2, attr: {x1:0, y1:0, x2: 20, y2: 20}})
        const transfVect1 = linearTransformation2x2([20, 20], [[Math.cos(30 * Math.PI / 180), -Math.sin(30 * Math.PI / 180)], [Math.sin(30 * Math.PI / 180), Math.cos(30 * Math.PI / 180)]])
        tl.to(vect1.current, {duration: 2, attr: {x1:0, y1:0, x2: transfVect1[0], y2: transfVect1[1]}, onStart: () => setCurrentLabel(1)})

        tl.to(vect2.current, {duration: 0, attr: {x1:transfVect1[0], y1:transfVect1[1], x2: transfVect1[0], y2: transfVect1[1]}})
        tl.to(vect2.current, {duration: 2, attr: { x2: 50, y2: 20}, onStart: () => setCurrentLabel(2)})

        tl.to(vect3.current, {duration: 0, attr: {x1:50, y1:20, x2: 50, y2: 20}})
        tl.to(vect3.current, {duration: 2, attr: { x2: 70, y2: 40}}) 

        tl.to(vectSum.current, {duration: 0, attr: {x1:0, y1:0, x2: 0, y2: 0}})
        tl.to(vectSum.current, {duration: 2, attr: {x1:0, y1:0, x2: 70, y2: 40}, onStart: () => setCurrentLabel(3)})
        tl.to([vect1.current, vect2.current, vect3.current], {duration: 1, attr: {x1:0, y1:0, x2: 0, y2: 0}})
        tl.to(vectSum.current, {duration: 2, attr: {x1:0, y1:0, x2: 0, y2: 0}, onComplete: () => setCurrentLabel(0)})

    })



    const linearTransformation2x2 = (coords:[number, number], matrix: [[number, number], [number, number]]) => {
        const [x, y] = coords
        const [a, b] = matrix[0]
        const [c, d] = matrix[1]
        return [a*x + b*y, c*x + d*y]
    }

    
  return (
    <div className='relative'>
      <svg ref={svgRef} className="-scale-y-100 w-full h-full"   viewBox="-0 -20 100 100" xmlns="http://www.w3.org/2000/svg">

        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="4" 
          refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill='white'  />
          </marker>
          {/* marker with gradient */}
          <marker id="arrowheadGradient" markerWidth="6" markerHeight="4"
          refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill='url(#rainbowGradient)' />
          </marker>
          <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#10e0e0'}} />
            <stop offset="100%" style={{stopColor: '#c902fd'}} />
        </linearGradient>
        </defs>



        <g>
          <line
              ref={vect1} 
              x1="0" y1="0" x2="0" y2="0" 
              stroke="white" strokeWidth="1" 
              marker-end={'url(#arrowhead)'}    
              />
          <line
              ref={vect2} 
              x1="0" y1="0" x2="0" y2="0" 
              stroke="white" strokeWidth="1"         
              marker-end={'url(#arrowhead)'}    
              />
          <line
              ref={vect3} 
              x1="0" y1="0" x2="0" y2="0" 
              stroke="white" strokeWidth="1"         
              marker-end={'url(#arrowhead)'}    
              />
          <line
              ref={vectSum} 
              x1="0" y1="0" x2="0" y2="0" 
              stroke="url(#rainbowGradient)"
              strokeWidth="2"         
              marker-end={'url(#arrowheadGradient)'}    
              />
        </g>
      </svg>

      <div className='absolute top-[20px] right-0 left-0 h-[100px] flex justify-center items-center text-white'>
        
        {
          currentLabel === 0 && (
            <div>
              V1 = [x,y]
            </div>
          )
        }
        
        {
          currentLabel === 1 && (
            <div className='flex justify-center items-center'>
              V1 x
              <div className='ml-1 grid grid-cols-2 grid-rows-2 gap-2 border-l-2 border-l-white border-r-2 border-r-white px-2'>
                <div className=''>cos30</div>
                <div className=''>-sin30</div>
                <div className=''>sin30</div>
                <div className=''>cos30</div>
              </div>
            </div>
          )
        }

        {
          currentLabel === 2 && (
            <div className='flex justify-center items-center text-sm'>
              V1 x
              <div className='ml-1 mr-1 grid grid-cols-2 grid-rows-2 gap-2 border-l-2 border-l-white border-r-2 border-r-white px-2'>
                <div className=''>cos30</div>
                <div className=''>-sin30</div>
                <div className=''>sin30</div>
                <div className=''>cos30</div>
              </div>
              + V2 + V3
            </div>
          )
        }

        {
          currentLabel === 3 && (
            <div className='flex justify-center items-center text-xs'>
              
              Vt = V1 x
              <div className='ml-1 mr-1 grid grid-cols-2 grid-rows-2 gap-2 border-l-2 border-l-white border-r-2 border-r-white px-2'>
                <div className=''>cos30</div>
                <div className=''>-sin30</div>
                <div className=''>sin30</div>
                <div className=''>cos30</div>
              </div>
              + V2 + V3
            </div>
          )
        }
      </div>

    </div>
  )
}