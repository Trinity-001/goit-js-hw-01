"use strict";

function getElementWidth(content, padding, border) {
  const getContent = Number.parseFloat(content);
  const getPadding = Number.parseFloat(padding);
  const getBorder = Number.parseFloat(border);
  const boxSizing = getContent + getPadding * 2 + getBorder * 2;
  // console.log(boxSizing);

  return boxSizing;
}

console.log(getElementWidth("50px", "8px", "4px"));

console.log(getElementWidth("60px", "12px", "8.5px"));

console.log(getElementWidth("200px", "0px", "0px"));
