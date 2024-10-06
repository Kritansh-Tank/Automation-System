import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import { useState } from "react";
import Papa from "papaparse";

interface Record {
  prn: string;
}

const Home = () => {
  const [prn1, setPrn1] = useState("");
  const [prn2, setPrn2] = useState("");
  const [prn3, setPrn3] = useState("");
  const [prn4, setPrn4] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    fetchDataAndNavigate();
  };

  const fetchDataAndNavigate = () => {
    Papa.parse<Record>("../../records.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const records = results.data.filter((item) => {
          const prn = item.prn?.trim();
          return (
            prn === prn1.trim() ||
            prn === prn2.trim() ||
            prn === prn3.trim() ||
            prn === prn4.trim()
          );
        });

        if (records.length > 0) {
          console.log("Records found:", records);
          navigate("/details", { state: { records: records } });
        } else {
          alert("No matching records found");
        }
      },
      error: (error) => {
        console.error("Parsing error:", error);
      },
    });
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/background.jpg"
        alt="background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.65,
          zIndex: 1,
        }}
      />

      <Box
        component="img"
        src="/bvdu_logo.png"
        alt="bvdu logo"
        sx={{
          position: "absolute",
          top: 16,
          left: 50,
          width: "100px",
          height: "100px",
          zIndex: 2,
        }}
      />

      <Box
        component="img"
        src="/det_logo.jpg"
        alt="det logo"
        sx={{
          position: "absolute",
          top: 30,
          right: 60,
          width: "110px",
          height: "50px",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          height: "100vh",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            padding: 4,
            zIndex: 2,
            textAlign: "center",
            width: { xs: "90%", sm: "1000px" },
            marginTop: "20vh",
            height: "50vh",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <h2
              style={{
                color: "#1A365D",
                fontSize: "25px",
                fontWeight: "bolder",
                fontFamily:
                  "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              }}
            >
              LIBRARY CARD GENERATION SYSTEM
            </h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              mt: 4,
              mb: 4,
            }}
          >
            <CustomizedInput
              type="text"
              name="prn1"
              label="PRN"
              onChange={(e) => {
                const value = e.target.value;
                setPrn1(value);
              }}
            />
            <CustomizedInput
              type="text"
              name="prn2"
              label="PRN"
              onChange={(e) => {
                const value = e.target.value;
                setPrn2(value);
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              mt: 4,
              mb: 4,
            }}
          >
            <CustomizedInput
              type="text"
              name="prn3"
              label="PRN"
              onChange={(e) => {
                const value = e.target.value;
                setPrn3(value);
              }}
            />
            <CustomizedInput
              type="text"
              name="prn4"
              label="PRN"
              onChange={(e) => {
                const value = e.target.value;
                setPrn4(value);
              }}
            />
          </Box>
          <Button
            onClick={handleButtonClick}
            sx={{
              px: 2,
              py: 1,
              width: "200px",
              borderRadius: 2,
              bgcolor: "#BEE3F8",
              color: "#1A365D",
              zIndex: 2,
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "'Courier New', Courier, monospace",
              ":hover": {
                bgcolor: "#BEE3F8",
                color: "#1A365D",
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Generate
          </Button>
        </Box>
      </Box>

      <Box
        component="footer"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "21px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 2,
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "14px",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            marginLeft: 40,
          }}
        >
          Made by&nbsp;
          <a
            href="https://kritansh-tank.github.io/Portfolio/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Kritansh Tank
          </a>
          &nbsp;&&nbsp;
          <a
            href="https://www.linkedin.com/in/ashwinpandeyak/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Ashwin Pandey
          </a>
        </span>
        <span
          style={{
            color: "white",
            fontSize: "14px",
            fontFamily:
              "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            marginRight: 40,
          }}
        >
          © 2024 - BVDU. All Rights Reserved.
        </span>
      </Box>
    </Box>
  );
};

export default Home;
