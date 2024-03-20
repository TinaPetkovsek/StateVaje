import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  // 1. naredi state 'count', ki bo imel začetno vrednost 0

  const [counter, setCounter] = useState(0);

  // 4. naredi state 'incrementCount', ki bo imel zacetno vrednost 0
  //  - incrementCount bo predstavljal, za koliko se bo count spremenil,
  //    ko kliknemo na gumb

  const [incrementCount, setIncrementCount] = useState(0);

  // 2. naredi gumb (button), v katerem bo pisala vrednost 'count'-a
  // 3. ko kliknemo gumb, naj se count poveca za 1

  // 5. dodaj nov gumb, ki bo povecal 'incrementCount'
  // 6. Spremeni originalni gumb, da se bo count povecal za incrementCount
  // 7. ce je v vrednosti 'count' sodo stevilo, naj se tekst obarva rdece,
  //  sicer pa crno
  return (
    <div>
      <button
        className={counter % 2 ? "text-red-700" : "default"}
        onClick={() => setCounter(counter + incrementCount)}
      >
        kliknil si me {counter}-krat
      </button>

      <div></div>

      <button onClick={() => setIncrementCount(incrementCount + 1)}>
        poveca se za {incrementCount}-krat
      </button>
    </div>
  );

  // 8. namesto incrementCount gumba uporabimo slider iz ShadCN komponent
  //  z njim nastavimo incrementCount vrednost *lahko je npr. med 0 in 100
}
