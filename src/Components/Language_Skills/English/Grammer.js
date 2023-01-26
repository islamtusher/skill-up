import React, { useState } from "react";

const Grammar = () => {
  const [content, setContent] = useState(
    "https://www.youtube.com/embed/LRKU5xmdLLQ"
  );

  const contents = [
    {
      id: 1,
      title: "English Grammar Introduction",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/LRKU5xmdLLQ",
    },
    {
      id: 2,
      title: "English Speaking Practice",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/Ch9WhP8k3r8",
    },
    {
      id: 3,
      title: "Types Of Grammar",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/EAiojmfv79M",
    },
    {
      id: 4,
      title: "English Best Practices",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/AefSPkyO82A",
    },
    {
      id: 5,
      title: "English Grammar A - Z",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/wyKxkcc1DNI",
    },
    {
      id: 6,
      title: "Sentence Making",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/NmyAGraz5vs",
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
        <header className="font-bold text-2xl text-white bg-blue-900 text-center py-4">
          English Grammar Lectures
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

export default Grammar;
