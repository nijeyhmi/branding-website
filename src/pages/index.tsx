// src/pages/index.tsx
import Header from "@/components/Header";
import Main from "@/sections/Main";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Guide from "@/sections/Guide";
import Shop from "@/sections/Shop";
import Video from "@/sections/Video";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="m-auto">
      <Header aboutRef={aboutRef} videoRef={videoRef} shopRef={shopRef} guideRef={guideRef} contactRef={contactRef} />
      <main>
        <Main />
        <About refItem={aboutRef} />
        <Video refItem={videoRef} />
        <Shop refItem={shopRef} />
        <Guide refItem={guideRef} />
        <Contact refItem={contactRef} />
      </main>
    </div>
  );
}
