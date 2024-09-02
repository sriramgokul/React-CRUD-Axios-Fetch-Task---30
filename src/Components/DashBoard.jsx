import TopBar from "./TopBar";

function DashBoard(){
    return(
        <div>
            <TopBar/>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}

export default DashBoard;