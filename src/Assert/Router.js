import React from 'react';
import {Home, Question1,Pelindrome,Question3,Question4,Question5} from './Home';
import { Routes, Route } from 'react-router-dom';
import {About,Question6,Question7, Question8,Question9,Question10} from './About';
import {Contact,Question11,EmailForm,Question13,Question14,Question15} from './Contact';

 const Router = () => {
    return (
        <Routes>
             <Route path='/' element={<> <Home /> <Question1/> <Pelindrome /> <Question3/>  <Question4/> <Question5/></>}   />
            <Route path='about' element={<> <About /> <Question6/> <Question7 /> <Question8/>  <Question9/> <Question10/></>}/>
            <Route path='contact' element={<> <Contact /> <Question11/> <EmailForm /> <Question13/>  <Question14/> <Question15/></>} />
        </Routes>
    );
}
export default Router;