
// function Button(){
//     const styles ={
        
//             backgroundColor: "hsl(200,100%,50%)",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             border: "none",
//             cursor: "pointer"
    
//     }

//     return<button style={styles}>click me</button>
  
// }
// export default Button

function Button(){
    let count = 0
    const handleClick = (e) => e.target.textContent = "OUCH!"
    return(<button onDoubleClick={(e)=> handleClick(e)}>click me</button>)
}
export default Button