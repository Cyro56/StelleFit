import { Button } from "react-bootstrap";
import { useState } from "react";
function Imc() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [indice, setIndice] = useState<string>("");

  const heightValue = (height: number) => {
    setHeight(height);
  };

  const weightValue = (weight: number) => {
    setWeight(weight);
  };

  const IMC = () => {
      const index = Math.floor(weight/(height*height))
      if(index > 0){
          let text: string = "";

          if (index <= 17) {
            text = " você está muito abaixo do peso ideal";
          } else if (index < 18.5) {
            text = " você está abaixo do peso ideal";
          } else if (index < 25) {
            text = " você está no peso ideal";
          } else if (index < 30) {
            text = " você está acima do peso";
          } else if (index < 35) {
            text = " você pode ser classificado como obeso nível I";
          } else if (index < 40) {
            text = " você pode ser classificado no grupo de obesidade severa";
          } else if (index > 40) {
            text = " você pode ser classificado no grupo de obesidade mórbida";
          }
          setIndice("seu indice de massa corporal esta em: " + String(index)+ text);
      }
   
  };


  return (
    <div>
      <p>Qual sua altura em metros?</p>
      <br />
      <input
        type="text"
        onChange={(ev) => heightValue(Number(ev.target.value))}
      />
      <br />
      <p>qual seu peso em KG?</p>
      <input
        type="text"
        onChange={(ev) => weightValue(Number(ev.target.value))}
      />
      <br />
      <p>{indice}</p>
      <Button onClick={IMC}>IMC</Button>
    </div>
  );
}

export default Imc;
