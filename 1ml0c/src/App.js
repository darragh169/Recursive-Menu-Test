import React, { useState } from "react";
import "./styles.css";

const menu_items = [
  {
    name: "1st level boop",
    link: "www.google.com"
  },
  {
    name: "1st level boop",
    link: "www.google.com"
  },
  {
    name: "1st level boop",
    link: "www.google.com",
    items: [
      {
        name: "2nd level boop",
        link: "www.google.com"
      },
      {
        name: "2nd level boop",
        link: "www.google.com"
      },
      {
        name: "2nd level boop",
        link: "www.google.com",
        items: [
          {
            name: "3nd level boop",
            link: "www.google.com"
          },
          {
            name: "3nd level boop",
            link: "www.google.com"
          },
          {
            name: "3nd level boop",
            link: "www.google.com"
          }
        ]
      }
    ]
  },
  {
    name: "1st level boop",
    link: "www.google.com"
  }
];

function Menu({ items, visible }) {
  const [isVisible, setIsVisible] = useState(visible);

  if (typeof items === "undefined") {
    items = [];
  }

  const handleClick = (item) => {
    console.log(item);
    setIsVisible(!isVisible);
  };

  return visible ? (
    <div>
      <ul className="list">
        {items.map((item, index) => {
          return (
            <li key={index} className="list-item">
              <p>{item.name}</p>
              {item.items && item.items.length > 0 ? (
                <>
                  <span onClick={(e) => handleClick(item)}>{"======>"}</span>
                  <Menu visible={isVisible} items={item.items} />
                </>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
}

export default function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <h1>Boop</h1>
      <div>
        <button onClick={(e) => setClicked(!clicked)}>boop</button>
        <Menu className="menu" visible={clicked} items={menu_items} />
      </div>
    </div>
  );
}
