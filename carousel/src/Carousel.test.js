import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it('renders-smoke test', ()=>{
  const obj = render(<Carousel />);
});

it('gives same result', ()=>{
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

test('left arrow moves left', ()=>{
  const rend = render(<Carousel />); 
  const rightArrow = rend.getByTestId('right-arrow');
  fireEvent.click(rightArrow);
  const leftArrow = rend.getByTestId('left-arrow');
  fireEvent.click(leftArrow); 

  const caption = rend.queryByText('Photo by Richard Pasquarella on Unsplash');
  expect(caption).not.toEqual(null);
});


test('left-arrow not on first image', ()=>{
  const rend = render(<Carousel />); 

  const leftArrow = rend.queryByTestId('left-arrow');

  expect(leftArrow).toEqual(null);
});

test('right-arrow not on last image', ()=>{
  const rend = render(<Carousel />); 

  const rightArrow = rend.getByTestId('right-arrow'); 
  fireEvent.click(rightArrow); 
  fireEvent.click(rightArrow); 
  
  expect(rightArrow).not.toBeInTheDocument(); 
})