import React from 'react'
import { useRef,useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLocation  } from 'react-router-dom'

const App = ({ className }) => {
  const params = useLocation();
  const taste = useRef(null);
  const info = useRef(null);
  useEffect(()=>{
    if(params.pathname === '/Information'){
      info.current.scrollIntoView({behavior:'smooth'})
    }
    else{
      taste.current.scrollIntoView({behavior:'smooth'})
    }
    console.log(params.pathname);
    
  },[params.pathname])
  const recipies = [
    { title: 'मटन हंडी', image: 'mottonHandi.png' },
    { title: 'चिकन हंडी', image: 'chickenHandi.png' },
    { title: 'चिकन सुक्का', image: 'chickenSukka.png' },
    { title: 'चिकन तवा फ्राय', image: 'chickenFry.png' }
  ]



  return (
    <>
      <div className='h-dvh w-dvw bg-black relative'>
        <Navbar className={`${className} text-blue-500 fixed top-8 border border-amber-100 rounded-4xl z-10`} />
        <div className="bg bg-[url('bg/download.jpg')] h-full w-full bg-no-repeat bg-center bg-cover">
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
              <span ref={info} className='text-glow-green text-yellow-500'>माहिती</span>
            </div>
            <div className="infoCard border w-[90%] mx-auto my-5 bg-[rgba(0,0,0,0.6)] flex flex-col gap-5 items-center p-1 py-3 rounded shadow-[_0px_0px_6px_5px_rgba(0,0,0,0.9)] border-gray-100">
              <h2 className='text-pink-300 text-center underline underline-offset-3 decoration-amber-900'>अस्सल खानदेशी घरगुती जेवण</h2>
              <p className='text-amber-300 text-center'>आमच्या येथे घरगुती पद्धतीने अस्सल खानदेशी चव असलेले
                शाकाहारी आणि मांसाहारी जेवणाच्या ऑर्डर स्वीकारल्या जातात.</p>
              <div className="speciality flex flex-col text-amber-100 items-center gap-2">
                <span>आमची स्पेशालिटी:</span>
                <span>🍗 चिकन तवा फ्राय – कुरकुरीत आणि स्वादिष्ट</span>
                <span>🍖 स्पेशल काळा रस्सा – मसालेदार आणि दमदार</span>
                <span>🍲 चिकन हंडी – पारंपरिक चव</span>
                <span>🍛 मटण स्पेशल दम बिर्याणी – खमंग सुगंध आणि रसदार</span>
                <span>🍗🥩 चिकन / मटण – ताजेतवाने आणि मऊ</span>
              </div>
              <div className="tip text-green-300 text-center">
                टीप: कृपया ऑर्डर करण्यापूर्वी संपर्क करा, जेणेकरून आम्ही तुमच्यासाठी ताजेतवाने जेवण तयार करू शकू.
              </div>
            </div>
          </div>
          </div>
        <Footer />
      </div>
    </>
  )
}

export default App
