import coffeeBeans from "./mockData/coffeeBeans.json";
import SetCoffeeBean from "./components/SetCoffeeBean";
import { CoffeeContext, useCoffeeContext } from "./context/CoffeeContext";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";

function App() {
  const {coffeeBean, setCoffeeBean} = useCoffeeContext();
  const temp = SetCoffeeBean({coffeeBeans});
  console.log('temp: ', temp);
  console.log(useCoffeeContext())
  return (
    <>
    <div>
      <h1>Welcome to Coffee App</h1>
      {temp}
      {SelectedCoffeeBean}
    </div>
    </>
  );
}

export default App;