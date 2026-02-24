import React from 'react'
import { useRef,useEffect,useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Info from './components/NewInfo'
import { secContext } from './context/contexApi'


const App = ({ className }) => {
  const {scroll} = useContext(secContext)
  
  
  const content = useRef(null);
  const taste = useRef(null);
  
  const recipies = [
    { title: 'मटन हंडी', image: 'mottonHandi.png' },
    { title: 'चिकन हंडी', image: 'chickenHandi.png' },
    { title: 'चिकन सुक्का', image: 'chickenSukka.png' },
    { title: 'चिकन तवा फ्राय', image: 'chickenFry.png' }
  ]

  useEffect(()=>{
    if(scroll === 'Recipies'){
      taste.current?.scrollIntoView({behavior: "smooth"})
    }
    if(scroll === 'Information'){
      content.current?.scrollIntoView({behavior: "smooth"})
    }
  },[scroll])


  return (
    <>
      <div className='h-dvh w-dvw bg-black relative'>
        <Navbar className={`${className} text-blue-500 fixed top-8 border border-amber-100 rounded-4xl z-10`} />
        <div className="bg bg-[url('/bg/download.jpg')] h-full w-full bg-no-repeat bg-center bg-cover">
          <div className="logo absolute top-0 left-0 h-full w-full flex justify-center items-center z-5 ">
            <img className='w-[95%] sm:w-[50%]' src="pageLogo.png" alt="" />
          </div>
          <div className="content absolute left-0 h-[80%] w-full z-6 overflow-auto bottom-0 scroll pb-15">
            <div className="taste font-extrabold text-xl [-webkit-text-stroke:_0.6px_red] mx-auto w-fit px-5 py-1 bg-[rgba(255,255,255,0.2)] rounded-full shadow-[_3px_5px_7px_rgba(0,0,0,0.8)]">
              <span ref={taste} className='text-glow-red text-yellow-300'>अस्सल खान्देशी चव</span>
            </div>
            <div className="recipies flex gap-2.5 flex-wrap justify-center py-5 px-2 text-sm text-amber-100">
              {recipies.map((recipe, id) => (
                <div key={id} className="card flex w-45 h-20 justify-around items-center p-1 border-2 border-amber-300 rounded-xl bg-[rgba(0,0,0,0.6)]">
                  <img height='40%' width='40%' src={`recipies/${recipe.image}`} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </div>
              ))}
            </div>
            <div className="line border-2 mx-auto my-2 mb-5 w-[90%] border-orange-400 rounded-4xl shadow-[_0px_0px_5px_3px_black]"></div>
            <div className="taste font-extrabold text-xl [-webkit-text-stroke:_0.6px_red] mx-auto w-fit px-5 py-1 bg-[rgba(255,255,255,0.2)] rounded-full shadow-[_3px_5px_7px_rgba(0,0,0,0.8)]">
              <span ref={content} className='text-glow-green text-yellow-500'>माहिती</span>
            </div>
            <Info/>
          </div>
          </div>
        <Footer />
      </div>
    </>
  )
}

export default App
