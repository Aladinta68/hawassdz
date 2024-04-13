import { Box, Flex, Image, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import description from "../../../../assets/image/description.png";
export const Description = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row-reverse" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        align={"center"}
        justifyContent={"center"}
        w={{ base: "100%", md: "50%" }}
      >
        <Image w={"50%"} src={description} />
      </Flex>
      <Flex
        alignItems={{base:"center",md:"flex-start"}}
        justifyContent={"center"}
        w={{ base: "100%", md: "50%" }}
        direction={"column"}
      >
        <Text  fontWeight={500} color={useColorModeValue("#0000007e","#ffffff")} py={2}>
        مرحبا بكم في موقعنا!        </Text>
        <Text fontSize={22} fontWeight={600} pb={5}>
        نحن أفضل شركة لزيارتك        </Text>
        <Text pb={5} color={useColorModeValue("#333333","#ffffff")}>
        بعد عقود من الخبرة، وحياة كاملة في لوكا، نقدم لك
           الخدمة السياحية الأكثر اكتمالا في المدينة. بالإضافة إلى وجود
           الدراجات وعربات الريكشا لتستمتع بقدر ما تريد، فلديك
           اختيار المرشدين السياحيين الذين يمكنك القيام بجولة معهم والسائقين لكل احتياجاتك
           يحتاج! نحن نقدم الحزم بالطريقة التي تحصل بها على أقصى استفادة بأقل تكلفة
           سعر. احجز معنا وسنكون متاحين لك دائمًا! </Text>
        <Flex  justifyContent={"center"} alignItems={"flex-start"} direction={"row"}>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              20+
            </Text>
            <Text olor={useColorModeValue("#0000007e","#ffffff")}>
            سنوات <br /> الخبرة            </Text>
          </VStack>
          <VStack mx={5} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              100+
            </Text>
            <Text color={useColorModeValue("#0000007e","#ffffff")}>
            عميل <br />
              سعيد
            </Text>
          </VStack>
          <VStack mx={5} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              15+
            </Text>
            <Text olor={useColorModeValue("#0000007e","#ffffff")}>
            خيار
               <br /> من الخدمات
            </Text>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={20} color={"#FA8B02"}>
              10+
            </Text>
            <Text olor={useColorModeValue("#0000007e","#ffffff")}>
            احترافي
               <br /> أدلة
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
