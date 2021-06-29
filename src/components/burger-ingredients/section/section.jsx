import IngredientCard from '../ingredient-card/ingredient-card';
import style from './section.module.css';
import React from 'react';

export default function Section(props) {
  return(
      <>
        <h3 className={`${style.header} text text_type_main-medium mt-6 mb-2`}>{props.title}</h3>
        <ul className={`${style.ingredientsContainer} pl-4 pr-4`}>
          {props.items.map(ingredient=><IngredientCard ingredient={ingredient} />)}
        </ul>
      </>)}