import { Outlet } from "react-router-dom";
import { MainLayout } from "../../layout/main";
import useProfileStore from "../../store/profile";
import Cookies from "js-cookie";
import { useQuery } from "@apollo/client";
import { GetUserInformation } from "./../../api/user/query";

export default function PublicRoute() {
  const setProfileData = useProfileStore((state) => state.setProfileData);

  const accessToken = Cookies.get("accessToken");
  
  if (!accessToken) {
    setProfileData(null);
  } else {
    if (accessToken) {
      const { error, data } = useQuery(GetUserInformation, {
        context: {
          headers: {
            Authorization: accessToken,
          },
        },
      });
      if (data) {
        setProfileData(data?.getUserByToken);
      }
      if (error) {
        console.log(error);
        setProfileData(null);
        Cookies.remove("accessToken");
      }
    }
  }
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
