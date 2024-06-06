type Question = {
    id: number;
    question_type: string;
    question: string;
    choice_1?: string;
    choice_2?: string;
    choice_3?: string;
    choice_4?: string;
    correct?: number;
}[];

export const questions: Question = [
    {
        id: 0,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 1,
        question_type: 'desc',
        question: 'What do you know about DDD?',
    },
    {
        id: 2,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 3,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 4,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 5,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 6,
        question_type: 'desc',
        question: 'What do you know about DDD?',
    },
    {
        id: 7,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 8,
        question_type: 'mcq',
        question: 'What is DDD?',
        choice_1: 'Domain Driven Design',
        choice_2: 'Domain Driven Design',
        choice_3: 'Domain Driven Design',
        choice_4: 'Domain Driven Design',
        correct: 1,
    },
    {
        id: 9,
        question_type: 'desc',
        question: 'What do you know about DDD?',
    },
];
