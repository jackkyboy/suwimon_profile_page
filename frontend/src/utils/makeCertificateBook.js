// src/utils/makeCertificateBook.js
import jsPDF from "jspdf";

export async function makeCertificateBook(pages) {
  const pdf = new jsPDF({ unit: "px", format: "a4" });
  for (let i = 0; i < pages.length; i++) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = pages[i];
    await img.decode();
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    // fit contain
    const ratio = Math.min(pageW / img.width, pageH / img.height);
    const w = img.width * ratio, h = img.height * ratio;
    const x = (pageW - w)/2, y = (pageH - h)/2;
    if (i>0) pdf.addPage();
    pdf.addImage(img, "PNG", x, y, w, h);
  }
  pdf.save("certificate-book.pdf");
}
