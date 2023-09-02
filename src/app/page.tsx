"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { UilWhatsapp, UilMapMarker, UilStore } from '@iconscout/react-unicons'

export default function Home() {
const revealRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const currentElement = revealRef.current;

    if (currentElement) {
        currentElement.classList.add('active');
    }

    return () => {
        if (currentElement) {
            currentElement.classList.remove('active');
        }
    };
}, []);

  return (
    <div className="container mx-auto bg-[#F2EFEA] max-w-xl min-h-screen flex flex-col items-center justify-center">
      <div className="reveal flex flex-col items-center -mt-14" ref={revealRef}>
      <div className="w-52 h-52 rounded-full border-4 border-[#DEBFAA] overflow-hidden mb-1">
        <Image
          width={500}
          height={500}
          src="/images/me.jpg"
          alt="meu texto"
          className="w-60 h-60 object-cover"
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-light italic ">Dra. Patricia Beckmann</h2>
        <p className="text-sm font-light italic">estética dental e endodontia</p>
      </div>

      <div className="space-y-6">
          <a href="https://wa.me/5555997324811"
            className="flex items-center gap-2 bg-[#6B705C] hover:bg-[#987B6D] duration-150 text-white text-sm p-4 rounded-full">
            <UilWhatsapp size="17" />
            <span className="uppercase text-center">Agendamentos</span>
          </a>

          <a href="https://maps.app.goo.gl/nH8bAgSMBjKqD2B37?g_st=iw"
            className="flex items-center gap-2 bg-[#6B705C] hover:bg-[#987B6D] duration-150 text-white text-sm p-4 rounded-full">
            <UilMapMarker size="17" />
            <span className="uppercase text-center">Localização</span>
          </a>

          <a href="https://g.co/kgs/QTyGgm"
            className="flex items-center gap-2 bg-[#6B705C] hover:bg-[#987B6D] duration-150 text-white text-sm p-4 rounded-full">
          <UilStore size="17" />
            <span className="uppercase text-center">Avalie!</span>
          </a>
      </div>
      </div>
    </div>
  )
}
