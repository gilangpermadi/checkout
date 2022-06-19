import React, { useState } from 'react';
import { Card } from './components';
import Navigation from './Navigation';
import styled from 'styled-components';
import Checkout from './pages/Checkout';

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const labels = [
    'Delivery',
    'Payment',
    'Finish'
  ];

  const App = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  return (
    <App>
      <Card>
        <Navigation labels={labels} currentStep={currentStep}></Navigation>
        <Checkout currentStep={currentStep}/>
      </Card>
    </App>
  );
}

export default App;
