import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
 title: "Create Next App",
 description: "Generated by create next app",
};

export default function RootLayout({children}) {
 return (
  <html lang="en">
   <body className="bg-black">
    <Header />
    <div className="px-[24px] lg:px-[100px] bg-black">
     {children}
    </div>
   </body>
  </html>
 );
}
