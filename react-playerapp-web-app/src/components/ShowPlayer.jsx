import React, { useContext, useEffect, useState } from 'react'
// import {PlayerContext} from '../data/PlayerContext';
import axios from 'axios';
export default function ShowPlayer() {
  // initialise the player info using useContext hook
  // const user = useContext(PlayerContext);
  // console.log("user2" , user)
  // useEffect(async ()=>{
  const [data, setData] = useState([]);
  useEffect(async () => {
    const res = await axios.get('http://localhost:3000/players');
    setData(res.data);

  }, [])



  // })
  return (
    <div class="data-table">
      <table>
        <tr>
          <th>
            Player Name
          </th>

          <th>
            Country
          </th>
          <th>
            Matches Played
          </th>
        </tr>



        {
          data && data.map((item, err) => {
            return (<>
              <tr>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.matchesPlayed}</td>
              </tr>

            </>)
          })
        }

      </table>
    </div>
  )
}
