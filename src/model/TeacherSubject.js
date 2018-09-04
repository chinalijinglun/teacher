export const TYPE_COMMENTS = {
  1: 'Qualified Teaching Academic Subject(s)',
  2: 'Current Teaching Academic Subject'
};
export default class TeacherSubject {
  constructor({
    subject_id = '',
    grade = '',
    type = 1
  }) {
    this.subject_id = subject_id;
    this.grade = grade;
    this.type = type;
  }
}
