import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";

export default function Input() {
  const [val, setval] = useState("");
  const [valeur,setvaleur]=useState('');
  function handlesubmit(e) {
    e.preventDefault();
   setvaleur(val) }
  return (
    <div>
      <form>
        <input
          type="text"
          value={val}
          onChange={(e) => setval(e.target.value)}
        />
        <button onClick={(e) => handlesubmit(e)}>Generer le code</button>
      </form>
      <div className="afficher">
        {valeur && <QRCodeSVG value={valeur} /> }
      </div>
    </div>
  );
}
