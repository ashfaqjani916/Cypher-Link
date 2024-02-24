import { CryptoTable } from '@/components/CryptoTable'
import { ProjectCard } from '@/components/ProjectCard'

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <img className='object-cover h-48 rounded-2xl' src="https://e1.pxfuel.com/desktop-wallpaper/956/692/desktop-wallpaper-valley-landscape-aesthetic-mountains-nature-aesthetic-landscape-purple.jpg" alt="" />
      <div className='flex flex-wrap items-center justify-start gap-5'>
      <ProjectCard
        title="Renewable Energy Innovation"
        description="Support the development of a groundbreaking renewable energy solution that aims to revolutionize the way we harness and utilize clean energy."
        imageSrc="https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg"
        target={2000}
        currentFunding={1200}
      />
      <ProjectCard
        title="Renewable Energy Innovation"
        description="Support the development of a groundbreaking renewable energy solution that aims to revolutionize the way we harness and utilize clean energy."
        imageSrc="https://e1.pxfuel.com/desktop-wallpaper/189/656/desktop-wallpaper-beautiful-landscape-aesthetic-landscape-purple.jpg"
        target={2000}
        currentFunding={1200}
      />

      </div>
      <CryptoTable/>
    </div>
  )
}
