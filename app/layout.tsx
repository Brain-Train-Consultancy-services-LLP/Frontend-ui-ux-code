import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
   src : [
    {path : '/fonts/IBMPlexSans-Regular.ttf' ,weight : '400' , style: 'normal'},
    {path : '/fonts/IBMPlexSans-Medium.ttf' ,weight : '500' , style: 'normal'},
    {path : '/fonts/IBMPlexSans-SemiBold.ttf' ,weight : '600' , style: 'normal'},
    {path : '/fonts/IBMPlexSans-Bold.ttf' ,weight : '700' , style: 'normal'},
   ]
});

const bebasNeue = localFont({
   src : [
    {path : '/fonts/BebasNeue-Regular.ttf' ,weight : '400' , style: 'normal'},
   ],
   variable : "--bebas-neue",
});


export const metadata: Metadata = {
  title: "BrainTrain Consultancy Services LLP",
  description: "BrainTrain Consultancy Services LLP empowers organizations with AI-driven business consulting, digital transformation, and corporate training solutions. Accelerate innovation and upskill your workforce with our expert-driven strategies.",
};

const RootLayout =({children,}:{children: ReactNode;}) => {
  return (
    <html lang="en"  >
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased text-white sm:text-blue-500 md:text-green-500 lg:text-red-500`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
