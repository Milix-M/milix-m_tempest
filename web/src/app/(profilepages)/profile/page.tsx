import Image from "next/image";
import { BiSolidIdCard } from "react-icons/bi";
import { IoIosPin } from "react-icons/io";
import SkillsSet from "@/CustomSettings/SkillsSet";
import CareerTimeline from "@/CustomSettings/CareerTimeline";
import CertSet from "@/CustomSettings/CertSet";
import AIset from "@/CustomSettings/AISet";

export default function Profile() {
  return (
    <div>
      <h1 className="font-bold text-3xl sm:mb-10">Profile</h1>
      <div className="sm:flex justify-center">
        <div className="avatar p-10 flex justify-center">
          <div className="w-44 rounded-full">
            <Image
              width={2000}
              height={2000}
              src="/profile_img.jpg"
              alt={process.env.NEXT_PUBLIC_REALNAME as string}
              priority
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-center text-4xl font-bold pt-1">
            {process.env.NEXT_PUBLIC_REALNAME}
          </h1>
          <div className="pt-1 flex justify-center">
            <div className="flex justify-center">
              <IoIosPin className="w-8 mt-1" />
              <p>{process.env.NEXT_PUBLIC_LOCATION}</p>
            </div>
            <div className="flex justify-center">
              <BiSolidIdCard className="w-8 mt-1" />
              <p>{process.env.NEXT_PUBLIC_PROFESSION}</p>
            </div>
          </div>
          <div className="pt-8">
            <p className="work-break text-center">
              {process.env.NEXT_PUBLIC_BIO}
            </p>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h1 className="font-bold text-2xl mt-3 mb-6">Services</h1>
        <div>
          <p className="text-xl font-bold">・Misskey Server 運営 2023 ~ 2024/6</p>
          <span>
            Oracle Cloud Infrastructure上にVMサーバを構築、分散型ソーシャルネットワークソフトウェアである「Misskey」を使用し、1年半ほどSNSサービスを運営。
          </span>
        </div>
      </div>
      <div className="my-6">
        <h1 className="font-bold text-2xl mt-3 mb-6">AI</h1>
        <div className="grid sm:grid-cols-2 gap-7 grid-cols-1">
          <AIset />
        </div>
      </div>
      <div className="my-6">
        <h1 className="font-bold text-2xl mt-3 mb-6">Skills</h1>
        <div className="grid sm:grid-cols-2 gap-7 grid-cols-1">
          <SkillsSet />
        </div>
      </div>
      <div className="my-6">
        <h1 className="font-bold text-2xl mt-3 mb-6">Career</h1>
        <CareerTimeline />
      </div>
      <div className="my-6">
        <h1 className="font-bold text-2xl mt-3 mb-6">Certification</h1>
        <CertSet />
      </div>
    </div>
  );
}
