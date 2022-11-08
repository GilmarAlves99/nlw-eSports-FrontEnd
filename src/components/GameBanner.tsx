interface GameBannerProps {

  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className='relative rounded-lg overflow-hidden'>
      <img src={props.bannerUrl} alt="" />
      <div className="w-full  pt-16 pb-4 px-4 bg-game-gradient absolute left-0 bottom-0 right-0">
        <strong className='text-white text-base block font-bold'>{props.title}</strong>
        <span className='text-zinc-300 block text-sm ' >{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}