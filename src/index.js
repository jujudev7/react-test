import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Incremente from './Incremente';
import Liste from './Liste';
import SupprimerElement from './SupprimerElement';
import GestionFormulaire from './GestionFormulaire';
import AjouterElement from './AjouterElement';
import ViderChamp from './ViderChamp';
import DecouperComposant from './DecouperComposant';
import DecouperForm from './DecouperForm';
import reportWebVitals from './reportWebVitals';
import ReusabiliteComposants from './ReusabiliteComposants';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Incremente />
    <Liste />
    <SupprimerElement />
    <GestionFormulaire />
    <AjouterElement />
    <ViderChamp />
    <DecouperComposant />
    <DecouperForm />
    <ReusabiliteComposants />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
