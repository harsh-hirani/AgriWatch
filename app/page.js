
import Index from "@/components/pages/index";
import News from "@/components/pages/news";
export default function Home() {
  const ser = async(data)=>{
    'use server'
    return {'chal0':555}
  }
  return (
    <>
<<<<<<< HEAD
    <Index />
=======
    <News />
>>>>>>> f0fa1242aa6800707b67655432fdd93e46f77cdc
    </>
  );
}
