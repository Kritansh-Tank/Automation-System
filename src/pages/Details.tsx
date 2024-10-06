import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { MdFileDownload } from "react-icons/md";
import { BsPrinterFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import Barcode from "react-barcode";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
  const location = useLocation();
  const { records } = location.state || {};
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [imageSrc3, setImageSrc3] = useState("");
  const [imageSrc4, setImageSrc4] = useState("");

  const pdfBoxRef1 = useRef<HTMLDivElement>(null);
  const pdfBoxRef2 = useRef<HTMLDivElement>(null);
  const pdfBoxRef3 = useRef<HTMLDivElement>(null);
  const pdfBoxRef4 = useRef<HTMLDivElement>(null);
  const pdfContentRef1 = useRef<HTMLDivElement>(null);
  const pdfContentRef2 = useRef<HTMLDivElement>(null);
  const pdfContentRef3 = useRef<HTMLDivElement>(null);
  const pdfContentRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (records[0]?.prn) {
      const basePath = `../../images/${records[0].prn}`;
      const possibleImagePaths = [
        `${basePath}.jpg`,
        `${basePath}.png`,
        `${basePath}.jpeg`,
      ];

      const checkImageExists = async (url: string): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      };

      (async () => {
        for (let path of possibleImagePaths) {
          const exists = await checkImageExists(path);
          if (exists) {
            setImageSrc1(path);
            break;
          }
        }
      })();
    }

    if (records[1]?.prn) {
      const basePath = `../../images/${records[1].prn}`;
      const possibleImagePaths = [
        `${basePath}.jpg`,
        `${basePath}.png`,
        `${basePath}.jpeg`,
      ];

      const checkImageExists = async (url: string): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      };

      (async () => {
        for (let path of possibleImagePaths) {
          const exists = await checkImageExists(path);
          if (exists) {
            setImageSrc2(path);
            break;
          }
        }
      })();
    }

    if (records[2]?.prn) {
      const basePath = `../../images/${records[2].prn}`;
      const possibleImagePaths = [
        `${basePath}.jpg`,
        `${basePath}.png`,
        `${basePath}.jpeg`,
      ];

      const checkImageExists = async (url: string): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      };

      (async () => {
        for (let path of possibleImagePaths) {
          const exists = await checkImageExists(path);
          if (exists) {
            setImageSrc3(path);
            break;
          }
        }
      })();
    }

    if (records[3]?.prn) {
      const basePath = `../../images/${records[3].prn}`;
      const possibleImagePaths = [
        `${basePath}.jpg`,
        `${basePath}.png`,
        `${basePath}.jpeg`,
      ];

      const checkImageExists = async (url: string): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      };

      (async () => {
        for (let path of possibleImagePaths) {
          const exists = await checkImageExists(path);
          if (exists) {
            setImageSrc4(path);
            break;
          }
        }
      })();
    }
  }, [records]);

  const handleDownloadFront1 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef1];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[0].prn}_front.pdf`);
  };

  const handlePrintFront1 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef1];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadFront2 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef2];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[1].prn}_front.pdf`);
  };

  const handlePrintFront2 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef2];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadFront3 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef3];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[2].prn}_front.pdf`);
  };

  const handlePrintFront3 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef3];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadFront4 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef1, pdfBoxRef2, pdfBoxRef3, pdfBoxRef4];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save("front.pdf");
  };

  const handlePrintFront4 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfBoxRef1, pdfBoxRef2, pdfBoxRef3, pdfBoxRef4];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadBack1 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef1];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[0].prn}_back.pdf`);
  };

  const handlePrintBack1 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef1];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadBack2 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef2];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[1].prn}_back.pdf`);
  };

  const handlePrintBack2 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef2];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };

  const handleDownloadBack3 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef3];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save(`${records[2].prn}_back.pdf`);
  };

  const handlePrintBack3 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [pdfContentRef3];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
  };
  const handleDownloadBack4 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [
      pdfContentRef1,
      pdfContentRef2,
      pdfContentRef3,
      pdfContentRef4,
    ];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    pdf.save("back.pdf");
  };

  const handlePrintBack4 = async () => {
    const pdf = new jsPDF("l", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth / 2;
    const imgHeight = pdfHeight / 2 - 5;

    const elementRefs = [
      pdfContentRef1,
      pdfContentRef2,
      pdfContentRef3,
      pdfContentRef4,
    ];

    for (let i = 0; i < elementRefs.length; i++) {
      const element = elementRefs[i].current;

      if (element) {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const x = (i % 2) * imgWidth;
        const y = Math.floor(i / 2) * (imgHeight + 5);

        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      }
    }
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const pdfWindow = window.open(pdfUrl);

    if (pdfWindow) {
      pdfWindow.onload = function () {
        pdfWindow.print();
        pdfWindow.onafterprint = () => URL.revokeObjectURL(pdfUrl);
      };
    } else {
      alert("Failed to open the PDF window. Please check your popup settings.");
    }
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
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          opacity: 0.65,
          zIndex: 1,
        }}
      />

      <Box
        component="img"
        src="/bvdu_logo.png"
        alt="bvdu logo"
        sx={{
          position: "fixed",
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
          position: "fixed",
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
          height: "340vh",
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
            width: { xs: "90%", sm: "1100px" },
            marginTop: "10vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: { xs: "90%", sm: "50%" },
                backgroundColor: "#fff",
                padding: 2,
                marginBottom: "20px",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <h2
                  style={{
                    color: "#1A365D",
                    fontSize: "18px",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  PRN: {records[0]?.prn || "N/A"}
                </h2>
              </Box>
              <Box
                ref={pdfBoxRef1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      backgroundColor: "#3327e3",
                    }}
                  >
                    <Box
                      component="img"
                      src="/bvdu_logo.png"
                      alt="bvdu logo"
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Box
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        color: "white",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Bharati Vidyapeeth
                      <br />
                      (Deemed to be University)
                      <br />
                      Department of
                      <br />
                      Engineering & Technology
                    </Box>
                    <Box
                      component="img"
                      src="/det_logo.jpg"
                      alt="det logo"
                      sx={{
                        width: "50px",
                        height: "25px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai-410 210
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Library Card : {records[0]?.batch || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {imageSrc1 ? (
                      <Box
                        component="img"
                        src={imageSrc1}
                        alt="Profile Photo"
                        sx={{
                          width: "100px",
                          height: "110px",
                          mt: 1,
                          border: "1px solid #000",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#ccc",
                          borderRadius: "0%",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          color: "#666",
                          marginTop: "10px",
                        }}
                      >
                        No Photo
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      color: "#c443e8",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {records[0]?.full_name || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[0]?.degree || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[0]?.branch || "N/A"}
                  </Box>
                  {records[0]?.prn && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: -2,
                        mb: -4,
                      }}
                    >
                      <Barcode
                        value={records[0].prn}
                        format="CODE128"
                        width={4}
                        height={100}
                        displayValue={false}
                        background={"#fff"}
                        lineColor={"#000"}
                      />
                    </Box>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "30px",
                      marginTop: 2,
                    }}
                  >
                    PRN No.: {records[0]?.prn || "N/A"}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadFront1}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintFront1}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>

              <Box sx={{ mb: 4 }}>
                <h2
                  style={{
                    color: "#1A365D",
                    fontSize: "18px",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                    marginTop: "100px",
                  }}
                >
                  PRN: {records[2]?.prn || "N/A"}
                </h2>
              </Box>
              <Box
                ref={pdfBoxRef3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      backgroundColor: "#3327e3",
                    }}
                  >
                    <Box
                      component="img"
                      src="/bvdu_logo.png"
                      alt="bvdu logo"
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Box
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        color: "white",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Bharati Vidyapeeth
                      <br />
                      (Deemed to be University)
                      <br />
                      Department of
                      <br />
                      Engineering & Technology
                    </Box>
                    <Box
                      component="img"
                      src="/det_logo.jpg"
                      alt="det logo"
                      sx={{
                        width: "50px",
                        height: "25px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai-410 210
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Library Card : {records[2]?.batch || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {imageSrc3 ? (
                      <Box
                        component="img"
                        src={imageSrc3}
                        alt="Profile Photo"
                        sx={{
                          width: "100px",
                          height: "110px",
                          mt: 1,
                          border: "1px solid #000",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#ccc",
                          borderRadius: "0%",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          color: "#666",
                          marginTop: "10px",
                        }}
                      >
                        No Photo
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      color: "#c443e8",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {records[2]?.full_name || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[2]?.degree || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[2]?.branch || "N/A"}
                  </Box>
                  {records[2]?.prn && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: -2,
                        mb: -4,
                      }}
                    >
                      <Barcode
                        value={records[2].prn}
                        format="CODE128"
                        width={4}
                        height={100}
                        displayValue={false}
                        background={"#fff"}
                        lineColor={"#000"}
                      />
                    </Box>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "31px",
                      marginTop: 2,
                    }}
                  >
                    PRN No.: {records[2]?.prn || "N/A"}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadFront3}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintFront3}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>

              <Box
                ref={pdfContentRef1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                  marginTop: "100px",
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: 2,
                        fontSize: "12px",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 0.5,
                      }}
                    >
                      Scan for e-library:
                    </Typography>
                    <Box
                      component="img"
                      src="/qrcode-ai.jpg"
                      alt="qr code"
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        marginTop: 2,
                        fontSize: "12px",
                        textDecoration: "underline",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        marginBottom: 0.5,
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 2,
                      }}
                    >
                      Instructions:
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        fontSize: "10px",
                        px: 2,
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                      }}
                    >
                      1.This batch must be presented to the security or
                      authorised personnel on demand.
                      <br />
                      2.Loss or theft of batch should be reported immediately to
                      the administration department.
                      <br />
                      3.This badge is non-transferable.
                      <br />
                      4.Anyone finding this badge is requested to return to the
                      address on the reverse.
                    </Typography>
                    <Box
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#3327e3",
                        color: "white",
                        width: "100%",
                        marginTop: 1,
                        height: "91px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                          marginTop: 1,
                        }}
                      >
                        BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        DEPARTMENT OF ENGINEERING & TECHNOLOGY
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai - 410 210
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 0,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Contact No.: (022) 3508 6505 | Email:
                        det.nm@bharatividyapeeth.edu
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Website: https://www.bvuniversity.edu.in/doemumbai/
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadBack1}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintBack1}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>
              <Box
                ref={pdfContentRef3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                  marginTop: "100px",
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: 2,
                        fontSize: "12px",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 0.5,
                      }}
                    >
                      Scan for e-library:
                    </Typography>
                    <Box
                      component="img"
                      src="/qrcode-ai.jpg"
                      alt="qr code"
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        marginTop: 2,
                        fontSize: "12px",
                        textDecoration: "underline",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        marginBottom: 0.5,
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 2,
                      }}
                    >
                      Instructions:
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        fontSize: "10px",
                        px: 2,
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                      }}
                    >
                      1.This batch must be presented to the security or
                      authorised personnel on demand.
                      <br />
                      2.Loss or theft of batch should be reported immediately to
                      the administration department.
                      <br />
                      3.This badge is non-transferable.
                      <br />
                      4.Anyone finding this badge is requested to return to the
                      address on the reverse.
                    </Typography>
                    <Box
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#3327e3",
                        color: "white",
                        width: "100%",
                        marginTop: 1,
                        height: "91px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                          marginTop: 1,
                        }}
                      >
                        BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        DEPARTMENT OF ENGINEERING & TECHNOLOGY
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai - 410 210
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 0,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Contact No.: (022) 3508 6505 | Email:
                        det.nm@bharatividyapeeth.edu
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Website: https://www.bvuniversity.edu.in/doemumbai/
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadBack3}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintBack3}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "90%", sm: "50%" },
                backgroundColor: "#fff",
                padding: 2,
                marginBottom: "20px",
              }}
            >
              <Box sx={{ mb: 4 }}>
                <h2
                  style={{
                    color: "#1A365D",
                    fontSize: "18px",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  }}
                >
                  PRN: {records[1]?.prn || "N/A"}
                </h2>
              </Box>
              <Box
                ref={pdfBoxRef2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      backgroundColor: "#3327e3",
                    }}
                  >
                    <Box
                      component="img"
                      src="/bvdu_logo.png"
                      alt="bvdu logo"
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Box
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        color: "white",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Bharati Vidyapeeth
                      <br />
                      (Deemed to be University)
                      <br />
                      Department of
                      <br />
                      Engineering & Technology
                    </Box>
                    <Box
                      component="img"
                      src="/det_logo.jpg"
                      alt="det logo"
                      sx={{
                        width: "50px",
                        height: "25px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai-410 210
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Library Card : {records[1]?.batch || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {imageSrc2 ? (
                      <Box
                        component="img"
                        src={imageSrc2}
                        alt="Profile Photo"
                        sx={{
                          width: "100px",
                          height: "110px",
                          mt: 1,
                          border: "1px solid #000",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#ccc",
                          borderRadius: "0%",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          color: "#666",
                          marginTop: "10px",
                        }}
                      >
                        No Photo
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      color: "#c443e8",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {records[1]?.full_name || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[1]?.degree || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[1]?.branch || "N/A"}
                  </Box>
                  {records[1]?.prn && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: -2,
                        mb: -4,
                      }}
                    >
                      <Barcode
                        value={records[1].prn}
                        format="CODE128"
                        width={4}
                        height={100}
                        displayValue={false}
                        background={"#fff"}
                        lineColor={"#000"}
                      />
                    </Box>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "30px",
                      marginTop: 2,
                    }}
                  >
                    PRN No.: {records[1]?.prn || "N/A"}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadFront2}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintFront2}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>

              <Box sx={{ mb: 4 }}>
                <h2
                  style={{
                    color: "#1A365D",
                    fontSize: "18px",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                    marginTop: "100px",
                  }}
                >
                  PRN: {records[3]?.prn || "N/A"}
                </h2>
              </Box>
              <Box
                ref={pdfBoxRef4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "100%",
                      backgroundColor: "#3327e3",
                    }}
                  >
                    <Box
                      component="img"
                      src="/bvdu_logo.png"
                      alt="bvdu logo"
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <Box
                      sx={{
                        fontSize: "10px",
                        textAlign: "center",
                        color: "white",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      Bharati Vidyapeeth
                      <br />
                      (Deemed to be University)
                      <br />
                      Department of
                      <br />
                      Engineering & Technology
                    </Box>
                    <Box
                      component="img"
                      src="/det_logo.jpg"
                      alt="det logo"
                      sx={{
                        width: "50px",
                        height: "25px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai-410 210
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    Library Card : {records[3]?.batch || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {imageSrc4 ? (
                      <Box
                        component="img"
                        src={imageSrc4}
                        alt="Profile Photo"
                        sx={{
                          width: "100px",
                          height: "110px",
                          mt: 1,
                          border: "1px solid #000",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#ccc",
                          borderRadius: "0%",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bold",
                          color: "#666",
                          marginTop: "10px",
                        }}
                      >
                        No Photo
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "14px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      color: "#c443e8",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {records[3]?.full_name || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "9px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[3]?.degree || "N/A"}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontFamily: "Arial, Helvetica, sans-serif",
                    }}
                  >
                    {records[3]?.branch || "N/A"}
                  </Box>
                  {records[3]?.prn && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: -2,
                        mb: -4,
                      }}
                    >
                      <Barcode
                        value={records[3].prn}
                        format="CODE128"
                        width={4}
                        height={100}
                        displayValue={false}
                        background={"#fff"}
                        lineColor={"#000"}
                      />
                    </Box>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      height: "31px",
                      marginTop: 2,
                    }}
                  >
                    PRN No.: {records[3]?.prn || "N/A"}
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadFront4}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintFront4}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>
              <Box
                ref={pdfContentRef2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                  marginTop: "100px",
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: 2,
                        fontSize: "12px",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 0.5,
                      }}
                    >
                      Scan for e-library:
                    </Typography>
                    <Box
                      component="img"
                      src="/qrcode-ai.jpg"
                      alt="qr code"
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        marginTop: 2,
                        fontSize: "12px",
                        textDecoration: "underline",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        marginBottom: 0.5,
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 2,
                      }}
                    >
                      Instructions:
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        fontSize: "10px",
                        px: 2,
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                      }}
                    >
                      1.This batch must be presented to the security or
                      authorised personnel on demand.
                      <br />
                      2.Loss or theft of batch should be reported immediately to
                      the administration department.
                      <br />
                      3.This badge is non-transferable.
                      <br />
                      4.Anyone finding this badge is requested to return to the
                      address on the reverse.
                    </Typography>
                    <Box
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#3327e3",
                        color: "white",
                        width: "100%",
                        marginTop: 1,
                        height: "91px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                          marginTop: 1,
                        }}
                      >
                        BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        DEPARTMENT OF ENGINEERING & TECHNOLOGY
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai - 410 210
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 0,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Contact No.: (022) 3508 6505 | Email:
                        det.nm@bharatividyapeeth.edu
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Website: https://www.bvuniversity.edu.in/doemumbai/
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadBack2}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintBack2}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>
              <Box
                ref={pdfContentRef4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginBottom: 7,
                  marginTop: "100px",
                }}
              >
                <Box
                  sx={{
                    width: "70mm",
                    height: "100.5mm",
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    textAlign: "left",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: 2,
                        fontSize: "12px",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 0.5,
                      }}
                    >
                      Scan for e-library:
                    </Typography>
                    <Box
                      component="img"
                      src="/qrcode-ai.jpg"
                      alt="qr code"
                      sx={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        marginTop: 2,
                        fontSize: "12px",
                        textDecoration: "underline",
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        fontWeight: "bold",
                        marginBottom: 0.5,
                        textAlign: "left",
                        width: "100%",
                        marginLeft: 2,
                      }}
                    >
                      Instructions:
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        fontSize: "10px",
                        px: 2,
                        fontFamily:
                          "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                      }}
                    >
                      1.This batch must be presented to the security or
                      authorised personnel on demand.
                      <br />
                      2.Loss or theft of batch should be reported immediately to
                      the administration department.
                      <br />
                      3.This badge is non-transferable.
                      <br />
                      4.Anyone finding this badge is requested to return to the
                      address on the reverse.
                    </Typography>
                    <Box
                      sx={{
                        textAlign: "center",
                        backgroundColor: "#3327e3",
                        color: "white",
                        width: "100%",
                        marginTop: 1,
                        height: "91px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                          marginTop: 1,
                        }}
                      >
                        BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY)
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        DEPARTMENT OF ENGINEERING & TECHNOLOGY
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Plot No. KC-1, Sector 3, Kharghar, Navi Mumbai - 410 210
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 0,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Contact No.: (022) 3508 6505 | Email:
                        det.nm@bharatividyapeeth.edu
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "9px",
                          px: 1,
                          fontFamily:
                            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                        }}
                      >
                        Website: https://www.bvuniversity.edu.in/doemumbai/
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
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
                  onClick={handleDownloadBack4}
                  endIcon={<MdFileDownload />}
                >
                  Download
                </Button>

                <Button
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
                  onClick={handlePrintBack4}
                  endIcon={<BsPrinterFill />}
                >
                  Print
                </Button>
              </Box>
            </Box>
          </Box>
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
