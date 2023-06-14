function App(){
    return(
        <>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
        </>
    );
}
function AppHeader() {

        return (
            <div className="row bg-primary p-3 text-light fs-2 mb-0" >
              <div className="col">Home</div>
              <div className="col">Project</div>
              <div className="col" >AboutUs</div>
            </div>
     
    );
 }
function AppBody(){
    return(
        <>
        <div  className="bg-info alert alert-sucess fs3 mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        rem corrupti ipsam, necessitatibus, ut tempore nisi aspernatur cumque
        blanditiis quae quia. Corrupti, in ducimus. Ullam suscipit inventore
        quam ex non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus tempora eum cupiditate. Nobis id, facere iure debitis eum a
        at, nulla placeat, tenetur tempore ratione adipisci deleniti alias
        aspernatur voluptatem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Perspiciatis rem corrupti ipsam, necessitatibus, ut
        tempore nisi aspernatur cumque blanditiis quae quia. Corrupti, in
        ducimus. Ullam suscipit inventore quam ex non. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Voluptatibus tempora eum cupiditate.
        Nobis id, facere iure debitis eum a at, nulla placeat, tenetur tempore
        ratione adipisci deleniti alias aspernatur voluptatem!
        </div>
        </>
    );
}

function AppFooter(){
    return(
     <div className="bg-secondary text-light d-flex justify-content-center align-item-center  " style={{ height :"100px"}}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit.

     </div>
    );
}
export default App;