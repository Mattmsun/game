import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
