import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Diabetes from './components/Diabetes.js';
import LoginUi from './components/LoginUi';
import UserRegistration from './components/UserRegistration';
import Symptom from './components/Symptom';
import HomePage from './components/HomePage';
import DepressionForm from './components/DepressionForm';
import ChronicDiagnosis from './components/chronicDiagnosis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" exact element={<HomePage />} />

        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="LoginUi" element={<LoginUi />} />

        <Route path="/UserRegistration" element={<UserRegistration />} />

        <Route path="/symptoms" element={<Symptom />} />
        <Route path="/depression" element={<DepressionForm />} />
        <Route path="/chronic" element={<ChronicDiagnosis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
