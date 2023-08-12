import {Link} from 'react-router-dom'
const links=[
    {
        text:'home',
        to:'/'
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
        <ul className='navbar'>
        {links.map(item => (
          <li className="nav-item" key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
      
    );
}
export default Navs;
