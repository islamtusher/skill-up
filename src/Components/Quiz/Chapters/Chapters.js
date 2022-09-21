import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import ShowCorrectAns from '../ShowCorrectAns/ShowCorrectAns';

const Chapters = () => {
    const {id, subject} = useParams()
    const { handleSubmit, register, reset, formState: { errors } } = useForm(); // react form hook

    const [currentChapter, setCurrentChapter] = useState(1)
    const [questionNo, setQuestionNo] = useState(0)
    const [selectedAns, setSelectedAns] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [IsShowCorrectAns, setIsShowCorrectAns] = useState(false)

    // fake data Chapters
    const chapters = [
        {id:1, chapterName:"1st"},
        {id:2, chapterName:"2nd"},
        {id:3, chapterName:"3rd"},
        {id:4, chapterName:"4th"},
        {id:5, chapterName:"5th"},
        {id:6, chapterName:"6th"},
        {id:7, chapterName:"7th"},
        {id:8, chapterName:"8th"},
        {id:9, chapterName:"9th"},
    ]


    const allChapterAns =
        [
            { id: 1, question: "What is the Capital of Bangladesh", options: [{optionId: 1, option: "Dhaka"}, {optionId: 2, option: "Rajshahi"}, {optionId: 3, option: "Barishal"}], correctAns: "Dhaka" },
            { id: 2, question: "This is the Question No 2", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}] },
            { id: 3, question: "This is the Question No 3", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
        ]

    const allChapterQuestions = [
        [
            { id: 1, question: "What is the Capital of Bangladesh", options: [{optionId: 1, option: "Dhaka"}, {optionId: 2, option: "Rajshahi"}, {optionId: 3, option: "Barishal"}, {optionId: 4, option: "Comilla"}], correctAns: "Dhaka" },
            { id: 2, question: "What is the Capital of India", options: [{optionId: 1, option: "Delhi"}, {optionId: 2, option: "Chennai"}, {optionId: 3, option: "Kalkata"}, {optionId: 4, option: "Mumbai"}], correctAns: "Delhi" },
            { id: 3, question: "What is the Capital of Pakistan", options: [{optionId: 1, option: "Islamabad"}, {optionId: 2, option: "Lahor"}, {optionId: 3, option: "Karachi"}, {optionId: 4, option: "Multan"}], correctAns: "Lahor" },
        ],

        [
            { id: 1, question: "This is the Question No 1", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
            { id: 2, question: "This is the Question No 2", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 3, question: "This is the Question No 3", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}] },
            { id: 4, question: "This is the Question No 4", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 5, question: "This is the Question No 5", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
        ],

        [
            { id: 1, question: "This is the Question No 1", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}] },
            { id: 2, question: "This is the Question No 2", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 3, question: "This is the Question No 3", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
            { id: 4, question: "This is the Question No 4", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 5, question: "This is the Question No 5", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
        ],
        [
            { id: 1, question: "This is the Question No 1", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 2, question: "This is the Question No 2", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
            { id: 3, question: "This is the Question No 3", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}] },
            { id: 4, question: "This is the Question No 4", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 5, question: "This is the Question No 5", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
        ],
        [
            {id:1, question:"This is the Question No 1", options:[{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}]},
            {id:2, question:"This is the Question No 2", options:[{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}]},
            {id:3, question:"This is the Question No 3", options:[{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}]},
            {id:4, question:"This is the Question No 4", options:[{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}]},
            {id:5, question:"This is the Question No 5", options:[{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}]},
        ]
    ]

    // Handle chapter list onClick
    const handleChapter = (id) => {
        console.log(id);
        reset()
        setCurrentChapter(id) 
        setQuestionNo(0)
        setIsSubmit(false)
        setSubmitSuccess(false)
        setCorrectAnsCount(0)
        setSelectedAns([])
        setIsShowCorrectAns(false)
    }

    // handle Previous Btn
    const handlePreviousBtn = data => {
        console.log(data);
        reset()
        setQuestionNo((count) => count - 1)
        selectedAns.pop()
        setIsSubmit(false)
    };

    // set Submit btn on last question
    useEffect(() => {
        if (questionNo + 1 === allChapterQuestions[currentChapter - 1].length) {
            setIsSubmit(true)        
        }
    }, [questionNo])
    
    // handle from submition
    const onSubmit = data => { 
        console.log(data);
        if (isSubmit) {
            setSelectedAns([...selectedAns, {qestionNo: questionNo + 1, answer : data.option}]) // Push ans on ans-array
            setSubmitSuccess(true) // for success message
            return
        }
        setQuestionNo(questionNo + 1) // read questons one by one
        setSelectedAns([...selectedAns, {qestionNo: questionNo + 1, answer : data.option}])  // Push ans on ans-array
        reset()
    };

    // handle submit success view
    useMemo(() => {        
        let count = 0
        if (submitSuccess) {
            allChapterQuestions[currentChapter - 1].map(question => {
                if (question.correctAns.toLowerCase() === selectedAns[count].answer.toLowerCase()) {
                    setCorrectAnsCount(correctAnsCount =>  correctAnsCount + 1)
                }
                count = count + 1
            })
        }
    }, [submitSuccess])
    
    return (
        <div className='min-h-screen mx-auto font-["jost"] bg-slate-100 pt-[100px] pb-[30px]'>
            <div className="flex flex-col-reverse lg:flex-row  lg:justify-around lg:items-start ">
                <div className="mt-12 px-4">
                    <div className=''>
                        <h1 className='text-xl font-bold mb-2'>Subject :<span className='text-primary'> {subject} </span> </h1>
                        <div className=" h-[550px] overflow-y-scroll">
                            <ul className='flex flex-col gap-y-4'>
                                {chapters.map(chapter =>
                                    <li
                                        key={chapter.id}
                                        onClick={() => handleChapter(chapter.id)}
                                        className={`${currentChapter === chapter.id ? "bg-white hover:bg-slate-50 hover:border-primary text-black" : "bg-primary hover:bg-sky-600"} 
                                        w-full lg:w-[300px] duration-300  text-white border-2 rounded-lg p-6 shadow-xl hover:cursor-pointer`}>
                                        Chapter {chapter.chapterName}
                                    </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <div className="block lg:hidden">
                        <label className="label">
                            <h1 className="text-xl font-[jost] font-bold text-primary">Select Chapter</h1>
                        </label>
                        <select
                            // onChange={()=>handleChapter(chapter.id)}
                            className="select select-bordered w-72 text-[20px]"
                            {...register("chapter", { 
                                required: {
                                    value: true,
                                    message: 'Please Select Your Class'
                                }
                            })}>
                            <option disabled selected value=''>Pick one</option>
                            {
                                chapters.map( chapter => <option key={chapter.id} onClick={() => handleChapter(chapter.id)} value={chapter.id}>{chapter.chapterName} Chapter</option>)
                            }                                    
                        </select>
                        {errors?.class?.type === 'required' && <p className='text-red-500'>{errors?.class?.message}</p>}
                    </div> */}
                
                </div>
                <div className="lg:w-[50%] px-4">
                    <div className="flex justify-between bg-primary rounded-lg text-xl text-white font-bold mb-2 py-2 px-6">
                        <h1>Chapter : {currentChapter}</h1>
                        <h1>Question: {questionNo + 1} / {allChapterQuestions[currentChapter - 1].length}</h1>
                    </div>
                    <div className={`lg:h-[540px] bg-white rounded-xl shadow-2xl border-primary py-10 lg:py-4 px-4 lg:px-32 ${IsShowCorrectAns && "overflow-y-scroll"}`}>                        
                        {
                            IsShowCorrectAns ? // show correct ans part
                                <ShowCorrectAns
                                    currentChapterQuestions={allChapterQuestions[currentChapter - 1]}
                                    selectedAns={selectedAns}>
                                </ShowCorrectAns>
                                : // show MCQ part 
                                <>
                                {
                                    submitSuccess ? // show mcq done successflly
                                        <div className="flex flex-col items-center justify-center text-center gap-y-2">
                                            <div>
                                                <img src="../images/tropy.png" className='w-40 mx-auto' alt="" />
                                                <h1 className='text-2xl font-bold mb-4'>MCQ On Chapter {currentChapter}</h1>
                                            </div>
                                            <h1 className='text-xl '>Your Score <br /> <span className=' text-3xl font-bold text-green-600 '>{`${correctAnsCount} / ${allChapterQuestions[currentChapter - 1].length}`}</span></h1>                                    
                                            <p onClick={()=>setIsShowCorrectAns(true)} className='w-[230px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                                <span className='text-lg tracking-[2px]'>See Correct Answers</span>
                                                <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                            </p>
                                            <p onClick={()=>handleChapter(currentChapter + 1)} className='w-[210px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                                <span className='text-lg tracking-[2px]'>Next Chapter MCQ</span>
                                                <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                            </p>
                                        </div>
                                        : // MCQ form                                
                                        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-y-6">                        
                                            <h1 className='font-bold text-xl text-primary'>
                                                {questionNo + 1}. {allChapterQuestions[currentChapter - 1][questionNo]?.question} ?
                                            </h1>                                     
                                            <div>                                                
                                                <div className="flex flex-col gap-y-3">
                                                {   // Loop on Options 
                                                    allChapterQuestions[currentChapter - 1][questionNo]?.options.map((opt) =>                                            
                                                        <label
                                                            key={opt.optionId}
                                                            className=" cursor-pointer flex items-center text-lg border-2 bg-slate-100 hover:bg-slate-200 rounded p-4">
                                                            <input
                                                                type="radio"
                                                                id={allChapterQuestions[currentChapter -1][questionNo]?.id}
                                                                defaultValue={opt.option}
                                                                className="radio mr-3 radio-primary bg-white "
                                                                {...register(`option`, {
                                                                    required: {
                                                                        value: true,
                                                                        message: "Please Select an Option"
                                                                    }
                                                                })}                                                                                                                
                                                            />                                
                                                            <span className="font-bold">{opt.option}</span> 
                                                        </label>
                                                    )
                                                }
                                                </div>   
                                                <p className='text-red-500'>{errors.option?.message}</p>
                                                <div className="flex items-center justify-between gap-x-4 mt-2">                                                            
                                                    { // Previous Button
                                                        questionNo > 0 ?
                                                            <p onClick={handlePreviousBtn} className='w-[110px] font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                                                <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowLeftLong} />
                                                                <span className='text-lg tracking-[2px]'>Previous</span>
                                                            </p>
                                                            :
                                                            <div className=""></div>
                                                    }
                                                    {/* Next Button */}
                                                    <button type="submit" className={`${isSubmit ? " w-[92px]" : " w-[70px]"} text-lg font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300`}>
                                                        <span className='tracking-[2px]'>{isSubmit ? "Submit" : "Next"}</span>
                                                        <FontAwesomeIcon className='ml-1' icon={faArrowRightLong} />
                                                    </button>
                                                </div>
                                            </div>                                     
                                        </form>                           
                                }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chapters;