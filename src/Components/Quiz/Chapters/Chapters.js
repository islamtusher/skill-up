import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../../Network/API";
import ShowCorrectAns from "../ShowCorrectAns/ShowCorrectAns";
import { useDispatch, useSelector } from "react-redux";
import { getStudentExamScore } from "../../../redux/apiCalls/apiCall";
import Billing from "./Billing";
import { paySuccess } from "../../../redux/slice/billingSlice";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import axios from "axios";
import authHeader, { baseURL } from "../../../Network/AuthApi";

const Chapters = () => {
  const {subjectId, examType } = useParams();
  const {handleSubmit, register, reset, formState: { errors }} = useForm(); // react form hook

  const [currentSubject, setCurrentSubject] = useState(" ");
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [chapters, setChapters] = useState([]);
  const [currentChapterQuestions, setCurrentChapterQuestions] = useState([]);

  const [examId, setExamId] = useState([]);
  const [questionNo, setQuestionNo] = useState(0);
  const [selectedAns, setSelectedAns] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [IsShowCorrectAns, setIsShowCorrectAns] = useState(false);
  const [isMcqStart, setIsMcqStart] = useState(true);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [isBelling, setBelling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  //test: testing the redux state for billPaid submit 
  // const billPaid = useSelector((state) => state.billing.billPaid);
  // console.log(currentChapterQuestions);
  // useMemo(() => {
  //   if (!billPaid) {
  //     // console.log(billPaid, 'useMemo');
  //     setBelling(false);
  //   }
  // }, [billPaid]);

  //TODO: Chapter data load
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        baseURL + `subject_wise_chapter/${subjectId}`,
        { headers: authHeader() }
      );
      // const { data } = await API.get(`subject_wise_chapter/${subjectId}`);
      setChapters(data.data.chapters);
      setCurrentSubject(data.data.subject);
    })();
  }, [subjectId]);
  console.log(chapters);

  //TODO: Handle bill Paid submit
  const onBillPayment = async() => { 
    setBelling(false)
    setIsLoading(true);
    const { data } = await axios.post(
      baseURL + `start_exam`,
      {
        chapters_id: currentChapterId,
        exam_type_id: examType,
      },
      { headers: authHeader() }
    );
    // const { data } = await API.post(`/start_exam`, {
    //   chapters_id: currentChapterId,
    //   exam_type_id: examType,
    // });
    setCurrentChapterQuestions(data.data.questions);
    setIsMcqStart(false);
    setExamId(data.data.exam_id);
    setIsLoading(false);
  }

  //TODO: Handle chapter list onClick
  const handleChapter = async (chapterInfo) => {
    // console.log(chapterInfo);
    setBelling(true);
    setCurrentChapter(chapterInfo?.name);
    // setCurrentChapter(parseInt(chapterInfo?.name?.split(" ")[1]));
    setCurrentChapterId(chapterInfo?.uuid);
    reset();
    setQuestionNo(0);
    setIsMcqStart(true);
    setIsSubmit(false);
    setSubmitSuccess(false);
    setCorrectAnsCount(0);
    setSelectedAns([]);
    setIsShowCorrectAns(false);
    
  };

  //TODO: handle Previous Btn
  const handlePreviousBtn = (questionUuid) => {
    reset();
    setQuestionNo((count) => count - 1);
    delete selectedAns[questionUuid];
    setIsSubmit(false);
  };

  //* Not Used 
  //TODO: Handle MCQ Start button
  const handleMcqStart = async () => {
    setIsLoading(true)
    const { data } = await API.post(`/start_exam`, {
      chapters_id: currentChapterId,
      exam_type_id: examType,
    });
    setIsMcqStart(false);
    setExamId(data.data.exam_id);
    setCurrentChapterQuestions(data.data.questions);
    setIsLoading(false)
  };

  //TODO: set Submit btn on last question
  useEffect(() => {
    if (questionNo + 1 === currentChapterQuestions?.length) {
      setIsSubmit(true);
    }
  }, [questionNo, currentChapterQuestions]);

  //TODO:  handle from submition
  const onSubmit = async (formData) => {
    setSelectedAns({
      ...selectedAns,
      [currentChapterQuestions[questionNo]?.uuid]: formData.option,
    }); // Push ans on ans-array
    if (isSubmit) {
      setSubmitSuccess(true); // for success message
      return;
    }
    setQuestionNo(questionNo + 1); // read questons one by one
    reset();
  };

  //TODO:  Load MCQ Score
  useMemo(() => {
    if (submitSuccess) {
      getStudentExamScore(examId, selectedAns, dispatch);
    }
  }, [submitSuccess]);

  //TODO: handle submit success view
  useMemo(() => {
    let count = 0;
    if (submitSuccess) {
      currentChapterQuestions.map((question) => {
        if (
          question?.answer?.toLowerCase() ===
          selectedAns[question.uuid].toLowerCase()
        ) {
          setCorrectAnsCount((correctAnsCount) => correctAnsCount + 1);
        }
        count = count + 1;
        return 0
      });
    }
  }, [submitSuccess]);

  return (
    <div className='min-h-screen mx-auto font-["jost"] bg-slate-100 pt-[100px] pb-[30px]'>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-around lg:items-start ">
        {/* Chapters List */}
        <div className="px-4 mt-16 lg:mt-0">
          <div className="">
            <h1 className="text-xl font-bold mb-2">
              বিষয় :<span className="text-success"> {currentSubject} </span>{" "}
            </h1>
            <div className="max-h-[550px] overflow-y-auto">
              <ul className="flex flex-col gap-y-4">
                {chapters.map((chapter) => (
                  <li
                    key={chapter.uuid}
                    onClick={() => handleChapter(chapter)}
                    className={`
                      w-full lg:w-[300px] duration-300 text-white text-xl border-2 rounded-lg p-4 font-bold shadow-xl hover:cursor-pointer
                      ${
                        currentChapterId === chapter?.uuid
                          ? "bg-white hover:bg-slate-50 hover:border-primary text-black"
                          : "bg-success hover:bg-sky-600"
                      }`}
                  >
                    {chapter.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Question-Answer part */}
        <div className="lg:w-[50%] px-4 ">
          {!isMcqStart && ( // header
            <div className=" flex justify-between bg-success rounded-lg text-xl text-white font-bold mb-2 py-2 px-6">
              <h1>{currentChapter}</h1>
              <h1>
                প্রশ্ন : {questionNo + 1} / {currentChapterQuestions?.length}
              </h1>
            </div>
          )}
          <div
            className={`bg-[url('https://i.ibb.co/K0vqn7p/wave.png')] bg-contain bg-no-repeat bg-bottom lg:h-[540px] bg-white rounded-xl shadow-2xl border-primary py-10 lg:py-4 px-4 md:px-20 lg:px-12 xl:32
              ${IsShowCorrectAns && "overflow-y-scroll"}
              ${isMcqStart && "flex items-center justify-center"}`}
          >
            {currentChapter === 0 ? (
              <div className="flex flex-col gap-y-2 text-center">
                <p className="text-2xl">
                  বিষয় :{" "}
                  <span className="text-success font-bold ">
                    {" "}
                    {currentSubject}{" "}
                  </span>
                </p>
                {currentChapter === 0 ? (
                  <p className="text-red-500 text-xl font-bold">
                    অধ্যায় নির্বাচন কর
                  </p>
                ) : (
                  <p className="text-[23px]">Start the MCQ</p>
                )}
                {!currentChapter === 0 && (
                  <button onClick={() => setIsMcqStart(true)}>Start MCQ</button>
                )}
              </div>
            ) : (
              <div>
                <div>
                  {isBelling ? ( // Show Billing payment
                    // <Billing
                    //   examType={examType}
                    //   chapter={currentChapter}
                    // ></Billing>
                    <form
                      onSubmit={handleSubmit(onBillPayment)}
                      className="flex flex-col gap-y-4"
                    >
                      <h1 className="text-2xl font-bold text-success">
                        Please Pay for This Exam
                      </h1>
                      <div className="form-control w-full mx-auto max-w-xs">
                        <label className="label">
                          <span className="label-text text-lg">
                            Give Card No
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input border-black focus:outline-0 focus:border-primary rounded"
                          {...register("card_number", {
                            required: {
                              value: true,
                              message: "Please Give your Card No",
                            },
                          })}
                        />
                        {errors?.cardNo?.type === "required" && (
                          <p className="text-red-500">
                            {errors?.cardNo?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-control w-full mx-auto max-w-xs">
                        <label className="label">
                          <span className="label-text text-lg">
                            Card Pin No
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input border-black focus:outline-0 focus:border-primary rounded"
                          {...register("pinNo", {
                            required: {
                              value: true,
                              message: "Please Give your Card Pin No",
                            },
                          })}
                        />
                        {errors?.pinNo?.type === "required" && (
                          <p className="text-red-500">
                            {errors?.pinNo?.message}
                          </p>
                        )}
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          // onClick={handleBillPay}
                          className={`btn mx-auto w-[150px] bg-success`}
                        >
                          Bill Pay
                        </button>
                      </div>
                    </form>
                  ) : isLoading ? (
                    <Loading />
                  ) : (
                    <div>
                      {IsShowCorrectAns ? ( // show correct ans part
                        <ShowCorrectAns
                          currentChapterQuestions={currentChapterQuestions}
                          selectedAns={selectedAns}
                        ></ShowCorrectAns>
                      ) : (
                        // show MCQ part
                        <>
                          {submitSuccess ? ( // show mcq done successflly
                            <div className="flex flex-col items-center justify-center text-center gap-y-2">
                              <div>
                                <img
                                  src="../images/tropy.png"
                                  className="w-40 mx-auto"
                                  alt=""
                                />
                                <h1 className="text-2xl font-bold my-4">{currentChapter}</h1>
                              </div>
                              <h1 className="text-xl ">
                                Your Score <br />{" "}
                                <span className=" text-3xl font-bold text-green-600 ">{`${correctAnsCount} / ${currentChapterQuestions?.length}`}</span>
                              </h1>
                              <p
                                onClick={() => setIsShowCorrectAns(true)}
                                className="w-[230px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
                              >
                                <span className="text-lg tracking-[2px]">
                                  See Correct Answers
                                </span>
                                <FontAwesomeIcon
                                  className=" text-sm mt-1"
                                  icon={faArrowRightLong}
                                />
                              </p>
                              {chapters.length > currentChapter && (
                                <p
                                  onClick={() =>
                                    handleChapter(chapters[currentChapter])
                                  }
                                  className="w-[210px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
                                >
                                  <span className="text-lg tracking-[2px]">
                                    Next Chapter MCQ
                                  </span>
                                  <FontAwesomeIcon
                                    className=" text-sm mt-1"
                                    icon={faArrowRightLong}
                                  />
                                </p>
                              )}
                            </div>
                          ) : (
                            // MCQ form
                            <form
                              onSubmit={handleSubmit(onSubmit)}
                              className=" flex flex-col gap-y-6"
                            >
                              <h1 className="font-bold text-xl text-sky-500">
                                {`${questionNo + 1}. `}
                                {
                                  currentChapterQuestions[questionNo]?.question
                                }{" "}
                                ?
                              </h1>
                              <div>
                                <div className="flex flex-col gap-y-3">
                                  {
                                    // Loop on Options
                                    currentChapterQuestions[
                                      questionNo
                                    ]?.options.map((opt, index) => (
                                      <label
                                        key={index}
                                        className=" cursor-pointer flex items-center text-lg border-2 bg-slate-100 hover:bg-slate-200 rounded p-4"
                                      >
                                        <input
                                          type="radio"
                                          // id={allChapterQuestions[currentChapter - 1][questionNo]?.id}
                                          defaultValue={opt}
                                          className="radio mr-3 radio-primary bg-white "
                                          {...register(`option`, {
                                            required: {
                                              value: true,
                                              message:
                                                "Please Select an Option",
                                            },
                                          })}
                                        />
                                        <span className="font-bold">{opt}</span>
                                      </label>
                                    ))
                                  }
                                </div>
                                <p className="text-red-500">
                                  {errors.option?.message}
                                </p>
                                {/* Next and previous Button */}
                                <div className="flex items-center justify-between gap-x-4 mt-2">
                                  {
                                    // Previous Button
                                    questionNo > 0 ? (
                                      <p
                                        onClick={() =>
                                          handlePreviousBtn(
                                            currentChapterQuestions[questionNo]
                                              ?.uuid
                                          )
                                        }
                                        className="w-[110px] font-[jost] font-bold flex items-center justify-between border-b-2 border-black hover:text-slate-600 hover:border-slate-600 hover:cursor-pointer transition ease-in-out duration-300"
                                      >
                                        <FontAwesomeIcon
                                          className=" text-sm mt-1"
                                          icon={faArrowLeftLong}
                                        />
                                        <span className="text-lg tracking-[2px]">
                                          Previous
                                        </span>
                                      </p>
                                    ) : (
                                      <div className=""></div>
                                    )
                                  }
                                  {/* Next Button */}
                                  <button
                                    type="submit"
                                    className={`${
                                      isSubmit ? " w-[92px]" : " w-[70px]"
                                    }
                                      font-bold font-[jost] flex items-center justify-between border-b-2 border-black hover:border-slate-600 hover:text-slate-600 hover:cursor-pointer transition ease-in-out duration-300`}
                                  >
                                    <span className="tracking-[2px]">
                                      {isSubmit ? "Submit" : "Next"}
                                    </span>
                                    <FontAwesomeIcon
                                      className="ml-1"
                                      icon={faArrowRightLong}
                                    />
                                  </button>
                                </div>
                              </div>
                            </form>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              // <div>
              //   {IsShowCorrectAns ? ( // show correct ans part
              //     <ShowCorrectAns
              //       currentChapterQuestions={currentChapterQuestions}
              //       selectedAns={selectedAns}
              //     ></ShowCorrectAns>
              //   ) : (
              //     // show MCQ part
              //     <>
              //       {submitSuccess ? ( // show mcq done successflly
              //         <div className="flex flex-col items-center justify-center text-center gap-y-2">
              //           <div>
              //             <img
              //               src="../images/tropy.png"
              //               className="w-40 mx-auto"
              //               alt=""
              //             />
              //             <h1 className="text-2xl font-bold mb-4">
              //               MCQ On Chapter {currentChapter}
              //             </h1>
              //           </div>
              //           <h1 className="text-xl ">
              //             Your Score <br />{" "}
              //             <span className=" text-3xl font-bold text-green-600 ">{`${correctAnsCount} / ${currentChapterQuestions?.length}`}</span>
              //           </h1>
              //           <p
              //             onClick={() => setIsShowCorrectAns(true)}
              //             className="w-[230px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
              //           >
              //             <span className="text-lg tracking-[2px]">
              //               See Correct Answers
              //             </span>
              //             <FontAwesomeIcon
              //               className=" text-sm mt-1"
              //               icon={faArrowRightLong}
              //             />
              //           </p>
              //           {chapters.length > currentChapter && (
              //             <p
              //               onClick={() =>
              //                 handleChapter(chapters[currentChapter])
              //               }
              //               className="w-[210px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
              //             >
              //               <span className="text-lg tracking-[2px]">
              //                 Next Chapter MCQ
              //               </span>
              //               <FontAwesomeIcon
              //                 className=" text-sm mt-1"
              //                 icon={faArrowRightLong}
              //               />
              //             </p>
              //           )}
              //         </div>
              //       ) : (
              //         // MCQ form
              //         <form
              //           onSubmit={handleSubmit(onSubmit)}
              //           className=" flex flex-col gap-y-6"
              //         >
              //           <h1 className="font-bold text-xl text-success">
              //             {`${questionNo + 1}. `}
              //             {currentChapterQuestions[questionNo]?.question} ?
              //           </h1>
              //           <div>
              //             <div className="flex flex-col gap-y-3">
              //               {
              //                 // Loop on Options
              //                 currentChapterQuestions[
              //                   questionNo
              //                 ]?.options.map((opt, index) => (
              //                   <label
              //                     key={index}
              //                     className=" cursor-pointer flex items-center text-lg border-2 bg-slate-100 hover:bg-slate-200 rounded p-4"
              //                   >
              //                     <input
              //                       type="radio"
              //                       // id={allChapterQuestions[currentChapter - 1][questionNo]?.id}
              //                       defaultValue={opt}
              //                       className="radio mr-3 radio-primary bg-white "
              //                       {...register(`option`, {
              //                         required: {
              //                           value: true,
              //                           message: "Please Select an Option",
              //                         },
              //                       })}
              //                     />
              //                     <span className="font-bold">{opt}</span>
              //                   </label>
              //                 ))
              //               }
              //             </div>
              //             <p className="text-red-500">
              //               {errors.option?.message}
              //             </p>
              //             {/* Next and previous Button */}
              //             <div className="flex items-center justify-between gap-x-4 mt-2">
              //               {
              //                 // Previous Button
              //                 questionNo > 0 ? (
              //                   <p
              //                     onClick={() =>
              //                       handlePreviousBtn(
              //                         currentChapterQuestions[questionNo]
              //                           ?.uuid
              //                       )
              //                     }
              //                     className="w-[110px] font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300"
              //                   >
              //                     <FontAwesomeIcon
              //                       className=" text-sm mt-1"
              //                       icon={faArrowLeftLong}
              //                     />
              //                     <span className="text-lg tracking-[2px]">
              //                       Previous
              //                     </span>
              //                   </p>
              //                 ) : (
              //                   <div className=""></div>
              //                 )
              //               }
              //               {/* Next Button */}
              //               <button
              //                 type="submit"
              //                 className={`${
              //                   isSubmit ? " w-[92px]" : " w-[70px]"
              //                 }
              //             text-lg font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-success hover:border-primary hover:cursor-pointer transition ease-in-out duration-300`}
              //               >
              //                 <span className="tracking-[2px]">
              //                   {isSubmit ? "Submit" : "Next"}
              //                 </span>
              //                 <FontAwesomeIcon
              //                   className="ml-1"
              //                   icon={faArrowRightLong}
              //                 />
              //               </button>
              //             </div>
              //           </div>
              //         </form>
              //       )}
              //     </>
              //   )}
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
