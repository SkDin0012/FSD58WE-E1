import React from 'react';
import '../css/style.css';

import Feature from './Feature';

const CallToAction = () => (
  <section className="page-section bg-light" id="services">
    <div className="container">
      <div className="row">
        <Feature iconClass="fa-shopping-cart" title="E-Commerce" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Feature iconClass="fa-laptop" title="Responsive Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Feature iconClass="fa-lock" title="Web Security" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
    </div>
  </section>
);

export default CallToAction;
