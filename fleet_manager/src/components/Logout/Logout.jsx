//Logs out user 
const Logout = () => {
    
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
        console.log("Logged out")
    }
    return ( 
            <button class="nav-link active" onClick={handleClick}>Logout</button>
            
        );
}
        
export default Logout;