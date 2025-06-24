import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" flex justify-center w-full  bg-zinc-900 text-[#9C9C9C] p-4 fixed bottom-0">
          <p className=" flex gap-3 items-center ">Made with <FaHeart className=" text-red-500 " /></p>
        </footer>
        );  
  }
  