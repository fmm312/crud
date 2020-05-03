import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Users from './Users'

export default function main() {
  return (
    <div className="app" >
      <Users />
    </div>   
  );
}
