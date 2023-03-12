import "../../styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10'>
        {children}
      </body>
    </html>
  );
}
