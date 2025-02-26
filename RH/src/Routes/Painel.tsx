import { FunctionComponent } from "react";
import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";

export const Painel: FunctionComponent = () => {
  return (
    <body className="flex w-full h-full bg-slate-100">
      <SideBar />
      <main className=" w-full h-full p-16 flex flex-wrap gap-5 overflow-scroll">
        <Outlet />
      </main>
    </body>
  );
};
