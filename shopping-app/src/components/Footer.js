import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/shajith26/shop-cart"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/shajith26/shop-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://github.com/shajith26"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mohamed Shajith
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;