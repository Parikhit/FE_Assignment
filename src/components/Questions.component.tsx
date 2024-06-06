/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

import { questions } from '../utils/questions';
// import Question from './Question.component';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [checked, setChecked] = useState(1);
    const [descriptive, setDescriptive] = useState('');
    const [response, setResponse] = useState({});
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(0);

    const navigate = useNavigate();

    const onOptionChange = (e: any) => setChecked(Number(e.target.value));

    const handleDescriptive = (e: any) => setDescriptive(e.target.value);

    const handleNext = () => {
        if (questions[currentQuestion].question_type === 'mcq')
            setResponse({ ...response, [currentQuestion + 1]: checked });

        if (questions[currentQuestion].question_type === 'desc')
            setResponse({ ...response, [currentQuestion + 1]: descriptive });

        setCurrentQuestion((currentQuestion) => currentQuestion + 1);

        if (currentQuestion === questions.length - 1) {
            resetTimer();
            clearInterval(timerId);

            navigate('/thankyou');

            return;
        }
    };

    const handleFinish = () => {
        resetTimer();
        clearInterval(timerId);

        navigate('/thankyou');

        return;
    };

    const handleDescriptiveSave = () =>
        currentQuestion + 1 && setResponse({ ...response, [currentQuestion + 1]: descriptive });

    const resetTimer = () => {
        setMinutes(0);
        setSeconds(0);
    };

    const runTimer: (sec: number, tId: number) => void = (sec, tId) => {
        if (sec > 0) {
            setSeconds((prevSec) => prevSec - 1);
        } else {
            setMinutes((prevMin) => prevMin - 1);
            setSeconds(59);
        }

        if (seconds === 0 && minutes === 0) {
            resetTimer();
            clearInterval(tId);

            navigate('/thankyou');

            return;
        }
    };

    useEffect(() => {
        const tId = setInterval(() => {
            runTimer(seconds, tId);
        }, 1000);

        setTimerId(tId);

        return () => clearInterval(tId);
    }, [minutes, seconds]);

    return (
        <main className='flex flex-col items-center gap-6'>
            <section className='w-full flex items-center justify-between'>
                <div>Question: {currentQuestion + 1}</div>
                <div className='flex'>
                    <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                    <span>:</span>
                    <div>{seconds < 10 ? `0${seconds}` : seconds} Minutes</div>
                </div>
            </section>

            <section className='border w-full p-4 h-[30rem] flex flex-col items-center justify-between gap-16'>
                <h1 className='w-full p-4 text-xl font-semibold text-left'>
                    {questions[currentQuestion].question}
                </h1>

                <div className='w-full h-full flex items-center justify-center'>
                    {questions[currentQuestion].question_type === 'mcq' ? (
                        <ul className='text-lg font-medium'>
                            <li>
                                <input
                                    type='radio'
                                    value='1'
                                    checked={checked === 1}
                                    onChange={onOptionChange}
                                />{' '}
                                <span>{questions[currentQuestion].choice_1}</span>
                            </li>
                            <li>
                                <input
                                    type='radio'
                                    value='2'
                                    checked={checked === 2}
                                    onChange={onOptionChange}
                                />{' '}
                                <span>{questions[currentQuestion].choice_2}</span>
                            </li>
                            <li>
                                <input
                                    type='radio'
                                    value='3'
                                    checked={checked === 3}
                                    onChange={onOptionChange}
                                />{' '}
                                <span>{questions[currentQuestion].choice_3}</span>
                            </li>
                            <li>
                                <input
                                    type='radio'
                                    value='4'
                                    checked={checked === 4}
                                    onChange={onOptionChange}
                                />{' '}
                                <span>{questions[currentQuestion].choice_4}</span>
                            </li>
                        </ul>
                    ) : (
                        <div className='w-full h-full flex flex-col items-center'>
                            <textarea
                                className='w-4/5 h-4/5 border p-2 border-gray-300 rounded-lg outline-none resize-none'
                                value={descriptive}
                                placeholder='You can type here'
                                onChange={(e) => handleDescriptive(e)}
                            />

                            <div className='w-4/5 flex items-center justify-end gap-2 p-2'>
                                <button
                                    type='button'
                                    className='border p-2 rounded-lg text-purple-800 border-purple-800'
                                    onClick={handleDescriptiveSave}
                                >
                                    Save
                                </button>
                                <input
                                    type='file'
                                    id='upload'
                                    accept='.pdf'
                                    hidden
                                />
                                <label
                                    htmlFor='upload'
                                    className='border p-2 rounded-lg text-purple-800 border-purple-800 cursor-pointer'
                                >
                                    or Upload Answer
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                <div className='w-4/5 flex items-center justify-between'>
                    <button
                        type='submit'
                        className='border border-purple-900 text-base text-purple-900 px-4 py-2 rounded-lg'
                        onClick={handleFinish}
                    >
                        Finish Exam
                    </button>

                    <button
                        type='submit'
                        className={
                            currentQuestion === questions.length - 1
                                ? 'hidden'
                                : 'border border-purple-900 text-base text-purple-900 px-4 py-2 rounded-lg'
                        }
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Questions;
