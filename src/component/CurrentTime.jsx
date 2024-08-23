



let CurrentTime =() =>{

let time =new Date();


    return (<p className="Lead">This the current Time:  {time.toLocaleDateString()}-{" "}{time.toLocaleTimeString()}</p>)


    };
    export default CurrentTime;