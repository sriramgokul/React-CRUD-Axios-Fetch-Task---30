import { API } from "./API";

// // To get all the users details from API
// export async function getAllUsers(){
//     const res = await fetch(API,{
//         method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//     return data;
// }

// To delete a details from the users

export async function DeleteUsers(id){
    const res = await fetch(`${API}/${id}`,{
        method : "DELETE",
        headers : {
            "Content-type": "application/json",
        },
        })
        const data = await res.json();
        return data;
    }


  // To Add new users in the API  
  
 export async function newUsers(newObj){
    const res = await fetch(`${API}`,{
        method: "POST",
        body: JSON.stringify(newObj),
        headers : {
            "Content-type": "application/json",
        },
    })
    const data = await res.json();
    return data;
 }  
 
  // To Edit new users in the API  

 export async function editUsers(id,editDoc){
    const res = await fetch(`${API}/${id}`,{    
        method: "PUT",
        body: JSON.stringify(editDoc),
        headers : {
            "Content-type": "application/json",
        },

    })
    const data = await res.json();
    return data;
 }