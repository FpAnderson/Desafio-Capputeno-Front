'use client';
import styled from 'styled-components';
import FilterBarType from './filter-bar-type';
import FilterByPriority from './filter-by-priority';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const FilterLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

interface FilterBarProps {}
export default function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterBarType />
      <FilterByPriority />
    </FilterContainer>
  );
}
