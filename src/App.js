import { useContext } from 'react';
import './App.css';
import InputTextField from './InputField';
import SimpleForm from './SimpleForm';

function App() {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="App">
      <main>
        <SimpleForm value={{ email: "", password: "" }} onSubmit={handleSubmit}>
          <InputTextField name="email" placeholder="Email field" />
        </SimpleForm>
      </main>
    </div>
  );
}

export default App;
