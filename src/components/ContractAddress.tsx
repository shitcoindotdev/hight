import React, { useState } from 'react'
import Image from 'next/image'

function ContractAddress({
  contractAddress,
  className,
  style,
}: {
  contractAddress: string
  className?: string
  style?: object
}) {
  const [showToast, setShowToast] = useState(false)

  function copyOnClick(e: any) {
    e.preventDefault()

    if (contractAddress) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(contractAddress)
          .then(() => {
            setShowToast(true)
            setTimeout(() => {
              setShowToast(false)
            }, 1337)
          })
          .catch((err) => {
            console.error('Could not copy text: ', err)
          })
      } else {
        // Fallback if navigator.clipboard is not supported
        const textArea = document.createElement('textarea')
        textArea.value = contractAddress
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setShowToast(true)
        setTimeout(() => setShowToast(false), 1337)
      }
    }
  }

  function truncateMiddle(
    string: string,
    frontChars: number,
    endChars: number,
  ) {
    if (string.length <= frontChars + endChars) {
      return string
    }
    return `${string.slice(0, frontChars)}...${string.slice(-endChars)}`
  }

  const truncatedAddress = truncateMiddle(contractAddress, 6, 4)

  return (
    <div className="flex flex-col -mt-1.5 items-center justify-center">
      <div
        className={`flex items-center bg-neutral-200 backdrop-blur-md justify-center rounded-md  px-2 py-1 text-xs md:text-sm text-black transition-all duration-[168ms] ease-in-out ${showToast ? '-translate-y-0.5 opacity-100' : 'translate-y-2 opacity-0'}`}
      >
        Address copied{' '}
        <Image
          className="w-auto h-3 md:h-[16px] max-w-fit"
          src="/check.svg"
          width="80"
          height="80"
          alt="copy icon"
        />
      </div>
      <div
        onClick={copyOnClick}
        className={`flex cursor-pointer items-center justify-center gap-2 px-4 py-0.5 ${className}`}
        style={style}
        aria-live="polite" // For screen readers to announce changes
      >
        <Image
          className="h-[18px] w-auto max-w-fit"
          src="/copy.svg"
          width="80"
          height="80"
          alt="copy icon"
        />
        <span className="text-[12px] sm:text-[18px]">{truncatedAddress}</span>
      </div>
    </div>
  )
}

export default ContractAddress
