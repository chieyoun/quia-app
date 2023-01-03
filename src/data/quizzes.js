const quizzes = [
  {
    id: 1,
    question: "다음을 2진수로 변환 한다면?(1)",
    answers: [
      { text: "0001", isCorrect: true },
      { text: "1010", isCorrect: false },
      { text: "1000", isCorrect: false },
      { text: "0011", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "<사자성어>의 <사>와 다른 한자는?",
    answers: [
      { text: "사고무친", isCorrect: false },
      { text: "사각지대", isCorrect: true },
      { text: "사면초가", isCorrect: false },
      { text: "사백사병", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "뜨는 원리가 다른 하나는?",
    answers: [
      { text: "풍선", isCorrect: false },
      { text: "배", isCorrect: false },
      { text: "비행기", isCorrect: true },
      { text: "구명조끼", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "나는 알프스 산맥을 넘지 않았다. 나는?",
    answers: [
      { text: "한니발", isCorrect: false },
      { text: "나폴레옹", isCorrect: false },
      { text: "칭기즈칸", isCorrect: true },
    ],
  },
  {
    id: 5,
    question:
      "다음 문장에서 틀린것은? " +
      "'너는 그의 담당자로서 그가 정답을 맞추든 말든' 역할을 수행해야 해.'",
    answers: [
      { text: "-로서", isCorrect: false },
      { text: "맞추-", isCorrect: true },
      { text: "-든", isCorrect: false },
      { text: "역할", isCorrect: false },
    ],
  },
  {
    id: 6,
    question:
      "지방경찰청장이 발급한 국제 운전면허증의 유효기간은 발급받은 날부터 몇년인가?",
    answers: [
      { text: "4", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "1", isCorrect: true },
    ],
  },
  {
    id: 7,
    question:
      "식혜는 엿기름 중의 어떠한 성분에 의하여 전분이 당화를 일으키게 되는가?",
    answers: [
      { text: "지방", isCorrect: false },
      { text: "단백질", isCorrect: false },
      { text: "효소", isCorrect: true },
      { text: "무기질", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "다음중 '전정국'의 MBTI는?(위버스 기준)",
    answers: [
      { text: "ENTP", isCorrect: false },
      { text: "ISFP", isCorrect: true },
      { text: "ESFP", isCorrect: false },
      { text: "ISTJ", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "다음중 인스타 아이디로 옳바른것은?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 11,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 15,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 17,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 18,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 19,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "다음중 '전정국'의 출생지는?",
    answers: [
      { text: "창원시 귀헌동", isCorrect: false },
      { text: "부산광역시 거제동", isCorrect: false },
      { text: "부산광역시 만덕동", isCorrect: true },
      { text: "의정부시 용헌동", isCorrect: false },
    ],
  },
];

export default quizzes;
