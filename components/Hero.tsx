'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const slides = [
  {
    title: "Iglesia Bautista Vida Eterna",
    subtitle: '"Una Iglesia que te transforma."',
    image: "/hero/hero1.jpg",
    cta: "Ultimo Sermon",
    href: '/sermones'
  },
  {
    title: "Visitanos",
    subtitle: "",
    image: "/hero/hero2.jpg",
    cta: "Direccion",
    href: '/contact'
  }
]

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return (
    <section className="slider-container max-w-[1600px] mx-auto -mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 flex flex-col items-center justify-end pb-28 h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <Link href={slide.href}>
                  <button className="bg-transparent outline outline-1 outline-white  shadow-white shadow-inner hover:bg-black/50 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
                    {slide.cta}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </ section>
  )
}

