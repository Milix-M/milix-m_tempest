import Works from "@/components/Works/Works";

export default function WorksSet() {
  return (
    <>
      <Works title="Passgen" description="React+MUI+TSで開発したChrome拡張機能です。数クリックで簡単に安全なパスワードが生成できます。" link="https://chromewebstore.google.com/detail/passgen-a-simple-password/jibdlcehfeapakbemeombfeophiahmcg" />

      <Works title="Authenticator" description="React+daisyUI(tailwind)+TSで開発したChrome拡張機能です。ブラウザ上で簡単に二段階認証のコードを生成することができます。" link="https://chromewebstore.google.com/detail/authenticator/biblcaincgpfkamhjigfmdpdmbdeojcp"/>
    </>
  );
}
