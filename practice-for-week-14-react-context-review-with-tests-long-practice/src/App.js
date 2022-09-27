import coffeeBeans from "./mockData/coffeeBeans.json";
import SetCoffeeBean from "./components/SetCoffeeBean";
import { CoffeeContext, useCoffeeContext } from "./context/CoffeeContext";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";

function App() {
  const {coffeeBean, setCoffeeBean} = useCoffeeContext();

   const handleChange = (e) => {
    console.log('change event', e)
  }
  return (
    <>
    <div>
      <h1>Welcome to Coffee App</h1>

      <SetCoffeeBean coffeeBeans={coffeeBeans} onChange={handleChange}/>
    </div>
    </>
  );
}

export default App;