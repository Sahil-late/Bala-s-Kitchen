import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = ({ className = '' }) => {
    const navigate = useNavigate();
    const btnClick = (target) =>{
        navigate(`/${target}`);
    }
    return (
        <div className="center flex justify-center">
            <nav className={`${className} w-[90%] bg-[rgba(255,255,255,0.18)] p-2 flex justify-between shadow-[4px_7px_9px_rgba(0,0,0,0.6)]`}>
                <div className="log">
                    <img className='drop-shadow-[1px_3px_4px_rgba(0,0,0,0.7)]' src="logo.png" alt="logo" />
                </div>
                <div className="btns gap-2 flex items-center px-2
">
                    <button onClick={()=> btnClick('Recipies')}  className="text-white rounded-lg relative hover:py-[3.5px] p-1 px-2 hover:bg-[linear-gradient(135deg,_#EA2011,_#EA5110,_#ECE80C)] bg-[rgba(255,255,255,0.3)] shadow-[3px_5px_7px_rgba(0,0,0,0.7)]">
                        Recipies
                        <span className='absolute left-0 top-0 bg-[#EA2011] w-0.5 h-full rounded-full'></span>
                        <span className='absolute right-0 top-0  w-0.5 h-full bg-[#eae60f] rounded-full'></span>
                        <span className='absolute top-0 left-0  w-full h-0.5 bg-[linear-gradient(to_right,_#EA2011,_#EA5110,_#ECE80C)] rounded-full'></span>
                        <span className='absolute bottom-0 left-0  w-full h-0.5 bg-[linear-gradient(to_right,_#EA2011,_#EA5110,_#ECE80C)] rounded-full'></span>
                    </button>
                    <button onClick={()=> btnClick('Information')} className="text-white rounded-lg relative hover:py-[3.5px] p-1 px-2 hover:bg-[linear-gradient(135deg,_#EA2011,_#EA5110,_#ECE80C)] bg-[rgba(255,255,255,0.3)] shadow-[3px_5px_7px_rgba(0,0,0,0.7)]">
                        Information
                        <span className='absolute left-0 top-0 bg-[#EA2011] w-0.5 h-full rounded-full'></span>
                        <span className='absolute right-0 top-0  w-0.5 h-full bg-[#fffb03] rounded-full'></span>
                        <span className='absolute top-0 left-0  w-full h-0.5 bg-[linear-gradient(to_right,_#EA2011,_#EA5110,_#ECE80C)] rounded-full'></span>
                        <span className='absolute bottom-0 left-0  w-full h-0.5 bg-[linear-gradient(to_right,_#EA2011,_#EA5110,_#ECE80C)] rounded-full'></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
