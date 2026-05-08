import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { SLIDES } from '../data/staticData'

export default function Carousel() {
  const [idx, setIdx] = useState(0)

  const go = useCallback((i) => {
    setIdx(((i % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => go(idx + 1), 5000)
    return () => clearInterval(timer)
  }, [idx, go])

  return (
    <div className="relative w-full overflow-hidden bg-navy-2"
      style={{ height: 'calc(100vh - 68px)', minHeight: '480px', maxHeight: '700px' }}>

      {/* Track */}
      <div
        className="carousel-track flex h-full"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />

            {/* Content — sepenuhnya center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg w-full">
                {slide.title}
              </h1>
              <p className="text-white/85 text-sm sm:text-base md:text-lg mb-8 max-w-xl w-full">
                {slide.sub}
              </p>
              <a
                href="https://uib.ac.id"
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-navy font-bold px-8 py-3 rounded-lg hover:bg-cyan-2 hover:text-white transition-all shadow-lg"
              >             
                Daftar Sekarang!
							</a>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next — hidden on very small, visible sm+ */}
      <button
        onClick={() => go(idx - 1)}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm text-white text-lg sm:text-xl hover:bg-white/35 transition-colors flex items-center justify-center z-10"
        aria-label="Sebelumnya"
      >‹</button>
      <button
        onClick={() => go(idx + 1)}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm text-white text-lg sm:text-xl hover:bg-white/35 transition-colors flex items-center justify-center z-10"
        aria-label="Berikutnya"
      >›</button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all ${
              i === idx
                ? 'bg-white w-4 h-3 sm:w-5 sm:h-3.5'
                : 'bg-white/40 w-3 h-3 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}