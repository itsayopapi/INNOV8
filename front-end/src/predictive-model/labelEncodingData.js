const provinces = [
  ["Eastern Cape", 0],
  ["Free State", 1],
  ["Gauteng", 2],
  ["KwaZulu-Natal", 3],
  ["Limpopo", 4],
  ["Mpumalanga", 5],
  ["Northern Cape", 6],
  ["North West", 7],
  ["Western Cape", 8],
];

const geotype = [
  ["Rural", 0],
  ["Rural formal", 1],
  ["Tribal areas", 2],
  ["Urban formal", 3],
  ["Urban informal", 4],
];

const gender = [
  ["Male", 1],
  ["Female", 0],
];

const race = [
  ["African/Black", 0],
  ["Caucasian/White", 1],
  ["Coloured", 2],
  ["Indian/Asian", 3],
  ["White", 4],
];

const education = [
  ["BACHELOR'S DEGREE/OCCUPATIONAL CERTIFICATE  NQF LEVEL 7", 0],
  ["Bachelor's Degree", 1],
  ["Bachelor's Degree and post-graduate diploma", 2],
  ["Bachelor's Degree/Occupational Certificate NQF Level 7", 3],
  ["CERTIFICATE WITH LESS THAN GRADE 12/STANDARD 10", 4],
  ["Certificate with Grade 12/Std 10", 5],
  ["Certificate with less than Grade 12/Standard 10", 6],
  ["Certificate with less than Grade 12/Std 10", 7],
  ["DIPLOMA WITH GRADE 12/STANDARD 10/OCCUPATIONAL CERTIFICATE NQF LEVEL 6", 8],
  ["DIPLOMA WITH LESS THAN GRADE 12/STANDARD 10", 9],
  ["DO NOT KNOW", 10],
  ["DOCTORAL DEGREES (D-TECH AND PHD) NQF LEVEL 10", 11],
  [
    "Diploma with Grade 12/Standard 10/Occupational Certificate NQF Level 6",
    12,
  ],
  ["Diploma with Grade 12/Std 10", 13],
  ["Diploma with less than Grade 12/Standard 10", 14],
  ["Diploma with less than Grade 12/Std 10", 15],
  ["Do not know", 16],
  ["Doctoral Degrees (D-Tech and PhD) NQF Level 10", 17],
  ["GRADE 1/SUB A/CLASS 1", 18],
  [
    "GRADE 10/STANDARD 8/FORM 3/NCV LEVEL 2/OCCUPATIONAL CERTIFICATE NQF LEV EL 2",
    19,
  ],
  [
    "GRADE 11/STANDARD 9/FORM 4/NCV LEVEL 3/OCCUPATIONAL CERTIFICATE NQF LEV EL 3",
    20,
  ],
  ["Others", 21],
];

const disability = [
  ["Disabled", 0],
  ["Not Disabled", 1],
  ["Not disabled", 2],
  ["Unspecified", 3],
];

const employ_status = [
  ["Employed", 0],
  ["Unemployed", 1],
  ["Unspecified", 2],
];

module.exports = [
  ["provinces", provinces],
  ["geotype", geotype],
  ["gender", gender],
  ["race", race],
  ["education", education],
  ["disability", disability],
];
