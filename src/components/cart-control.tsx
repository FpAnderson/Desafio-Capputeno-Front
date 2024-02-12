import { useLocalStorage } from '@/hooks/useLocalStorage';
import { RiShoppingBag3Line as CartIcon } from 'react-icons/ri';
import styled from 'styled-components';

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
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-item', 2);

  return (
    <Container>
      <CartIcon size={24} />
      {!!value && <Cartcount>{value}</Cartcount>}
    </Container>
  );
}
