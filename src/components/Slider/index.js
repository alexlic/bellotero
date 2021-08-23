import React, { useState } from 'react'
import Navigation from './Navigation'

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!slides || !slides.length) return null

  const handleOnClickRigth = () => {
    if (currentSlide < slides.length -1) setCurrentSlide(current => current + 1)
  }

  const handleOnClickLeft = () => {
    if (currentSlide > 0) setCurrentSlide(current => current - 1)
  }

  return (
    <div className="relative w-10/12 bg-white p-10">
      <div className="flex flex-row">
        <div className="w-1/3">
          <h3 className="text-3xxl text-gray-900">{slides[currentSlide].name}</h3>
          <p className="text-gray-400 font-roboto-regular">{slides[currentSlide].position}</p>
        </div>
        <div className="w-2/3 text-2xl">
          <p>{`"${slides[currentSlide].comment}"`}</p>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-20">
        <Navigation
          currentIndex={currentSlide}
          length={slides.length}
          onClickRigth={handleOnClickRigth}
          onClickLeft={handleOnClickLeft}
        />
      </div>
    </div>
  )
}

export default Slider
