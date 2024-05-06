import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Style.css";
import { Box, useColorMode } from "@chakra-ui/react";
export const MyCustomTable = ({ rowData, colDefs }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      h={"full"}
      w={"full"}
      className={`ag-theme-${colorMode === "light" ? "quartz" : "quartz-dark"}`}
    >
      <AgGridReact
        pagination={true}
        paginationPageSize={10}
        rowHeight={60}
        rowData={rowData}
        columnDefs={colDefs}
      />
    </Box>
  );
};
