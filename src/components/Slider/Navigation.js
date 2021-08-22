import React from 'react'
import Arrow from '@/assets/arrow.svg'

const Navigation = ({
  onClickLeft,
  onClickRigth,
  currentIndex,
  length
}) => (
  <div className="w-64 grid grid-cols-2 bg-blue-cobalt text-white items-center text-center">
    <div className="border-white border-r-2 py-5 text-xl font-cormorant-semibold-italic tracking-widest">
      {`${currentIndex + 1}/${length}`}
    </div>
    <div className="text-xl grid grid-cols-2">
      <button
        className="flex justify-center cursor-pointer"
        onClick={onClickLeft}>
        <Arrow width={20} height={20} />
      </button>
      <button className="flex justify-center transform rotate-180 cursor-pointer" onClick={onClickRigth}>
        <Arrow width={20} height={20} />
      </button>
    </div>
  </div>
)

export default Navigation
