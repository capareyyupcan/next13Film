import "./global.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="bg-slate-900 text-white">
      <head />

      <body className={`${montserrat.className} mx-16 my-6`} >
        {/* <nav>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
