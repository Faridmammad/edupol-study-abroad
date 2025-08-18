import { Testimonial } from '../types';

import Student2 from '../assets/images/students/Student2.webp';
import Student3 from '../assets/images/students/Student3.webp';
import Student5 from '../assets/images/students/Student5.webp';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aysu Məmmədova',
    city: 'Harvard',
    university: 'Harvard University',
    image: Student2,
    story:
      'Xaricdə təhsil almaq arzum uzun illərdir, amma prosesin nə qədər mürəkkəb olduğunu bilmirdim. Bu mərkəzin köməyi ilə SAT hazırlığından başlayaraq, müraciətə, viza əldə etməyə qədər hər addımda dəstək oldular. İndi Harvard Universitetində təhsil alıram və bu həyatımın ən yaxşı qərarı idi.',
  },
  {
    id: 2,
    name: 'Leyla Əliyeva',
    city: 'Manchester, Böyük Britaniya',
    university: 'University of Manchester',
    image: Student3,
    story:
      'İngiliscəm orta səviyyədə idi, amma IELTS-də 8 almaq istəyirdim. 6 ay ərzində intensiv hazırlıq kursuna yazıldım. Hər həftə məşq testi, fərdi geri dönüş, və ekspert müəllimlər mənə böyük kömək etdi. Nəticədə hədəfimi tutdum və Torontoda təhsil almaq üçün qəbul oldum.',
  },
  {
    id: 3,
    name: 'Fuad Rzayev',
    city: 'Münhen, Almaniya',
    university: 'TU Munich',
    image: Student5,
    story:
      'Almaniyada magistrlik üçün müraciət edərkən bütün sənədlərin düzgün təqdim edilməsi, motivasiya məktubu və CV hazırlığı çox vacib idi. Buradakı ekspertlər mənə hər cür dəstək göstərdi. Qəbul aldıqdan sonra yaşayış yeri və viza üçün də kömək etdilər. İndi Münhen Texniki Universitetində təhsil alıram.',
  },
];
