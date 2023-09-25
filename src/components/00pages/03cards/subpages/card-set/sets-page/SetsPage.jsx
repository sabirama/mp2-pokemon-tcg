import { useEffect, useState } from "react";
import request from "../../../../../../lib/request";

const SetsPage = () => {
  const [val, setVal] = useState("");
  const [cards, setCards] = useState([]);

  async function getCards() {
    try {
      const { data } = await request.get(`/cards/?q=set.id:${"ecard1"}`);
      setCards(data.data);
    } catch {
      console.log("error");
    }
  }

  function clickHandler() {
    setVal("test");
  }

  useEffect(() => {}, []);

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <button onClick={clickHandler}> click</button>
      <div>TEST</div>
      <p>{val}</p>

      {cards.map((card, index) => {
        return (
          <div key={index}>
            <p>{card.name}</p>
            <>{card.id}</>
          </div>
        );
      })}
    </div>
  );
};

export default SetsPage;
