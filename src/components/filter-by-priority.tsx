'use client';
import styled from 'styled-components';
import { FaChevronDown as ArrowIcon } from 'react-icons/fa';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Saira', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: var(--text-dark);

    svg {
      margin-left: 8px;
    }
  }
`;

const PriorityFilter = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  width: 180px;

  list-style: none;

  top: 100%;

  li {
    font-family: 'Saira', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

interface FilterByPriorityProps {}
export default function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  function handlePriorityClick(value: PriorityTypes) {
    setIsOpen(false);
    setPriority(value);
  }

  return (
    <FilterContainer>
      <button onClick={() => setIsOpen(!isOpen)}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handlePriorityClick(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handlePriorityClick(PriorityTypes.LOW_PRICE)}>
            Menor preço
          </li>
          <li onClick={() => handlePriorityClick(PriorityTypes.HIGH_PRICE)}>
            Maior preço
          </li>
          <li onClick={() => handlePriorityClick(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
