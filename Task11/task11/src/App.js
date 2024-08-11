import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Prices from './Components/Prices/pricecard';

const plans = [
  {
    name: "FREE",
    price: "$0",
    features: [
      { name: "Single User", isAvailable: true },
      { name: "50GB Storage", isAvailable: true },
      { name: "Unlimited Public Projects", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Unlimited Private Projects", isAvailable: false },
      { name: "Dedicated Phone Support", isAvailable: false },
      { name: "Free Subdomain", isAvailable: false },
      { name: "Monthly Status Reports", isAvailable: false }
    ]
  },
  {
    name: "PLUS",
    price: "$9",
    features: [
      { name: "5 Users", isAvailable: true },
      { name: "50GB Storage", isAvailable: true },
      { name: "Unlimited Public Projects", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Unlimited Private Projects", isAvailable: true },
      { name: "Dedicated Phone Support", isAvailable: true },
      { name: "Free Subdomain", isAvailable: true },
      { name: "Monthly Status Reports", isAvailable: false }
    ]
  },
  {
    name: "PRO",
    price: "$49",
    features: [
      { name: "Unlimited Users", isAvailable: true },
      { name: "50GB Storage", isAvailable: true },
      { name: "Unlimited Public Projects", isAvailable: true },
      { name: "Community Access", isAvailable: true },
      { name: "Unlimited Private Projects", isAvailable: true },
      { name: "Dedicated Phone Support", isAvailable: true },
      { name: "Free Subdomain", isAvailable: true },
      { name: "Monthly Status Reports", isAvailable: true }
    ]
  }
];

function App() {
  return (
    <div className="container">
      <div className='card-body'>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      {plans.map((Plan, index) => (
        <Prices key={index} plan={Plan} />
      ))}
      </div>
    </div>
  </div>
  );
}

export default App;
