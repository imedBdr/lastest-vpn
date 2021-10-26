import logo from "../../assets/images/logo.svg"
import './footer.scss';

const Footer = () =>(

    <footer>
        <div className={'description'}>
            <img src={logo} alt={'logo'}/>
            <p><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</p>
            <div className={'icons'}>
                <img src={'./pictures/facebook.svg'} alt={'facebook logo'} />
                <img src={'./pictures/twitter.svg'} alt={'twitter logo'} />
                <img src={'./pictures/instagram.svg'} alt={'instagram logo'} />
            </div>
            <div className={'re'}>©2020LaslesVPN</div>
        </div>
        <div className={'column'}>
            <div className={'title'}>Product</div>
                <ul>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
        </div>
        <div className={'column'}>
            <div className={'title'}>Engage</div>
                <ul>
                    <li>LaslesVPN ? </li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
        </div>        
        <div className={'column'}>
            <div className={'title'}>Earn Money</div>
                <ul>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
        </div>
    </footer>
)

export default Footer;