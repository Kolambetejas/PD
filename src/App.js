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
        <h1 className="bg-primary text-light p-3"> Header</h1>
    );
 }
function AppBody(){
    return(
        <>
        <h1 className="bg-dark text-light p-3">AppBody</h1>
        </>
    );
}

function AppFooter(){
    return(
        <>
        <h1 className="bg-secondary p-3 text-light">AppBody</h1>
        </>
    );
}
export default App;