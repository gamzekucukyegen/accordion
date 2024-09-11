"use client"
import React, { useState } from 'react'

const App = () => {
    const [active,setActive]=useState(null)
    const items = [
        { title: 'Ürün kaliteli mi?', content: 'Evet,ürünlerimiz kalitelidir..' },
        { title: 'Fiyat ne kadar?', content: 'Fiyatlarımız uygundur.' },
        { title: 'Ne zaman ulaşır?', content: 'Siparişiniz 5 iş günü içinde teslim edilir.' },
      ];
      const titleClick = (index) => {
        setActive(index === active ? null : index);
      };
      return (
        <div className="accordion">
          {items.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-title" onClick={() => titleClick(index)}>
                <h3>{item.title}</h3>
                <span>{index === active ? '-' : '+'}</span>
              </div>
              {index === active && <div className="accordion-content">{item.content}</div>}
            </div>
          ))}
        </div>
      );
    };

export default App