"use client";

import React, { createContext, useState, ReactNode } from "react";

export interface RegData {
  name: string;
  email: string;
  mobile: string;
  role: string;
  domain: string;
  github_username: string;
  college_or_id: string;
}

interface RegContextType {
  data: RegData;
  update: (patch: Partial<RegData>) => void;
}

export const RegContext = createContext<RegContextType | undefined>(undefined);

export const RegProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<RegData>({
    name: "",
    email: "",
    mobile: "",
    role: "",
    domain: "",
    github_username: "",
    college_or_id: "",
  });

  const update = (patch: Partial<RegData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  return (
    <RegContext.Provider value={{ data, update }}>
      {children}
    </RegContext.Provider>
  );
};

