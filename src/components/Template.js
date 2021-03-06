import React from 'react';
import './Template.css';

const Template = ({form, children}) => {
  return (
    <main className="template">
      <div className="title">
        <b>Measurement</b>
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default Template;