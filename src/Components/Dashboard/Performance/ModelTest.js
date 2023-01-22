import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

const ModelTest = () => {

  const allSubjects = [
    {
      subject: "Bangla",
      modelTests: [
        {
          name: "MT 1",
          testMark: 65,
          amt: 100,
        },
        {
          name: "MT 2",
          testMark: 78,
          amt: 100,
        },
        {
          name: "MT 3",
          testMark: 69,
          amt: 100,
        },
        {
          name: "MT 4",
          testMark: 82,
          amt: 100,
        },
      ],
    },
    {
      subject: "English",
      modelTests: [
        {
          name: "MT 1",
          testMark: 80,
          amt: 100,
        },
        {
          name: "MT 2",
          testMark: 72,
          amt: 100,
        },
        {
          name: "MT 3",
          testMark: 88,
          amt: 100,
        },
        {
          name: "MT 4",
          testMark: 92,
          amt: 100,
        },
      ],
    },
    {
      subject: "Math",
      modelTests: [
        {
          name: "MT 1",
          testMark: 80,
          amt: 100,
        },
        {
          name: "MT 2",
          testMark: 72,
          amt: 100,
        },
        {
          name: "MT 3",
          testMark: 88,
          amt: 100,
        },
      ],
    },
    {
      subject: "Islam",
      modelTests: [
        {
          name: "MT 1",
          testMark: 80,
          amt: 100,
        },
        {
          name: "MT 2",
          testMark: 72,
          amt: 100,
        },
        {
          name: "MT 3",
          testMark: 78,
          amt: 100,
        },
        {
          name: "MT 4",
          testMark: 82,
          amt: 100,
        },
        {
          name: "MT 5",
          testMark: 78,
          amt: 100,
        },
      ],
    },
  ];

  const [allAverage, setAllAverage] = useState([]);

  useEffect(() => {
    for (const sub of allSubjects) {
      let sum = 0;
      sub.modelTests.map((test) => {
        sum += test.testMark;
        return 0;
      });
      const average = sum / sub.modelTests.length;
      setAllAverage((current) => [
        ...current,
        { name: sub.subject, mark: average, amt: 100 },
      ]);
    }
  }, []);

  return (
    <div className="py-24">
      <div className="flex flex-col justify-center items-center gap-y-4 mb-12 ">
        <h1 className=" font-bold font-[jost] text-2xl text-center mb-4">
          All Subjects Average Performance
        </h1>
        <div className="w-full lg:w-[600px] h-[350px] bg-white rounded-2xl shadow-xl pt-5 pb-2 pr-4">
          <ResponsiveContainer>
            <ComposedChart data={allAverage} margin={{ top: 20 }}>
              <CartesianGrid />
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 20, right: 20 }}
              />
              <YAxis dataKey="amt" />
              <Tooltip />
              <Area type="monotone" dataKey="mark" fill="#82ca9d" />
              <Bar
                dataKey="mark"
                barSize={20}
                fill="#8884d8"
                label={{ position: "top" }}
              />
              <Line type="monotone" dataKey="mark" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-black">
                <tr>
                  <th></th>
                  <th>Subjects</th>
                  <th>Mark</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {allAverage.map((sub, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "active" : ""}`}
                  >
                    <th>{index}</th>
                    <td>{sub.name}</td>
                    <td>{sub?.mark}</td>
                    <td>Blue</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
      <div className="">
        <h1 className="text-primary font-bold text-2xl text-center mb-4">
          Performance On All Model Test
        </h1>
        <div className="grid lg:grid-cols-2 gap-y-12 ">
          {allSubjects.map((sub, index) => (
            <div
              key={index}
              className="w-[100%] lg:w-[600px] h-[350px] lg:mx-4 bg-white rounded-2xl shadow-xl pt-5 pb-12 pr-2"
            >
              <h1 className="text-xl font-bold  text-center mb-4">
                {sub.subject} Model Tests
              </h1>
              <ResponsiveContainer key={index}>
                <ComposedChart data={sub.modelTests} margin={{ top: 20 }}>
                  <CartesianGrid />
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis dataKey="amt" />
                  <Tooltip />
                  <Bar
                    dataKey="testMark"
                    barSize={20}
                    fill="#8884d8"
                    label={{ position: "top" }}
                  />
                  <Line type="monotone" dataKey="testMark" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelTest;
