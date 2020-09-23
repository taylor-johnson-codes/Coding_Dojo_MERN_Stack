// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Link, navigate } from '@reach/router'

// const GameOne = (props) => {
//     const [players, setPlayers] = useState([]);
//     const [p, setP] = useState(false);
//     const [np, setNp] = useState(false);
//     const [u, setU] = useState(true);

//     useEffect(() => {
//         axios.get('http://localhost:8000/')
//             .then(res => {
//                 setPlayers(res.data);
//             })
//             .catch(err => console.log(err));

//     }, []);

//     return (
//         <div>
//             <div>
//                 <Link to="/">Manage Players</Link> | <Link to="/game/1">Manager Player Status</Link>
//             </div>
//             <br/>

//             <div>
//                 <h3>Player Status - Game 1</h3>
//                 <Link to="/game/1">Game 1</Link> | <Link to="/game/2">Game 2</Link> | <Link to="/game/3">Game 3</Link>
//             </div>
//             <br/>

//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Position</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             players.map((item, i) =>
//                                 <tr key={i}>
//                                     <td><Link to={`/${item._id}`}>{item.name}</Link></td>
//                                     <td>{item.position}</td>
//                                     <td>
//                                             <button style={{ background: item.gameOne === "playing" ? 'green' : ""}} onClick={() => clickHandler(item._id)}>Playing</button>
//                                             <button style={{ background: item.gameOne === "playing" ? 'green' : ""}} onClick={() => setP(false)}>Playing</button>
//                                             <button style={{ background: item.gameOne === "playing" ? 'green' : ""}} onClick={() => setP(false)}>Playing</button>
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default GameOne
