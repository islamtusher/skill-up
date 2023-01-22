import React, { useState } from "react";

const GraphicsDesign = () => {
  const [content, setContent] = useState(
    "https://www.youtube.com/embed/2aYPlxXLUFw"
  );

  const contents = [
    {
      id: 1,
      title: "Background Remove Photoshop",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/2aYPlxXLUFw",
    },
    {
      id: 2,
      title: "Business Card Design",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube.com/embed/SXRAKTb1LyM",
    }
  ];

  // TODO: Handle Content change events
  const handleContentChange = (link) => {
    console.log(link);
    setContent(link);
  };
  return (
    <div className="grid grid-cols-3 gap-8 m-24">
      <div className=" border-2 rounded-lg">
        <header className="font-bold text-2xl text-white bg-red-700 text-center py-4">
          Graphics Design Lectures
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

export default GraphicsDesign;
