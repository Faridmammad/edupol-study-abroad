import React from 'react';
import { University } from '../types';

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gray-200 relative">
        <img
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        {university.ranking && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            Reyting #{university.ranking}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{university.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{university.city}, {university.country}</p>

        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <div><span className="font-medium">Təhsil dili:</span> {university.studyLanguage}</div>
          <div>
            <span className="font-medium">Təhsil haqqı:</span> {university.tuitionFee.min.toLocaleString()} - {university.tuitionFee.max.toLocaleString()} {university.tuitionFee.currency}
          </div>
        </div>

        {/* Programs */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Proqramlar:</p>
          <div className="flex flex-wrap gap-1">
            {university.programs.slice(0, 3).map((program, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {program}
              </span>
            ))}
            {university.programs.length > 3 && (
              <span className="text-gray-500 text-xs">+{university.programs.length - 3} daha</span>
            )}
          </div>
        </div>

        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
          Ətraflı Məlumat
        </button>
      </div>
    </div>
  );
};

export default UniversityCard;
