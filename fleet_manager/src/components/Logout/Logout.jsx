//Logs out user 
const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/login';
        console.log("Logged out")
    }
    return ( 
            <button type = "button" class="btn btn-link" onClick={handleClick}>Logout</button>
            
        );
}
        
export default Logout;