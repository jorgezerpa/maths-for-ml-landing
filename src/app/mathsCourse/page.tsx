'use client'
import React, { useState, useEffect } from 'react'
import { FAQDrodown } from '@/components/dropdowns/FAQDrodown'
import Image from 'next/image'
import developerImage from "@/assets/images/developer.png"
import techiesImage from "@/assets/images/techies.png"
import starkTeslaImage from "@/assets/images/stark-tesla.png"

import { TypingTextAnimation } from '@/components/animations/TypingAnimation'
import { FadeInAndTranslateAnimation } from '@/components/animations/FadeInAndTranslateAnimation'

import  { LinearAlgebraAnimation } from '@/components/animations/vectorsAnimations/LinearAlgebraAnimation'
import { CalculusAnimation } from '@/components/animations/vectorsAnimations/CalculusAnimation'
import { MLAlgorithmsAnimation } from '@/components/animations/vectorsAnimations/MLAlgorithmsAnimation'


function Landing() {

  const [faqs, setFaqs] = useState([
    {
      question: "Sere un experto en matematicas al terminar el curso?",
      answer: "Nop. Esta formacion esta enfocada en darte las bases matematicas necesarias para que puedas comenzar tu camino en el mundo de la AI y ML. Lo que si te prometo es que luego de tomar este curso vas a tener las nociones necesarias para construir proyectos y seguir estudiando por tu cuenta. Podras tomar un libro, ver un video o leer algun paper de AI o mates y entenderlo."
    },
    {
      question: "Este contenido lo puedo encontrar gratis en libros o en youtube",
      answer: "Eso es correcto, puedes encontrar este contenido en libros y en YouTube. Personalmente de alli fue de donde aprendi. Pero me tomo mucho tiempo y esfuerzo encontrar la informacion correcta y entenderla. Con este curso te condenso todo ese conocimiento que me tomo años adquirir para que tu lo puedas aprender en unas pocas semanas. Sin duda puedes aprenderlo por tu cuenta, pero si quieres ahorrarte tiempo y dolores de cabeza, este curso es para ti."
    },
    {
      question: "Que nivel de matematicas necesito para tomar el curso?",
      answer: "Necesitas saber sumar, restar, multiplicar y dividir. Y tener nociones de algebra basica. Con que entiendas cosas como que 'a+b = b+a' y sepas resolver ecuaciones de primer grado, estas listo para tomar el curso."
    },
    {
      question: "Necesito algun software o herramienta para tomar el curso?",
      answer: "Solo necesitas un dispositivo con acceso a internet y la disposicion de aprender. Ya con eso podras sacarle el maximo partido a esta formacion. Pero, por supuesto tambien abran algunos ejemplos de codigo en Python, asi que si quieres practicar y correr los ejemplos en tu computadora necesitaras algun editor de codigo como Visual Studio Code o Jupyter Notebook."
    },
    {
        question: "¿Cuánto tiempo dura el curso? hay algun horario a cumplir?",
        answer: "Todas las clases estan grabadas y puedes verlas a tu ritmo. No hay horarios a cumplir ni fechas de entrega. Puedes tomar el curso a tu ritmo y en el horario que mejor te convenga. Sobre la duracion, son cerca de 4 horas de video dividido en 4 clases, mas ejemplos de codigo en notebooks con un tiempo de lectura de 20min cada uno mas lo que tardes practicando y haciendo experimentos."
    }    
  ])

  const durationFactor = 0.1

  const [isAnimationRunning, setIsAnimationRunning] = useState(true)

    useEffect(() => {
        const animationDuration = 7*durationFactor + 11*durationFactor + 4*durationFactor + 2*durationFactor + 1*durationFactor + .6

        const timer = setTimeout(() => {
            setIsAnimationRunning(false)
        }
        , animationDuration * 1000)

        return () => clearTimeout(timer)
    }, [])

    // disable scroll until animation is finished
    // useEffect(() => {
    //     if (isAnimationRunning) {
    //         document.body.style.overflow = 'hidden'
    //     } else {
    //         document.body.style.overflow = 'auto'
    //     }
    // }
    // , [isAnimationRunning])


  return (
    <div style={{ overflowX:"hidden" }}>
      <section className="bg-white dark:bg-gray-900 overflow-x-hidden">
          <div className=" py-8 px-4 mx-auto max-w-screen-xl text-start sm:text-center lg:py-16 lg:px-12">
                <div className='h-10' />
              {/* <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white'>
                Aprende Matemáticas para AI/ML
              </h1> */}
                <div className='flex justify-start items-center sm:justify-center sm:items-center ' style={{ width:"100%", gap:15, flexWrap:"wrap" }}>
                    <TypingTextAnimation duration={7*durationFactor} delay={0} text='Aprende' type='title'  />
                    <TypingTextAnimation duration={11*durationFactor} delay={7*durationFactor} hasGradientBG text='Matemáticas' type='title'  />
                    <TypingTextAnimation duration={4*durationFactor} delay={(7*durationFactor)+(11*durationFactor)} text='para' type='title'  />
                    <TypingTextAnimation duration={2*durationFactor} delay={(7*durationFactor)+(11*durationFactor)+(4*durationFactor)} hasGradientBG text='AI' type='title'  />
                    <TypingTextAnimation duration={1*durationFactor} delay={(7*durationFactor)+(11*durationFactor)+(4*durationFactor)+(2*durationFactor)} text='y' type='title'  />
                    <TypingTextAnimation duration={2*durationFactor} delay={(7*durationFactor)+(11*durationFactor)+(4*durationFactor)+(2*durationFactor)+(1*durationFactor)} hasGradientBG text='ML' type='title'  />

                </div>


              <div className='h-2 sm:h-0 pt-4' />
                <FadeInAndTranslateAnimation 
                    content={
                        <p className=" mt-3 mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">De forma <span className='font-bold text-black'>intuitiva</span>, <span className='font-bold text-black'>práctica</span> y <span className='font-bold text-black'>sin tecnisismos</span> excesivos. Para que puedas <span className='font-bold text-black'>entender al 100%</span> el funcionamiento de los <span className='font-bold text-black'>algoritmos de AI.</span></p>
                    }
                    animationConfig={{
                        duration: .3,
                        delay: (7*durationFactor)+(11*durationFactor)+(4*durationFactor)+(2*durationFactor)+(1*durationFactor),
                        from: 'top',
                    }}
                />
                
                <FadeInAndTranslateAnimation 
                    content={
                        <div className='w-full flex justify-center items-center'>
                            <div className='w-full h-64 sm:h-96 bg-gray-200'></div>
                        </div>
                    }
                    animationConfig={{
                        duration: .3,
                        delay: (7*durationFactor)+(11*durationFactor)+(4*durationFactor)+(2*durationFactor)+(1*durationFactor)+.6,
                        from: 'top',
                    }}
                />
          </div>
      </section>



        {/* crea una seccion con el titulo "para quien es esta formacion?" donde muestres 3 cartitas mencionando caracteristicas de mi user target */}
        <section className="bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-12">
                <div className="mb-8 lg:mb-16">
                    <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-100 dark:text-white">¿Para quién es esta formación?</h2>
                    {/* <p className="text-center text-gray-200 sm:text-xl dark:text-gray-400">Para cualquier persona que quiera entender a fondo el funcionamiento de los algoritmos de AI y ML.</p> */}
                </div>
                <div className="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className='w-full h-64 mb-2 bg-orange-100 relative'>
                            <Image  src={developerImage}  alt=""  layout='fill' objectFit='cover' objectPosition='center' />
                            <div
                            style={
                            {
                            position: 'absolute',
                            top:0,
                            left:0,
                            right:0,
                            bottom:0,
                            // linear gradient from top to bottom from transparent to background color of the section
                            // background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                            }
                            }
                            />
                        </div>
                        <h3 className="text-gray-50 mb-2 text-xl font-bold dark:text-white">Developers</h3>
                        <p className="text-gray-200 dark:text-gray-400">
                            Que quieran crear soluciones con AI y ML para sus apps y saber como funcionan las librerias que usan para sacarles el maximo provecho.
                        </p>
                    </div>
                    
                    <div>
                        <div className='w-full h-64 mb-2 bg-gray-200 relative'>
                            <Image  src={techiesImage}  alt=""  layout='fill' objectFit='cover' objectPosition='center' />
                        </div>
                        <h3 className="text-gray-50 mb-2 text-xl font-bold dark:text-white">Nerds</h3>
                        <p className="text-gray-200 dark:text-gray-400">
                            Interesados en AI/ML. Si tienes discusiones con tus amigos de que si Skynet nos va a dominar o no, esta formacion es para ti.
                        </p>
                    </div>
                    
                    <div>
                        <div className='w-full h-64 mb-2 bg-gray-200 relative'>
                            <Image  src={starkTeslaImage}  alt=""  layout='fill' objectFit='cover' objectPosition='center' />
                        </div>
                        <h3 className="text-gray-50 mb-2 text-xl font-bold dark:text-white">Starks y Teslas</h3>
                        <p className="text-gray-200 dark:text-gray-400">
                            Que quieran crear el Jarvis o el Ready Player One de la vida real.
                        </p>
                    </div>
                </div>
            </div>
        </section>



      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-12">
            <div className="mb-8 lg:mb-16">
                <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">¿Qué contenido encontrarás en el curso?</h2>
                {/* <p className="text-center text-gray-500 sm:text-xl dark:text-gray-400">Vamos a analizar a fondo las 3 bases de la AI: Álgebra lineal, Estadística y Cálculo.</p> */}
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div className='w-full h-64 bg-gray-900 mb-2 justify-center items-center flex rounded-2xl'>
                        <LinearAlgebraAnimation />
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Álgebra lineal</h3>
                    <p className="text-gray-500 dark:text-gray-400">Sirve para tomar cosas o fenómenos de la realidad y transformar sus características a un formato que la máquina pueda entender, procesar y manipular.</p>
                    {/* create a list with 5 items */}
                    <ul className="mt-4 space-y-2 text-base px-2">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Vectores y operaciones esenciales</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Combinaciones lineales</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Transformaciones lineales</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Sistemas de ecuaciones</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Producto cruz y producto punto</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Vectores y valores propios</p>
                        </li>
                    </ul>
                </div>
                
                <div className='pt-12 md:pt-0'>
                    <div className='w-full h-64 bg-gray-900 mb-2 justify-center items-center flex rounded-2xl'>
                        <CalculusAnimation />
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Cálculo</h3>
                    <p className="text-gray-500 dark:text-gray-400">El cálculo permite analizar el cambio y la variación en diferentes contextos. En el ámbito de la IA/ML, se emplea para optimizar algoritmos, haciéndolos más eficientes y precisos.</p>
                    <ul className="mt-4 space-y-2 text-base px-2">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Conceptos clave</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Calculo Integral</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Calculo diferencial</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Calculo de una sola variable</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Calculo multivariable</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Calculo Vectorial</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Algebra Linear y Calculo</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Tecnicas de optimizacion</p>
                        </li>
                    </ul>
                </div>
                
                
                <div className='pt-12 md:pt-0'>
                    <div className='w-full h-64 bg-gray-900 mb-2 justify-center items-center flex rounded-2xl'>
                        <MLAlgorithmsAnimation />
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Deep dive en los algortimos de AI y ML</h3>
                    <p className="text-gray-500 dark:text-gray-400">Vamos a analizar a fondo los algoritmos de AI y ML, como funcionan, que problemas resuelven y como se implementan.</p>
                    <ul className="mt-4 space-y-2 text-base px-2">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Regresion lineal y logistica</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">K-means clustering</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Support vector machines</p>
                        </li>
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <p className="ml-1 text-gray-500 dark:text-gray-400">Redes neuronales</p>
                        </li>
                    </ul>

                </div>



            </div>
        </div>
      </section>

      {/* create a section with a button on the center as a CTA */}
      <section className="bg-gray-900 pt-10">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-screen md:h-auto flex flex-col justify-center items-center">
            <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-100">Si estas ansioso por aprender de forma rapida y eficaz sin perder el tiempo en teoria innecesaria esto es para ti</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-950 rounded-lg bg-slate-50 hover:bg-slate-100 focus:ring-slate-200">
                    SUDO START
                </a>
            </div>
        </div>
      </section>


      <section className='px-3 md:px-12 pt-10 pb-32'>
        {/* add a title "preguntas frecuentes" */}
        <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Preguntas frecuentes</h2>
        {
          faqs.map((faq, index) => <FAQDrodown question={faq.question} answer={faq.answer} /> )
        }
      </section>


      {/* agrega una seccion tituluda "quien soy y porque puedo ayudarte?" que sea una seccion con 2 columnas, de un lado una foto y del otro una breve descripcion  */}
      <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-12">
                <div className="mb-8 lg:mb-16">
                    <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">¿Quién soy y por qué puedo ayudarte?</h2>
                    <p className="text-center text-gray-500 sm:text-xl dark:text-gray-400">Soy un FullStack Developer con 4 años de experiencia en el desarrollo de apps web y mobiles.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div>
                        <div className='w-full h-96 bg-gray-200 mb-2'>

                        </div>
                    </div>
                    
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">
                            Mi objetivo es simple: Ayudar a la mayor cantidad de personas a traves de la tecnologia. Quiero que todos saquen su nerd interior y se animen a aprender cosas nuevas y cambiar el mundo (tanto para si mismos como para los demas).
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}



export default Landing