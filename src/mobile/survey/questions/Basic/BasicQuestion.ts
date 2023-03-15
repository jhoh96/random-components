/**
 * Basic Questions Class with Question Number, Title in Korean text, and user set answers
 * Refer to readMe.md for guidelines
 */
export class BasicQuestion {
  private questionNumber: number;
  private questionTitle: string;
  private questionType: string;
  private answers: any[];
  private buttonType: string;

  public constructor(
    questionNumber: number,
    questionTitle: string,
    questionType: string,
    answers: any[],
    buttonType: string
  ) {
    this.questionNumber = questionNumber;
    this.questionTitle = questionTitle;
    this.questionType = questionType;
    this.answers = answers;
    this.buttonType = buttonType;
  }

  public getQuestionNumber(): number {
    return this.questionNumber;
  }

  public getQuestionTitle(): string {
    return this.questionTitle;
  }

  public getQuestionType(): string {
    return this.questionType;
  }

  public getButtonType(): string {
    return this.buttonType;
  }

  public getAnswers(): any[] {
    return this.answers;
  }

  // this in case we have questions that require multiple answers
  public setAnswers(value: any): any {
    let answerObject = {
      question: this.questionNumber,
      title: this.questionTitle,
      answer: value,
    };
    this.answers.push(answerObject);
  }
}

class Answers extends BasicQuestion {}
