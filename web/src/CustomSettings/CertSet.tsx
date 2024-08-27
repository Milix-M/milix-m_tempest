import Certification from "@/components/Certification/Certification";
import { FaJava } from "react-icons/fa";

export default function CertSet() {
  return (
    <>
      <div className="space-y-4">
        <Certification
          company="Oracle Japan"
          title="Oracle Certified Java Programmer, Silver SE 11"
          getDate="2024/05/26"
          description="Javaアプリケーション開発に必要とされる基本的なプログラミング知識を有し、上級者の指導のもとで開発作業を行うことができる開発初心者向け資格。"
          icon={<FaJava className="w-9 h-9" />}
        />
        <Certification
          company="Oracle Japan"
          title="Oracle Certified Java Programmer, Gold SE 11"
          getDate="2024/05/26"
          description="設計者の意図を正しく理解して独力で機能実装が行える中上級者向け資格。"
          icon={<FaJava className="w-9 h-9" />}
        />
      </div>
    </>
  );
}
