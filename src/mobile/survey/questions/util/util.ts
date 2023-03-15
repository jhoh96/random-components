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

// if question Type === single
// only set one answer obj to true
export const checkAnswer = (answers: any[], answerType: string) => {
  if (answerType === "multiple") {
    console.log("its multiple choice");
    return false;
  } else {
    for (const [key, value] of Object.entries(answers)) {
      if (value === true) {
        let index = answers.indexOf([key,value])
        // answers.indexOf(index) = 
        return true;
      }
    }
  }
};

export function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}