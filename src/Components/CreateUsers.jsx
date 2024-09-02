import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

function CreateUsers(){
  const navigate = useNavigate()


  function SubmitForm(){

    navigate("/")

  }
    return (
      <div>
        <TopBar/>
        <div className="container-fluid mt-5" >
            <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-12 position-relative">
    <label for="validationTooltip01" class=" fw-bold form-label">Name</label>
    <input type="text" class="form-control" id="validationTooltip01" placeholder="Enter Name"  required/>
  </div>

  <div class="col-md-6 position-relative">
    <label for="validationTooltip02" class=" fw-bold form-label">UserName</label>
    <input type="text" class="form-control" id="validationTooltip02" placeholder="Enter UserName"  required/>
  </div>

  <div class="col-md-6 position-relative">
    <label for="validationTooltipUsername" class="fw-bold form-label" >Email</label>
    <div class="input-group has-validation">
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" placeholder="Enter Email" required/> 
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip03" class="fw-bold form-label" >Address</label>
    <input type="text" class="form-control" id="validationTooltip03" placeholder="Enter Address" required/>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip03" class="fw-bold form-label">Street</label>
    <input type="text" class="form-control" id="validationTooltip03" placeholder="Enter Street Name" required/>
  </div>

  <div class="col-md-3 position-relative">
    <label for="validationTooltip03" class="fw-bold form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03"placeholder="Enter your City Name"  required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="fw-bold form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" placeholder="Enter your area ZIP code" required/>
  </div>

  <div class="col-md-6 position-relative">
    <label for="validationTooltip05" class="fw-bold form-label">Phone No</label>
    <input type="text" class="form-control" id="validationTooltip05" placeholder="Enter your phone no" required/>
  </div>

  <div class="col-md-6 position-relative">
    <label for="validationTooltip05" class="fw-bold form-label">Website</label>
    <input type="text" class="form-control" id="validationTooltip05" placeholder="url" required/>
  </div>

  <div class="col-12 d-flex justify-content-center mt-5">
    <button class="btn btn-primary" type="submit" onClick={SubmitForm}>Submit form</button>
  </div>
</form>
        </div>
        </div>
    )
}
export default CreateUsers;