import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
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
  InputRightElementRestProps,
  InputRightElementChildren,
  InputLeftElementRestProps,
  InputLeftElementChildren,
  InputLeftAddonRestProps,
  InputLeftAddonChildren,
  InputRightAddonRestProps,
  InputRightAddonChildren,
  name,
  label,
  type,
  formikProps,
  placeholder,
  SelectOptions,
  selectDefaultValue,
  isRequired,
  isDisabled,
  ...fieldRestProps
}) => {
  const { values, errors, touched, handleChange } = formikProps;
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
          dir="ltr"
          border={
            touched[name] && errors[name]
              ? useColorModeValue(
                  "2px solid red !important",
                  "2px solid #db5d5d !important"
                )
              : useColorModeValue("1.5px solid #ebebeb", "1.5px solid #212121")
          }
          name={name}
          value={values[name] || selectDefaultValue}
          onChange={handleChange}
        >
          {SelectOptions &&
            SelectOptions.map((option, index) => (
              <option
                disabled={option.disabled}
                value={option.value}
                key={index}
              >
                {option.label}
              </option>
            ))}
        </Select>
      ) : (
        <InputGroup>
          {InputRightAddonChildren && (
            <InputRightAddon {...InputRightAddonRestProps}>
              {InputRightAddonChildren}
            </InputRightAddon>
          )}
          {InputRightElementChildren && (
            <InputRightElement {...InputRightElementRestProps}>
              {InputRightElementChildren}
            </InputRightElement>
          )}
          <Field
            {...fieldRestProps}
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
          {InputLeftElementChildren ||
            (type === "password" && (
              <InputLeftElement {...InputLeftElementRestProps}>
                {InputLeftElementChildren}
                {type === "password" && (
                  <IconButton
                    variant="text"
                    aria-label={isOpen ? "Mask password" : "Reveal password"}
                    icon={isOpen ? <HiEyeOff /> : <HiEye />}
                    onClick={onClickReveal}
                  />
                )}
              </InputLeftElement>
            ))}
          {InputLeftAddonChildren && (
            <InputLeftAddon {...InputLeftAddonRestProps}>
              {InputLeftAddonChildren}
            </InputLeftAddon>
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
