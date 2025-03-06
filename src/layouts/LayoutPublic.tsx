import { FC } from "react";
import { Outlet } from "react-router";

export const LayoutPublic: FC = () => {
  return (
    <section>
      <Outlet />
    </section>
  );
};
