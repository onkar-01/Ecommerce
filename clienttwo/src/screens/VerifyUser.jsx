import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
const VerifyUser = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/v1/verifyemail", { token });
      setVerified(true);
    } catch (error) {
      setError(true);
      console.log(error.reponse.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <VStack h="95vh" className="space-y-3" justifyContent={"center"}>
      <h1 className="text-4xl">Verify Email</h1>
      {verified && (
        <>
          <Heading textTranform={"uppercase"}>Email Verified</Heading>
          <Text>Token: {token}</Text>
          <button
            type="button"
            class="btn border-2 border-[#ff742e] text-[#ff742e] hover:bg-[#ff742e] hover:text-[#fff] "
          >
            <Link to="/auth/login">Login</Link>
          </button>
        </>
      )}

      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </VStack>
  );
};

export default VerifyUser;
