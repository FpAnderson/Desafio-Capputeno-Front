import { useLocalStorage } from '@/hooks/useLocalStorage';
import { RiShoppingBag3Line as CartIcon } from 'react-icons/ri';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 260px;

  img {
    width: 260px;
    height: 300px;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shaper-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0px;
    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0px;
      padding: 0px 8px;
      background-color: var(--shapes);
    }
  }
`;

interface ProductsCardProps {
  image: string;
  tittle: string;
  price: string;
}

export function ProductsCard(props: ProductsCardProps) {
  return (
    <Card>
      <img src={props.image} alt={props.tittle} />
      <div>
        <h3>{props.tittle}</h3>
        <div></div>
        <p>{props.price}</p>
      </div>
    </Card>
  );
}
