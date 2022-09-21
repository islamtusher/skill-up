import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const ShowCorrectAns = ({ currentChapterQuestions, selectedAns }) => {
    return (
        <div>
            <div className="flex flex-col gap-y-16 ">
            {
                currentChapterQuestions.map((qus, index) =>  // Loop on questions 
                    <div key={qus.id} className="flex flex-col gap-y-3">
                        <h1 className='font-bold text-xl text-primary'>{index + 1}. {qus.question}</h1> 
                        {   
                            qus?.options.map((opt) => // Loop on Options 
                                <>
                                {
                                    opt.option === selectedAns[qus.id - 1].answer ? 
                                        <label
                                            key={opt.optionId}
                                            className={`${opt.option === qus.correctAns ? "bg-green-600" : "bg-red-600"} flex items-center gap-x-2 text-lg border-2 text-white rounded p-4`}>                                                                
                                            {opt.option === qus.correctAns ?
                                                <FontAwesomeIcon className=' font-bold text-xl' icon={faCheck}></FontAwesomeIcon>
                                                :
                                                <FontAwesomeIcon className=' font-bold text-xl' icon={faXmark}></FontAwesomeIcon>
                                            }
                                            <span className="font-bold">{opt.option}</span> 
                                        </label>
                                        :
                                        <label className={`${opt.option === qus.correctAns ? "bg-green-600 text-white" : "bg-slate-100"} flex items-center gap-x-2 text-lg border-2 rounded p-4`}>                                                                
                                            {opt.option === qus.correctAns && <FontAwesomeIcon className=' font-bold text-xl' icon={faCheck}></FontAwesomeIcon>}                                                                
                                            <span className="font-bold">{opt.option}</span> 
                                        </label>
                                }
                                </>
                            )
                        }
                    </div>
                )
            }                        
            </div> 
        </div>
    );
};

export default ShowCorrectAns;
                                
                        