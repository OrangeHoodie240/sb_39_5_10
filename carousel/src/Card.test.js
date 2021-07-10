import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it('renders-smoke test', ()=>{
    const obj = render(<Card />);
  });
  
  it('gives same result', ()=>{
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });