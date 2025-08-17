import { University } from '../types';
import oxford from '../assets/images/oxford.webp';
import harvard from '../assets/images/harvard.webp';
import munich from '../assets/images/munich.jpg';
import sorbonne from '../assets/images/sorbonne.jpg';
import toronto from '../assets/images/toronto.jpg';
import zurich from '../assets/images/zurich.jpg';


export const universities: University[] = [
  {
    id: '1',
    name: 'Harvard University',
    country: 'Amerika',
    city: 'Cambridge',
    studyLanguage: 'İngilis',
    tuitionFee: {
      min: 50000,
      max: 55000,
      currency: 'USD'
    },
    programs: ['İqtisadiyyat', 'Hüquq', 'Tibb', 'Mühəndislik'],
    ranking: 1,
    image: harvard
  },
  {
    id: '2',
    name: 'Oxford University',
    country: 'İngiltərə',
    city: 'Oxford',
    studyLanguage: 'İngilis',
    tuitionFee: {
      min: 35000,
      max: 45000,
      currency: 'GBP'
    },
    programs: ['Fəlsəfə', 'Tarix', 'Riyaziyyat', 'Fizika'],
    ranking: 2,
    image: oxford
  },
  {
    id: '3',
    name: 'ETH Zurich',
    country: 'İsveçrə',
    city: 'Zürix',
    studyLanguage: 'Alman',
    tuitionFee: {
      min: 1500,
      max: 2000,
      currency: 'CHF'
    },
    programs: ['Mühəndislik', 'Kompüter elmləri', 'Fizika', 'Kimya'],
    ranking: 8,
    image: zurich
  },
  {
    id: '4',
    name: 'Sorbonne University',
    country: 'Fransa',
    city: 'Paris',
    studyLanguage: 'Fransız',
    tuitionFee: {
      min: 200,
      max: 400,
      currency: 'EUR'
    },
    programs: ['Ədəbiyyat', 'Tarix', 'Fəlsəfə', 'Sosiologiya'],
    ranking: 15,
    image: sorbonne
  },
  {
    id: '5',
    name: 'University of Toronto',
    country: 'Kanada',
    city: 'Toronto',
    studyLanguage: 'İngilis',
    tuitionFee: {
      min: 45000,
      max: 55000,
      currency: 'CAD'
    },
    programs: ['Biznes', 'Mühəndislik', 'Tibb', 'Hüquq'],
    ranking: 18,
    image: toronto
  },
  {
    id: '6',
    name: 'Technical University of Munich',
    country: 'Almaniya',
    city: 'Münhen',
    studyLanguage: 'Alman',
    tuitionFee: {
      min: 300,
      max: 500,
      currency: 'EUR'
    },
    programs: ['Mühəndislik', 'Arxitektura', 'İqtisadiyyat', 'Tibb'],
    ranking: 25,
    image: munich
  }
]; 