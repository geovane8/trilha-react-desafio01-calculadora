import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

// 1ºcodigo alternativo

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMultiplyNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handlePercentageNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('%')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber) / 100;
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          case '%':
            handlePercentageNumbers();
            break;
          default: 
            break;
        }
    }

  }
//codigo  alternativo
  /*const handleAddNumber = (num) => {
  setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
};

const handleMultiplyNumbers = () => {
  if (firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('x');
  } else {
    const product = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(product));
    setOperation('');
  }
};

const handleDivideNumbers = () => {
  if (firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('/');
  } else {
    const quotient = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(quotient));
    setOperation('');
  }
};

const handlePercentage = () => {
  if (firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('%');
  } else {
    const percentage = (Number(firstNumber) / 100) * Number(currentNumber);
    setCurrentNumber(String(percentage));
    setOperation('');
  }
};
*/
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Row>
              <Button label="x" onClick={() => handleMultiplyNumbers()} />
              <Button label="/" onClick={() => handleDivideNumbers()} />
              <Button label="c" onClick={handleOnClear} />
              <Button label="%" onClick={() => handlePercentage()} />
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')} />
              <Button label="8" onClick={() => handleAddNumber('8')} />
              <Button label="9" onClick={() => handleAddNumber('9')} />
              <Button label="-" onClick={() => setOperation('-')} />
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')} />
              <Button label="5" onClick={() => handleAddNumber('5')} />
              <Button label="6" onClick={() => handleAddNumber('6')} />
              <Button label="+" onClick={() => setOperation('+')} />
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')} />
              <Button label="2" onClick={() => handleAddNumber('2')} />
              <Button label="3" onClick={() => handleAddNumber('3')} />
              <Button label="=" onClick={() => handleEquals()} />
            </Row>

