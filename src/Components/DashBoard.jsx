import TopBar from "./TopBar";
// import { getAllUsers } from "./APICalls";
import { useEffect } from "react";
import { API } from "./API";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { DeleteUsers } from "./APICalls";

function DashBoard({newdetails,setNewDetails}){
    const navigate = useNavigate();

    // Fetching the data from API
    useEffect(()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>setNewDetails(data))
        .catch((err)=>console.log("Sorry a Error has Occured",err))
    },[newdetails])

    // Editing the Users Info
    function handleEdit(id){
        navigate(`/update/users/${id}`)
    }

    // Deleting the Users Info
    function handleDelete(id){
        DeleteUsers(id).then((data)=>{
            if(data){
                const remainingUsers = newdetails.filter((val)=>val.id != id);
            }
            else{
                console.log("Error deleting the data")
            }
        })
    }


    return(
        <div>
            <TopBar/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="text-center">
                        <th>S.No</th>
                        <th>Name</th>
                        <th>UserName</th>     
                        <th>Email</th>
                        <th>Address</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>ZipCode</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>   
                </thead>
                <tbody className="text-center">
                    {
                       newdetails.map((val,idx)=>{
                         return <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{val.name_user}</td>
                            <td>{val.username_user}</td>
                            <td>{val.email_user}</td>
                            <td>{val.address_user}</td>
                            <td>{val.street_user}</td>
                            <td>{val.city_user}</td>
                            <td>{val.zipcode_user}</td>
                            <td>{val.phone_user}</td>
                            <td>{val.website_user}</td>
                            <td className="d-flex justify-content-center align-items-center gap-2"> <Button variant="primary" onClick={()=>handleEdit(val.id)}>Edit</Button></td>
                            <td  className="d-flex justify-content-center align-items-center gap-2"><Button variant="danger" onClick={()=>handleDelete(val.id)}>Delete</Button></td>
                            
                            
                        </tr>
                        }) 
                    }
                </tbody>
            </table>

        </div>
    )
}

export default DashBoard;
