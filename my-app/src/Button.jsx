function Button({ label, onClick }) {
    /*let count = 0;
    const handleClick = (name) =>{
        if(count<10)
        {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }*/
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    const handleClick = (e) => e.target.textContent = "Ouch!😓";//This gives all the properties
  return (
    <button onDoubleClick={(e)=>handleClick(e)} className="btn"> 
      Click me 😁 
    </button>
  );
}
export default Button;