"use client";
import XLSX from 'xlsx';

function ExcelToJson({ data, setData }: any) {
  const handleFileUpload = (e: any) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
      console.log(parsedData);
    };
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept=".xlsx, .xls"
        className="appearance-none bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-sm text-sm leading-5"
        onChange={handleFileUpload}
      />
    </div>
  );
}
export default ExcelToJson;
