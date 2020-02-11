import React from 'react';

export const Footer = () =>{
  return(
    <footer className="bg-near-black white-80 pv1 ph4 .mt6 ">
      <p className="f6"><span className="dib mr4 mr5-ns">©2020 Your Company LLC, Inc.</span>
        <a className="link white-80 hover-light-purple" href="/terms">Terms</a> /
        <a className="link white-80 hover-gold" href="/privacy"> Privacy </a> /
        <a className="link white-80 hover-green" href="#">arieladalid07@gmail.com </a>
      </p>
    </footer>
  );
}