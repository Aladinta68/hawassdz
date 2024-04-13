import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  useDisclosure,
  useMergeRefs,
  Stack,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const PasswordField = forwardRef(
  ({ border,name, id, errors, label, placeholder, ...props }, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef(null);
    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({
          preventScroll: true,
        });
      }
    };
    const inputName = name ? name : "password";
    return (
      <FormControl>
        <FormLabel  color={useColorModeValue("#333333c5","#ffffffc5")} htmlFor="password">
          {label ? label : "كلمة المرور"}
        </FormLabel>
        <InputGroup>
          <InputLeftElement>
            <IconButton
              variant="text"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputLeftElement>
          <Field
            as={Input}
            _placeholder={{
              fontWeight: 300,
              color:useColorModeValue("","#ffffffc5")

            }}
            border={border}
            _focusVisible={{ border: "2px solid #FA8B02" }}
            id={inputName}
            name={inputName}
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            {...props}
            ref={mergeRef}
            placeholder={placeholder ? placeholder : "كلمة المرور"}
          />
        </InputGroup>
        <Stack color={"red"} w={"full"} align={"flex-start"}>
          <ErrorMessage
            name={inputName}
            component="div"
            className="error-message"
          />
        </Stack>
      </FormControl>
    );
  }
);
PasswordField.displayName = "PasswordField";
