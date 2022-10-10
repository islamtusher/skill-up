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

const ModelTest = () => {
  //   const allSubjects = [
  //     {
  //       name: "Bangla",
  //       modelTestMark: {
  //         testOne: 50,
  //         testTwo: 80,
  //         testThree: 75,
  //       },
  //       amt: 100,
  //     },
  //     {
  //       name: "English",
  //       modelTestMark: {
  //         testOne: 50,
  //         testTwo: 80,
  //         testThree: 75,
  //       },
  //       amt: 100,
  //     },
  //     {
  //       name: "Physic",
  //       modelTestMark: {
  //         testOne: 50,
  //         testTwo: 80,
  //         testThree: 75,
  //       },
  //       amt: 100,
  //     },
  //     {
  //       name: "Math",
  //       modelTestMark: {
  //         testOne: 50,
  //         testTwo: 80,
  //         testThree: 75,
  //       },
  //       amt: 100,
  //     },
  //     {
  //       name: "Islam",
  //       modelTestMark: {
  //         testOne: 50,
  //         testTwo: 80,
  //         testThree: 75,
  //       },
  //       amt: 100,
  //     },
  //   ];
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
  return (
    <div>
      <div className="py-20">
        <h1 className="text-primary font-bold text-2xl text-center mb-4">
          All Subjects Model Test
        </h1>
        <div className="grid lg:grid-cols-2 gap-y-12 ">
          {/* <div className="flex flex-col lg:flex-row gap-y-12 "> */}
          {allSubjects.map((sub, index) => (
            <div
              key={index}
              className="w-[100%] lg:w-[600px] h-[350px] lg:mx-4 bg-white rounded-2xl shadow-xl pt-5 pb-12 pr-2 "
            >
              <h1 className="text-xl font-bold  text-center mb-4">
                {sub.subject} Model Tests
              </h1>
              <h1 className="text-xl font-bold  text-center mb-4">
                {/* {sub.modelTests.map(test=> )} */}
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
      <div className=""></div>
    </div>
  );
};

export default ModelTest;
