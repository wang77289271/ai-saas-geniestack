import React, { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  containerHeight?: string
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  containerHeight = 'auto',
}) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isTyping, setIsTyping] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(
      () => {
        const word = words[currentIndex % words.length]

        if (isTyping) {
          // Typing mode
          if (displayedText.length < word.length) {
            setDisplayedText((prevText) => prevText + word[prevText.length])
          } else {
            // Finished typing, switch to deleting mode
            setIsTyping(false)
          }
        } else {
          // Deleting mode
          if (displayedText.length > 0) {
            setDisplayedText((prevText) => prevText.slice(0, -1))
          } else {
            // Finished deleting, switch to typing mode for the next word
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
            setIsTyping(true)
          }
        }
      },
      isTyping ? typingSpeed : deletingSpeed
    )

    return () => clearInterval(interval)
  }, [currentIndex, displayedText, isTyping, typingSpeed, deletingSpeed, words])

  return (
    <span
      style={{
        display: 'inline-block',
        height: containerHeight,
        overflow: 'hidden',
      }}
    >
      {displayedText}
    </span>
  )
}

export default Typewriter
