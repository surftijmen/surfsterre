import flower from './../resourses/boarder.jpg';
import React from 'react';

const Footer=()=>{
    return(<>
        <img class="footerImage" src={flower}/>

        <footer className="footer">

            <a href="https://www.tiktok.com/@surfsterre" target="_blank" class="icon fab fa-tiktok"></a>
            <a href="https://www.instagram.com/surfsterre/" target="_blank" class="icon fab fa-instagram"></a>
            <a href="https://www.youtube.com/channel/UCi7aogUR0jE2GcP3JBk-N2Q" target="_blank" class="icon fab fa-youtube"></a>
            <a href="mailto:surfsterre@gmail.com" class="icon fas fa-envelope"></a>
            
            <h4 class="footerText">Copyright © 2022 Sterre Meijer. - All Rights Reserved.</h4>
        </footer></>
        
    )
}

export default Footer;
