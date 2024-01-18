import Footer from "./common/footer";
import Header from "./common/header";
import TopHeader from "./common/topHeader";
import "./globals.css";



export const metadata = {
  title: "Exclusive Shop | Your dream shop",
  description: "Your dream store for all your needs",
  image: "/src/app/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] mx-auto">
        <TopHeader/>
       <section className="px-[135px] bg-white">
       <Header />
       </section>
       <hr className="mt-4"/>
       <section className="px-[135px] bg-white">
        {children}
        <Footer />
       </section>
      </body>
    </html>
  );
}
