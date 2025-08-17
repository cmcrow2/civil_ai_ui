import Header from "@/app/components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Paige",
  description: "Cicil Engineering Virtual Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-light font-roboto text-black">
        <div className="fixed top-0 left-0 w-screen h-screen bg-[url('/construction-bg.jpeg')] bg-cover bg-center bg-no-repeat -z-10"></div>
        <div className="fixed top-0 left-0 w-screen h-screen bg-white/90 -z-10"></div>
        <Header />
        <main className="pt-14">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
