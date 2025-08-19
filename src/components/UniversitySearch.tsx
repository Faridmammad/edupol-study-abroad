import React, { useState, useMemo, useEffect, useRef } from 'react';
import { universities } from '../data/universities';
import { SearchFilters } from '../types';
import UniversityCard from './UniversityCard';

const ITEMS_PER_PAGE = 6;

const UniversitySearch: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    country: '',
    studyLanguage: '',
    tuitionFeeRange: [0, 100000],
    program: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const resultsRef = useRef<HTMLDivElement>(null);
  const hasUserInteracted = useRef(false);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1);
      if (hasUserInteracted.current) {
        scrollToResults();
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Mark initial load as complete after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Unique filter options
  const countries = useMemo(() => Array.from(new Set(universities.map(u => u.country))), []);
  const languages = useMemo(() => Array.from(new Set(universities.map(u => u.studyLanguage))), []);
  const programs = useMemo(() => {
    const allPrograms = universities.flatMap(u => u.programs);
    return Array.from(new Set(allPrograms));
  }, []);

  // Filtered list
  const filteredUniversities = useMemo(() => {
    return universities.filter(university => {
      const matchesSearch =
        university.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        university.city.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

      const matchesCountry = !filters.country || university.country === filters.country;
      const matchesLanguage = !filters.studyLanguage || university.studyLanguage === filters.studyLanguage;
      const matchesProgram = !filters.program || university.programs.includes(filters.program);
      const matchesTuition =
        university.tuitionFee.min >= filters.tuitionFeeRange[0] &&
        university.tuitionFee.max <= filters.tuitionFeeRange[1];

      return matchesSearch && matchesCountry && matchesLanguage && matchesProgram && matchesTuition;
    });
  }, [debouncedSearchTerm, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredUniversities.length / ITEMS_PER_PAGE);
  const visibleUniversities = filteredUniversities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
    hasUserInteracted.current = true;
    scrollToResults();
  };

  const clearFilters = () => {
    setFilters({
      country: '',
      studyLanguage: '',
      tuitionFeeRange: [0, 100000],
      program: ''
    });
    setSearchTerm('');
    setCurrentPage(1);
    hasUserInteracted.current = true;
    scrollToResults();
  };

  const scrollToResults = () => {
    if (resultsRef.current) {
      const top = resultsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - 100, behavior: 'smooth' });
    }
  };

  // Only scroll when pagination changes and user has interacted
  useEffect(() => {
    if (hasUserInteracted.current && currentPage !== 1) {
      scrollToResults();
    }
  }, [currentPage]);

  return (
    <section id="search" className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Universitet axtar
          </h2>
          <p className="text-lg text-zinc-100 max-w-3xl mx-auto">
            Dünyanın ən yaxşı universitetlərini kəşf edin və sizin üçün ən uyğun olanını tapın.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-transparent shadow-lg rounded-2xl p-8 mb-12 border border-gray-100">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Universitet və ya şəhər adı ilə axtarın..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  hasUserInteracted.current = true;
                }}
                className="w-full px-4 py-3 pl-12 border bg-transparent border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-zinc-100 mb-2">Ölkə</label>
              <select
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
                className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün ölkələr</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-zinc-100 mb-2">Təhsil Dili</label>
              <select
                value={filters.studyLanguage}
                onChange={(e) => handleFilterChange('studyLanguage', e.target.value)}
                className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün dillər</option>
                {languages.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>

            {/* Program */}
            <div>
              <label className="block text-sm font-medium text-zinc-100 mb-2">Proqram</label>
              <select
                value={filters.program}
                onChange={(e) => handleFilterChange('program', e.target.value)}
                className="w-full px-3 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Bütün proqramlar</option>
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>

            {/* Tuition Fee */}
            <div>
              <label className="block text-sm font-medium text-zinc-100 mb-2">Təhsil Haqqı (USD)</label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.tuitionFeeRange[0]}
                  onChange={(e) => handleFilterChange('tuitionFeeRange', [parseInt(e.target.value) || 0, filters.tuitionFeeRange[1]])}
                  className="w-1/2 px-3 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.tuitionFeeRange[1]}
                  onChange={(e) => handleFilterChange('tuitionFeeRange', [filters.tuitionFeeRange[0], parseInt(e.target.value) || 100000])}
                  className="w-1/2 px-3 py-2 bg-transparent border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-between items-center text-sm">
            <button
              onClick={clearFilters}
              className="text-zinc-100 hover:text-zinc-300 font-medium transition-colors"
            >
              Filtrləri təmizlə
            </button>
            <span className="text-zinc-100">
              {filteredUniversities.length} universitet tapıldı
            </span>
          </div>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleUniversities.map(university => (
            <UniversityCard key={university.id} university={university} />
          ))}
        </div>

        {/* Empty state */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Heç bir universitet tapılmadı</h3>
            <p className="text-gray-500">Axtarış kriteriyalarınızı dəyişdirin və yenidən cəhd edin.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages >= 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(prev => prev - 1);
                hasUserInteracted.current = true;
              }}
              className="px-3 py-1 rounded border bg-white font-semibold hover:bg-primary-700  disabled:opacity-50"
            >
              {'<'}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  hasUserInteracted.current = true;
                }}
                className={`px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-primary-600 text-white' : 'bg-white font-semibold hover:bg-primary-700 '}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(prev => prev + 1);
                hasUserInteracted.current = true;
              }}
              className="px-3 py-1 rounded border bg-white font-semibold hover:bg-primary-700  disabled:opacity-50"
            >
              {'>'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UniversitySearch;