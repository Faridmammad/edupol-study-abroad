
import { Service } from '../types';
import ielts from '../assets/images/ielts.jpg';
import sat from '../assets/images/sat.jpg';
import abroad from '../assets/images/study-abroad.jpg';

export const services: Service[] = [
  {
    id: '1',
    title: 'IELTS hazırlığı',
    description: 'Beynəlxalq İngilis dili testi üçün professional hazırlıq kursları',
    image: ielts, 
    features: [
      'Ekspert müəllimlərdən dərs',
      'Real test təcrübəsi',
      'Fərdi yanaşma',
      'Nəticə zəmanəti',
      'Online və offline format'
    ],
    detailedInfo: {
      duration: '3-6 ay',
      price: '800-1500 AZN',
      schedule: 'Həftədə 3-4 dərs',
      materials: 'Rəsmi Cambridge materialları',
      practiceTests: 'Həftədə 1 tam test',
      support: '24/7 müəllim dəstəyi',
      guarantee: '6.5+ nəticə zəmanəti',
      additionalInfo:
        'IELTS testi dünyanın ən populyar İngilis dili testidir və 140-dan çox ölkədə tanınır. Kursumuzda hər 4 bacarıq sahəsini (Listening, Reading, Writing, Speaking) əhatə edən intensiv hazırlıq proqramı təqdim edirik.'
    }
  },
  {
    id: '2',
    title: 'SAT hazırlığı',
    description: 'The Princeton Review ilə SAT testi hazırlığı',
    image: sat,
    features: [
      'Riyaziyyat və İngilis dili',
      'Test strategiyaları',
      'Məşq materialları',
      'Nəticə analizi',
      'Qrup və fərdi dərslər'
    ],
    detailedInfo: {
      duration: '4-8 ay',
      price: '1000-2000 AZN',
      schedule: 'Həftədə 4-5 dərs',
      materials: 'The Princeton Review rəsmi materialları',
      practiceTests: 'Həftədə 2 tam test',
      support: 'Ekspert konsultasiya',
      guarantee: '1400+ nəticə zəmanəti',
      additionalInfo:
        'SAT Amerika universitetlərinə qəbul üçün əsas testdir. Kursumuzda Math və Evidence-Based Reading & Writing bölmələri üzrə dərin hazırlıq, test strategiyaları və vaxt idarəetməsi bacarıqları öyrədilir.'
    }
  },
  {
    id: '3',
    title: 'Xaricdə təhsil',
    description: 'Dünyanın ən yaxşı universitetlərində təhsil almaq üçün konsaltinq',
    image: abroad,
    features: [
      'Universitet seçimi',
      'Müraciət dəstəyi',
      'Viza prosesi',
      'Yaşayış yeri təşkili',
      'Təhsil sonrası dəstək'
    ],
    detailedInfo: {
      duration: '6-12 ay',
      price: '1500-3000 AZN',
      schedule: 'Fərdi plan',
      materials: 'Universitet kataloqları və materialları',
      practiceTests: 'Müraciət mətnləri hazırlığı',
      support: 'Tam müşayiət',
      guarantee: 'Qəbul zəmanəti',
      additionalInfo:
        'Xaricdə təhsil prosesi mürəkkəb və çoxmərhələli prosesdir. Ekspertlərimiz hər addımda sizə dəstək göstərir: universitet seçimindən tutmuş, qəbul alıb ölkəyə köçənə qədər.'
    }
  }
];