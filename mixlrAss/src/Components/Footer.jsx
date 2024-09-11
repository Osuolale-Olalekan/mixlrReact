import React from 'react'

const Footer = () => {
    return (

        <>

            <section>
                <div className='foot_des'>

                    <img className='mixlr_svg_logo' src="./mixlr images/Screenshot 2024-05-30 092842.png" alt="" />

                    <div className='social_link'>
                        <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""> <i class="fa-brands fa-twitter"></i></a>

                    </div>

                    
                    <div className='link_collection'>

                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                        <a href="">Support</a>
                        <a href="">Careers</a>
                        <a href="">Terms of use</a>
                        <a href="">Privacy</a>

                    </div>

                    <p>© Mixlr Ltd 2024 - All rights reserved</p>
                </div>

            </section>



        </>

    )

}


export default Footer