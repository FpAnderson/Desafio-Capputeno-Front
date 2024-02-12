'use client';
import styled from 'styled-components';

import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWithIcon } from './primary-input';
import { CartControl } from './cart-control';

const sairaStencil = Saira_Stencil_One({ weight: ['400'], subsets: ['latin'] });

interface HeaderProps {
  title: string;
}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;
export default function Header({ title }: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href='/'>
        {title}
      </Logo>
      <div>
        <PrimaryInputWithIcon
          type='text'
          placeholder='Procurando por algo específico?'
          autoComplete='off'
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
