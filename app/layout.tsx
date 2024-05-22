export const metadata = {
  title: "buwei blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Buwei's 100 Days of Code Blog</h1>
        <p>Welcome to my 100 Days of Code Blog</p>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Buwei</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
