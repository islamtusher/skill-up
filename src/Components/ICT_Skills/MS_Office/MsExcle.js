import React, { useState } from "react";

const MsExcel = () => {
  const [content, setContent] = useState(
    "https://www.youtube.com/embed/9Vcvzgbuvec"
  );

  const contents = [
    {
      id: 1,
      title: "Microsoft Excel Introduction",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/9Vcvzgbuvec",
    },
    {
      id: 2,
      title: "Sales Report Management",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/tyoDEdyBKXE",
    },
    {
      id: 3,
      title: "Microsoft Excel Introduction",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/M08VTyUHUo0",
    },
    {
      id: 4,
      title: "Student Result Sheet",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/cA82KLmYpCo",
    },
    {
      id: 5,
      title: "IFSUM Formula Use Case",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/MhO0nMx06Os",
    },
    {
      id: 6,
      title: "Number Formating",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/y3OFzYcjruc",
    },
  ];

  // TODO: Handle Content change events
  const handleContentChange = (link) => {
    console.log(link);
    setContent(link);
  };
  return (
    <div className="grid grid-cols-3 gap-8 m-24">
      <div className=" border-2 rounded-lg">
        <header className="font-bold text-2xl text-white bg-green-600 text-center py-4">
          Microsoft Excel Lectures
        </header>
        <div className="h-[60vh] overflow-auto bg-gray-50 px-4">
          {contents.map((content, index) => {
            return (
              <div
                key={index}
                className="flex border-2 rounded mt-4 p-2 hover:cursor-pointer bg-white hover:bg-gray-200"
                onClick={() => handleContentChange(content.contentLink)}
              >
                <p className="w-[50px] flex justify-center items-center ">
                  {content.id}
                </p>
                <div className="">
                  <h1 className="font-bold text-lg mb-1">{content.title}</h1>
                  <p>{content.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <iframe
          className="w-full"
          height="540"
          src={content}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="1"
        />
      </div>
    </div>
  );
};

export default MsExcel;
