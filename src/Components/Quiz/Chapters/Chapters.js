import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Chapters = () => {
    const {id, subject} = useParams()
    const { handleSubmit, register, reset, formState: { errors } } = useForm(); // react form hook

    const [currentChapter, setCurrentChapter] = useState(1)
    const [questionNo, setQuestionNo] = useState(0)
    const [selectedAns, setSelectedAns] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [lastAns, setLastAns] = useState(0)
    const [isChecked, setIsChecked] = useState(true)

    // never Used
    const [isActive, setIsActive] = useState(false)
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

    const allChapterQuestions = [
        [
            { id: 1, question: "This is the Question No 1", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}] },
            { id: 2, question: "This is the Question No 2", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}, {optionId: 3, option: "option-3"}, {optionId: 4, option: "option-4"}] },
            { id: 3, question: "This is the Question No 3", options: [{optionId: 1, option: "option-1"}, {optionId: 2, option: "option-2"}] },
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

    // Handle chapter list click
    const handleChapter= (id) => {
        setCurrentChapter(id)
        setQuestionNo(0)
        setIsSubmit(false)
        setSubmitSuccess(false)
        reset()
    }

    // handle Previous Btn
    const handlePreviousBtn = data => {
        setQuestionNo((count) => count - 1)
        selectedAns.pop()
        setIsSubmit(false)

        // setIsChecked(!isChecked)
        // setLastAns(selectedAns[selectedAns.length-1].answer)
        console.log(selectedAns)
    };

    // set Submit btn on last question
    useEffect(() => {
        if (questionNo + 1 === allChapterQuestions[currentChapter - 1].length) {
            setIsSubmit(true)        
        }
    }, [questionNo])
    
    // handle from submition
    const onSubmit = data => { 
        if (isSubmit) {
            setSelectedAns([...selectedAns, {qestionNo: questionNo + 1, answer : data.option}]) // Push ans on ans-array
            setSubmitSuccess(true) // for success message
            return
        }
        setQuestionNo(questionNo + 1) // read questons one by one
        setSelectedAns([...selectedAns, {qestionNo: questionNo + 1, answer : data.option}])  // Push ans on ans-array
        reset()
    };
    
    const handleCheckBox = (e) => {
        console.log(e.target.value);
        console.log('change');
        setIsChecked(!isChecked)
    }
    console.log(currentChapter)
    return (
        <div className='min-h-screen mx-auto font-["jost"] bg-slate-100 pt-[100px] pb-[30px]'>
            <div className="flex flex-col lg:flex-row justify-around lg:items-start ">
                <div className="">
                    <h1 className='text-xl font-bold mb-2'>
                        Subject :
                        <span className='text-primary'> {subject} </span>
                    </h1>
                    <ul className='flex flex-col gap-y-4'>
                        {chapters.map(chapter =>
                            <li
                                key={chapter.id}
                                onClick={() => handleChapter(chapter.id)}
                                className={`${currentChapter === chapter.id ? "bg-white hover:bg-slate-50 hover:border-primary text-black" : "bg-primary hover:bg-sky-600"} 
                                w-[300px] duration-300  text-white border-2 rounded-lg p-6 shadow-xl hover:cursor-pointer`}>
                                Chapter {chapter.chapterName}
                            </li>)
                        }
                    </ul>
                </div>
                <div className="lg:w-[50%]">
                    <h1 className='text-xl font-bold mb-2'>
                        Chapter :
                        <span className='text-primary'> {currentChapter} </span>
                    </h1>
                    <div className="h-[550px] bg-white rounded shadow-2xl border-primary py-10 px-36">
                        {
                            submitSuccess ? // show mcq done successflly
                                <div className="flex flex-col items-center justify-center">
                                    <img src="../images/tropy.jpg" className='w-60' alt="" />
                                    <h1 className='text-2xl font-bold mb-4'>
                                        MCQ On Chapter {currentChapter}
                                        <br/> <span className='text-green-500'>Successfully Done</span>
                                    </h1>
                                    <button className='btn btn-primary capitalize'> See Correct Answare</button>
                                    <p onClick={()=>handleChapter(currentChapter + 1)} className='w-[210px] font-[jost] flex items-center justify-between mt-4 border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                        <span className='text-lg tracking-[2px]'>Next Chapter MCQ</span>
                                        <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                    </p>

                                </div>
                                :
                                <form onSubmit={handleSubmit(onSubmit)} className="h-[100%] flex flex-col gap-y-6">                        
                                    <h1 className='text-lg font-bold'>
                                        {allChapterQuestions[currentChapter - 1][questionNo]?.question}
                                    </h1> 
                                    
                                    <div className="flex flex-col justify-self-start gap-y-4"> 
                                        {/* Loop on Options  */}
                                        {
                                            allChapterQuestions[currentChapter - 1][questionNo]?.options.map((opt) =>                                            
                                                <label key={opt.optionId} className=" cursor-pointer flex items-center justify-evenly text-lg border-2 bg-slate-100 hover:bg-slate-200 rounded p-4">
                                                    <input
                                                        type="radio"
                                                        // checked= {opt.optionId === parseInt(lastAns) ? true : false}
                                                        // onChange={handleCheckBox}
                                                        id={allChapterQuestions[currentChapter -1][questionNo]?.id}
                                                        defaultValue={opt.optionId}
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
                                        <p className='text-red-500'>{errors.option?.message}</p>
                                        <div className="flex items-center justify-between gap-x-4">     
                                            {/* Previous Button  */}
                                            {
                                                questionNo > 0 &&
                                                    <p onClick={handlePreviousBtn} className='w-[110px] font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300'>
                                                        <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowLeftLong} />
                                                        <span className='text-lg tracking-[2px]'>Previous</span>
                                                    </p>
                                            }
                                            {/* Next Button */}
                                            <button type="submit" className={`${isSubmit ? " w-[92px]" : " w-[65px]"} font-[jost] flex items-center justify-between border-b-2 border-zinc-500 hover:text-primary hover:border-primary hover:cursor-pointer transition ease-in-out duration-300`}>
                                                <span className='text-lg tracking-[2px]'>{isSubmit ? "Submit" : "Next"}</span>
                                                <FontAwesomeIcon className=' text-sm mt-1' icon={faArrowRightLong} />
                                            </button>
                                        </div>
                                    </div>                                     
                                </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chapters;