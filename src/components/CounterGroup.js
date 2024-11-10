import React from 'react';

function Counter({ value, prefix = '', suffix = '', title }) {
  return (
    <div className="counter">
      <div className="counter-number-wrapper">
        <span className="counter-number-prefix">{prefix}</span>
        <span className="counter-number">{value}</span>
        <span className="counter-number-suffix">{suffix}</span>
      </div>
      <div className="counter-title">{title}</div>
    </div>
  );
}

function CounterGroup() {
  return (
    <div className="counter-group">
      <Counter value="700" prefix="+" title="Alunos atendidos" />
      <Counter value="6" prefix="+" title="Ônibus" />
      <Counter value="36.2" prefix="+" suffix="mil" title="Atendimento saúde por ano" />
    </div>
  );
}

export default CounterGroup;
