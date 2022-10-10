import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const McqChart = () => {
  const allSubjects = [
    {
      subject: "Bangla",
      chapters: [
        {
          name: "C 1",
          mcqMark: 10,
          amt: 20,
        },
        {
          name: "C 2",
          mcqMark: 12,
          amt: 20,
        },
        {
          name: "C 3",
          mcqMark: 16,
          amt: 20,
        },
        {
          name: "C 4",
          mcqMark: 12,
          amt: 20,
        },
        {
          name: "C 5",
          mcqMark: 20,
          amt: 20,
        },
      ],
    },
    {
      subject: "English",
      chapters: [
        {
          name: "C 1",
          mcqMark: 15,
          amt: 20,
        },
        {
          name: "C 2",
          mcqMark: 12,
          amt: 20,
        },
        {
          name: "C 3",
          mcqMark: 12,
          amt: 20,
        },
        {
          name: "C 4",
          mcqMark: 19,
          amt: 20,
        },
        {
          name: "C 5",
          mcqMark: 2,
          amt: 20,
        },
      ],
    },
  ];
  return (
    <div className="py-20">
      <h1 className="text-xl text-peimary font-bold text-center py-6 ">
        All Subjects MCQ Result
      </h1>

      <div className="flex flex-col lg:flex-row gap-y-12 ">
        {allSubjects.map((sub, index) => (
          <div
            key={index}
            className="w-[100%] lg:w-[600px] h-[350px] lg:mx-4 bg-white rounded-2xl shadow-xl pt-5 pb-12 pr-2 "
          >
            <h1 className="text-xl font-bold  text-center mb-4">
              {sub.subject}
            </h1>

            <ResponsiveContainer key={index}>
              <ComposedChart data={sub.chapters} margin={{ top: 20 }}>
                <CartesianGrid />
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis dataKey="amt" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="mcqMark" fill="#82ca9d" />
                <Bar
                  dataKey="mcqMark"
                  barSize={20}
                  fill="#8884d8"
                  label={{ position: "top" }}
                />
                <Line type="monotone" dataKey="mcqMark" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default McqChart;
