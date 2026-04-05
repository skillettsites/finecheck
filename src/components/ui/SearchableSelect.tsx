'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Option {
  value: string;
  label: string;
  sublabel?: string;
}

interface SearchableSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  allowCustom?: boolean;
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = 'Search or select...',
  className = '',
  allowCustom = false,
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = search.trim()
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(search.toLowerCase()) ||
          (o.sublabel && o.sublabel.toLowerCase().includes(search.toLowerCase()))
      )
    : options;

  const handleSelect = useCallback(
    (option: Option) => {
      onChange(option.label);
      setSearch('');
      setIsOpen(false);
      setActiveIndex(-1);
    },
    [onChange]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setIsOpen(true);
    setActiveIndex(-1);
    if (allowCustom) {
      onChange(val);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && filtered[activeIndex]) {
          handleSelect(filtered[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex] as HTMLElement;
      if (item) {
        item.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayValue = isOpen ? search : value;

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={() => {
            setIsOpen(true);
            if (value) setSearch(value);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={className}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-activedescendant={activeIndex >= 0 ? `option-${activeIndex}` : undefined}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) inputRef.current?.focus();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          tabIndex={-1}
          aria-label="Toggle dropdown"
        >
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-3 text-sm text-gray-500">
              {allowCustom ? 'No matches. You can type a custom value.' : 'No matches found'}
            </li>
          ) : (
            filtered.map((option, idx) => (
              <li
                key={option.value}
                id={`option-${idx}`}
                role="option"
                aria-selected={activeIndex === idx}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`cursor-pointer px-4 py-2.5 text-sm ${
                  activeIndex === idx
                    ? 'bg-blue-50 text-blue-800'
                    : value === option.label
                    ? 'bg-gray-50 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="block">{option.label}</span>
                {option.sublabel && (
                  <span className="block text-xs text-gray-400 mt-0.5">{option.sublabel}</span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
