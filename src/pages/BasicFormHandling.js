import {useState} from "react";
const BasicFormHandling = () => {
    const [firstName, setFirstName] = useState("Jeremiah");
    const [lastName, setLastName] = useState("Neri");
    
    // OTHER METHOD 
    const user =[firstName,lastName];
    const [userDetails, setuserDetails] = useState("");

        let showInfo = (event) => {
            event.preventDefault();
            setuserDetails(user);
        }
        return ( 
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="">
                            <label htmlFor="">First Name</label>
                            <input className="form-control" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <br/>
                            <label htmlFor="">Last Name</label>
                            <input className="form-control" type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                            <hr/>
                            <button className="btn btn-primary w-100" onClick={showInfo}>
                                Submit Information
                            </button>
                            <label htmlFor="">Show Result:</label>

                            {/* <h3>{firstName}</h3>
                            <h3>{lastName}</h3> */}

                            {/* OTHER METHOD */}
                            <h3>{user[0]}</h3>
                            <h3>{user[1]}</h3>


                        </form>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default BasicFormHandling;