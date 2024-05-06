import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { IconButton, Stack, useColorModeValue } from "@chakra-ui/react";

export const colDefs = [
  {
    field: "id",
    headerName: "رقم ",
    sortable: true,
    resizable: false,
    width: 80,
    lockPosition: "right",
    cellClass: "locked-col",
  },

  {
    field: "creationTime",
    headerName: "تاريخ الإنشاء ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "rating",
    headerName: "التقييم العام ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "price",
    headerName: "سعر ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "placeAvailable",
    headerName: "الأماكن المتاحة ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "numberReservations",
    headerName: "عدد الحجوزات ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "status",
    headerName: "الحالة ",
    sortable: true,
    resizable: false,
    flex: 1,
  },
  {
    field: "name",
    headerName: "عنوان الرحلة",
    sortable: true,
    resizable: false,
    flex: 1,
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
        <IconButton variant={"ghost"} color={useColorModeValue("red","#dc3333")} icon={<DeleteIcon />} />
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
    cellRenderer: (params) => (
      <Stack w={"full"} h={"full"} align={"center"} justify={"center"}>
        <IconButton variant={"ghost"} icon={<ViewIcon />} />
      </Stack>
    ),
  },
];
