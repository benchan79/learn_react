import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Outlet, Link } from 'react-router-dom';

export default function Categories () {
  const categories = useSelector(selectCategories)

  return (
    <main>
      <h1>Categories</h1>      
      <ul>
        { 
          Object.keys(categories).map(category => {
            return (
              <li key={category}>
                <Link to={`${category}`}>{category}</Link>
              </li>
            )
          })
        }
      </ul>
      <Link to="test">Test</Link>
      <Outlet />
    </main>
  )
}