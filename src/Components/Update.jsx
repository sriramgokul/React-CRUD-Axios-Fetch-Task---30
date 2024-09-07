import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import TopBar from "./TopBar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { editUsers } from "./APICalls";

function Update({newdetails,setNewDetails}){

  const {id} = useParams();
  

  const [name,setName]= useState("")
  const [username,setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address,setAddress]= useState("");
  const [street,setStreet] = useState("");
  const [city,setCity] = useState("");
  const [zip,setZip] = useState("");
  const [phoneno,setPhoneNo] = useState("");
  const [website,setWebsite] = useState("");
  const navigate = useNavigate();
  const [index,setIndex] = useState("");

  useEffect(()=>{
        const selectedUsers = newdetails.filter((val)=> (val.id == id));
        const selectedUseIndex = newdetails.findIndex((val)=>val.id == id);
            setIndex(selectedUseIndex);
            setName(selectedUsers[0].name_user);
            setUserName(selectedUsers[0].username_user);
            setEmail(selectedUsers[0].email_user);
            setAddress(selectedUsers[0].address_user);
            setStreet(selectedUsers[0].street_user);
            setCity(selectedUsers[0].city_user);
            setZip(selectedUsers[0].zipcode_user);
            setPhoneNo(selectedUsers[0].phone_user);
            setWebsite(selectedUsers[0].website_user);

  },[id])

  // To update the User Info

  function handleUpdate(){
    const editedUsers = {
        name_user : name ,
        username_user :username ,
        email_user :email ,
        address_user : address,
        street_user : street,
        city_user : city,
        zipcode_user : zip,
        phone_user :phoneno ,
        website_user :website ,
    }
    editUsers(id,editedUsers).then((data)=>{
        if(data){
            newdetails[index]= editedUsers;
            setNewDetails([...newdetails]);   
            navigate("/");
        }else{
            console.log("Sorry there was a error while updating the user details")
        }
    })
    
    
  }
    
    return (
        <div>
        <TopBar/>
        <div className='container-fluid '>
                <Form>
                    <Form.Group className="mb-3 ">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={username}  onChange={(e)=>{setUserName(e.target.value)}}/>
                          </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="fw-bold">Email</Form.Label>
                          <Form.Control type='email' placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Door No.' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">Street</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Street' value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">City</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter City' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                        </Form.Group>
                        <Form.Label className="fw-bold">Zip Code</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Zipcode' value={zip} onChange={(e)=>{setZip(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" value={phoneno} onChange={(e)=>{setPhoneNo(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter Website" value={website}  onChange={(e)=>{setWebsite(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Form>    
        </div>
        </div>
    )
}

export default Update;