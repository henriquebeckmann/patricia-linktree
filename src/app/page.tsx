import Image from 'next/image';
import { UilWhatsapp, UilMapMarker, UilStore } from '@iconscout/react-unicons'

export default function Home() {
  return (
    <div className="container mx-auto bg-white max-w-xl min-h-screen pt-6 flex flex-col items-center">
      <div className="w-52 h-52 rounded-full border-4 border-[#DEBFAA] overflow-hidden mb-1">
        <Image
          width={500}
          height={500}
          src="/me.jpg"
          alt="meu texto"
          className="w-60 h-60 object-cover"
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-xl tracking-widest">Dra. Patricia Beckmann</h2>
        <p className="text-md">estética dental e endodontia</p>
      </div>

      <div className="space-y-6">
        <a href="https://wa.me/5555997324811"
          className="flex gap-2 uppercase bg-[#6B705C] text-white p-4 rounded-full text-center">
          <UilWhatsapp />
          Agendamentos
        </a>
        <a href="https://maps.app.goo.gl/nH8bAgSMBjKqD2B37?g_st=iw"
          className="flex gap-2 uppercase bg-[#6B705C] text-white p-4 rounded-full text-center">
          <UilMapMarker />
          Localização
        </a>
        <a href="https://g.co/kgs/QTyGgm"
          className="flex gap-2 uppercase bg-[#6B705C] text-white p-4 rounded-full text-center">
          <UilStore />
          Alalie!
        </a>
      </div>
    </div>
  )
}
