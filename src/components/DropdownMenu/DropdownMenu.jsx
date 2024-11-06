// DropdownMenu.js

import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Conferences & Exhibition');

  const options = [
    'Conferences/Exhibition',
    'Workshops',
    'Seminars',
    'Competitions',
    'Summer Programs',
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.menuLabel}>{selectedOption}</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a79cdd8dc4524dce9851778d6fd09e7c/922d980428a64b2c6bd6e4b86790e62055c7b5cc2e035c710f907cc3513b9a51?apiKey=a79cdd8dc4524dce9851778d6fd09e7c&"
          alt="Toggle dropdown"
          className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}
        />
      </div>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}
        role="listbox"
      >
        {options.map((option) => (
          <div
            key={option}
            className={styles.dropdownItem}
            onClick={() => handleOptionSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOptionSelect(option);
              }
            }}
            role="option"
            aria-selected={selectedOption === option}
            tabIndex={0}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
