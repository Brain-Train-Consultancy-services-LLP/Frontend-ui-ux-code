/*

import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { ReactNode } from "react";
import { AuthProvider } from "@/app/context/AuthContext";
import Footer from "@/components/Footer";


const Layout = ({ children }: { children: ReactNode }) => {
  return (

      <main className="root-container">
        <div className="mx-auto max-w-7xl">
          <Header />
          
          <div className="mt-20 pb-20">
             <AuthProvider>{children}</AuthProvider>
          
            <CookieConsent />
          </div>
        </div>

        <Footer />
      </main>

     
  );
};

export default Layout;*/

import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { ReactNode } from "react";
import { AuthProvider } from "@/app/context/AuthContext";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      
      {/* Header stays constrained internally */}
      <Header />

      {/* Page content. FULL WIDTH */}
      <AuthProvider>
        {children}
      </AuthProvider>

      <CookieConsent />

      {/* Footer stays constrained internally */}
      <Footer />
    </main>
  );
};

export default Layout;

