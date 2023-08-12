const AppTitle=({title='Box Office',subtitle="Movie Search Made Easy"})=>{
    // giving default values to the props using 
    return(
        <div className="app-title">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subtitle}</p>
        </div>
    )
}
export default AppTitle;