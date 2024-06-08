import { Outlet } from "react-router-dom";
import { MainLayout } from "../../layout/main";

export default function PublicRoute() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
