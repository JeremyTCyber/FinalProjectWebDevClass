<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


if (isset($_POST['generatePDF'])) {
   require_once('/usr/tcpdf/tcpdf.php');
    // Create a new PDF document
    $pdf = new TCPDF();

    // Add a page
    $pdf->AddPage();

    // Set font
    $pdf->SetFont('helvetica', '', 12);

    // Add content to the PDF
    $pdf->Cell(0, 10, 'Hello World and ICT458, this is your generated PDF!', 0, 1);

    // Output the PDF to the browser or save to a file
    $pdf->Output('generatedPDF.pdf', 'I');
}
?>