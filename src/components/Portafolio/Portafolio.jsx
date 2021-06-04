import React, { useEffect, useState } from "react";
import PortafolioList from "../PortafolioList/PortafolioList";
import "./Portafolio.scss";
import { webPortafolio, mobilePortafolio } from "../../data";

export default function Portafolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "react",
      title: "React App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortafolio);
        break;
      case "mobile":
        setData(mobilePortafolio);
        break;
      default:
        setData(webPortafolio);
    }
  }, [selected]);

  return (
    <div className="portafolio" id="portafolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortafolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
