import { useState, useEffect } from "react";
import { API_URL } from "./constants";

type ItemComponentPropType = {
  text: String;
  id: Number;
  deleteItem: Function;
};

export default function ItemComponent({
  text,
  id,
  deleteItem,
}: ItemComponentPropType) {
  const [textState, setTextState] = useState(text);

  useEffect(() => {
    updateServerData(textState, id);
  }, [textState]);

  const updateServerData = (text, id) => {
    fetch(API_URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: text,
      }),
    });
  };

  return (
    <div>
      {/* <input
        type="text"
        value={textState}
        onChange={(ev) => {
          let textVar = ev.target.value;
          setTextState(textVar);
        }}
      /> */}
      <span>{text}</span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
