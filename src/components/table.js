import React from 'react';
import './Table.css'

const Table=({place,overall,uv,country,localtime,lastupdated})=>{
	return(
		<div>
		<div className="container">
		  <table className="rwd-table">
    <tbody>
      <tr>
        <th>Place</th>
        <th>Overall</th>
        <th>UV</th>
        <th>Country</th>
        <th>Local Time</th>
        <th>Last Updated</th>
      </tr>
      <tr>
        <td data-th="Place">
          {place}
        </td>
        <td data-th="Overall">
         {overall}
        </td>
        <td data-th="UV">
          {uv}
        </td>
        <td data-th="Country">
          {country}
        </td>
        <td data-th="Local Time">
          {localtime}
        </td>
        <td data-th="Last Updated">
          {lastupdated}
        </td>
      </tr>
    </tbody>
  </table>
</div>
		</div>
	);
}

export default Table;