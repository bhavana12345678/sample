import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//  class college extends React.Component{
//   render()
//   {
//     return<h1>Shridevi college of engineering and technology Tumkur</h1>
//   }
//  }
//  const root1=ReactDOM.createRoot(document.getElementById('root'))
//  root1.render(<college/>)
// function department(){
//   return(<div>
//     <college/>
//     <h2>ECE department</h2>
//   </div>
//   )}
//   const root2=ReactDOM.createRoot(document.getElementById('root2'))
//   root2.render(<department/>)
// function section(props){
//   return(
//     <div>
//       <department/>
//       <p>section is{props.section}</p>
//     </div>
//   )
// }
// const root3=ReactDOM.createRoot(document.getElementById('root3'))
// root3.render(<div>
//  <Section sec="A"/>
//  <Section sec="B"/>
// </div>)
//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
