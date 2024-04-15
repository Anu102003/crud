import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import UserService from '../services/UserService'
import { Link } from 'react-router-dom'
import "../App.css"
const AddUserComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();
    const { emailid } = useParams();
    const [disable, setDisable] = useState(false)


    const [errorEmail, setErrorEmail] = useState({ message: '' });
    const [errorFirstName, setErrorFirstName] = useState({ message: '' });
    const [errorLastName, setErrorLastName] = useState({ message: '' });
    const [errorMobileNumber, setErrorMobileNumber] = useState({ message: '' });

    
   //form validation
    function handleFirstNameChange (input) {
        
        if (input === "" || /^[A-Za-z]+$/.test(input))
        {
            setFirstName(input)
            if(input.length>0){
                setErrorFirstName({ message: '' })
            }else{
                setErrorFirstName({ message: 'Please enter First name' })
            }
        }
        else {
            setErrorFirstName({ message: 'Only alphabets are allowed.' });
        }
            
    };
    function handleLastNameChange (input) {
        
        if (input === "" || /^[A-Za-z]+$/.test(input) ) {
            setLastName(input);
            if(input.length>0){
                setErrorLastName({ message: '' })
            }else{
                setErrorLastName({ message: 'Please enter Last name' })
            }
            
        }
        else {
            setErrorLastName({ message: 'Only alphabets are allowed.' });
        }
            
    };
    
    
    function handleMobileNumberChange (input) {
        if (input === "" || /^[0-9]+$/.test(input)) {
            setMobileNo(input);
            if(input.length===10){
                setErrorMobileNumber({ message: '' })
            }else{
                setErrorMobileNumber({ message: 'Please enter 10 digit number' })
            } 
        }
        else {
            setErrorMobileNumber({ message: 'Enter valid Mobile Number' });
        }     
    };
    function handleEmailChange (input) {
        
        if (input === "" ) {
            setErrorEmail({ message: 'Please enter an Email' });
        } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
            setEmailId(input);
            setErrorEmail({ message: '' })
        }
        else {
            setErrorEmail({ message: 'Enter valid Email' });
        }
            
    };
    
    const date = () => {
        let date=new Date().toISOString().split('T')[0]
        return String(date)
    };
   
    
    //end of form validation

    const validate=()=>{
        return(emailId!=="" && errorEmail.message==="" && firstName!=="" && errorFirstName.message==="" && lastName!=="" && 
        errorLastName.message==="" && mobileNo!=="" && errorMobileNumber.message==="" && dob!=="" && address!=="") 
   }


    const saveOrUpdateUser = (e) => {
        e.preventDefault();
        if (validate()) {
            
            const user = { firstName, lastName, emailId, mobileNo, dob, address }
            if (emailid) {
                UserService.updateUser(emailid, user).then((response) => {
                    navigate('/user')
                }).catch(error => {
                    // console.log(error + "e1")
                })
            } else {
                UserService.createUser(user).then((response) => {
                    console.log(response.data)
                    navigate('/user');
                }).catch(error => {
                    // console.log("User Already exists : " + error)
                    alert("User Already exists");
                })
            }
        } else {
            alert("Please fill all fields");
        }
    }

    useEffect(() => {
        UserService.getUserById(emailid).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            setMobileNo(response.data.mobileNo)
            setDob(response.data.dob)
            setAddress(response.data.address)
        }).catch(error => {
            // console.log("Id not passed to getUserById() : " + error)
        })
        if(emailid) setDisable(true)
    }, [],[emailid])

    const title = () => {
        if (emailid) {
            return <h2 className='text-center '>Update User</h2>
        } else {
            return <h2 className='text-center'>Add User</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-4">
                       <div className='tlt'>{
                            title()
                        }
                        </div> 
                        <div className="card-body form-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="emailId"
                                        className="form-control"
                                        defaultValue={emailId === "" ? "" : emailId}
                                        // value={emailId}
                                        // onChange={handleEmailChange}
                                        onChange={(e)=>handleEmailChange(e.target.value)}
                                        disabled={disable}
                                    >
                                    </input>
                                    {errorEmail.message && <div className="text-danger">{errorEmail.message}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        // defaultValue={firstName}
                                        // onChange={handleFirstNameChange}
                                        onChange={(e)=>{handleFirstNameChange(e.target.value)}}
                                    >
                                    </input>
                                    {errorFirstName.message && <div className="text-danger">{errorFirstName.message}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastname"
                                        className="form-control"
                                        value={lastName}
                                        // onChange={handleLastNameChange}
                                        onChange={(e)=>{handleLastNameChange(e.target.value)}}
                                    >
                                    </input>
                                    {errorLastName.message && <div className="text-danger">{errorLastName.message}</div>}
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Mobile Number :</label>
                                    <input
                                        type="text"
                                        maxLength="10"
                                        placeholder="Enter Mobile Number"
                                        name="mobileno"
                                        className="form-control"
                                        value={mobileNo}
                                        onChange={(e)=>{handleMobileNumberChange(e.target.value)}}
                                    >
                                    </input>
                                    {errorMobileNumber.message && <div className="text-danger">{errorMobileNumber.message}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Date Of Birth:</label>
                                    <input
                                        type="date"
                                        placeholder="Enter dob"
                                        name="dob"
                                        className="form-control"
                                        // defaultValue={dob === "" ? "" : dob}
                                        value={dob}
                                        onChange={(e)=>setDob(e.target.value)}
                                        max={date()}
                                    >
                                    </input>
                                </div>



                                <div className="form-group mb-2">
                                    <label className="form-label"> Address:</label>
                                    <textarea
                                        type="text"
                                        name="address"
                                        maxLength={50}
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                </div>
                                <button className="btn btn-success fw-bolder ms-2 mt-3 me-4" onClick={(e) => saveOrUpdateUser(e)} >Submit </button>
                                <Link to="/user" className="btn btn-danger  mt-3 fw-bolder">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddUserComponent