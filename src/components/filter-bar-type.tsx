import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/filter-types';
import { useState } from 'react';
import styled from 'styled-components';

interface FilterItemProps {
  selected?: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: 'Saira', sans-serif;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;

  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--orange-low)' : 'none'};
`;

interface FilterBarTypeProps {}
export default function FilterBarType() {
  //create useState for selected filter
  const { type, setType } = useFilter();

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => setType(FilterType.ALL)}>
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => setType(FilterType.SHIRT)}>
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => setType(FilterType.MUG)}>
        Canecas
      </FilterItem>
    </FilterList>
  );
}
