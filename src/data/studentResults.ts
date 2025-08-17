import { StudentResult } from '../types';
import Student1 from '../assets/images/students/Student1.webp';
import Student2 from '../assets/images/students/Student2.webp';
import Student3 from '../assets/images/students/Student3.webp';
import Student4 from '../assets/images/students/Student4.webp';
import Student5 from '../assets/images/students/Student5.webp';
import Student6 from '../assets/images/students/Student6.webp';

export const studentResults: StudentResult[] = [
  {
    id: '1',
    name: 'Elvin Sultanov',
    testType: 'IELTS',
    score: 8.5,
    maxScore: 9.0,
    year: 2024,
    photo: Student1,
    testimonial: 'Edupol sayəsində IELTS-də 8.5 bal topladım və İngiltərədə təhsil almağa başladım!'
  },
  {
    id: '2',
    name: 'Aysu Məmmədova',
    testType: 'SAT',
    score: 1550,
    maxScore: 1600,
    year: 2024,
    photo: Student2,
    testimonial: 'SAT-də 1550 bal ilə Harvard University-yə qəbul oldum. Edupol komandasına minnətdaram!'
  },
  {
    id: '3',
    name: 'Leyla Əliyeva',
    testType: 'IELTS',
    score: 8.0,
    maxScore: 9.0,
    year: 2024,
    photo: Student3,
    testimonial: 'IELTS hazırlığı zamanı əldə etdiyim 8.0 bal sayəsində Toronto universitetinə qəbul oldum.'
  },
  {
    id: '4',
    name: 'Nigar Axundova',
    testType: 'SAT',
    score: 1520,
    maxScore: 1600,
    year: 2024,
    photo: Student4,
    testimonial: 'SAT-də 1520 bal toplayaraq MIT-yə qəbul oldum. Edupol-un professional yanaşması sayəsində!'
  },
  {
    id: '5',
    name: 'Fuad Rzayev',
    testType: 'TOEFL',
    score: 110,
    maxScore: 120,
    year: 2024,
    photo: Student5,
    testimonial: 'TOEFL-də 110 bal ilə Ege universitetinə qəbul oldum. Edupol-a təşəkkürlər!'
  },
  {
    id: '6',
    name: 'Orxan Məmmədli',
    testType: 'IELTS',
    score: 7.5,
    maxScore: 9.0,
    year: 2024,
    photo: Student6,
    testimonial: 'IELTS-də 7.5 bal toplayaraq Sorbonne universitetinə qəbul oldum.'
  }
]; 