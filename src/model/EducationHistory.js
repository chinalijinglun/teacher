export default class EducationHistory {
  constructor({
    // 学历
    certificate=[],
    // 结束时间
    end='',
    // 学位
    major='',
    // 学校
    school='',
    // 开始时间
    start=''
  }) {
    this.certificate = certificate;
    this.end = end;
    this.major = major;
    this.school = school;
    this.start = start;
  }
}