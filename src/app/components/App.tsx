"use client";
import React, { useEffect, useState } from "react";
import FileInputButton from "./FileInputButton";
import Image from "next/image";
import FilledCells from "./FilledCells";
import Search from "./Search";
import img from "./img.png";
const App = () => {
  const [data, setData] = useState([]);

  // weightages
  const [assignmentWeightage, setAssignmentWeightage] = useState(20);
  const [quizWeightage, setQuizWeightage] = useState(20);
  const [midTermWeightage, setMidTermWeightage] = useState(20);
  const [finalTermWeightage, setFinalTermWeightage] = useState(40);
  const [labWeightage, setLabWeightage] = useState(0);
  const [CPWeightage, setCPWeightage] = useState(0);
  const [isWeightageCorrect, setIsWeightageCorrect] = useState(true);

  const [selectedType, setSelectedType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");

  useEffect(() => {
    const totalWeightage =
      assignmentWeightage +
      quizWeightage +
      midTermWeightage +
      finalTermWeightage +
      labWeightage +
      CPWeightage;

    if (totalWeightage !== 100) {
      setIsWeightageCorrect(false);
    } else {
      setIsWeightageCorrect(true);
    }
  }, [
    finalTermWeightage,
    midTermWeightage,
    assignmentWeightage,
    quizWeightage,
    CPWeightage,
    labWeightage,
  ]);

  return (
    <div className="min-h-screen -m-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl">Result Calculator</h1>

      {data.length !== 0 && (
        <Search
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortType={sortType}
          setSortType={setSortType}
        />
      )}

      {!isWeightageCorrect && (
        <div>
          <h3 className="text-red-500 text-xl pb-4">
            Total weightage is not 100%. Kindly fix it otherwise you will get
            incorrect results.
          </h3>
        </div>
      )}
      {data.length !== 0 ? (
        <table
          className="rounded-md border-t border-x mb-8 border-spacing-y-2 border-separate"
          id="myTable"
        >
          {/* headings */}
          <thead className="p-3">
            <tr className="">
              <th className="px-3">Reg #</th>
              <th>Name</th>
              <th className="px-3">
                Assignment
                <select
                  className="m-2"
                  name="AssignmentWeightage"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setAssignmentWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20" selected>
                    20
                  </option>
                </select>
              </th>
              <th className="px-3">
                Quiz
                <select
                  className="m-2"
                  name="QuizWeightage"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setQuizWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="15">15</option>
                  <option value="20" selected>
                    20
                  </option>
                </select>
              </th>
              <th className="px-3">
                Mid
                <select
                  className="m-2"
                  name="MidTermWeightage"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setMidTermWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="15">15</option>
                  <option value="20" selected>
                    20
                  </option>
                  <option value="25">25</option>
                </select>
              </th>
              <th className="px-3">
                Final
                <select
                  className="m-2"
                  name="FinalTermWeightage"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setFinalTermWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="40" selected>
                    40
                  </option>
                  <option value="45">45</option>
                </select>
              </th>
              <th className="px-3">
                Lab
                <select
                  className="m-2"
                  name="LabWeightage"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setLabWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="0" selected>
                    0
                  </option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </th>
              <th className="px-3">
                CP
                <select
                  className="m-2"
                  name="CP"
                  id=""
                  onChange={(event) => {
                    let value = event.target.value;

                    setCPWeightage(parseInt(event.target.value));
                  }}
                >
                  <option value="0" selected>
                    0
                  </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </th>
              <th className="px-3">CGPA</th>
              <th className="px-3">%</th>
              <th className="px-3">Grade</th>
            </tr>
          </thead>
          <tbody className="">
            <FilledCells
              data={data}
              assignmentWeightage={assignmentWeightage}
              quizWeightage={quizWeightage}
              midTermWeightage={midTermWeightage}
              finalTermWeightage={finalTermWeightage}
              labWeightage={labWeightage}
              CPWeightage={CPWeightage}
              selectedType={selectedType}
              searchQuery={searchQuery}
              sortType={sortType}
            />
          </tbody>
        </table>
      ) : (
        <Image src={img} width={1000} alt="sample table"/>
      )}
      <FileInputButton data={data} setData={setData} />
    </div>
  );
};

export default App;
