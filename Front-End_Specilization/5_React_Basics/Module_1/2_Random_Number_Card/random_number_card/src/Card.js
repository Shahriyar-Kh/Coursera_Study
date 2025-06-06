function Card(props){
    return(
        <div className="card">
            <h1>This Card Value is {props.num}</h1>
           
            <p>This Card is {props.num > 50 ? "High" :"Low"}</p>
         

        </div>
    );

}
export default Card;