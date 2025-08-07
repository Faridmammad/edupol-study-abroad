import React, { useState, useMemo } from 'react';
import { universities } from '../data/universities';
import { University, SearchFilters } from '../types';

const UniversitySearch: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    country: '',
    studyLanguage: '',
    tuitionFeeRange: [0, 100000],
    program: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  // Get unique values for filters
  const countries = useMemo(() => Array.from(new Set(universities.map(u => u.country))), []);
  const languages = useMemo(() => Array.from(new Set(universities.map(u => u.studyLanguage))), []);
  const programs = useMemo(() => {
    const allPrograms = universities.flatMap(u => u.programs);
    return Array.from(new Set(allPrograms));
  }, []);

  // Filter universities based on search criteria
  const filteredUniversities = useMemo(() => {
    return universities.filter(university => {
      const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           university.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCountry = !filters.country || university.country === filters.country;
      const matchesLanguage = !filters.studyLanguage || university.studyLanguage === filters.studyLanguage;
      const matchesProgram = !filters.program || university.programs.includes(filters.program);
      const matchesTuition = university.tuitionFee.min >= filters.tuitionFeeRange[0] && 
                            university.tuitionFee.max <= filters.tuitionFeeRange[1];

      return matchesSearch && matchesCountry && matchesLanguage && matchesProgram && matchesTuition;
    });
  }, [searchTerm, filters]);

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      country: '',
      studyLanguage: '',
      tuitionFeeRange: [0, 100000],
      program: ''
    });
    setSearchTerm('');
  };

  return (
    <section id="search" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Universitet Axtar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dünyanın ən yaxşı universitetlərini kəşf edin və sizin üçün ən uyğun olanını tapın.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Universitet və ya şəhər adı ilə axtarın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Country Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ölkə</label>
              <select
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün ölkələr</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Təhsil Dili</label>
              <select
                value={filters.studyLanguage}
                onChange={(e) => handleFilterChange('studyLanguage', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün dillər</option>
                {languages.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>

            {/* Program Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Proqram</label>
              <select
                value={filters.program}
                onChange={(e) => handleFilterChange('program', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün proqramlar</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>

            {/* Tuition Fee Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Təhsil Haqqı (USD)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.tuitionFeeRange[0]}
                  onChange={(e) => handleFilterChange('tuitionFeeRange', [parseInt(e.target.value) || 0, filters.tuitionFeeRange[1]])}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.tuitionFeeRange[1]}
                  onChange={(e) => handleFilterChange('tuitionFeeRange', [filters.tuitionFeeRange[0], parseInt(e.target.value) || 100000])}
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-between items-center">
            <button
              onClick={clearFilters}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Filtrləri təmizlə
            </button>
            <span className="text-gray-600">
              {filteredUniversities.length} universitet tapıldı
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university) => (
            <div key={university.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* University Image */}
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
                {university.ranking && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #{university.ranking} dünyada
                  </div>
                )}
              </div>

              {/* University Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.city}, {university.country}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Təhsil dili:</span>
                    {university.studyLanguage}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium mr-2">Təhsil haqqı:</span>
                    {university.tuitionFee.min.toLocaleString()} - {university.tuitionFee.max.toLocaleString()} {university.tuitionFee.currency}
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
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Heç bir universitet tapılmadı</h3>
            <p className="text-gray-600">Axtarış kriteriyalarınızı dəyişdirin və yenidən cəhd edin.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversitySearch; 