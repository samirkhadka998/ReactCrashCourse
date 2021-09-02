import "./App.css";
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import TodoMainComponent from "./myComponents/Todos";

function App() {
  return (
    <>
      <Header title="SamApp" search={false} />
      <TodoMainComponent />
      <Footer />
    </>
  );
}

export default App;
