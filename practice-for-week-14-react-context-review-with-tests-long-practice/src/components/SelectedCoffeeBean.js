import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const selectedCoffeeBean = useCoffeeContext();
  console.log('selectedCoffeeBean: ', selectedCoffeeBean)
  return (
    <div className="selected-coffee">
      <h2>{selectedCoffeeBean.coffeeBean.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;