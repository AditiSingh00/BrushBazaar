import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Store from './Store';

function Materials() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Store/>
    </div>
    <Footer />
       
    </>
  );
}

export default Materials;
