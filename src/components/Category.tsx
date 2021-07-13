import React from "react";
import "./card.css";
import "./category.css";

export default function Category({ isOn, category, image }: any) {
  const color: string = isOn ? '#BDECB6' : '#F19CBB';
  let classText = `category__img cat${image}`
  let nextUpperCase: boolean = false;
  const categoryArr = category.split('');
  let categoryPath = categoryArr.reduce((acc: string, cur: string) => {
    if (cur === ' ' || cur === ')') cur = '';
    if (nextUpperCase) {
      cur = cur.toUpperCase()
      nextUpperCase = false;
    }
    if (cur === '(') {
      cur = ''
      nextUpperCase = true;
    }
    acc+=cur
    return acc;
  }, [])
    categoryPath = `/${categoryPath}`;
    return (
      <div className="category card" data-page="main">
          <div className="category__top" style={{background: color}}></div>
          <div className={classText}></div>
          <div className="category__bottom">
              <a href={categoryPath} className="word">{category}</a>
          </div>
      </div>
    );
}