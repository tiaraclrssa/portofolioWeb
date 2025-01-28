import Image from "next/image";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen mt-[80px]">
      <div className="flex flex-row items-center ml-10">
        <Image
          className="ml-38"
          src="/heroSection3.png"
          alt="heroSection"
          width={500}
          height={400}
        />
        <div className=" flex flex-col mt-14">
          <div className="p-10 text-gray-700 font-bold text-5xl ml-44 bg-yellow-50">
            <h1>hi!</h1>
            <p>Welcome to</p>
            <p> My portofolio web.</p>
          </div>
          <div className="flex flex-row text-gray-900 mt-4 ml-[200px]">
            <p>I'm Tiara Suci Clarissa, a Fullstack Web Developer.</p>
            <button className="bg-gray-700 text-gray-50 w-24 rounded-sm ml-1">
              {" "}
              read more{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        id="AboutMe"
        className="flex flex-row h-screen bg-gray-100 text-gray-900 items-center justify-center gap-2"
      >
        <div className="flex flex-col text-md">
          <h1 className="font-bold text-5xl mt-12 ">
            About <span className="text-gray-700">Me.</span>
          </h1>
          <p className="font-bold mt-10 ">"I'm a full stack web developer,</p>
          <p> building interactive and responsive websites.</p>
          <p>
            {" "}
            a specialization in{" "}
            <span className="font-bold">JavaScript, React, and Next.js.</span>
          </p>
          <p> I am very excited to create imaginative solutions</p>
          <p> that provide engaging and functional experiences for users.</p>
          <p>
            {" "}
            I am very enthusiastic to follow trends in the field of{" "}
            <span className="font-bold">technology.</span>
          </p>
        </div>
        <div className="relative w-[300px] h-[300px] group">
          <Image
            className="absolute object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-full mt-10"
            src="/myPhoto.png"
            alt="myPhoto"
            width={500}
            height={500}
          />
          <Image
            className="absolute object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full mt-10"
            src="/avatar.png"
            alt="photoAsli"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="font-bold text-xl  mt-24 ml-7">My education:</h1>
          <div className="flex flex-row gap-8">
            <Image
              src="/purwadhika.png"
              alt="purwadhika"
              width={320}
              height={50}
            />
            <Image
              src="/ihyaAssunnah.png"
              alt="ihyaAssunnah"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="h-screen bg-gray-100 flex items-center justify-center flex-col text-gray-700 text-md ">
        <h1 className="text-5xl font-bold mb-7">
          <span className="text-gray-500">Let's</span> Connect.
        </h1>
        <p>
          I'd love to hear from you! Whether you have{" "}
          <span className="bg-gray-700 text-gray-50 p-1">
            questions, feedback, or just want to connect,
          </span>{" "}
          feel free to reach out.{" "}
          <span className="bg-gray-700 p-1 text-gray-50">
            Let's start a conversation!
          </span>
        </p>
        <div className="flex flex-row mt-11 text-5xl gap-5">
          <a
            href="https://github.com/tiaraclrssa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/tiaraclrssaa_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://discord.com/users/1286694649343250443"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://id.linkedin.com/in/tiaraclrssaa"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <FaLinkedin />
        </div>
      </div>
      <Footer />
    </div>
  );
}
