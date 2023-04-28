import type { ReactNode } from "react";
import Navbar from "./Navbar";


type LayoutProps = {
   children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
      <Navbar/> 
      {children}
    
  </>
);