import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import API from "../../../Network/API";
import authHeader, { baseURL } from "../../../Network/AuthApi";

const McqChart = () => {
  const [allSubjectsResult, setAllSubjectsResult] = useState([]);
  // const [preAvgMark, setPreAvgMark] = useState(0);

  // Redux State 
  const score = useSelector((state) => state.examScore.score);

  // TODO: Load all subjects MCQ performance
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        baseURL + "get_subject_wise_exam_performance",
        { headers: authHeader()}
      );
      setAllSubjectsResult(response.data.data);
      console.log(response.data.data);
    })();
  }, [])

  const data = [
    {
      uuid: "409f0683-a0aa-477d-90dd-7912d7a9a473",
      name: "প্রাথমিক গনিত",
      exams: [
        {
          uuid: "ff32d177-3ffe-4f05-9b4e-07ead9a4fb72",
          score: 7,
          participate: 20,
          date: "2023-01-19T08:20:56.000000Z",
          chapter: "Chapter 1",
          amt: 20,
        },
        {
          uuid: "b99a29b5-7cbe-4d53-9ccc-fbc5481080f",
          score: 15,
          participate: 20,
          date: "2023-01-19T08:31:09.000000Z",
          chapter: "Chapter 2",
          amt: 20,
        },
        {
          uuid: "b99a29b5-7cbe-4d53-9ccc-fbc5481080",
          score: 13,
          participate: 15,
          date: "2023-01-19T08:31:09.000000Z",
          chapter: "Chapter 3",
          amt: 20,
        },
      ],
    },
    {
      uuid: "f0244813-f4ba-4de2-848e-1480942488b9",
      name: "আমার বাংলা বই",
      exams: [
        {
          uuid: "09d52558-3c2b-4bec-bf7e-86c0b8c3d57e",
          score: 4,
          participate: 5,
          date: "2023-01-22T04:47:14.000000Z",
          chapter: "অধ্যয় ১ : এই দেশ এই মানুষ",
        },
      ],
    },
  ];


  return (
    <div className="py-20">
      <h1 className="text-xl text-main font-bold text-center py-6 ">
        All Subjects MCQ Result
      </h1>

      <div className="flex flex-col lg:flex-row gap-y-12 ">
        {allSubjectsResult.map((sub, index) => (
          <div
            key={index}
            className="w-[100%] lg:w-[600px] h-[350px] lg:mx-4 bg-white rounded-2xl shadow-xl pt-5 pb-12 pr-4"
          >
            <h1 className="text-xl font-bold  text-center mb-4">{sub.name}</h1>
            {/* {sub?.exams?.map((exam, index) => preAvgMark = preAvgMark + exam.score)}
            <h1> Average Mark : {sub?.exams?.length / preAvgMark}</h1> */}

            {/* <ResponsiveContainer key={index}>
              <ComposedChart data={sub.exams} margin={{ top: 20 }}>
                <CartesianGrid />
                <XAxis
                  dataKey="chapter"
                  scale="point"
                  padding={{ left: 20, right: 20 }}
                  fontSize="12"
                />
                <YAxis dataKey="participate" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="participate" fill="#82ca9d" />
                <Bar
                  dataKey="score"
                  fill="#8884d8"
                  barSize={30}
                >
                  <LabelList dataKey="name" content={renderCustomizedLabel} />
                </Bar>
                <Bar
                  dataKey="participate"
                  fill="#82ca9d"
                  barSize={30}
                />
                <Bar
                  dataKey="score"
                  barSize={30}
                  fill="#8884d8"
                  label={{ position: "top" }}
                  stackId="a"
                  background={{ fill: "#eee" }}
                />
              </ComposedChart>
            </ResponsiveContainer> */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sub.exams} margin={{ top: 20 }}>
                <CartesianGrid />
                <XAxis
                  dataKey="chapter"
                  scale="point"
                  padding={{ left: 30, right: 30 }}
                  fontSize="12"
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="score"
                  fill="#8884d8"
                  minPointSize={5}
                  barSize={20}
                >
                  <LabelList dataKey="score"  />
                </Bar>
                <Bar
                  dataKey="participate"
                  fill="#82ca9d"
                  minPointSize={10}
                  barSize={20}
                >
                  <LabelList
                    dataKey="participate"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default McqChart;
