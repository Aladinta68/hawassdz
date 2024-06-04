import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useMutation } from "@apollo/client";
import { DeleteTravel } from "../../../../api/travel/mutation";
import { GetALLTravelsByUser } from "../../../../api/travel/query";

export const colDefs = [
  {
    field: "createdAt",
    headerName: "تاريخ الإنشاء ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <HStack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{new Date(parseInt(params?.value)).toLocaleTimeString()}</Text>
        <Text>{new Date(parseInt(params?.value)).toLocaleDateString()}</Text>
      </HStack>
    ),
  },
  {
    field: "overallRating",
    headerName: "التقييم العام ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{params?.value ? params.value : 0}</Text>
      </Stack>
    ),
  },
  {
    field: "price",
    headerName: "سعر ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{params?.value === "Free" ? "مجاني" : params?.value}</Text>
      </Stack>
    ),
  },
  {
    field: "availablePlace",
    headerName: "الأماكن المتاحة ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{params?.value}</Text>
      </Stack>
    ),
  },
  {
    field: "numberReservations",
    headerName: "عدد الحجوزات ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{params?.value ? params?.value : 0}</Text>
      </Stack>
    ),
  },
  {
    field: "status",
    headerName: "الحالة ",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Badge
          px={2}
          borderRadius={20}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          colorScheme="purple"
        >
          {params?.value ? params.value : "قيد الانتظار"}
        </Badge>
      </Stack>
    ),
  },
  {
    field: "name",
    headerName: "عنوان الرحلة",
    sortable: true,
    resizable: false,
    flex: 1,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <Text>{params?.value}</Text>
      </Stack>
    ),
  },
  {
    field: "",
    lockPosition: "left",
    cellClass: "locked-col",
    sortable: false,
    width: 50,
    resizable: false,
    cellRenderer: (params) => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const toast = useToast();
      const accessToken = Cookies.get("accessToken");

      const [deleteTravel] = useMutation(DeleteTravel, {
        refetchQueries: [
          {
            query: GetALLTravelsByUser,
            context: {
              headers: {
                Authorization: accessToken,
              },
            },
          },
        ],
      });
      const handleDelete = async () => {
        try {
          const response = await deleteTravel({
            variables: { deleteTravelByIdId: params.data.id },
            context: {
              headers: {
                Authorization: accessToken,
              },
            },
          });
          toast({
            title: "تم الحذف",
            description: "تم حذف الرحلة بنجاح",
            status: "success",
            duration: 3000,
          });
          onClose();
        } catch (error) {
          console.log("error");
        }
      };
      return (
        <>
          <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
            <IconButton
              onClick={onOpen}
              variant={"ghost"}
              color={useColorModeValue("red", "#dc3333")}
              icon={<DeleteIcon />}
            />
          </Stack>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader> تأكيد الحذف</ModalHeader>
              <ModalBody>هل أنت متأكد أنك تريد حذف هذه الرحلة</ModalBody>

              <ModalFooter
                justifyContent={"flex-start"}
                display={"flex"}
                alignItems={"flex-start"}
              >
                <Button onClick={handleDelete} colorScheme="red">
                  {" "}
                  حذف
                </Button>
                <Button mr={3} onClick={onClose}>
                  غلق
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      );
    },
  },
  {
    field: "",
    lockPosition: "left",
    cellClass: "locked-col",
    sortable: false,
    width: 50,
    resizable: false,
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <IconButton variant={"ghost"} color={"#d09100"} icon={<EditIcon />} />
      </Stack>
    ),
  },
  {
    field: "",
    lockPosition: "left",
    cellClass: "locked-col",
    sortable: false,
    width: 50,
    resizable: false,
    cellRenderer: (params) => {
      return (
        <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
          <IconButton
            as={RouterLink}
            to={`/trip_details/${params?.data?.id}`}
            variant={"ghost"}
            icon={<ViewIcon />}
          />
        </Stack>
      );
    },
  },
];
