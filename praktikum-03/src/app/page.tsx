import Profile from "../components/profile"
import Image from "next/image";
import { Gallery } from "@/components/gallery";
import Bio from "@/components/bio";
import ToDoList from "@/components/todolist";
export default function Home() {
  return (
    <main className="flex flex-col items-center ">

      <p className="justify-center mt-36">Ilmuwan yang istimir wong</p>
      {/* <div className="flex mt-32">
      <Profile/>
      <div className="mx-96">
      <Profile/>
      </div>
      <Profile/>
      </div> */}
      <ToDoList/>
      <Bio/>
      <Gallery/>

    </main>
  );
}
