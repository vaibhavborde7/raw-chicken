import Image from "next/image";
import AboutUsComponent from "@/components/globals/Aboutus";
import Header from "@/components/globals/Header";
export default function Home() {
  return (
    <div>
      <Header/>
      <AboutUsComponent/>
      
    </div>
  );
}
