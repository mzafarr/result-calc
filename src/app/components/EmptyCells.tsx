import React from "react";

const EmptyCells = () => {
  const emptyData = ["-", "-", "-", "-"];
  return (
    <>
      {emptyData.map((item, index) => (
        <tr key={index} className="h-14 rounded-xl text-center w-full">
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
          <td className="px-3 border-b"></td>
        </tr>
      ))}
    </>
  );
};

export default EmptyCells;
