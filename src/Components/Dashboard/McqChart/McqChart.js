import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const McqChart = () => {
  const allSubjects =
    [
      {
        subject: "Bangla",
        chapters: [
          {
            "name": "C 1",
            "mcq-mark": 10,
            "amt": 20
          },
          {
            "name": "C 2",
            "mcq-mark": 12,
            "amt": 20
          },
          {
            "name": "C 3",
            "mcq-mark": 16,
            "amt": 20
          },
          {
            "name": "C 4",
            "mcq-mark": 12,
            "amt": 20
          },
          {
            "name": "C 5",
            "mcq-mark": 20,
            "amt": 20
          }
        ]
      }
      ,
      
      {
        subject: "English",
        chapters : [
          {
            "name": "C 1",
            "mcq-mark": 15,
            "amt": 20
          },
          {
            "name": "C 2",
            "mcq-mark": 12,
            "amt": 20
          },
          {
            "name": "C 3",
            "mcq-mark": 12,
            "amt": 20
          },
          {
            "name": "C 4",
            "mcq-mark": 19,
            "amt": 20
          },
          {
            "name": "C 5",
            "mcq-mark": 2,
            "amt": 20
          }
        ] 
      }               
    ]
    const data = [
        {
          "name": "C-1",
          "mcq-mark": 1,
          "amt": 20
        },
        {
          "name": "C-2",
          "mcq-mark": 12,
          "amt": 20
        },
        {
          "name": "C-3",
          "uv": 10,
          "mcq-mark": 20,
          "amt": 20
        },
        {
          "name": "C-4",
          "mcq-mark": 10,
          "amt": 20
        },
        {
          "name": "C-5",
          "mcq-mark": 10,
          "amt": 20
        },
        {
          "name": "C-6",
          "mcq-mark": 10,
          "amt": 20
        },
        {
          "name": "C-7",
          "mcq-mark": 10,
          "amt": 20
        },
        {
          "name": "C-8",
          "mcq-mark": 10,
          "amt": 20
        },
        {
          "name": "C-9",
          "mcq-mark": 14,
          "amt": 20
        }
    ]
  console.log(allSubjects[0].bangla);

    return (
      <div className="">
        <h1 className='text-xl text-peimary font-bold text-center py-6 '>All Subjects MCQ Result</h1>
        <div className="flex flex-col lg:flex-row gap-y-12 ">
        {
          allSubjects.map((sub, index) =>
            <div className='w-[100%] lg:w-[600px] h-[350px] lg:mx-4 bg-white rounded-2xl shadow-xl py-10 pr-2 '>
              <h1 className='text-xl font-bold  text-center mb-4'>{sub.subject}</h1>
              <ResponsiveContainer key={index}>
                <ComposedChart data={sub.chapters}>
                  <CartesianGrid />
                  <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20}}/>
                  <YAxis dataKey="amt"/>
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="mcq-mark" fill="#82ca9d" />
                  <Bar dataKey="mcq-mark" barSize={20} fill="#8884d8" />
                  <Line type="monotone" dataKey="mcq-mark" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>            
          )
        } 
        </div>
      </div>
    );
};

export default McqChart;