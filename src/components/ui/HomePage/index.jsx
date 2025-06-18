import { Divider } from "@mui/material";
import AboutMeSection from "./AboutMeSection";
import WhatIDo from "./WhatIDO";
import Experince from "./Experince";
import ContactMe from "./ContactMe";

export default function HomePage() {
  return (
    <>
      <AboutMeSection></AboutMeSection>
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
