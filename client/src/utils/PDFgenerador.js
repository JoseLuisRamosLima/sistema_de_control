import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (gpss) => {
    try {
        const input = document.getElementById('gps-content');
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true,
        });

        const marcaagua = new Image();
        // RUTA DE LA IMGAEN
        marcaagua.src = './public/assets/opac.png'; 

        marcaagua.onload = () => {
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            // Marca de agua
            pdf.addImage(marcaagua, 'PNG', 0, 0, pageWidth, pageHeight, '', 'FAST');

            pdf.setFontSize(12);
            pdf.text("REPORTE DE CONTROL DE RUTAS", 10, 10);
            pdf.text(`Fecha Generado: ${new Date().toLocaleDateString()}`, 10, 20);
            pdf.text("Detalles de Reporte:", 10, 30);

            const tableStartY = 40;
            let currentY = tableStartY;

            // Encabezado de la tabla
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'bold');
            pdf.text("ID", 10, currentY);
            pdf.text("Punto 1", 50, currentY);
            pdf.text("Punto 2", 90, currentY);
            pdf.text("Punto 3", 130, currentY);
            pdf.setFont('helvetica', 'normal');
            currentY += 10;

            // Datos de la tabla
            gpss.forEach((gps) => {
                if (currentY + 10 > pageHeight - 10) { // Ajusta el margen inferior
                    pdf.addPage();
                    currentY = 10;
                    pdf.setFont('helvetica', 'bold');
                    pdf.text("ID", 10, currentY);
                    pdf.text("Punto 1", 30, currentY);
                    pdf.text("Punto 2", 70, currentY);
                    pdf.text("Punto 3", 110, currentY);
                    pdf.setFont('helvetica', 'normal');
                    currentY += 10;
                }
                // pdf.text(String(gps.gpsid), 10, currentY); // Convertir a string
                // pdf.text(String(gps.latitude), 50, currentY); // Convertir a string
                // pdf.text(String(gps.longitude), 900, currentY); // Convertir a string
                // pdf.text(new Date(gps.timestamp).toLocaleDateString(), 150, currentY);
                // currentY += 10;
                pdf.text(String(gps.gpsid || ''), 10, currentY); // Convertir a string y manejar nulos o indefinidos
                pdf.text(gps.punto1 ? 'SI' : 'NO', 50, currentY); // Convertir booleanos a 'SI' o 'NO'
                pdf.text(gps.punto2 ? 'SI' : 'NO', 90, currentY); // Convertir booleanos a 'SI' o 'NO'
                pdf.text(gps.punto3 ? 'SI' : 'NO', 130, currentY); // Convertir booleanos a 'SI' o 'NO'
                currentY += 10;
            });

            pdf.save("gps-data.pdf");
        };

        marcaagua.onerror = (err) => {
            console.error('Error al cargar la marca de agua', err);
        };

    } catch (error) {
        console.error('Error generating PDF', error);
    }
};
