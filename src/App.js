import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart onClose={hideModalHandler} />}
      <Header onShow={showModalHandler} onClose={hideModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
