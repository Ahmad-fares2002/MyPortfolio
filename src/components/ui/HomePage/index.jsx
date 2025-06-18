import { Divider } from "@mui/material";
import AboutMeSection from "./AboutMeSection";
import WhatIDo from "./WhatIDO";
import Experince from "./Experince";
import ContactMe from "./ContactMe";
import { useEffect, useState } from "react";

export default function HomePage() {
  const user = localStorage.getItem("user");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const isAdmin = user.role == "admin";
  const API_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    console.log(API_URL);
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
    const res = await fetch(`${API_URL}//api/sections/${title}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-role": user.role,
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
