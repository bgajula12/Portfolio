const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument();
const outPath = 'public/Bharath_Kumar_Gajula_Resume.pdf';

doc.pipe(fs.createWriteStream(outPath));

doc.fontSize(20).text('Bharath Kumar Gajula - Resume (Placeholder)', { align: 'center' });

doc.moveDown();

doc.fontSize(12).text('This is a generated placeholder resume PDF created to enable the resume download in the portfolio. Replace this file with the real resume PDF you want visitors to download.', {
  align: 'left',
});

doc.moveDown();

doc.text('To replace: drop your resume PDF at public/Bharath_Kumar_Gajula_Resume.pdf', { align: 'left' });

doc.end();

console.log('Wrote placeholder PDF to', outPath);
