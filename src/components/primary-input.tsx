import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { InputHTMLAttributes } from 'react';

export const PrimaryInput = styled.input`
  border-radius: 8px;
  width: 352px;
  padding: 16px 16px;
  border: none;

  background-color: var(--bg-secondary);

  font-family: 'Saira', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWithIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <FaSearch />
    </InputContainer>
  );
}
