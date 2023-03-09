type Question = {
  questionNumber: number;
  questionTitle: string;
  questionType: string;
  answers: any[];
};

export const displayQuestion = () => {
  return true;
};

export const saveQuestion = (question: Question) => {
    // TODO : POST to db
};
