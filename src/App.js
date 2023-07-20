import React, { useState } from "react";

import "./App.css";
const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [Color, setColor] = useState(null);

  const handleClick = (e) => {
    setExpression(expression.concat(e.target.value));
    setColor("#818181");
  };
  const Delete = () => {
    setResult("");
    setExpression("");
  };
  const backspace = () => {
    setExpression(expression.slice(0, -1));
    if (result === "ERROR") {
      setExpression("");
    }
  };
  const calculate = () => {
    try {
      let updatedExpression = expression;

      // Replace the symbols "e" and "μ" with their numerical values in the expression
      updatedExpression = updatedExpression.replace(/e/g, "*" + Math.E);
      updatedExpression = updatedExpression.replace(/μ/g, "*" + Math.PI);
      updatedExpression = updatedExpression.replace(/π/g, "*" + Math.PI);

      updatedExpression = updatedExpression.replace(/ln2/g,"*"+ Math.LN2 );
      // Perform the actual calculation
      setResult(eval(updatedExpression).toString());
    } catch (err) {
      setResult("ERROR");
    }
  };

  const handleScientificClick = (value) => {
    switch (value) {
      case "e":
        setExpression(expression.concat("e"));
        break;
      case "μ":
        setExpression(expression.concat("μ"));
        break;
      case "π":
        setExpression(expression.concat("π"));
        break;
      case "ln2":
        setExpression(expression.concat("ln2"));
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator-box">
      <form>
        <input
          type="text"
          value={expression.replace(/e/g, "e").replace(/μ/g, "μ")}
          readOnly
          style={{ color: { Color } }}
        />
        <input
          className="result"
          type="text"
          placeholder="="
          value={"=" + result}
          readOnly
        />
      </form>

      <div className="keypad">
        <button
          value="e"
          onClick={(e) => handleScientificClick(e.target.value)}
          id="scientific"
        >
          x(e)
        </button>
        <button
          value="μ"
          onClick={() => handleScientificClick("μ")}
          id="scientific"
        >x(μ)
        </button>
        <button
          value="π"
          onClick={() => handleScientificClick("π")}
          id="scientific"
        >
        ×(π)
        </button>
        <button
          value="ln2"
          onClick={() => handleScientificClick("ln2")}
          id="scientific"
        >
          x(ln2)
        </button>
        <button onClick={Delete} id="special-button">
          Ac
        </button>
        <button onClick={backspace} id="special-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.53481 3H20.9998C21.265 3 21.5194 3.10536 21.7069 3.29289C21.8945 3.48043 21.9998 3.73478 21.9998 4V20C21.9998 20.2652 21.8945 20.5196 21.7069 20.7071C21.5194 20.8946 21.265 21 20.9998 21H6.53481C6.37022 21 6.20816 20.9594 6.06303 20.8818C5.91789 20.8042 5.79416 20.6919 5.70281 20.555L0.36981 12.555C0.260171 12.3907 0.20166 12.1975 0.20166 12C0.20166 11.8025 0.260171 11.6093 0.36981 11.445L5.70281 3.445C5.79416 3.30808 5.91789 3.19583 6.06303 3.11821C6.20816 3.04058 6.37022 2.99998 6.53481 3ZM7.06981 5L2.40381 12L7.06981 19H19.9998V5H7.06981ZM12.9998 10.586L15.8278 7.757L17.2428 9.172L14.4138 12L17.2428 14.828L15.8278 16.243L12.9998 13.414L10.1718 16.243L8.75681 14.828L11.5858 12L8.75681 9.172L10.1718 7.757L12.9998 10.586Z"
              fill="#A5A5A5"
            />
          </svg>
        </button>
        <button
          value="/"
          onClick={() => handleClick({ target: { value: "/" } })}
          className="highlighted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <rect width="62" height="62" rx="16" fill="#005DB2" />
            <path d="M36 18L27.4778 45H24L32.5222 18H36Z" fill="#339DFF" />
          </svg>
        </button>
        <button
          value="*"
          onClick={() => handleClick({ target: { value: "*" } })}
          className="highlighted"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <rect width="62" height="62" rx="16" fill="#005DB2" />
            <path
              d="M35.5561 26.8192L37 29.3723L32.6043 31L37 32.5957L35.5241 35.2447L31.8663 32.3404L32.5722 37H29.5882L30.2299 32.3404L26.5401 35.3085L25 32.5957L29.3636 30.9681L25.0321 29.3723L26.4759 26.7872L30.2299 29.6596L29.5561 25H32.5722L31.8663 29.6596L35.5561 26.8192Z"
              fill="#339DFF"
            />
          </svg>
        </button>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="-" onClick={handleClick} className="highlighted">
          -
        </button>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button
          value="+"
          onClick={handleClick}
          id="plus"
          className="highlighted"
        >
          +
        </button>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="0" onClick={handleClick} id="zero">
          0
        </button>
        <button value="." onClick={handleClick} id="dot">
          .
        </button>
        <button id="equal-to" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
