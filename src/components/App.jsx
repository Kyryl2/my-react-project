import PetFormFormik from './Forms/Form-Formik';
import PetFormRHF from './Forms/Form-RHF';
import PetForm from './Forms/Form-Usuall';

const App = () => {
  return (
    <>
      <PetForm />
      <PetFormFormik />
      <PetFormRHF />
    </>
  );
};

export default App;
