import ExcelJS from "exceljs";


(async () => {
  console.time('start')
  const file = await fetch("/pentunfold.xlsx");
  const buffer = await file.arrayBuffer();

  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(buffer);

  console.log('wb', wb);

  const ws = wb.worksheets[0];

  ws.addRow({
    value: 'ATOM N'
  });

  console.log('ws', ws);

  console.timeEnd('start')
  const download = document.querySelector('#download');

  download.onclick = () => {

  }
})();
