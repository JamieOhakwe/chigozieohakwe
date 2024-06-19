import Business from "@/components/Business/Business";
import Navbar from "@/components/NavBar";
import Section from "@/components/Section/Section";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import StudentProfile from "@/components/StudentProfile/StudentProfile";
import Image from "next/image";
import Project2 from "@/components/Projects/Project2";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Section/>
      <Skills/>
      <Projects/>
      <Project2/>
      {/* <StudentProfile/> */}
      <Business/>
      
    </>
  );
}
