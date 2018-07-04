export const VALID_ENUM = {
  VALID: 98,
  INVALID: 99
};

export const DELETE_FLAG = {
  IN_FORCE: 'IN_FORCE',
  DELETED: 'DELETED'
};

export const COURSE_TYPE = {
  ALL: 1,
  ONLINE: 2,
  PUBLIC: 3
};

export const CLASS_TYPE = {
  1: '1 v 1',
  2: '1 v 4',
  3: '1 v n' 
};

export const ORDER_TYPE = {
  1: '普通课订单',
  2: '赠送课订单'
}

export const COURSE_TYPE_MAP = {
  1: '公共',
  2: '在线'
}
// RECRUIT:新用户，
// BASIC_INFO:填写基本信息，
// WAIT_FOR_CHECK:待审核，
// CHECK_PASS:审核通过(待预约)、
// CHECK_ERROR:审核未通过，
// WAIT_FOR_INTERVIEW:已预约(待面试)，
// INTERVIEW_PASS:面试结果通过(待签约)，
// INTERVIEW_ERROR:面试结果失败，
// CONTRACTOR:已签约，
// WAIT_FOR_TRAIN:待预约培训试讲，
// TRAIN_PASS:培训试讲结果成功，
// TRAIN_ERROR:培训试讲结果失败
// WORKING:在岗，
// NO_WORK:未在岗
// INVALID:无效
export const TEACHER_STATE_ENUM = {
  RECRUIT: 1,
  BASIC_INFO: 2,
  WAIT_FOR_CHECK:3,
  CHECK_PASS: 4,
  CHECK_ERROR: 5,
  WAIT_FOR_INTERVIEW: 6,
  INTERVIEW_PASS: 7,
  INTERVIEW_ERROR: 8,
  CONTRACTOR: 9,
  WAIT_FOR_TRAIN: 10,
  TRAIN_PASS: 11,
  TRAIN_ERROR: 12,
  WORKING: 13,
  NO_WORK: 14,
  INVALID: 15
};

export const TEACHER_STATE_ZH = {
  1:'新用户',
  2:'填写基本信息',
  3:'待审核',
  4:'审核通过(待预约)',
  5:'审核未通过',
  6:'已预约(待面试)',
  7:'面试结果通过(待签约)',
  8:'面试结果失败',
  9:'已签约',
  10:'待预约培训试讲',
  11:'培训试讲结果成功',
  12:'培训试讲结果失败',
  13:'在岗',
  14:'未在岗',
  15:'无效'
};

export const MOBILE_PRE = {
  '+1': '美国/加拿大',
  '+61': '澳大利亚',
  '+86': '中国（+86）'
}

export const COUNTRY_IDS = [7, 140, 25, 99]
