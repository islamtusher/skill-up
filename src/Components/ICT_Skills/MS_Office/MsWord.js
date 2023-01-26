import React, { useState } from 'react';

const MsWord = () => {
  const [content, setContent] = useState("https://www.youtube-nocookie.com/embed/Vq_jkdsjbK8");

  const contents = [
    {
      id: 1,
      title: "Microsoft Word Course Preview",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube-nocookie.com/embed/Vq_jkdsjbK8",
    },
    {
      id: 2,
      title: "Microsoft Word Introduction",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube-nocookie.com/embed/nr0HJb-82H4",
    },
    {
      id: 3,
      title: "Microsoft Word Text Options",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube-nocookie.com/embed/Gs7f-_vx05o",
    },
    {
      id: 4,
      title: "Microsoft Word Bullet Points",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube-nocookie.com/embed/uvhaIjqHsZY",
    },
    {
      id: 5,
      title: "Microsoft Word Interfaces",
      duration: "9.30 minutes",
      contentLink: "https://www.youtube-nocookie.com/embed/nr0HJb-82H4",
    },
  ];

  // TODO: Handle Content change events
  const handleContentChange = (link) => { 
    console.log(link);
    setContent(link)
  }
    return (
      <div className="grid grid-cols-3 gap-8 m-24">
        <div className=" border-2  rounded-lg">
          <header className="font-bold text-2xl text-white bg-primary text-center py-4">
            Microsoft Word Lectures
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
                    <h1 className="font-bold text-md mb-1">{content.title}</h1>
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

export default MsWord;