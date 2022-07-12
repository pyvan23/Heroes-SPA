import React from "react";
import { useForm } from "../../hooks/useForm";
import {useLocation, useNavigate} from 'react-router-dom'
import queryString from 'query-string';
import { getHerosByName } from "../helpers/getHerosByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const {q =''} = queryString.parse(location.search);
  
  const heros = getHerosByName(q)
  
  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {

    event.preventDefault();
    
    // if(searchText.trim().length<=1)return;
    navigate(`?q=${searchText}`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Hero Searching </h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q==='') 
            ? <div className="alert alert-primary">Search Hero</div>
            : (heros.length === 0 )&& 
          <div className="alert alert-danger">No results <b>{q}</b></div>
          }
          {heros.map(hero=>(
            <HeroCard key={hero.id} {...hero}/>
          )

          )}
        </div>
      </div>
    </>
  );
};
