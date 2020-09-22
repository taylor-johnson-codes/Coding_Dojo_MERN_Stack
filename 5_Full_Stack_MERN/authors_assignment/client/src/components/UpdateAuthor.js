// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link, navigate } from "@reach/router";

// const UpdateAuthor = (props) => {
//     // const { id } = props;
//     const [name, setName] = useState("");
//     const [errors, setErrors] = useState("");

//     useEffect(() => {
//         axios.get(`http://localhost:8000/${id}`)
//             .then(res => {
//                 setName(res.data.name);
//             })
//     }, [])

//     const updateAuthor = (e) => {
//         e.preventDefault();
//         axios.patch(`http://localhost:8000/edit/${props.id}`, name)
//             .then(res => {
//                 if (res.data.errors) {
//                     setErrors(res.data.errors);
//                 } else {
//                     navigate('/');
//                 }
//             })
//             .catch(err => console.log(err));
//         setName("");
//     };


//     return (
//         <div>
//             <Link to="/">Home</Link>

//             <h4>Add a new author:</h4>
//             <form onSubmit={createAuthor}>
//                 <div>
//                     {
//                         errors.name ?
//                             <h3>{errors.name.message}</h3>
//                             : ''
//                     }
//                     {/* {
//                         nameError ?
//                         <p style={{ color: 'red' }}>{nameError}</p>
//                         : ''
//                     } */}
//                     <label htmlFor="name"> Author's Name: </label>
//                     <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
//                     {/* <input type="text" name="name" onChange={handleName} value={name}/> */}
//                 </div>
//                 <input type="submit" value="Update Author" />
//             </form>
//         </div>
//     )
// }

// export default UpdateAuthor