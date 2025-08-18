export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  detailedInfo: {
    duration: string;
    price: string;
    schedule: string;
    materials: string;
    practiceTests: string;
    support: string;
    guarantee: string;
    additionalInfo: string;
  };
}

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  studyLanguage: string;
  tuitionFee: {
    min: number;
    max: number;
    currency: string;
  };
  programs: string[];
  ranking?: number;
  image: string;
}

export interface SearchFilters {
  country: string;
  studyLanguage: string;
  tuitionFeeRange: [number, number];
  program: string;
}

export interface StudentResult {
  id: string;
  name: string;
  testType: 'IELTS' | 'SAT' | 'TOEFL';
  score: number;
  maxScore: number;
  year: number;
  photo: string;
  testimonial: string;
}

export interface Testimonial {
  id: number;
  name: string;
  city: string;
  university: string;
  image: string;
  story: string;
}


export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
} 