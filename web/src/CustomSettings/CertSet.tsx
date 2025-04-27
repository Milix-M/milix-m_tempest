import Certification from "@/components/Certification/Certification";
import { FaAws, FaJava } from "react-icons/fa";

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
          getDate="2024/08/24"
          description="設計者の意図を正しく理解して独力で機能実装が行える中上級者向け資格。"
          icon={<FaJava className="w-9 h-9" />}
        />
        <Certification
          company="Amazon Web Services Training and Certification"
          title="AWS Certified Cloud Practitioner"
          getDate="2025/04/27"
          description="AWS Certified Cloud Practitioner は、AWS クラウド、サービス、用語の基本的かつ高度な理解を検証します。 これは、IT やクラウドの経験がまったくない個人でクラウドのキャリアに切り替えるか、基礎的なクラウドリテラシーを求めている基幹業務の従業員にとって、AWS 認定ジャーニーの良い出発点となります。"
          icon={<FaAws className="w-9 h-9" />}
        />
      </div>
    </>
  );
}
