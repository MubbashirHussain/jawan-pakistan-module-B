import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-custom navbar-dark" style={{ backgroundColor: '#272a33' }}>
                <div className="container">
                    <a className="logo text-uppercase navbar-brand">Dorsin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <div data-nav="list" className="navbar-collapse">
                            <ul id="mySidenav" className="navbar-center navbar-nav">
                                <li className="nav-item active"><a href="#home" className="nav-link text-white active"> Home</a></li>
                                <li className="nav-item"><a href="#services" className="nav-link text-white"> Services</a></li>
                                <li className="nav-item"><a href="#features" className="nav-link text-white"> Features</a></li>
                                <li className="nav-item"><a href="#pricing" className="nav-link text-white"> Pricing</a></li>
                                <li className="nav-item"><a href="#team" className="nav-link text-white"> Team</a></li>
                                <li className="nav-item"><a href="#blog" className="nav-link text-white"> Blog</a></li>
                                <li className="nav-item"><a href="#contact" className="nav-link text-white"> Contact</a></li>
                            </ul>
                            <div className="nav-button ms-auto">
                                <ul className="navbar-end navbar-nav">
                                    <li><button type="button" className="btn btn-danger rounded-pill navbar-btn btn-rounded waves-effect waves-light btn btn-none">Try
                                        it Free</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="section home-page" style={{ backgroundImage: 'url("http://dorsin.react.themesbrand.com/assets/images/bg-home.jpg")' }}>
                <div className="bg-overlay" />
                <div className="display-table z-index-12">
                    <div className="display-table-cell">
                        <div className="container">
                            <div className="justify-content-center row">
                                <div className="text-white text-center col-lg-8">
                                    <h1 className="home-title">We help startups launch their products</h1>
                                    <p className="pt-3 home-desc">Etiam sed.Interdum consequat proin vestibulum class at.</p>
                                    <p className="mt-4"><button className="btn bg-white fw-bold px-4">Play</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className="section-title text-center">Our Services</h1>
                            <p className="section-subtitle text-muted text-center pt-4 font-secondary">We craft digital, graphic and
                                dimensional thinking, to create category leading brand experiences that have meaning and add a
                                value for our clients.</p>
                        </div>
                    </div>
                    <div className="mt-4 row">
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Digital Design</h4>
                                <p className="pt-3 text-muted">Some quick example text to build on the card title and make up the
                                    bulk of the card's content. Moltin gives you the platform.</p>
                            </div>
                        </div>
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Unlimited Colors</h4>
                                <p className="pt-3 text-muted">Credibly brand standards compliant users without extensible services.
                                    Anibh euismod tincidunt ut laoreet.</p>
                            </div>
                        </div>
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Strategy Solutions</h4>
                                <p className="pt-3 text-muted">Separated they live in Bookmarksgrove right at the coast of the
                                    Semantics, a large language ocean necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 row">
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Awesome Support</h4>
                                <p className="pt-3 text-muted">It is a paradisematic country, in which roasted parts of sentences
                                    fly into your mouth leave for the far World.</p>
                            </div>
                        </div>
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Truly Multipurpose</h4>
                                <p className="pt-3 text-muted">Even the all-powerful Pointing has no control about the blind
                                    texts
                                    it is an almost unorthographic.</p>
                            </div>
                        </div>
                        <div className="mt-3 col-lg-4">
                            <div className="p-3 text-center hover-effect">
                                <h4 className="pt-3">Easy to customize</h4>
                                <p className="pt-3 text-muted">Question Marks and devious Semikoli, but the Little Blind Text didn't
                                    listen. She packed her seven versalia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light">
                <div className="container">
                    <div className="vertical-content row">
                        <div className="col-lg-5">
                            <div className>
                                <h3>A digital web design studio creating modern &amp; engaging online experiences</h3>
                                <p className="text-muted">Separated they live in Bookmarksgrove right at the coast of the
                                    Semantics, a large language ocean. A small river named Duden flows by their place and
                                    supplies it with the necessary regelialia.</p>
                                <ul className="text-muted list-unstyled mt-4">
                                    <li className>We put a lot of effort in design.</li>
                                    <li className>The most important ingredient of successful website.</li>
                                    <li className>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                    <li className>Submit Your Organization.</li>
                                </ul>
                                <a className="btn btn-danger mt-4">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-end p-5">
                                <img src="http://dorsin.react.themesbrand.com/assets/images/online-world.svg" alt="macbook" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-lg bg-web-desc" style={{ backgroundImage: 'url(http://dorsin.react.themesbrand.com/assets/images/img-1.jpg)' }}>
                <div className="bg-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="text-center col-lg-12 z-index-12">
                            <h2 className="text-white">Build your dream website today</h2>
                            <p className="pt-3 m-auto text-white" style={{ maxWidth: '500px' }}>But nothing the copy said could convince
                                her and so it didn't take long
                                until a few insidious Copy Writers ambushed her.</p><a className="btn bg-white mt-4 mb-5">View Plan &amp; Pricing</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className="section-title text-center">Our Pricing</h1>
                            <div className="section-title-border mt-3" />
                            <p className="section-subtitle text-muted text-center pt-4 font-secondary">Call to action pricing table
                                is really crucial to your for your business website. Make your bids stand-out with amazing
                                options.</p>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h4 className="text-uppercase">Economy</h4>
                                <h1>$9.90</h1>
                                <h6 className="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div className="pricing-border" />
                                <div className="plan-features mt-4">
                                    <p>Bandwidth: <b className="text-danger">1GB</b></p>
                                    <p>Onlinespace: <b className="text-danger">50MB</b></p>
                                    <p>Support: <b className="text-danger">No</b></p>
                                    <p><b className="text-danger">1</b> Domain</p>
                                    <p><b className="text-danger">No</b> Hidden Fees</p>
                                </div><a className="btn btn-danger mt-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center pricing-box bg-white hover-effect price-active">
                                <h4 className="text-uppercase">DELUXE</h4>
                                <h1>$19.90</h1>
                                <h6 className="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div className="pricing-border" />
                                <div className="plan-features mt-4">
                                    <p>Bandwidth: <b className="text-danger">10GB</b></p>
                                    <p>Onlinespace: <b className="text-danger">500MB</b></p>
                                    <p>Support: <b className="text-danger">Yes</b></p>
                                    <p><b className="text-danger">10</b> Domain</p>
                                    <p><b className="text-danger">No</b> Hidden Fees</p>
                                </div><a className="btn btn-danger mt-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-center">
                                <h4 className="text-uppercase">ULTIMATE</h4>
                                <h1>$29.90</h1>
                                <h6 className="text-uppercase text-muted">Billing Per MONTH</h6>
                                <div className="pricing-border" />
                                <div className="plan-features mt-4">
                                    <p>Bandwidth: <b className="text-danger">100GB</b></p>
                                    <p>Onlinespace: <b className="text-danger">2 GB</b></p>
                                    <p>Support: <b className="text-danger">Yes</b></p>
                                    <p><b className="text-danger">Unlimited</b> Domain</p>
                                    <p><b className="text-danger">No</b> Hidden Fees</p>
                                </div><a className="btn btn-danger mt-4">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className=" text-center">BEHIND THE PEOPLE</h1>
                            <p className="text-muted text-center pt-4">It is a long established fact
                                that create category leading brand experiences a reader will be distracted by the readable
                                content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="border-bottom border-1 text-center hover-effect">
                                <div className>
                                    <div className><img alt="" src="http://dorsin.react.themesbrand.com/assets/images/team/img-1.jpg" className="img-fluid rounded" /></div>
                                </div>
                                <h4 className="my-3">Frank Johnson</h4>
                                <p className="text-uppercase team-designation">CEO</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="border-bottom border-1 text-center hover-effect">
                                <div className>
                                    <div className><img alt="" src="http://dorsin.react.themesbrand.com/assets/images/team/img-2.jpg" className="img-fluid rounded" /></div>
                                </div>
                                <h4 className="my-3">Elaine Stclair</h4>
                                <p className="text-uppercase team-designation">DESIGNER</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="border-bottom border-1 text-center hover-effect">
                                <div className>
                                    <div className><img alt="" src="http://dorsin.react.themesbrand.com/assets/images/team/img-3.jpg" className="img-fluid rounded" /></div>
                                </div>
                                <h4 className="my-3">Wanda Arthur</h4>
                                <p className="text-uppercase team-designation">DEVELOPER</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="border-bottom border-1 text-center hover-effect">
                                <div className>
                                    <div className><img alt="" src="http://dorsin.react.themesbrand.com/assets/images/team/img-4.jpg" className="img-fluid rounded" /></div>
                                </div>
                                <h4 className="my-3">Joshua Stemple</h4>
                                <p className="text-uppercase team-designation">MANAGER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className=" text-center">WORK PROCESS</h1>
                            <p className="text-muted text-center pt-4">In an ideal world this
                                website wouldn't exist, a client would acknowledge the importance of having web copy before the
                                Proin vitae ipsum vel ex finibus semper design starts.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mt-5 row">
                            <div className=" col-lg-4">
                                <div className="text-center">
                                    <h4 className="pt-3">Tell us what you need</h4>
                                    <p className="text-muted">The Big Oxmox advised her not to do so.</p>
                                </div>
                            </div>
                            <div className=" col-lg-4">
                                <div className="text-center">
                                    <h4 className="pt-3">Get free quotes</h4>
                                    <p className="text-muted">Little Blind Text didn't listen.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="text-center">
                                    <h4 className="pt-3">Deliver high quality product</h4>
                                    <p className="text-muted">When she reached the first hills.</p>
                                </div>
                            </div>
                            <div className="text-center mx-auto"><a className="btn btn-danger waves-light waves-effect mt-5">Get
                                Started <i className="mdi mdi-arrow-right" /></a></div>
                        </div>
                    </div>
                </div></section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className=" text-center">WHAT THEY'VE SAID</h1>
                            <p className="text-muted text-center pt-4">The Big Oxmox advised her not
                                to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar
                                metus molestie sed Semikoli.</p>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="col-lg-4">
                            <div className="section-6-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-2.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                                <div className="border shadow rounded">
                                    <p className="text-muted py-5 px-4 text-center mb-0">“I feel confident imposing change on myself. It's a
                                        lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit
                                        amet vehicula erat pelleque need throw curve balls.” </p>
                                </div>
                                <h5 className="text-center text-uppercase pt-3 fs-6 fs-6">RUBEN REED - <span className="text-muted text-capitalize fs fs-6-6">Charleston</span></h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-6-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-1.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                                <div className="border shadow rounded">
                                    <p className="text-muted py-5 px-4 text-center mb-0">“Our task must be to free ourselves by widening our
                                        circle of compassion to embrace all living creatures Integer varius lacus non magna
                                        tempor congue natuasre the whole its beauty.” </p>
                                </div>
                                <h5 className="text-center text-uppercase pt-3 fs-6">MICHAEL P. HOWLETT - <span className="text-muted text-capitalize fs-6">Worcester</span></h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-6-card hover-effect mt-4"><img src="http://dorsin.react.themesbrand.com/assets/images/testimonials/user-3.jpg" alt="client" className="img-fluid d-block img-thumbnail rounded-circle" />
                                <div className="border shadow rounded">
                                    <p className="text-muted py-5 px-4 text-center mb-0">“I've learned that people will forget what you said,
                                        people will forget what you did, but people will never aliquam in nunc quis tincidunt
                                        forget how you vestibulum egestas them feel.” </p>
                                </div>
                                <h5 className="text-center text-uppercase pt-3 fs-6">THERESA D. SINCLAIR - <span className="text-muted text-capitalize fs-6">Lynchburg</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-lg bg-web-desc" style={{ backgroundImage: 'url(./imgs/img-2.jpg)' }}>
                <div className="bg-overlay" />
                <div className="container">
                    <div className="row">
                        <div className="text-center col-lg-8 m-auto z-index-12">
                            <h1 className="text-white">Let's Get Started</h1>
                            <p className=" text-white text-center pt-4">Far far away, behind the word
                                mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p><a className="btn bg-white mt-3 mb-4">Get Started </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-light pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className=" text-center">BLOG</h1>
                            <p className="text-muted text-center pt-4">Separated they live in
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod
                                mus ipsum vel ex finibus semper luctus quam.</p>
                        </div>
                    </div>
                    <div className="mt-4 row">
                        <div className="col-lg-4">
                            <div className="blog-box mt-4 hover-effect"><img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-1.jpg" className="img-fluid" alt="blog" />
                                <div>
                                    <h5 className="mt-4 text-muted fs-6">UI &amp; UX Design</h5>
                                    <h4 className="mt-3 fs-5"> Doing a cross country road trip </h4>
                                    <p className="text-muted">She packed her seven versalia, put her initial into the belt and made
                                        herself on the way..</p>
                                    <div className="mt-3"><button className="btn btn-danger">Read More </button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mt-4 hover-effect"><img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-2.jpg" className="img-fluid" alt="blog" />
                                <div>
                                    <h5 className="mt-4 text-muted fs-6">Digital Marketing</h5>
                                    <h4 className="mt-3 fs-5"> New exhibition at our Museum </h4>
                                    <p className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her
                                        way.</p>
                                    <div className="mt-3"><button className="btn btn-danger">Read More </button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mt-4 hover-effect"><img src="http://dorsin.react.themesbrand.com/assets/images/blog/img-3.jpg" className="img-fluid" alt="blog" />
                                <div>
                                    <h5 className="mt-4 text-muted fs-6">Travelling</h5>
                                    <h4 className="mt-3 fs-5"> Why are so many people.. </h4>
                                    <p className="text-muted">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia.</p>
                                    <div className="mt-3"><button className="btn btn-danger">Read More </button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <h1 className=" text-center">GET IN TOUCH</h1>
                            <p className=" text-muted text-center pt-4">We thrive when coming up with
                                innovative ideas but also understand that a smart concept should be supported with faucibus
                                sapien odio measurable results.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mt-4 pt-4">
                                <p><span className="fw-bold fs-5">Office Address 1:</span><br /> <span className="text-muted d-block mt-2">4461
                                    Cedar Street Moro, AR 72368</span></p>
                                <p className="mt-4"><span className="fw-bold fs-5">Office Address 2:</span><br /> <span className="text-muted d-block mt-2">2467 Swick Hill Street <br />New Orleans, LA 70171</span>
                                </p>
                                <p className="mt-4"><span className="fw-bold fs-5">Working Hours:</span><br /> <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="custom-form mt-4 pt-4">
                                <form name>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="mt-2 m-3">
                                                <input type="text" className="form-control" placeholder="Your name*" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mt-2 m-3">
                                                <input type="email" className="form-control" placeholder="Your email*" /></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-2 m-3">
                                                <input className="form-control" placeholder="Your Subject.." /></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-2 m-3">
                                                <textarea id="comments" rows={4} className="form-control" placeholder="Your message..." defaultValue={""} /></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-end"><input type="submit" id="submit" name="send" className="submitBnt btn btn-danger" defaultValue="Send Message" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="py-5" style={{ backgroundColor: '#272a33' }}>
                <div className="container">
                    <div className="row">
                        <div className="mt-4 col-lg-3">
                            <h4 className="text-white">DORSIN</h4>
                            <div className="text-white mt-4">
                                <ul className="list-unstyled">
                                    <li><a className="text-white text-decoration-none">Home</a></li>
                                    <li><a className="text-white text-decoration-none">About us</a></li>
                                    <li><a className="text-white text-decoration-none">Careers</a></li>
                                    <li><a className="text-white text-decoration-none">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4 className="text-white">Information</h4>
                            <div className="text-white mt-4">
                                <ul className="list-unstyled">
                                    <li><a className="text-white text-decoration-none">Terms &amp; Condition</a></li>
                                    <li><a className="text-white text-decoration-none">About us</a></li>
                                    <li><a className="text-white text-decoration-none">Jobs</a></li>
                                    <li><a className="text-white text-decoration-none">Bookmarks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4 className="text-white">Support</h4>
                            <div className="text-white mt-4">
                                <ul className="list-unstyled">
                                    <li><a className="text-white text-decoration-none">FAQ</a></li>
                                    <li><a className="text-white text-decoration-none">Contact</a></li>
                                    <li><a className="text-white text-decoration-none">Disscusion</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 col-lg-3">
                            <h4 className="text-white">Subscribe</h4>
                            <div className="text-white mt-4">
                                <p>In an ideal world wouldn't exist, a client would acknowledge the importance of
                                    having web copy before the design starts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="p-4" style={{ backgroundColor: '#272a33f3' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div className>
                                <p className="copy-rights text-white">2019 - 2023 © Dorsin - Themesbrand</p>
                            </div>
                            <div className><img src="http://dorsin.react.themesbrand.com/assets/images/payment.png" alt="payment" height={36} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}

export default App;
