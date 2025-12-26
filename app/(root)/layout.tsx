

import Header from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import { ReactNode } from "react";
import { RegProvider } from "@/components/register/RegisterContext";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (

      <main className="root-container">
        <div className="mx-auto max-w-7xl">
          <Header />
          
          <div className="mt-20 pb-20">
              <RegProvider>
              {children}
            </RegProvider>
          
            <CookieConsent />
          </div>
        </div>

        <Footer />
      </main>

     
  );
};

export default Layout;
