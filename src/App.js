import { useContext } from 'react';
import './App.css';
import InputTextField from './InputField';
import SelectComp from './SelectComp';
import SimpleForm from './SimpleForm';

function App() {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="App">
      <main>
        <SimpleForm value={{ email: "", married: "" }} onSubmit={handleSubmit}>
          <InputTextField name="email" placeholder="Email field" errortxt='Enter valid email' />
          <SelectComp values={["Married", "Unmarried"]} label="Are you married" name="married" />
        </SimpleForm>
      </main>
    </div>
  );
}

export default App;
