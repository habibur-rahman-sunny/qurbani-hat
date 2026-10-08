import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat",
  description:"QurbaniHat is a convenient platform to browse, explore, and book Qurbani animals."
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme ="white"
    >
      <body className="min-h-full flex flex-col">
        <main>{children}
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
