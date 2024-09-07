import TopBar from "./TopBar";

function Home({newdetails}){
    
    return (
        <div>
            <TopBar/>
            <div className="text-center">
                
                {
                    newdetails.map((val,id)=>{
                        return <div key={id} className="d-flex flex-column mb-3 border border-black justify-content-center gap-3 mt-3">
                            <h4>Name: {val.name_user}</h4>
                            <h5>UserName: {val.username_user}</h5>
                            <h5>Email Id: {val.email_user}</h5>
                            <h5>Phone No : {val.phone_user}</h5>
                        </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Home;