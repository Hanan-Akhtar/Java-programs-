// import Router from "./Assert/Router";
// import {  NavLink } from "react-router-dom";
// import HOC from "./Assert/Hoc";
import FormContainer from './Assert/FormData';
import Question7 from './Assignment1/Question7';

const App = () => {
  return (
    <>
    {/* <div className="bg-secondary py-3 ">
    <header>
        <nav>
          <ul className="container d-flex justify-content-between align-items-center">
            <a href='#'>logo</a>
            <li className="me-3"><NavLink to="/">Question1 to Question5</NavLink></li>
            <li className="me-3"><NavLink to="about">Question6 to Question10</NavLink></li>
            <li className="me-3"><NavLink to="contact">Question11 to Question15</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
      <Router />
      <HOC/> */}
      <FormContainer/>
      <Question7/>
    </>


  );
}

export default App;


