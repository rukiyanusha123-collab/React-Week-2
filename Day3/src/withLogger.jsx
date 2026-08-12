function withLogger(WrappedComponent){
    return function logger(props){
        console.log("Message Rendered")

            return(
        <>
        <WrappedComponent {...props}/>
        </>
    )
}
}
export default withLogger;