"use client"

import React, { CSSProperties, forwardRef, useRef, useMemo } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

// Helper type that makes all properties of CSSProperties accept number | string
type CSSPropertiesWithValues = {
  [K in keyof CSSProperties]: string | number
}

interface StyleValue<T extends keyof CSSPropertiesWithValues> {
  from: CSSPropertiesWithValues[T]
  to: CSSPropertiesWithValues[T]
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string
  styles: Partial<{
    [K in keyof CSSPropertiesWithValues]: StyleValue<K>
  }>
  containerRef: React.RefObject<HTMLDivElement>
  radius?: number
  falloff?: "linear" | "exponential" | "gaussian"
}

const Letter = ({
  letter,
  containerRef,
  styles,
  radius,
  falloff
}: {
  letter: string
  index: number
  containerRef: React.RefObject<HTMLDivElement>
  styles: TextProps['styles']
  radius: number
  falloff: "linear" | "exponential" | "gaussian"
}) => {
  const letterRef = useRef<HTMLSpanElement>(null)
  const mousePositionRef = useMousePositionRef(containerRef)
  const proximity = useMotionValue(0)

  const transformStyle = useTransform(
    proximity,
    [0, 1],
    [styles?.transform?.from || "scale(1)", styles?.transform?.to || "scale(1)"]
  )

  const colorStyle = useTransform(
    proximity,
    [0, 1],
    [styles?.color?.from || "#000", styles?.color?.to || "#000"]
  )

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const calculateFalloff = (distance: number): number => {
    const normalizedDistance = Math.min(Math.max(1 - distance / radius, 0), 1)

    switch (falloff) {
      case "exponential":
        return Math.pow(normalizedDistance, 2)
      case "gaussian":
        return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2)
      case "linear":
      default:
        return normalizedDistance
    }
  }

  useAnimationFrame(() => {
    if (!containerRef.current || !letterRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const rect = letterRef.current.getBoundingClientRect()

    const letterCenterX = rect.left + rect.width / 2 - containerRect.left
    const letterCenterY = rect.top + rect.height / 2 - containerRect.top

    const distance = calculateDistance(
      mousePositionRef.current.x,
      mousePositionRef.current.y,
      letterCenterX,
      letterCenterY
    )

    const proximityValue = calculateFalloff(distance)
    proximity.set(proximityValue)
  })

  return (
    <motion.span
      ref={letterRef}
      className="inline-block"
      style={{
        transform: transformStyle,
        color: colorStyle
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  )
}

const TextCursorProximity = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      label,
      styles,
      containerRef,
      radius = 400,
      falloff = "linear",
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const words = useMemo(() => label.split(" "), [label])
    let letterIndex = 0

    return (
      <span
        ref={ref}
        className={`${className} inline`}
        onClick={onClick}
        {...props}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter) => {
              const currentLetterIndex = letterIndex++
              return (
                <Letter
                  key={currentLetterIndex}
                  letter={letter}
                  index={currentLetterIndex}
                  containerRef={containerRef}
                  styles={styles}
                  radius={radius}
                  falloff={falloff}
                />
              )
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    )
  }
)

TextCursorProximity.displayName = "TextCursorProximity"
export default TextCursorProximity
