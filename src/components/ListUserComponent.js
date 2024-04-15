import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import "../App.css"
// import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
const ListUserComponent = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        getAllUser();
    }, [])

    const getAllUser = () => {
        UserService.getAllUser().then((response) => {
            setUser((response.data).reverse());
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteUser = (userEmailId) => {
        UserService.deleteUser(userEmailId).then((response) => {
            getAllUser();
        }).catch(error => {
            console.log(error);
        })
    }
    function formatDOB(data) {
        let array = data.split('-')
        const modifiedArray = array.reverse()        
        // let formattedDate = `${modifiedArray[0]}-${modifiedArray[1]}-${modifiedArray[2]}`
        return modifiedArray.join("-");

    }
   

      return (
        <div className="container">
             <div className='btn-container'>
             {/* <span class="add-icon"> <IoAddCircleOutline/></span> */}
                        <Link to="/add-user" className='btn btn-primary btn-lg mb-2' data-testid="add">Add User +</Link>
                        </div>
            
            <table className="table table-hover table-bordered tbl">
                <thead className='t-head'>
                    <tr>
                    <th> User Email Id </th>
                    <th> User First Name </th>
                    <th> User Last Name </th>
                    <th> Mobile Number </th>
                    <th> Date Of Birth </th>
                    <th> Address</th>
                    <th> Actions</th>
                    </tr>
                </thead>
                <tbody className='t-body'>
                    {
                        user.map(
                            users =>
                                <tr key={users.id}>
                                    <td>{users.emailId}</td>
                                    <td> {users.firstName} </td>
                                    <td>{users.lastName}</td>
                                    <td>{users.mobileNo}</td>
                                    <td>{formatDOB(users.dob)}</td>
                                    <td>{users.address}</td>
                                    <td>
                                        <Link className='btn btn-secondary mb-2 ms-1 me-2 fw-bolder' to={`/edit-user/${users.emailId}`} data-testid="anu@gmail.com">Update</Link>
                                        <button className='btn btn-danger mb-2 fw-bolder' onClick={() => deleteUser(users.emailId)} style={{ marginLeft: "10px" }} data-testid="delete">Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListUserComponent


