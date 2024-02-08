import PropTypes from "prop-types";
import React, { useState } from "react";

export const CounterJversion = ({value}) => {
  const [contador, setContardor] = useState(value);

  const addContador = () => {
    setContardor(contador + 1);
  };

  const restarContador = () => {
    setContardor ( contador - 1)
  }

  const restblecerConatador = () => {
    setContardor ( value )
  }

  return (
    <>
      <h1>Contador V2</h1>
      <h2> {contador} </h2>

      <button onClick={addContador}>+1</button>
      <button onClick={restarContador}>-1</button>
      <button onClick={restblecerConatador}>Reset</button>
    </>
  );
};

CounterJversion.propTypes = {
  value: PropTypes.number.isRequired,
};
