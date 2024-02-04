import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import NavBar from "@/app/NavBar";
import Container from "@/components/Container";
import {Toaster} from "@/components/ui/sonner";
import Footer from "@/app/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Project Manager",
  description: "Empower yourself with an application designed for efficient project management tailored to your unique requirements.",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <NavBar/>
          <main className="flex-grow sm:p-5 p-3">
            <Container>{children}</Container>
          </main>
          <Toaster position="top-center"/>
          <Footer/>
        </div>
      </ThemeProvider>
      </body>
      </html>
  );
}
