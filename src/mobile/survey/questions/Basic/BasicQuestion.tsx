/**
 * Basic Questions Class with Question Number, Title in Korean text, and user set answers
 * Refer to readMe.md for guidelines
 */
export class BasicQuestion {
  private questionNumber: number;
  private questionTitle: string;
  private answers: any[];

  public constructor(questionNumber: number, questionTitle: string) {
    this.questionNumber = questionNumber;
    this.questionTitle = questionTitle;
    this.answers = [];
  }

  public getQuestionNumber(): number {
    return this.questionNumber;
  }

  public getQuestionTitle(): string {
    return this.questionTitle;
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
