import React from 'react'

function NewInfo() {
    return (
        <div className="info w-[90%]  my-5  mx-auto   relative rounded-2xl shadow-[_0px_0px_5px_3px_black] ">
            <div className="bg w-full h-full bg-[url('/bg/info.svg')] bg-cover bg-center bg-no-repeat  rounded-2xl">
                <div className="logo w-[70%] sm:w-[45%] mx-auto flex justify-center items-center  rounded-t-2xl m-4 pt-4">
                    <img src="infoLogo.png" alt="logo" />
                </div>
                <div className="info w-[80%] mx-auto font-bold">
                    <p className='text-white text-center'>आमच्या येथे घरगुती पद्धतीने अस्सल खानदेशी चव असलेले
                        शाकाहारी आणि मांसाहारी जेवणाच्या ऑर्डर स्वीकारल्या जातात.</p>
                </div>
                <div className="spciality">
                    <div className="speciality flex flex-col text-amber-100 items-center gap-2 mt-5">
                        <span>आमची स्पेशालिटी:</span>
                        <span>🍗 चिकन तवा फ्राय – कुरकुरीत आणि स्वादिष्ट</span>
                        <span>🍖 स्पेशल काळा रस्सा – मसालेदार आणि दमदार</span>
                        <span>🍲 चिकन हंडी – पारंपरिक चव</span>
                        <span className='w-[90%] text-center'>🍛 मटण स्पेशल दम बिर्याणी – खमंग सुगंध आणि रसदार</span>
                        <span>🍗🥩 चिकन / मटण – ताजेतवाने आणि मऊ</span>
                    </div>
                </div>
                <div className="tip text-green-300 text-center m-5">
                    टीप: कृपया ऑर्डर करण्यापूर्वी संपर्क करा, जेणेकरून आम्ही तुमच्यासाठी ताजेतवाने जेवण तयार करू शकू
                </div>
                <div className="address  w-full flex justify-between px-2 bg-amber-50">
                    <span >पत्ता: 123, खान्देशी मार्ग, पुणे</span>
                    <span >संपर्क: 9876543210</span>
                </div>
            </div>

        </div>
    )
}

export default NewInfo