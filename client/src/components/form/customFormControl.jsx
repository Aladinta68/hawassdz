import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const CustomFormControl = ({
  name,
  label,
  type,
  formikProps,
  placeholder,
  SelectOptions,
  selectDefaultValue,
  isRequired,
  isDisabled,
}) => {
  const { values, errors, touched } = formikProps;
  const { isOpen, onToggle } = useDisclosure();

  const onClickReveal = () => {
    onToggle();
  };
  return (
    <FormControl isDisabled={isDisabled} isRequired={isRequired}>
      <FormLabel color={useColorModeValue("#333333c5", "#ffffffc5")}>
        {label}
      </FormLabel>
      {type === "select" ? (
        <Select
          border={
            touched[name] && errors[name]
              ? useColorModeValue(
                  "2px solid red !important",
                  "2px solid #db5d5d !important"
                )
              : useColorModeValue("1.5px solid #ebebeb", "1.5px solid #212121")
          }
          name={name}
          dir="ltr"
          defaultValue={selectDefaultValue}
        >
          {SelectOptions &&
            SelectOptions.map((option, index) => (
              <option
                disabled={option.disabled}
                selected={option.selected}
                value={option.value}
                key={index}
              >
                {option.label}
              </option>
            ))}
        </Select>
      ) : (
        <InputGroup>
          <Field
            as={type === "Textarea" ? Textarea : Input}
            border={
              touched[name] && errors[name]
                ? useColorModeValue(
                    "2px solid red !important",
                    "2px solid #db5d5d !important"
                  )
                : useColorModeValue(
                    "1.5px solid #ebebeb",
                    "1.5px solid #212121"
                  )
            }
            _placeholder={{
              fontWeight: 300,
              color: useColorModeValue("", "#ffffffc5"),
            }}
            placeholder={placeholder}
            _focusVisible={{ border: "2px solid #FA8B02" }}
            name={name}
            type={isOpen ? "text" : type}
            value={values[name]}
            autoComplete=""
          />
          {type === "password" && (
            <InputLeftElement>
              <IconButton
                variant="text"
                aria-label={isOpen ? "Mask password" : "Reveal password"}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onClickReveal}
              />
            </InputLeftElement>
          )}
        </InputGroup>
      )}
      <Stack
        color={useColorModeValue("red", "#db5d5d")}
        w={"full"}
        align={"flex-start"}
      >
        <ErrorMessage name={name} component="div" className="error-message" />
      </Stack>
    </FormControl>
  );
};
