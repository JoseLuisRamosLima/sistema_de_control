import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGps } from "../context/GpsContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import GpsCard from "../components/GpsCard";
import { generatePDF } from "../utils/PDFgenerador.js";


function PDFPage() {
  const { getGps, gpss } = useGps();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    getGps();
  }, []);
  if (gpss.length === 0) return (<h1>no hay gps circulando </h1>)


  return (
    <nav className=" px-24">
      <h1 className=" text-2xl font-bold mb-4">Reporte de CONTROL</h1>
      <div id="gps-content" className=" grid grid-cols-3 gap-2 px-20 py-10 ">
        {gpss.length > 0 ? (
          gpss.map((gps) => (
            <GpsCard gps={gps} key={gps.gpsid} />
          ))
        ) : (
          <p>No hay datos disponibles GPS. </p>
        )}
      </div>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => generatePDF(gpss)}
      >
        Generar PDF
      </button>
      <button
        className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-red-700"
        
      >
        Vaciar Datos
      </button>
    </nav>
  );
}

export default PDFPage;






// const generatePDF = () => {
//   const input = document.getElementById('gps-content');
//   html2canvas(input).then((canvas) => {
//     // este imgData es el que captura el dato y convierte en imagen al pdf
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4',
//       compress: true,
//     });

//     const marcaagua = new Image();
//     marcaagua.src = './public/assets/fondo.png';
//     marcaagua.onload = () => {
//       const pageWidth = pdf.internal.pageSize.getWidth();
//       const pageHeight = pdf.internal.pageSize.getHeight();
//       const imgWidth = marcaagua.width;
//       const imgHeight = marcaagua.height;

//       const xPos = 0;
//       const yPos = 0;

//       pdf.addImage(marcaagua, 'PNG', 0, 0, xPos, yPos, imgWidth, imgHeight, '', 'FAST');

//       pdf.setFontSize(12);
//       pdf.text("REPORTE DE CONTROL DE RUTAS", 10, 10);
//       pdf.text(`Fecha Generado: ${new Date().toLocaleDateString()}`, 10, 20);
//       pdf.text("Detalles de Reporte: ", 10, 30);


//       pdf.addImage(imgData, 'PNG', 10, 40, 190, 0);
//       const conf = (canvas.height * 190) / canvas.width;
//       pdf.setLineWidth(0.5);
//       pdf.rect(10, 40, 190, conf);

//       pdf.save("gps-data.pdf");
//     };
//   });


// };