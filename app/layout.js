import Header from "@/app/components/Header";
import "./globals.css";

export const metadata = {
  title: "Civil AI",
  description: "Chat with the TXDot Spec Manual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-light font-roboto bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
