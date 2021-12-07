import Button from 'react-bootstrap/Button';

function Footer() {
    const url = 'http://github.com/candelariaaya';

    return (
        <div className="footer">
            <ul>
                <li>Desarrollado por: Candelaria Aya</li>
                <li>Copyright © 2021 - All Rights Reserved</li>
                <li><Button onClick={e => {
                    e.preventDefault();
                    window.location.href = url;
                }} variant="outline-primary" size="sm">Github</Button></li>
            </ul>
        </div>
    );
}

export default Footer;