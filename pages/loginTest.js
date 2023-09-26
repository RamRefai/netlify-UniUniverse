import Footer from '@components/Footer';
import netlifyIdentity from 'netlify-identity-widget'
import CampusSelection from './CampusSelection';
function loginTest() {

       
            netlifyIdentity.on("init", user=>console.log(user));
            netlifyIdentity.on("login", user=>console.log(user));
            netlifyIdentity.on("logout", ()=>console.log("Logged out"));
            netlifyIdentity.on("error", err=>console.error("Logged out"));
            netlifyIdentity.on("open", ()=>console.log("Widget opened"));
            netlifyIdentity.on("close", ()=>console.log("Widget closed"));

        
            function changeLocale(locale) {
                netlifyIdentity.setLocale(locale)
            }
            

            return(


        <div className="main">
            <div className="header">
                <h2>
                    <a href="https://www.netlify.com">Netlify Identity</a>
                </h2>
    
            </div>
            <div className="hands-on-area">
                <div className="single-button">
                    <span className="label">Single button example:</span>
                    <div data-netlify-identity-button>
                    <a className="netlify-identity-button" href="#">Log in</a>
                    </div>
                </div>
                <div className="multiple-buttons">
                    <span className="label">Multiple buttons example:</span>
                    <div data-netlify-identity-menu><ul className="netlify-identity-menu"><li className="netlify-identity-item"><a className="netlify-identity-signup" href="#">Sign up</a></li><li className="netlify-identity-item"><a className="netlify-identity-login" href="#">Log in</a></li></ul></div>
                </div>
            </div>
            <div className="call-out">
            </div>
            <div className="footer">
                <div>
                    <a href="https://github.com/netlify/netlify-identity-widget" className="github-link">Open sourced on GitHub</a>
                </div>
                <CampusSelection/>
                <div>
                    <label htmlFor="locale" className="select-locale">Select Widget Locale</label>
                    <select name="locale" id="locale" onchange="changeLocale(this.value)">
                        <option value="en">English</option>
                        <option value="fr">Fran &ccedil;ais</option>
                        <option value="es">Espa &ntilde;ol</option>
                        <option value="hu">Magyar</option>
                        <option value="pt">Portugu &ecirc;s</option>
                        <option value="cs">Česky</option>
                        <option value="sk">Slovensky</option>
                    </select>
                </div>
            </div>
            <Footer/>
        </div>
)}

export default loginTest;