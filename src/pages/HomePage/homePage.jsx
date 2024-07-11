import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/buttonRent';

function HomePage() {
    return (
      <div>
        <h1>Welcome to Our Store!</h1>
        <p>Choose a category:</p>
        <Link to="/women">
          <Button>Women</Button>
        </Link>
        <Link to="/men">
          <Button>Men</Button>
        </Link>
      </div>
    );
  }
  
  export default HomePage;
