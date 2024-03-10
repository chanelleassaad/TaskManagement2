import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function SectionTitle({ title }: any) {
  const router = useRouter();

  return (
    <div className="flex mb-2" style={{ backgroundColor: "lightblue" }}>
      <IconButton
        onClick={() => {
          router.push(`/home`);
        }}
      >
        <Home />
      </IconButton>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
