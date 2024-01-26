import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/app/components/ui/toaster";
import AuthProvider from "./context/auth/provider";
import { SessionProvider } from "./context/auth/session";
import AuthDialog from "./api/auth/components/AuthDialog";

export const metadata: Metadata = {
  title: "The hive",
  description: "Your property indexer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <AuthProvider>
              <NavBar />
              {children}
              <Toaster />
              <AuthDialog />
              <Footer />
            </AuthProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
