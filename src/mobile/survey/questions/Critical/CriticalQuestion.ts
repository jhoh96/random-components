// TODO: extend Basic Question
export class CriticalQuestion {
  private questionNumber: number;
  private questionTitle: string;
  private flag: boolean;
  private answers: any[];

  public constructor(
    questionNumber: number,
    questionTitle: string,
    flag: boolean
  ) {
    this.questionNumber = questionNumber;
    this.questionTitle = questionTitle;
    this.flag = flag;
    this.answers = [];
  }

  public getQuestionNumber(): number {
    return this.questionNumber;
  }

  public getQuestionTitle(): string {
    return this.questionTitle;
  }

  public setFlag(param: boolean) {
    this.flag = param;
  }

  public setAnswers(value: any): any {
    let answerObject = {
      question: this.questionNumber,
      title: this.questionTitle,
      answer: value,
    };
    this.answers.push(answerObject);
  }
}
