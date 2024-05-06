import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

export const AlertMessage = ({ status, type, message }) => {
  const handleErrorMessage = () => {
    let errMes = "";
    if (type === "signup") {
      errMes = "البريد الإلكتروني مسجل من قبل";
    } else if (type === "login") {
      errMes = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
    } else if (type === "forgotPasswordInvalidEmail") {
      errMes = "هذا البريد الإلكتروني غير موجود.";
    } else if (type === "server") {
      errMes = "عذرًا، نواجه صعوبات فنية. الرجاء معاودة المحاولة في وقت لاحق. ";
    } else {
      errMes = message;
    }
    return errMes;
  };
  return (
    <Alert
      status={
        ["login", "signup", "server", "forgotPasswordInvalidEmail"].includes(
          type
        )
          ? "error"
          : status
      }
    >
      <AlertIcon />
      {handleErrorMessage()}
    </Alert>
  );
};
