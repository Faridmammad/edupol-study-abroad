import { University } from '../types';

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
    image: 'https://placehold.co/400x250?text=Harvard+University'
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
    image: 'https://placehold.co/400x250?text=Oxford+University'
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
    image: 'https://placehold.co/400x250?text=ETH+Zurich'
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
    image: 'https://placehold.co/400x250?text=Sorbonne+University'
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
    image: 'https://placehold.co/400x250?text=University+of+Toronto'
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
    image: 'https://placehold.co/400x250?text=Technical+University+of+Munich'
  }
]; 