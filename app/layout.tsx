
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { RegProvider } from "@/components/register/RegisterContext";
import Footer from "@/components/Footer"; // ⬅ FOOTER IMPORT KARO
import Script from "next/script"; 

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [{ path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Brain Train Consultancy Services LLP",
  description:
    "Brain Train Consultancy Services LLP empowers organizations with AI-driven business consulting, digital transformation, and corporate training solutions.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
        <head>
          
        {/* 🔥 Google Analytics */}
        <script src="https://www.googletagmanager.com/gtag/js?id=G-5XNDPDMWLR" async></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5XNDPDMWLR');
          `,
        }} />

        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased min-h-screen flex flex-col`}
      >
          
        

        {/* ✅ reCAPTCHA script safe position */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />


        <RegProvider>
          
          
          {/* MAIN CONTENT */}
          <main className="flex-grow">
            {children}
          </main>

          {/* FOOTER ALWAYS AT BOTTOM */}
          <Footer />
          
        </RegProvider>
      </body>
    </html>
  );
};

export default RootLayout;

