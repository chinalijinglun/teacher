export default class HomeworkEvaluation {
  constructor({
    userName = '',
    time = new Date(),
    evaluation = ''
  }) {
    this.userName = userName;
    this.time = time;
    this.evaluation = evaluation;
  }
}