import Card from "./Card";
function Tours({tours , removetours}){
     
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with Subodh</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removetours={removetours}></Card>
                    })
                }
            </div>
        </div>
    );
    
}
export default Tours;