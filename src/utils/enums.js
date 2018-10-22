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
  2: '赠送课订单',
  3: '补偿订单',
  4: '免费订单',
  5: '退款订单'
}

export const COURSE_SCHEDULE_STATE = {
  0: '未开课',
  1: '未上',
  2: '已经上课',
  3: 'Cancel',
  4: 'Problematic classs'
}

export const PAYMENT_STATE = {
  1: '未付款',
  2: '已付款',
  3: 'Cancel',
  4: '申请退款',
  5: '退款审核通过',
  6: '退款审核驳回',
  7: '退款',
  8: '已使用'
}

export const COURSE_TYPE_MAP = {
  1: '公共',
  2: '在线'
}
// RECRUIT:新用户，
// BASIC_INFO:填写基本信息，
// WAIT_FOR_CHECK:To be verify，
// CHECK_PASS:Approve(待预约)、
// CHECK_ERROR:审核未通过，
// WAIT_FOR_INTERVIEW:已预约(待面试)，
// WAITE_FOR_CONTRACT:待签约，
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
  WAIT_FOR_CHECK: 3,
  CHECK_PASS: 4,
  CHECK_ERROR: 5,
  WAIT_FOR_INTERVIEW: 10,
  WAITE_FOR_CONTRACT: 11,
  CONTRACTOR: 20,
  WAIT_FOR_TRAIN: 30,
  TRAIN_PASS: 31,
  TRAIN_ERROR: 32,
  WORKING: 80,
  NO_WORK: 81,
  INVALID: 99
};

/**
 * RECRUIT = 1
    BASIC_INFO = 2
    WAIT_FOR_CHECK = 3
    CHECK_PASS = 4
    CHECK_ERROR = 5
    WAIT_FOR_INTERVIEW = 10
    WAITE_FOR_CONTRACT = 11
    CONTRACTOR = 20
    WAIT_FOR_TRAIN = 30
    TRAIN_PASS = 31
    TRAIN_ERROR = 32
    WORKING = 80
    NO_WORK = 81
    INVALID = 99
 */

export const TEACHER_STATE_ZH = {
  1: '新用户',
  2: '填写基本信息',
  3: 'To be verify',
  4: 'Approve(待预约)',
  5: '审核未通过',
  10: '已预约(待面试)',
  11: '待签约',
  20: '已签约',
  30: '待预约培训试讲',
  31: '培训试讲结果成功',
  32: '培训试讲结果失败',
  80: '在岗',
  81: '未在岗',
  99: '无效'
};

// 手机区号
export const NATIONAL_CODE = [
  {
    name_zh: "美国/加拿大",
    name: "U.S.A/Canada",
    code: "1",
    time: "-13.00"
  },
  {
    name_zh: "澳大利亚",
    name: "Australia",
    code: "61",
    time: "2.00"
  },
  {
    name_zh: "中国",
    name: "China",
    code: "86",
    time: "0"
  },
  {
    name_zh: "阿富汗",
    name: "Afghanistan",
    code: "93",
    time: "-3.50"
  },
  {
    name_zh: "阿拉斯加",
    name: "Alaska(U.S.A)",
    code: "1907",
    time: "3.00"
  },
  {
    name_zh: "阿尔巴尼亚",
    name: "Albania",
    code: "355",
    time: "-7.00"
  },
  {
    name_zh: "阿尔及利亚",
    name: "Algeria",
    code: "213",
    time: "-8.00"
  },
  {
    name_zh: "安道尔",
    name: "Andorra",
    code: "376",
    time: "-8.00"
  },
  {
    name_zh: "安哥拉",
    name: "Angola",
    code: "244",
    time: "-7.00"
  },
  {
    name_zh: "安圭拉岛(英)",
    name: "Anguilla I.",
    code: "1264",
    time: "-12.00"
  },
  {
    name_zh: "安提瓜和巴布达",
    name: "Antigua and Barbuda",
    code: "1268",
    time: "-12.00"
  },
  {
    name_zh: "阿根廷",
    name: "Argentina",
    code: "54",
    time: "-11.00"
  },
  {
    name_zh: "亚美尼亚",
    name: "Armenia",
    code: "374",
    time: "0.00"
  },
  {
    name_zh: "阿鲁巴岛",
    name: "Aruba I.",
    code: "297",
    time: "-12.00"
  },
  {
    name_zh: "阿森松(英)",
    name: "Ascension",
    code: "247",
    time: "-8.00"
  },
  {
    name_zh: "奥地利",
    name: "Austria",
    code: "43",
    time: "-7.00"
  },
  {
    name_zh: "阿塞拜疆",
    name: "Azerbaijan",
    code: "994",
    time: "-5.00"
  },
  {
    name_zh: "巴林",
    name: "Bahrain",
    code: "973",
    time: "-5.00"
  },
  {
    name_zh: "孟加拉国",
    name: "Bangladesh",
    code: "880",
    time: "-2.00"
  },
  {
    name_zh: "巴巴多斯",
    name: "Barbados",
    code: "1246",
    time: "-12.00"
  },
  {
    name_zh: "白俄罗斯",
    name: "Belarus",
    code: "375",
    time: "-5.00"
  },
  {
    name_zh: "比利时",
    name: "Belgium",
    code: "32",
    time: "-7.00"
  },
  {
    name_zh: "伯利兹",
    name: "Belize",
    code: "501",
    time: "-14.00"
  },
  {
    name_zh: "贝宁",
    name: "Benin",
    code: "229",
    time: "-7.00"
  },
  {
    name_zh: "百慕大群岛(英)",
    name: "Bermuda Is.",
    code: "1441",
    time: "-12.00"
  },
  {
    name_zh: "不丹",
    name: "Bhutan",
    code: "975",
    time: "0.00"
  },
  {
    name_zh: "玻利维亚",
    name: "Bolivia",
    code: "591",
    time: "-12.00"
  },
  {
    name_zh: "波斯尼亚和黑塞哥维那",
    name: "Bosnia And Herzegovina",
    code: "387",
    time: "0.00"
  },
  {
    name_zh: "博茨瓦纳",
    name: "Botswana",
    code: "267",
    time: "-6.00"
  },
  {
    name_zh: "巴西",
    name: "Brazil",
    code: "55",
    time: "-11.00"
  },
  {
    name_zh: "保加利亚",
    name: "Bulgaria",
    code: "359",
    time: "-6.00"
  },
  {
    name_zh: "布基纳法索",
    name: "Burkina Faso",
    code: "226",
    time: "-8.00"
  },
  {
    name_zh: "布隆迪",
    name: "Burundi",
    code: "257",
    time: "-6.00"
  },
  {
    name_zh: "喀麦隆",
    name: "Cameroon",
    code: "237",
    time: "-7.00"
  },
  {
    name_zh: "加那利群岛",
    name: "Canaries Is.",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "佛得角",
    name: "Cape Verde",
    code: "238",
    time: "-9.00"
  },
  {
    name_zh: "开曼群岛(英)",
    name: "Cayman Is.",
    code: "1345",
    time: "-13.00"
  },
  {
    name_zh: "中非",
    name: "Central Africa",
    code: "236",
    time: "-7.00"
  },
  {
    name_zh: "乍得",
    name: "Chad",
    code: "235",
    time: "-7.00"
  },
  {
    name_zh: "智利",
    name: "Chile",
    code: "56",
    time: "-12.00"
  },
  {
    name_zh: "圣诞岛",
    name: "Christmas I.",
    code: "61 9164",
    time: "-1.30"
  },
  {
    name_zh: "科科斯岛",
    name: "Cocos I.",
    code: "61 9162",
    time: "-13.00"
  },
  {
    name_zh: "哥伦比亚",
    name: "Colombia",
    code: "57",
    time: "0.00"
  },
  {
    name_zh: "巴哈马国",
    name: "Commonwealth of The Bahamas",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "多米尼克国",
    name: "Commonwealth of Dominica",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "科摩罗",
    name: "Comoro",
    code: "269",
    time: "-5.00"
  },
  {
    name_zh: "刚果",
    name: "Congo",
    code: "242",
    time: "-7.00"
  },
  {
    name_zh: "科克群岛(新)",
    name: "Cook IS.",
    code: "682",
    time: "-18.30"
  },
  {
    name_zh: "哥斯达黎加",
    name: "Costa Rica",
    code: "506",
    time: "-14.00"
  },
  {
    name_zh: "克罗地亚",
    name: "Croatia",
    code: "383 385",
    time: "-7.00"
  },
  {
    name_zh: "古巴",
    name: "Cuba",
    code: "53",
    time: "-13.00"
  },
  {
    name_zh: "塞浦路斯",
    name: "Cyprus",
    code: "357",
    time: "-6.00"
  },
  {
    name_zh: "捷克",
    name: "Czech",
    code: "420",
    time: "-7.00"
  },
  {
    name_zh: "丹麦",
    name: "Denmark",
    code: "45",
    time: "-7.00"
  },
  {
    name_zh: "迪戈加西亚岛",
    name: "Diego Garcia I.",
    code: "246",
    time: "0.00"
  },
  {
    name_zh: "吉布提",
    name: "Djibouti",
    code: "253",
    time: "-5.00"
  },
  {
    name_zh: "多米尼加共和国",
    name: "Dominican Rep.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "厄瓜多尔",
    name: "Ecuador",
    code: "593",
    time: "-13.00"
  },
  {
    name_zh: "埃及",
    name: "Egypt",
    code: "20",
    time: "-6.00"
  },
  {
    name_zh: "萨尔瓦多",
    name: "El Salvador",
    code: "503",
    time: "-14.00"
  },
  {
    name_zh: "赤道几内亚",
    name: "Equatorial Guinea",
    code: "240",
    time: "-8.00"
  },
  {
    name_zh: "厄立特里亚",
    name: "Eritrea",
    code: "291",
    time: "0.00"
  },
  {
    name_zh: "爱沙尼亚",
    name: "Estonia",
    code: "372",
    time: "-5.00"
  },
  {
    name_zh: "埃塞俄比亚",
    name: "Ethiopia",
    code: "251",
    time: "-5.00"
  },
  {
    name_zh: "福克兰群岛",
    name: "Falkland Is.",
    code: "500",
    time: "-11.00"
  },
  {
    name_zh: "法罗群岛(丹)",
    name: "Faroe Is.",
    code: "298",
    time: "0.00"
  },
  {
    name_zh: "斐济",
    name: "Fiji",
    code: "679",
    time: "4.00"
  },
  {
    name_zh: "芬兰",
    name: "Finland",
    code: "358",
    time: "-6.00"
  },
  {
    name_zh: "法国",
    name: "France",
    code: "33",
    time: "-8.00"
  },
  {
    name_zh: "法属圭亚那",
    name: "French Guiana",
    code: "594",
    time: "-12.00"
  },
  {
    name_zh: "法属波里尼西亚",
    name: "French Polynesia",
    code: "689",
    time: "3.00"
  },
  {
    name_zh: "加蓬",
    name: "Gabon",
    code: "241",
    time: "-7.00"
  },
  {
    name_zh: "冈比亚",
    name: "Gambia",
    code: "220",
    time: "-8.00"
  },
  {
    name_zh: "格鲁吉亚",
    name: "Georgia",
    code: "995",
    time: "0.00"
  },
  {
    name_zh: "德国",
    name: "Germany",
    code: "49",
    time: "-7.00"
  },
  {
    name_zh: "加纳",
    name: "Ghana",
    code: "233",
    time: "-8.00"
  },
  {
    name_zh: "直布罗陀(英)",
    name: "Gibraltar",
    code: "350",
    time: "-8.00"
  },
  {
    name_zh: "希腊",
    name: "Greece",
    code: "30",
    time: "-6.00"
  },
  {
    name_zh: "格陵兰岛",
    name: "Greenland",
    code: "299",
    time: "0.00"
  },
  {
    name_zh: "格林纳达",
    name: "Grenada",
    code: "1809",
    time: "-14.00"
  },
  {
    name_zh: "瓜德罗普岛(法)",
    name: "Guadeloupe I.",
    code: "590",
    time: "0.00"
  },
  {
    name_zh: "关岛(美)",
    name: "Guam",
    code: "671",
    time: "2.00"
  },
  {
    name_zh: "危地马拉",
    name: "Guatemala",
    code: "502",
    time: "-14.00"
  },
  {
    name_zh: "几内亚",
    name: "Guinea",
    code: "224",
    time: "-8.00"
  },
  {
    name_zh: "几内亚比绍",
    name: "Guinea-Bissau",
    code: "245",
    time: "0.00"
  },
  {
    name_zh: "圭亚那",
    name: "Guyana",
    code: "592",
    time: "-11.00"
  },
  {
    name_zh: "海地",
    name: "Haiti",
    code: "509",
    time: "-13.00"
  },
  {
    name_zh: "夏威夷",
    name: "Hawaii",
    code: "1808",
    time: "0.00"
  },
  {
    name_zh: "洪都拉斯",
    name: "Honduras",
    code: "504",
    time: "-14.00"
  },
  {
    name_zh: "匈牙利",
    name: "Hungary",
    code: "36",
    time: "-7.00"
  },
  {
    name_zh: "冰岛",
    name: "Iceland",
    code: "354",
    time: "-9.00"
  },
  {
    name_zh: "印度",
    name: "India",
    code: "91",
    time: "-2.30"
  },
  {
    name_zh: "印度尼西亚",
    name: "Indonesia",
    code: "62",
    time: "-0.30"
  },
  {
    name_zh: "伊朗",
    name: "Iran",
    code: "98",
    time: "-4.30"
  },
  {
    name_zh: "伊拉克",
    name: "Iraq",
    code: "964",
    time: "-5.00"
  },
  {
    name_zh: "爱尔兰",
    name: "Ireland",
    code: "353",
    time: "-8.00"
  },
  {
    name_zh: "以色列",
    name: "Israel",
    code: "972",
    time: "-6.00"
  },
  {
    name_zh: "意大利",
    name: "Italy",
    code: "39",
    time: "-7.00"
  },
  {
    name_zh: "科特迪瓦",
    name: "Ivory Coast",
    code: "225",
    time: "-8.00"
  },
  {
    name_zh: "牙买加",
    name: "Jamaica",
    code: "1876",
    time: "-12.00"
  },
  {
    name_zh: "日本",
    name: "Japan",
    code: "81",
    time: "1.00"
  },
  {
    name_zh: "约旦",
    name: "Jordan",
    code: "962",
    time: "-6.00"
  },
  {
    name_zh: "柬埔寨",
    name: "Kampuchea",
    code: "855",
    time: "-1.00"
  },
  {
    name_zh: "哈萨克斯坦",
    name: "Kazakhstan",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "肯尼亚",
    name: "Kenya",
    code: "254",
    time: "-5.00"
  },
  {
    name_zh: "基里巴斯",
    name: "Kiribati",
    code: "686",
    time: "4.00"
  },
  {
    name_zh: "朝鲜",
    name: "Korea(dpr of)",
    code: "85",
    time: "1.00"
  },
  {
    name_zh: "韩国",
    name: "Korea(republic of)",
    code: "82",
    time: "1.00"
  },
  {
    name_zh: "科威特",
    name: "Kuwait",
    code: "965",
    time: "-5.00"
  },
  {
    name_zh: "吉尔吉斯斯坦",
    name: "Kyrgyzstan",
    code: "996",
    time: "-5.00"
  },
  {
    name_zh: "老挝",
    name: "Laos",
    code: "856",
    time: "-1.00"
  },
  {
    name_zh: "拉脱维亚",
    name: "Latvia",
    code: "371",
    time: "-5.00"
  },
  {
    name_zh: "黎巴嫩",
    name: "Lebanon",
    code: "961",
    time: "-6.00"
  },
  {
    name_zh: "莱索托",
    name: "Lesotho",
    code: "266",
    time: "-6.00"
  },
  {
    name_zh: "利比里亚",
    name: "Liberia",
    code: "231",
    time: "-8.00"
  },
  {
    name_zh: "利比亚",
    name: "Libya",
    code: "218",
    time: "-6.00"
  },
  {
    name_zh: "列支敦士登",
    name: "Liechtenstein",
    code: "41 75",
    time: "-7.00"
  },
  {
    name_zh: "立陶宛",
    name: "Lithuania",
    code: "370",
    time: "-5.00"
  },
  {
    name_zh: "卢森堡",
    name: "Luxembourg",
    code: "352",
    time: "-7.00"
  },
  {
    name_zh: "马其顿",
    name: "Macedonia",
    code: "389",
    time: "0.00"
  },
  {
    name_zh: "马达加斯加",
    name: "Madagascar",
    code: "261",
    time: "-5.00"
  },
  {
    name_zh: "马拉维",
    name: "Malawi",
    code: "265",
    time: "-6.00"
  },
  {
    name_zh: "马来西亚",
    name: "Malaysia",
    code: "60",
    time: "-0.30"
  },
  {
    name_zh: "马尔代夫",
    name: "Maldive",
    code: "960",
    time: "-2.30"
  },
  {
    name_zh: "马里",
    name: "Mali",
    code: "223",
    time: "-8.00"
  },
  {
    name_zh: "马耳他",
    name: "Malta",
    code: "356",
    time: "-7.00"
  },
  {
    name_zh: "马里亚纳群岛",
    name: "Mariana Is.",
    code: "670",
    time: "2.00"
  },
  {
    name_zh: "马绍尔群岛",
    name: "Marshall Is.",
    code: "692",
    time: "4.00"
  },
  {
    name_zh: "马提尼克(法)",
    name: "Martinique",
    code: "596",
    time: "-12.00"
  },
  {
    name_zh: "毛里塔尼亚",
    name: "Mauritania",
    code: "222",
    time: "0.00"
  },
  {
    name_zh: "毛里求斯",
    name: "Mauritius",
    code: "230",
    time: "-4.00"
  },
  {
    name_zh: "马约特岛",
    name: "Mayotte I.",
    code: "269",
    time: "0.00"
  },
  {
    name_zh: "墨西哥",
    name: "Mexico",
    code: "52",
    time: "-15.00"
  },
  {
    name_zh: "密克罗尼西亚(美)",
    name: "Micronesia",
    code: "691",
    time: "1.00"
  },
  {
    name_zh: "中途岛(美)",
    name: "Midway I.",
    code: "1808",
    time: "-19.00"
  },
  {
    name_zh: "摩尔多瓦",
    name: "Moldova",
    code: "373",
    time: "-5.00"
  },
  {
    name_zh: "摩纳哥",
    name: "Monaco",
    code: "377",
    time: "-7.00"
  },
  {
    name_zh: "蒙古",
    name: "Mongolia",
    code: "976",
    time: "0.00"
  },
  {
    name_zh: "蒙特塞拉特岛(英)",
    name: "Montserrat I.",
    code: "1664",
    time: "-12.00"
  },
  {
    name_zh: "摩洛哥",
    name: "Morocco",
    code: "212",
    time: "-6.00"
  },
  {
    name_zh: "莫桑比克",
    name: "Mozambique",
    code: "258",
    time: "-6.00"
  },
  {
    name_zh: "缅甸",
    name: "Myanmar",
    code: "95",
    time: "-1.30"
  },
  {
    name_zh: "纳米比亚",
    name: "Namibia",
    code: "264",
    time: "-7.00"
  },
  {
    name_zh: "瑙鲁",
    name: "Nauru",
    code: "674",
    time: "4.00"
  },
  {
    name_zh: "尼泊尔",
    name: "Nepal",
    code: "977",
    time: "-2.30"
  },
  {
    name_zh: "荷兰",
    name: "Netherlands",
    code: "31",
    time: "-7.00"
  },
  {
    name_zh: "荷属安的列斯群岛",
    name: "Netherlandsantilles Is.",
    code: "599",
    time: "-12.00"
  },
  {
    name_zh: "新喀里多尼亚群岛(法)",
    name: "New Caledonia Is.",
    code: "687",
    time: "3.00"
  },
  {
    name_zh: "新西兰",
    name: "New Zealand",
    code: "64",
    time: "4.00"
  },
  {
    name_zh: "尼加拉瓜",
    name: "Nicaragua",
    code: "505",
    time: "-14.00"
  },
  {
    name_zh: "尼日尔",
    name: "Niger",
    code: "227",
    time: "-8.00"
  },
  {
    name_zh: "尼日利亚",
    name: "Nigeria",
    code: "234",
    time: "-7.00"
  },
  {
    name_zh: "纽埃岛(新)",
    name: "Niue I.",
    code: "683",
    time: "-19.00"
  },
  {
    name_zh: "诺福克岛(澳)",
    name: "Norfolk I,",
    code: "6723",
    time: "3.30"
  },
  {
    name_zh: "挪威",
    name: "Norway",
    code: "47",
    time: "-7.00"
  },
  {
    name_zh: "阿曼",
    name: "Oman",
    code: "968",
    time: "-4.00"
  },
  {
    name_zh: "帕劳(美)",
    name: "Palau",
    code: "680",
    time: "0.00"
  },
  {
    name_zh: "巴拿马",
    name: "Panama",
    code: "507",
    time: "-13.00"
  },
  {
    name_zh: "巴布亚新几内亚",
    name: "Papua New Guinea",
    code: "675",
    time: "2.00"
  },
  {
    name_zh: "巴拉圭",
    name: "Paraguay",
    code: "595",
    time: "-12.00"
  },
  {
    name_zh: "秘鲁",
    name: "Peru",
    code: "51",
    time: "-13.00"
  },
  {
    name_zh: "菲律宾",
    name: "Philippines",
    code: "63",
    time: "0.00"
  },
  {
    name_zh: "波兰",
    name: "Poland",
    code: "48",
    time: "-7.00"
  },
  {
    name_zh: "葡萄牙",
    name: "Portugal",
    code: "351",
    time: "-8.00"
  },
  {
    name_zh: "巴基斯坦",
    name: "Pakistan",
    code: "92",
    time: "-2.30"
  },
  {
    name_zh: "波多黎各(美)",
    name: "Puerto Rico",
    code: "1787",
    time: "-12.00"
  },
  {
    name_zh: "卡塔尔",
    name: "Qatar",
    code: "974",
    time: "-5.00"
  },
  {
    name_zh: "留尼汪岛",
    name: "Reunion I.",
    code: "262",
    time: "-4.00"
  },
  {
    name_zh: "罗马尼亚",
    name: "Romania",
    code: "40",
    time: "-6.00"
  },
  {
    name_zh: "俄罗斯",
    name: "Russia",
    code: "7",
    time: "-5.00"
  },
  {
    name_zh: "卢旺达",
    name: "Rwanda",
    code: "250",
    time: "-6.00"
  },
  {
    name_zh: "东萨摩亚(美)",
    name: "Samoa,Eastern",
    code: "684",
    time: "-19.00"
  },
  {
    name_zh: "西萨摩亚",
    name: "Samoa,Western",
    code: "685",
    time: "-19.00"
  },
  {
    name_zh: "圣马力诺",
    name: "San.Marino",
    code: "378",
    time: "-7.00"
  },
  {
    name_zh: "圣皮埃尔岛及密克隆岛",
    name: "San.Pierre And Miquelon I.",
    code: "508",
    time: "-2.00"
  },
  {
    name_zh: "圣多美和普林西比",
    name: "San.Tome And Principe",
    code: "239",
    time: "-8.00"
  },
  {
    name_zh: "沙特阿拉伯",
    name: "Saudi Arabia",
    code: "966",
    time: "-5.00"
  },
  {
    name_zh: "塞内加尔",
    name: "Senegal",
    code: "221",
    time: "-8.00"
  },
  {
    name_zh: "塞舌尔",
    name: "Seychelles",
    code: "248",
    time: "-4.00"
  },
  {
    name_zh: "新加坡",
    name: "Singapore",
    code: "65",
    time: "0.30"
  },
  {
    name_zh: "斯洛伐克",
    name: "Slovak",
    code: "421",
    time: "-7.00"
  },
  {
    name_zh: "斯洛文尼亚",
    name: "Slovenia",
    code: "386",
    time: "-7.00"
  },
  {
    name_zh: "所罗门群岛",
    name: "Solomon Is.",
    code: "677",
    time: "3.00"
  },
  {
    name_zh: "索马里",
    name: "Somali",
    code: "252",
    time: "-5.00"
  },
  {
    name_zh: "南非",
    name: "South Africa",
    code: "27",
    time: "-6.00"
  },
  {
    name_zh: "西班牙",
    name: "Spain",
    code: "34",
    time: "-8.00"
  },
  {
    name_zh: "斯里兰卡",
    name: "Sri Lanka",
    code: "94",
    time: "0.00"
  },
  {
    name_zh: "圣克里斯托弗和尼维斯",
    name: "St.Christopher and Nevis",
    code: "1809",
    time: "-12.30"
  },
  {
    name_zh: "圣赫勒拿",
    name: "St.Helena",
    code: "290",
    time: "-8.00"
  },
  {
    name_zh: "圣卢西亚",
    name: "St.Lucia",
    code: "1758",
    time: "-12.00"
  },
  {
    name_zh: "圣文森特岛(英)",
    name: "St.Vincent I.",
    code: "1784",
    time: "-12.00"
  },
  {
    name_zh: "苏丹",
    name: "Sudan",
    code: "249",
    time: "-6.00"
  },
  {
    name_zh: "苏里南",
    name: "Suriname",
    code: "597",
    time: "-11.30"
  },
  {
    name_zh: "斯威士兰",
    name: "Swaziland",
    code: "268",
    time: "-6.00"
  },
  {
    name_zh: "瑞典",
    name: "Sweden",
    code: "46",
    time: "-7.00"
  },
  {
    name_zh: "瑞士",
    name: "Switzerland",
    code: "41",
    time: "-7.00"
  },
  {
    name_zh: "叙利亚",
    name: "Syria",
    code: "963",
    time: "-6.00"
  },
  {
    name_zh: "塔吉克斯坦",
    name: "Tajikistan",
    code: "992",
    time: "-5.00"
  },
  {
    name_zh: "坦桑尼亚",
    name: "Tanzania",
    code: "255",
    time: "-5.00"
  },
  {
    name_zh: "泰国",
    name: "Thailand",
    code: "66",
    time: "-1.00"
  },
  {
    name_zh: "阿拉伯联合酋长国",
    name: "The United Arab Emirates",
    code: "971",
    time: "-5.00"
  },
  {
    name_zh: "多哥",
    name: "Togo",
    code: "228",
    time: "-8.00"
  },
  {
    name_zh: "托克劳群岛(新)",
    name: "Tokelau Is.",
    code: "690",
    time: "-19.00"
  },
  {
    name_zh: "汤加",
    name: "Tonga",
    code: "676",
    time: "5.00"
  },
  {
    name_zh: "特立尼达和多巴哥",
    name: "Trinidad and Tobago",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "突尼斯",
    name: "Tunisia",
    code: "216",
    time: "-7.00"
  },
  {
    name_zh: "土耳其",
    name: "Turkey",
    code: "90",
    time: "-6.00"
  },
  {
    name_zh: "土库曼斯坦",
    name: "Turkmenistan",
    code: "993",
    time: "-5.00"
  },
  {
    name_zh: "特克斯和凯科斯群岛",
    name: "Turks and Caicos Is.",
    code: "1809",
    time: "-13.00"
  },
  {
    name_zh: "图瓦卢",
    name: "Tuvalu",
    code: "688",
    time: "4.00"
  },
  {
    name_zh: "乌干达",
    name: "Uganda",
    code: "256",
    time: "-5.00"
  },
  {
    name_zh: "乌克兰",
    name: "Ukraine",
    code: "380",
    time: "-5.00"
  },
  {
    name_zh: "英国",
    name: "United Kingdom",
    code: "44",
    time: "-8.00"
  },
  {
    name_zh: "乌拉圭",
    name: "Uruguay",
    code: "598",
    time: "-10.30"
  },
  {
    name_zh: "乌兹别克斯坦",
    name: "Uzbekistan",
    code: "998",
    time: "-5.00"
  },
  {
    name_zh: "瓦努阿图",
    name: "Vanuatu",
    code: "678",
    time: "3.00"
  },
  {
    name_zh: "梵蒂冈",
    name: "Vatican",
    code: "379",
    time: "-7.00"
  },
  {
    name_zh: "委内瑞拉",
    name: "Venezuela",
    code: "58",
    time: "-12.30"
  },
  {
    name_zh: "越南",
    name: "Vietnam",
    code: "84",
    time: "-1.00"
  },
  {
    name_zh: "维尔京群岛(英)",
    name: "Virgin Is.",
    code: "1809",
    time: "-12.00"
  },
  {
    name_zh: "维尔京群岛和圣罗克伊",
    name: "Virgin Is. and St.Croix I.",
    code: "1809",
    time: "0.00"
  },
  {
    name_zh: "威克岛(美)",
    name: "Wake I.",
    code: "1808",
    time: "4.00"
  },
  {
    name_zh: "瓦里斯和富士那群岛",
    name: "Wallis And Futuna Is.",
    code: "681",
    time: "4.00"
  },
  {
    name_zh: "西撒哈拉",
    name: "Western sahara",
    code: "967",
    time: "0.00"
  },
  {
    name_zh: "也门",
    name: "Yemen",
    code: "967",
    time: "-5.00"
  },
  {
    name_zh: "南斯拉夫",
    name: "Yugoslavia",
    code: "381",
    time: "-7.00"
  },
  {
    name_zh: "扎伊尔",
    name: "Zaire",
    code: "243",
    time: "-7.00"
  },
  {
    name_zh: "赞比亚",
    name: "Zambia",
    code: "260",
    time: "-6.00"
  },
  {
    name_zh: "桑给巴尔",
    name: "Zanzibar",
    code: "259",
    time: "0.00"
  },
  {
    name_zh: "津巴布韦",
    name: "Zimbabwe",
    code: "263",
    time: "-6.00"
  }
]


export const COUNTRY_IDS = [7, 140, 25, 99];
export const TIME_ZONE_ZH = {
	"Africa/Brazzaville +1":"西部非洲标准时间 (布拉扎维)",
	"Africa/Cairo +2":"东欧标准时间 (开罗)",
	"Africa/Casablanca +0":"卡萨布兰卡",
	"Africa/Harare +2":"中部非洲标准时间 (哈拉雷)",
	"Africa/Nairobi +3":"东部非洲标准时间 (内罗毕)",
	"Africa/Windhoek +1":"温得和克",
	"America/Anchorage -9":"安克雷奇",
	"America/Argentina/Buenos_Aires -3":"布宜诺斯艾利斯",
	"America/Barbados -4":"大西洋时间 (巴巴多斯)",
	"America/Bogota -5":"哥伦比亚时间 (波哥大)",
	"America/Caracas -4":"委内瑞拉时间 (加拉加斯)",
	"America/Chicago -6":"美国中部时间 (芝加哥)",
	"America/Chihuahua -7":"奇瓦瓦",
	"America/Costa_Rica -6":"美国中部时间 (哥斯达黎加)",
	"America/Denver -7":"美国山区时间 (丹佛)",
	"America/Godthab -3":"戈特霍布",
	"America/Los_Angeles -8":"美国太平洋时间 (洛杉矶)",
	"America/Manaus -4":"亚马逊标准时间 (马瑙斯)",
	"America/Mexico_City -6":"美国中部时间 (墨西哥城)",
	"America/Montevideo -3":"乌拉圭时间 (蒙得维的亚)",
	"America/New_York -5":"美国东部时间 (纽约)",
	"America/Phoenix -7":"美国山区时间 (凤凰城)",
	"America/Regina -6":"美国中部时间 (里贾纳)",
	"America/Santiago -4":"圣地亚哥",
	"America/Sao_Paulo -3":"圣保罗",
	"America/St_Johns -3:30":"纽芬兰时间 (圣约翰)",
	"America/Tijuana -8":"美国太平洋时间 (提华纳)",
	"Asia/Almaty +6":"阿拉木图",
	"Asia/Amman +2":"东欧标准时间 (安曼)",
	"Asia/Baghdad +3":"巴格达",
	"Asia/Baku +4":"巴库",
	"Asia/Bangkok +7":"曼谷",
	"Asia/Beirut +2":"东欧标准时间 (贝鲁特)",
	"Asia/Colombo +5:30":"科伦坡",
	"Asia/Dubai +4":"迪拜",
	"Asia/Hong_Kong +8":"香港时间 (香港)",
	"Asia/Irkutsk +8":"伊尔库茨克时间 (伊尔库茨克)",
	"Asia/Jerusalem +2":"以色列时间 (耶路撒冷)",
	"Asia/Kabul +4:30":"阿富汗时间 (喀布尔)",
	"Asia/Karachi +5":"卡拉奇",
	"Asia/Krasnoyarsk +7":"克拉斯诺亚尔斯克",
	"Asia/Kuala_Lumpur +8":"吉隆坡",
	"Asia/Kuwait +3":"科威特",
	"Asia/Magadan +11":"马加丹时间 (马加丹)",
	"Asia/Oral +5":"乌拉尔",
	"Asia/Rangoon +6:30":"缅甸时间 (仰光)",
	"Asia/Seoul +9":"首尔",
	"Asia/Shanghai +8":"中国标准时间 (北京)",
	"Asia/Taipei +8":"台北时间 (台北)",
	"Asia/Tbilisi +4":"第比利斯",
	"Asia/Tehran +3:30":"伊朗标准时间 (德黑兰)",
	"Asia/Tokyo +9":"日本时间 (东京)",
	"Asia/Vladivostok +10":"海参崴时间 (符拉迪沃斯托克)",
	"Asia/Yakutsk +9":"雅库茨克时间 (雅库茨克)",
	"Asia/Yekaterinburg +5":"叶卡捷林堡",
	"Asia/Yerevan +4":"埃里温",
	"Atlantic/Azores -1":"亚述尔群岛",
	"Atlantic/Cape_Verde -1":"佛得角",
	"Atlantic/South_Georgia -2":"南乔治亚",
	"Australia/Adelaide +9:30":"阿德莱德",
	"Australia/Brisbane +10":"布里斯班",
	"Australia/Darwin +9:30":"达尔文",
	"Australia/Hobart +10":"霍巴特",
	"Australia/Perth +8":"佩思",
	"Australia/Sydney +10":"悉尼",
	"Europe/Amsterdam +1":"中欧标准时间 (阿姆斯特丹)",
	"Europe/Athens +2":"东欧标准时间 (雅典)",
	"Europe/Belgrade +1":"中欧标准时间 (贝尔格莱德)",
	"Europe/Brussels +1":"中欧标准时间 (布鲁塞尔)",
	"Europe/Helsinki +2":"东欧标准时间 (赫尔辛基)",
	"Europe/London +0":"格林尼治标准时间 (伦敦)",
	"Europe/Minsk +3":"明斯克",
	"Europe/Moscow +3":"莫斯科",
	"Europe/Sarajevo +1":"中欧标准时间 (萨拉热窝)",
	"Pacific/Auckland +12":"奥克兰",
	"Pacific/Fiji +12":"斐济",
	"Pacific/Guam +10":"关岛",
	"Pacific/Honolulu -10":"檀香山",
	"Pacific/Majuro +12":"马朱罗",
	"Pacific/Midway -11":"中途岛",
	"Pacific/Tongatapu +13":"东加塔布"
}

export const TIME_ZONE = {
	"Africa/Brazzaville +1":"Africa/Brazzaville",
	"Africa/Cairo +2":"Africa/Cairo",
	"Africa/Casablanca +0":"Africa/Casablanca",
	"Africa/Harare +2":"Africa/Harare",
	"Africa/Nairobi +3":"Africa/Nairobi",
	"Africa/Windhoek +1":"Africa/Windhoek",
	"America/Anchorage -9":"America/Anchorage",
	"America/Argentina/Buenos_Aires -3":"America/Argentina/Buenos_Aires",
	"America/Barbados -4":"America/Barbados",
	"America/Bogota -5":"America/Bogota",
	"America/Caracas -4":"America/Caracas",
	"America/Chicago -6":"America/Chicago",
	"America/Chihuahua -7":"America/Chihuahua",
	"America/Costa_Rica -6":"America/Costa_Rica",
	"America/Denver -7":"America/Denver",
	"America/Godthab -3":"America/Godthab",
	"America/Los_Angeles -8":"America/Los_Angeles",
	"America/Manaus -4":"America/Manaus",
	"America/Mexico_City -6":"America/Mexico_City",
	"America/Montevideo -3":"America/Montevideo",
	"America/New_York -5":"America/New_York",
	"America/Phoenix -7":"America/Phoenix",
	"America/Regina -6":"America/Regina",
	"America/Santiago -4":"America/Santiago",
	"America/Sao_Paulo -3":"America/Sao_Paulo",
	"America/St_Johns -3:30":"America/St_Johns",
	"America/Tijuana -8":"America/Tijuana",
	"Asia/Almaty +6":"Asia/Almaty",
	"Asia/Amman +2":"Asia/Amman",
	"Asia/Baghdad +3":"Asia/Baghdad",
	"Asia/Baku +4":"Asia/Baku",
	"Asia/Bangkok +7":"Asia/Bangkok",
	"Asia/Beirut +2":"Asia/Beirut",
	"Asia/Colombo +5:30":"Asia/Colombo",
	"Asia/Dubai +4":"Asia/Dubai",
	"Asia/Hong_Kong +8":"Asia/Hong_Kong",
	"Asia/Irkutsk +8":"Asia/Irkutsk",
	"Asia/Jerusalem +2":"Asia/Jerusalem",
	"Asia/Kabul +4:30":"Asia/Kabul",
	"Asia/Karachi +5":"Asia/Karachi",
	"Asia/Krasnoyarsk +7":"Asia/Krasnoyarsk",
	"Asia/Kuala_Lumpur +8":"Asia/Kuala_Lumpur",
	"Asia/Kuwait +3":"Asia/Kuwait",
	"Asia/Magadan +11":"Asia/Magadan",
	"Asia/Oral +5":"Asia/Oral",
	"Asia/Rangoon +6:30":"Asia/Rangoon",
	"Asia/Seoul +9":"Asia/Seoul",
	"Asia/Shanghai +8":"Asia/Beijing",
	"Asia/Taipei +8":"Asia/Taipei",
	"Asia/Tbilisi +4":"Asia/Tbilisi",
	"Asia/Tehran +3:30":"Asia/Tehran",
	"Asia/Tokyo +9":"Asia/Tokyo",
	"Asia/Vladivostok +10":"Asia/Vladivostok",
	"Asia/Yakutsk +9":"Asia/Yakutsk",
	"Asia/Yekaterinburg +5":"Asia/Yekaterinburg",
	"Asia/Yerevan +4":"Asia/Yerevan",
	"Atlantic/Azores -1":"Atlantic/Azores",
	"Atlantic/Cape_Verde -1":"Atlantic/Cape_Verde",
	"Atlantic/South_Georgia -2":"Atlantic/South_Georgia",
	"Australia/Adelaide +9:30":"Australia/Adelaide",
	"Australia/Brisbane +10":"Australia/Brisbane",
	"Australia/Darwin +9:30":"Australia/Darwin",
	"Australia/Hobart +10":"Australia/Hobart",
	"Australia/Perth +8":"Australia/Perth",
	"Australia/Sydney +10":"Australia/Sydney",
	"Europe/Amsterdam +1":"Europe/Amsterdam",
	"Europe/Athens +2":"Europe/Athens",
	"Europe/Belgrade +1":"Europe/Belgrade",
	"Europe/Brussels +1":"Europe/Brussels",
	"Europe/Helsinki +2":"Europe/Helsinki",
	"Europe/London +0":"Europe/London",
	"Europe/Minsk +3":"Europe/Minsk",
	"Europe/Moscow +3":"Europe/Moscow",
	"Europe/Sarajevo +1":"Europe/Sarajevo",
	"Pacific/Auckland +12":"Pacific/Auckland",
	"Pacific/Fiji +12":"Pacific/Fiji",
	"Pacific/Guam +10":"Pacific/Guam",
	"Pacific/Honolulu -10":"Pacific/Honolulu",
	"Pacific/Majuro +12":"Pacific/Majuro",
	"Pacific/Midway -11":"Pacific/Midway",
	"Pacific/Tongatapu +13":"Pacific/Tongatapu"
}

export const ZIP_CODE = {
  '1': '测试1'
}
export const GERDER = {
  'UNKNOWN': '未知',
  'MALE': '男',
  'FEMALE': '女'
}

export const DEGREE = {
  'college_graduate': '大专',
  'university_diploma': '本科',
  'bachelor_degree': '学士学位',
  'master_degree': '硕士学位',
  'doctor_degree': '博士学位',
  'post-doctoral': '博士后',
  'other': '其他'
}
export const DEGREE_VALUE = {
  1:'college_graduate',
  2:'university_diploma',
  3:'bachelor_degree',
  4:'master_degree',
  5:'doctor_degree',
  6:'post-doctoral',
  7:'other'
}

export const GRADE_ENUMS = {
  1: 'Kindergarten',
  2: 'Elementary School',
  3: 'Middle School',
  4: 'High School',
  5: 'College',
  6: 'Adults'
}

export const GRADE = {
  'kindergarten': '幼儿园',
  'primary_school': '小学',
  'junior_middle_school': '初中',
  'high_school': '高中',
  'university': '大学',
  'post-adult': '成人',
  'other': '其他'
}

export const INTERVIEW = {
  '1': '待预约',
  '2': '未面试',
  '3': '已面试',
  '4': 'Cancel',
  '5': '未完成',
  '6': '待答复',
  '7': '待确认',
  '8': '待定',
  '9': '面试通过',
  '10': '面试失败',
  '98': '有效',
  '99': '无效'
}

export const ACTION_EVENT_TYPE = {
  'UNKNOWN': 1,
  'TEACHER_CHECK': 2,
  'TEACHER_TALK': 3,
  'STUDENT_TALK': 4
};

export const COURSEWARE_STATE = {
  1: '未审核',
  2: 'Approve',
  3: '审核驳回'
}
export const TEACHER_STATE = {
  '81': '不在岗',
  '80': '在岗'
}
export const TEACHER_AGE = ['0-4','5-9','10-15']
export const HAVE_AWARD = {
  '0': '无',
  '1': '有'
}
export const HAVE_SENIORITY = {
  '0': '无',
  '1': '有'
}
export const TEACHER_WEEK = ['1','2','3','4','5','6','7']

export const TEACHER_WEEK_ENUM = {
  1: 'Mon',
  2: 'Tues',
  3: 'Wed',
  4: 'Thurs',
  5: 'Fri',
  6: 'Sat',
  7: 'Sun'
}
export const GO_ABROAD = {
  YES: '是',
  NO: '否'
}
export const APPOINTMENT_STATE_ENUM = {
  'WRITE_APPOINTMENT': '待预约',
  'WRITE_ACCEPT': '待接受',
  'WRITE_CLASS': '待上课',
  'FINISH': 'Completed'
}
export const COURSE_APPOINTMENT_STATE_ENUM = {
  'APPLY': '未接受',
  'REFUSE': '拒绝',
  'ACCEPT': '接受'
}

export const COURSE_SCHEDULE_STATE_ENUM = {
  'COMMON_CLASS': 'Normal class',
  'CANCEL': 'Cancel',
  'TROUBLE_CLASS': 'Problematic classs',
  'MAKE_UP_CLASS': 'Compensatory class'
}
export const COURSE_SCHEDULE_STATE_NUMBER = {
  'COMMON_CLASS': 1,
  'CANCEL': 2,
  'TROUBLE_CLASS': 3,
  'MAKE_UP_CLASS': 4
}
export const COURSE_SCHEDULE_CHEKED_ENUM = {
  'BEFORE_CHECK': 'To be verify',
  'CHECK_PASSED':'Approve',
  'CHECK_DENY':'审核驳回',
  'PREVIEW':'可以预览',
  'NO_PREVIEW':'不可以预览'
}