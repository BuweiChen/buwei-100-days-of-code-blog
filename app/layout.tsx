import Link from "next/link";
import Image from "next/image";
import "../style/globals.css";

export const metadata = {
  title: "Buwei's 100 Days of Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-lg">
        <Image
          src="/blog-logo.png"
          width={50}
          height={50}
          alt="blog logo"
          className="mx-auto"
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">
            Buwei's 100 Days of Code
          </h1>
        </Link>
        <p className="text-slate-300">Welcome to my 100 Days of Code Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 pt-2 text-center text-slate-500">
        <br />
        <h3>
          Designed by{" "}
          <Link href="https://www.buweichen.com" className="hover:underline">
            Buwei
          </Link>
        </h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-3xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
