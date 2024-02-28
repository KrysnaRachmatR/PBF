import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import ToDoList from "@/components/todolist";
import Bio from "@/components/bio";
import Avatar from "@/components/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="justify-center mt-36">Ilmuwan yang istimewa</p>
      <Gallery/>
      <ToDoList/>
      <Bio/>
      <Avatar/>
    </main>
  );
}

      {/* <div className="flex mt-32">
      <Profile/>
      <div className="mx-96">
      <Profile/>
      </div>
      <Profile/>
    </div> */}