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
        <td data-th="Supplier Code">
          {place}
        </td>
        <td data-th="Supplier Name">
         {overall}
        </td>
        <td data-th="Invoice Number">
          {uv}
        </td>
        <td data-th="Invoice Date">
          {country}
        </td>
        <td data-th="Due Date">
          {localtime}
        </td>
        <td data-th="Net Amount">
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