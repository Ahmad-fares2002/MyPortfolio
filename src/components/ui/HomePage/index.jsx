import { Divider } from "@mui/material";
import AboutMeSection from "./AboutMeSection";
import WhatIDo from "./WhatIDO";
import Experince from "./Experince";
import ContactMe from "./ContactMe";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userRole = localStorage.getItem("user");
  const isAdmin = userRole == "admin";

  const API_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    console.log(isAdmin);

    fetchSections();
  }, []);
  const fetchSections = async (content) => {
    const res = await fetch(`${API_URL}/api/sections/`);
    const data = await res.json();
    console.log(data);
    setContent(data[0].content);
    setTitle(data[0].title);
  };
  const updateContent = async (title, content) => {
    const res = await fetch(`${API_URL}/api/sections/${1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": isAdmin ? "admin" : "user",
      },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    console.log(data);
    setTitle(data.section.title);
    setContent(data.section.content);
  };

  return (
    <>
      <AboutMeSection
        title={title}
        content={content}
        isAdmin={isAdmin}
        updateContent={updateContent}
      ></AboutMeSection>
      <WhatIDo></WhatIDo>
      <Divider
        sx={{
          borderColor: "primary.main",
          borderWidth: 4,
          width: "30%",
          m: "auto",
          borderRadius: "10px",
        }}
      />
      <Experince></Experince>
      <ContactMe></ContactMe>
    </>
  );
}
