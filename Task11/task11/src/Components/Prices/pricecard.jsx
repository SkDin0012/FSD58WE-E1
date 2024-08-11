import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

const Prices = ({ plan }) => {
  if (!plan) {
    return null;
  }

  return (
    <section class="section" id="pricing">
    <div className="row mt-5 pt-2">
        <div className='col-lg-12'>
        <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="hello">{plan.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {plan.price}/month
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className={feature.isAvailable ? "" : "text-muted"}>
                {feature.isAvailable ? "✔️" : "❌"} {feature.name}
              </li>
            ))}
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary">Button</button>
        </div>
      </div>
    </div>

        </div>
</section>
      
  );
};

Prices.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isAvailable: PropTypes.bool.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Prices;
