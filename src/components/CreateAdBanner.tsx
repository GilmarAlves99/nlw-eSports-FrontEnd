import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog"

export function CreateAdBanner() {
  return (
    <div className='self-stretch rounded-lg bg-nlw-gradient pt-1 overflow-hidden  mt-8  ' >
      <div className=' bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
          <span className='text-base text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='bg-violet-500 hover:bg-violet-600 py-3 px-4 text-white rounded items-center flex gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anuncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}