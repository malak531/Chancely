//button
import React from 'react';

const BtnSm = ({ className, hclassName, text }) => {
    return <button className={`${className} ${hclassName}`}>{text}</button>;
};

export default BtnSm;

