import { useState } from "react";
import { CoffeeContext, useCoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  // const [selectedID, setCoffeeBeanId] = useState(coffeeBeans[0].id)

  const { coffeeBean, setCoffeeBeanId } = useCoffeeContext()

  const handleChange = (e) => {
    setCoffeeBeanId(e.target.value)
    console.log('selected bean: ', coffeeBean)
  }
  

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={handleChange}
        value={coffeeBean.id}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;