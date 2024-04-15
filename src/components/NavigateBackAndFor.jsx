"use client"
import { useRouter } from "next/navigation";
import { IoArrowForwardOutline, IoArrowBackwardOutline } from "react-icons/io5";

const NavigateBackAndFor = () => {
  const router = useRouter();
  const handleForward = () => {
    router.forward()
  }
  const handleBackward = () => {
    router.back()
  }


  return (
    <div className='flex items-center gap-7'>
      <button onClick={handleBackward}>
        <IoArrowBackwardOutline/>
      </button>
      <button onClick={handleForward}>
      <IoArrowForwardOutline/>
      </button>
    </div>
  )
}

export default NavigateBackAndFor
