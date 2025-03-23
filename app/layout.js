export const metadata = {
  title: "Civil AI",
  description: "Chat with the TXDot Spec Manual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
