import Image from "next/image";
import Index from "@/components/pages/index";
export default function Home() {
  const ser = async(data)=>{
    'use server'
    return {'chal0':555}
  }
  return (
    <>
    <Index ser={ser}/>
    </>
  );
}
