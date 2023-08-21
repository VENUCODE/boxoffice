import {Link} from 'react-router-dom'
const links=[
    {
        text:'home',
        to:'/home'
    },
    {
        text:"starred",
        to:'/starred'
    },
    {
        text:"index",
        to:'/'
    }
]
const Navs=()=>{
    return (
        <ul >
        {links.map(item => (
          <li  key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
      
    );
}
export default Navs;
