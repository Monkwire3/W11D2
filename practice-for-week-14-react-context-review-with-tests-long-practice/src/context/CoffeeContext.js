import { createContext, useContext, useState } from 'react';
import coffeeBeans from '../mockData/coffeeBeans.json';

export const CoffeeContext = createContext();

export default function CoffeeProvider(props) {
  const [coffeeBean, setCoffeeBean] = useState(coffeeBeans[0]);

  const setCoffeeBeanId = (coffeeBeanId) => {
    const bean = coffeeBeans.find(bean => {
      console.log('set to', bean.id)
      return Number(bean.id) === Number(coffeeBeanId)
    });
    setCoffeeBean(bean);
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffeeBean,
        setCoffeeBeanId
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  );
}

export const useCoffeeContext = ()  => (
  useContext(CoffeeContext)
)