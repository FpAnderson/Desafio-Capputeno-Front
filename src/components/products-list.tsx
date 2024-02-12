'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useProducts } from '@/hooks/useProducts';
import { RiShoppingBag3Line as CartIcon } from 'react-icons/ri';
import styled from 'styled-components';
import { ProductsCard } from './product-card';

const Cartcount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 0px 6px;
  font-size: 14px;
  text-align: center;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  top: 50%;
  right: -8px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;

interface ProductsListProps {}

export function ProductsList() {
  const data = useProducts();

  return (
    <Container>
      {data.map((product) => (
        <ProductsCard
          key={product.id}
          image={product.image}
          tittle={product.title}
          price={product.price}
        />
      ))}
    </Container>
  );
}
