type QuestionProps = {
    id: number;
    question_type: string;
    question: string;
    choice_1?: string;
    choice_2?: string;
    choice_3?: string;
    choice_4?: string;
};

const Question = ({
    id,
    question_type,
    question,
    choice_1,
    choice_2,
    choice_3,
    choice_4,
}: QuestionProps) => {
    return <div>Question</div>;
};

export default Question;
