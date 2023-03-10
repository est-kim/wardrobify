import React, { useState, useEffect } from 'react';
// import React from 'react';
// import "./index.css";

function ShoesList({shoes, getShoes}) {
    if (shoes === undefined) {
        return null;
      }
    console.log(shoes);

  const handleDelete = async (shoe) => {
    const shoeUrl = `http://localhost:8080/api/bins/${shoe.id}/`
    const fetchConfig = {
      method: 'delete'
    }
  const shoeResponse = await fetch(shoeUrl, fetchConfig);
  if (shoeResponse.ok) {
    getShoes()
  }
}

    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufucturer</th>
            <th>Model Name</th>
            <th>Color</th>
            <th>Picture</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map(shoe => {
            console.log(shoe)
            return (
            <tr key={shoe.id}>
              <td>{ shoe.manufacturer }</td>
              <td>{ shoe.model_name }</td>
              <td>{ shoe.color }</td>
              <td>
                <img
                    src={shoe.picture_url}
                    alt=""
                    width="75px"
                    height="75px"
                />
              </td>
              <td>{ shoe.bin }</td>
              <td>
                <button id={ shoe.id } onClick={() => handleDelete(shoe)}
                  type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            );
          })}
          </tbody>
      </table>
    );
}

export default ShoesList;
