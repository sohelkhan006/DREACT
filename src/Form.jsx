import './App.css'

function Form (){
    return (
         
        <div className='form-container'>
            <h2>Login form</h2>
            <label htmlFor="user" >Enter Username</label>
            <input type="text" id='user' placeholder='Username'/>
            
            <br /><br />

            <label htmlFor="pass">Password:</label>
            <input type="password" id='pass'  />

            <button type="submit">Submit</button>
        </div>
        
    );
}
export default Form;