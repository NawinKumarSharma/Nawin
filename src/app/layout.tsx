import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawin Sharma",
  description: "A full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="dark:bg-black bg-white dark:bg-grid-small-white/[0.07] sm:dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
          <link rel="icon" href="/static/images/favicon.png" sizes="any" />
          <ToastContainer />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          <ScrollToTop />
          </ThemeProvider>{" "}
        </main>
      </body>
    </html>
  );
}
