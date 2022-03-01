import "./styles.css";

import { Main } from "./components/pages/Main";
import { DefaultLayout } from "./components/templates/DefaultLayout";

//import { InputTodo } from "./components/InputTodo.jsx";

export const App = () => {
  return (
    <>
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </>
  );
};
