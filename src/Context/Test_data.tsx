import React from 'react';
import { jwtDecode } from "jwt-decode";
import { createContext, useState, ReactNode } from "react";
 
// TODO: The First step is  Crate  Context && call up with react createContext
interface ContextYastaType {
  data: any;
  searchdata: string;
  setsearchdata: React.Dispatch<React.SetStateAction<string>>;
}

export const ContextYasta = createContext<ContextYastaType | null>(null);

// TODO: The Second step is  Create Provider && call up with react createContext
interface ContextYastaProvidingProps {
  children: ReactNode;
}

export const ContextYastaProviding = (props: ContextYastaProvidingProps) => {
  let localdata = localStorage.getItem("data_Login_User");
  let [data, setData] = useState(localdata ? jwtDecode(localdata) : '');
  let localsearch = localStorage.getItem("searchdatainput") || '';
  let [searchdata, setsearchdata] = useState<string>(localsearch);

  return (
    <ContextYasta.Provider value={{ data, searchdata, setsearchdata }}>
      {props.children}
    </ContextYasta.Provider>
  );
}
