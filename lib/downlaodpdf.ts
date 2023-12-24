export const handleDownload = () => {
  const pdfUrl = "/assets/karanbarman.pdf"; // Update the path if necessary
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "karanbarman.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
