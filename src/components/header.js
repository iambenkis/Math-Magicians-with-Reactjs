import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navBar"
        style={
            {
                position: 'absolute',
                left: '0',
                top : '0',
                display:'flex',
                width: '100%',
                justifyContent: 'space-between',
                padding: '1rem 3rem',
                alignItems: 'center',
                backgroundColor: '#efefef'
            }
        }>
            <h1
                style={{
                    color: 'rgb(238, 95, 0)',
                    fontWeight:'700',
                    cursor:'pointer'
            }}>Math Magicians</h1>
            <ul style={{
                display:'flex',
            }}>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/calculator'>CALCULATOR</Link>
                </li>
                <li>
                    <Link to='/quote'>QUOTE</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;