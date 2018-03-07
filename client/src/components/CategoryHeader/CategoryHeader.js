import React from 'react';
import "./CategoryHeader.css";

const CategoryHeader = (props) => (
		<div className = "CategoryHeader">
		<h3>{props.category}</h3>
		</div>
		);


export default CategoryHeader;