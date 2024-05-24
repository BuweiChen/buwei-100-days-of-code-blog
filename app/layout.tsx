import Link from "next/link";
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
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">
            Buwei's 100 Days of Code
          </h1>
        </Link>
        <p className="text-slate-300">Welcome to my 100 Days of Code Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 text-center text-slate-500">
        <br />
        <h3>Developed by Buwei</h3>
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
