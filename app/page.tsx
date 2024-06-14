"use client"
import {TopAd, Nav,Hero,GalleryRow,MenuSection,Experience,CardsRow,JoinRewards,FindLocation,Footer} from "@/components";

export default function Home() {
  return (
    <div className="bg-gray-900">
    <div className="max-w-[95rem] min-h-screen border-2 border-black m-auto bg-white">
      <TopAd/>
      <Nav/>
      <Hero/>
      <GalleryRow/>
       <MenuSection/>
      {/* <Experience/> */}
      <CardsRow/>
      <JoinRewards/>
      <FindLocation/>
      <Footer/> 
    </div>
    </div>
  );
}
