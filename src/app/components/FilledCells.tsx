import React, { useEffect, useState } from "react";

interface FCProps {
  data: any;
  assignmentWeightage: number;
  quizWeightage: number;
  midTermWeightage: number;
  finalTermWeightage: number;
  labWeightage: number;
  CPWeightage: number;
  selectedType: string;
  searchQuery: string;
  sortType: string;
}

const FilledCells: React.FC<FCProps> = ({
  data,
  quizWeightage,
  assignmentWeightage,
  midTermWeightage,
  finalTermWeightage,
  labWeightage,
  CPWeightage,
  selectedType,
  searchQuery,
  sortType,
}) => {
  // filter data
  let filteredData = [...data];
  if (searchQuery == "False") {
    filteredData = [...data];
  } else if (selectedType === "Name" && searchQuery !== "") {
    filteredData = data.filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (selectedType === "RegNumber" && searchQuery !== "") {
    filteredData = data.filter((item) =>
      item.RegNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (selectedType === "Grade" && searchQuery !== "") {
    filteredData = data.filter((item) => item.Grade === searchQuery);
  } else if (selectedType === "CGPA" && searchQuery !== "") {
    filteredData = data.filter((item) => item.CGPA === searchQuery);
  }
  // sort data
  let displayData = [...filteredData];
  if (sortType !== "False") {
    switch (sortType) {
      case "Name":
        displayData.sort((a, b) => a.Name.localeCompare(b.Name));
        break;
      case "CGPA":
        displayData.sort((a, b) => b.CGPA - a.CGPA);
        break;
      case "Grade":
        displayData.sort((a, b) => a.Grade - b.Grade);
        break;
    }
  }

  return (
    <>
      {displayData.map((item, index) => {
        let assignment = item.Assignment ? item.Assignment.split("o") : [];
        let quiz = item.Quiz ? item.Quiz.split("o") : [];
        let midTerm = item.MidTerm ? item.MidTerm.split("o") : [];
        let finalTerm = item.FinalTerm ? item.FinalTerm.split("o") : [];
        let lab = item.Lab ? item.Lab.split("o") : [];
        let CP = item.CP ? item.CP.split("o") : [];
        let CGPA = item.CGPA ? item.CGPA : 0;

        quiz = parseFloat(
          ((parseInt(quiz[0]) / parseInt(quiz[1])) * quizWeightage).toFixed(2)
        );
        assignment = parseFloat(
          (
            (parseInt(assignment[0]) / parseInt(assignment[1])) *
            assignmentWeightage
          ).toFixed(2)
        );
        midTerm = parseFloat(
          (
            (parseInt(midTerm[0]) / parseInt(midTerm[1])) *
            midTermWeightage
          ).toFixed(2)
        );
        finalTerm = parseFloat(
          (
            (parseInt(finalTerm[0]) / parseInt(finalTerm[1])) *
            finalTermWeightage
          ).toFixed(2)
        );
        lab = parseFloat(
          ((parseInt(lab[0]) / parseInt(lab[1])) * labWeightage).toFixed(2)
        );
        CP = parseFloat(
          ((parseInt(CP[0]) / parseInt(CP[1])) * CPWeightage).toFixed(2)
        );

        const totalPercentage =
          quiz + assignment + midTerm + finalTerm + lab + CP;

        const grade =
          totalPercentage >= 86
            ? "A"
            : totalPercentage >= 82
            ? "A-"
            : totalPercentage >= 78
            ? "B+"
            : totalPercentage >= 74
            ? "B"
            : totalPercentage >= 70
            ? "B-"
            : totalPercentage >= 66
            ? "C+"
            : totalPercentage >= 62
            ? "C"
            : totalPercentage >= 58
            ? "C-"
            : totalPercentage >= 54
            ? "D+"
            : totalPercentage >= 50
            ? "D"
            : "F";
        return (
          <tr
            key={index}
            className={`${
              grade === "A" || grade === "A-"
                ? "bg-green-200"
                : grade === "B+" || grade === "B" || grade === "B-"
                ? "bg-orange-200"
                : grade === "C" ||
                  grade === "C-" ||
                  grade === "C+" ||
                  grade === "D" ||
                  grade === "D+"
                ? "bg-orange-200"
                : grade === "F"
                ? "bg-red-200"
                : ""
            } h-14 rounded-xl text-center border`}
          >
            <td className="px-3">{item.RegNumber}</td>
            <td className="px-3">{item.Name}</td>
            <td className="px-3">{assignment && assignment}</td>
            <td className="px-3">{quiz && quiz}</td>
            <td className="px-3">{midTerm && midTerm}</td>
            <td className="px-3">{finalTerm && finalTerm}</td>
            <td className="px-3">{lab && lab}</td>
            <td className="px-3">{CP && CP}</td>
            <td className="px-3">{CGPA && CGPA}</td>
            <td className="px-3">{totalPercentage.toFixed(2)}</td>
            <td className="px-3">{grade}</td>
          </tr>
        );
      })}
    </>
  );
};

export default FilledCells;
