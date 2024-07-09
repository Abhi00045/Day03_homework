function Footer() {
    const date = new Date();
    return (
        <>
        <footer>
            <div className="right">
                <h1>Get in Touch</h1>
                <p>We would love to hear from you</p>
                <p>Stay in touch with us for any queries</p>
                <span><pre><a href="mailto:U8s0b@example.com">nikeus.ac.in@gmail.com</a></pre></span>
                <div className="norman">
                <button>CONTACT US</button>
                <button>SUBSCRIBE</button>
                <button>FOLLOW US</button>
                </div>
                  
            </div>
            <div className="left">
                <div><label htmlFor="name">Name :</label>
                <input type="text" placeholder="Enter Name" />
                </div>
                    <div>
                    <label htmlFor="Email">Email :</label>
                    <input type="text" placeholder="Enter Email" />
                    </div>
                    <div>
                    <label htmlFor="Email">Password :</label>
                    <input type="password" placeholder="Enter Password"/>
                    </div>
                    <div>
                    <label htmlFor="Email">Contact No :</label>
                    <input type="number" placeholder="Enter Contact No"/>
                    </div>

            </div>
        </footer>
        <p className="copyright">Copyright © {date.getFullYear()}</p>
        </>
    );
}

export default Footer