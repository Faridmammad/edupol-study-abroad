import React, { useState } from 'react';
import { studentResults } from '../data/studentResults';
import { StudentResult } from '../types';

const StudentResults: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<'all' | 'IELTS' | 'SAT' | 'TOEFL'>('all');

  const filteredResults = selectedTest === 'all' 
    ? studentResults 
    : studentResults.filter(result => result.testType === selectedTest);

  const getTestTypeColor = (testType: string) => {
    switch (testType) {
      case 'IELTS': return 'bg-blue-500';
      case 'SAT': return 'bg-green-500';
      case 'TOEFL': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreDisplay = (result: StudentResult) => {
    if (result.testType === 'IELTS') {
      return `${result.score}/${result.maxScore}`;
    } else if (result.testType === 'SAT') {
      return `${result.score}/${result.maxScore}`;
    } else {
      return `${result.score}/${result.maxScore}`;
    }
  };

const totalIELTSStudents = 15;
const avgIELTSScore = 8.2;
const totalSATStudents = 22;
const avgSATScore = 1550;
const totalTOEFLStudents = 10;
const avgTOEFLScore = 110;
const totalStudents = 47;


  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tələbələrimizin nəticələri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Edupol tələbələrinin əldə etdiyi yüksək nəticələrdən bir neçəsi. <br /> 
            Sizin də bu uğurları təkrarlamağınız üçün buradayıq.
          </p>
        </div>

        {/* Test Type Filter */}
        <div className="flex justify-center mb-12">
  <div className="bg-white rounded-lg p-2 shadow-lg">
    <div className="flex gap-1 sm:gap-2">
      <button
        onClick={() => setSelectedTest('all')}
        className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
          selectedTest === 'all'
            ? 'bg-primary-600 text-white'
            : 'text-gray-600 hover:text-primary-600'
        }`}
      >
        Hamısı
      </button>
      <button
        onClick={() => setSelectedTest('IELTS')}
        className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
          selectedTest === 'IELTS'
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        IELTS
      </button>
      <button
        onClick={() => setSelectedTest('SAT')}
        className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
          selectedTest === 'SAT'
            ? 'bg-green-500 text-white'
            : 'text-gray-600 hover:text-green-600'
        }`}
      >
        SAT
      </button>
      <button
        onClick={() => setSelectedTest('TOEFL')}
        className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-colors ${
          selectedTest === 'TOEFL'
            ? 'bg-purple-500 text-white'
            : 'text-gray-600 hover:text-purple-600'
        }`}
      >
        TOEFL
      </button>
    </div>
  </div>
</div>


        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Student Photo and Score */}
              <div className="relative">
                <div className="h-48 bg-gray-200">
                  <img
                    src={result.photo}
                    alt={result.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`absolute top-4 right-4 ${getTestTypeColor(result.testType)} text-white px-4 py-2 rounded-full font-bold text-lg`}>
                  {getScoreDisplay(result)}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{result.year}</span>
                </div>
              </div>

              {/* Student Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{result.name}</h3>
                  <span className={`${getTestTypeColor(result.testType)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {result.testType}
                  </span>
                </div>

                {/* Score Details */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Nəticə:</span>
                    <span className="font-semibold text-lg text-gray-900">{getScoreDisplay(result)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${getTestTypeColor(result.testType)} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    "{result.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-zinc-200 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Ümumi Statistika
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">
              {totalIELTSStudents}
              </div>
              <div className="text-gray-600">IELTS Tələbəsi</div>
              <div className="text-sm text-gray-500">
              Orta nəticə: {avgIELTSScore}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">
              {totalSATStudents}
              </div>
              <div className="text-gray-600">SAT Tələbəsi</div>
              <div className="text-sm text-gray-500">
                Orta nəticə:  {avgSATScore}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">
              {totalTOEFLStudents}
              </div>
              <div className="text-gray-600">TOEFL Tələbəsi</div>
              <div className="text-sm text-gray-500">
              Orta nəticə:  {avgTOEFLScore}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {totalStudents}
              </div>
              <div className="text-gray-600">Ümumi Tələbə</div>
              <div className="text-sm text-gray-500">2024-cü ildə</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentResults; 