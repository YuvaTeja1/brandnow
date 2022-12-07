import "./styles.css";

export default function App() {
  return (
    <body>
      <header>
        <div class="logo">
          <img src="./asset/Logo.jpg" alt="lasles vpn" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#"> About </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">help</a>
            </li>
          </ul>
        </nav>
        <div class="login">
          <a href="#"> Sign In </a>
          <div class="btn">
            <button>Sign Up</button>
          </div>
        </div>
      </header>
      <section class="hero-banner">
        <div class="banner">
          <div class="text-vpn">
            <h1 class="title">
              Want anything to be <br />
              easy with <strong>LaslesVPN.</strong>
            </h1>
            <p class="sub">
              Provide a network for all your needs with ease and fun using
              <strong>LaslesVPN</strong> <br />
              discover interesting features from us.
            </p>
            <button class="get-started">Get Started</button>
            <div class="rectangle"></div>
          </div>

          <div class="vpn-img">
            <img src="./asset/Illustration 1.jpg" alt="VPN" />
          </div>
        </div>
      </section>
      <section class="user-location">
        <div class="container-fluid">
          <div class="rectangle">
            <div class="row">
              <div class="col-lg-4">
                <div class="user-wraper">
                  <img src="./asset/user.svg" alt="user" />
                  <div class="user">
                    <h3>90+</h3>
                    <h4>Users</h4>
                  </div>
                  <div class="spacer"></div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="location-wraper">
                  <img src="./asset/location.svg" alt="user" />
                  <div class="location">
                    <h3>30+</h3>
                    <h4>Locations</h4>
                  </div>
                  <div class="spacer"></div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="server-wraper">
                  <img src="./asset/Server.svg" alt="user" />
                  <div class="server">
                    <h3>50+</h3>
                    <h4>Servers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rectangle-shadow"></div>
        </div>
      </section>

      <section class="service">
        <div class="row">
          <div class="col-lg-6">
            <img src="./asset/Illustration 2.png" alt="service" />
          </div>
          <div class="col-lg-6">
            <div class="title">
              <h3>
                We Provide Many <br />
                Features You Can Use
              </h3>
            </div>
            <div class="subtitle">
              <p>
                You can explore the features that we provide with fun
                <br />
                and have their own functions each feature.
              </p>
            </div>

            <div class="list">
              <ul>
                <li>
                  <img src="./asset/tik-green.svg" alt="tik mark" />
                  Powerfull online protection.
                </li>
                <li>
                  <img src="./asset/tik-green.svg" alt="tik mark" />
                  Internet without borders.
                </li>
                <li>
                  <img src="./asset/tik-green.svg" alt="tik mark" />
                  Supercharged VPN.
                </li>
                <li>
                  <img src="./asset/tik-green.svg" alt="tik mark" />
                  No specific time limits.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="plan">
        <div class="content">
          <h3>Choose Your Plan</h3>
          <p>
            Let's choose the package that is best for you and explore it happily
            and
            <br />
            cheerfully.
          </p>
        </div>
        <div class="price">
          <div class="row">
            <div class="col-lg-4">
              <div class="free">
                <img src="./asset/Free.png" class="free-img" alt="free plan" />
                <h3>Free Plan</h3>
                <ul>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    No Traffic Logs
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Works on All Devices
                  </li>
                </ul>
                <h3 class="text">
                  <strong> Free </strong>
                </h3>

                <div class="btn">
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="standard">
                <img
                  class="standard-img"
                  src="./asset/Standard.png"
                  alt="free plan"
                />
                <h3>Standard Plan</h3>
                <ul>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Yes Traffic Logs
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Works on All Devices
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Connect Anyware
                  </li>
                </ul>
                <h3 class="text-standard">
                  <strong>$9 / mo </strong>
                </h3>
                <div class="btn">
                  <button>Select</button>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="premium">
                <img
                  class="premium-img"
                  src="./asset/Premium.png"
                  alt="free plan"
                />

                <h3>Premium Plan</h3>
                <ul>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Unlimited Bandwitch
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Encrypted Connection
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Yes Traffic Logs
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Works on All Devices
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Connect Anyware
                  </li>
                  <li>
                    <img src="./asset/jam_check.svg" alt="check" />
                    Get New Features
                  </li>
                </ul>
                <h3 class="text-premium">
                  <strong> $12 / mo </strong>
                </h3>
                <div class="btn">
                  <button>Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="global-massage">
        <h3>
          Huge Global Network
          <br />
          of Fast VPN
        </h3>
        <p>
          See LaslesVPN everywhere to make it easier for you when you move
          <br />
          locations.
        </p>
      </section>

      <section class="map">
        <img class="img-1" src="./asset/Huge Global.jpg" alt="map" />
        <img class="img-2" src="./asset/Sponsored.jpg" alt="sponsored" />
      </section>

      <section class="customer">
        <div class="title">
          <h3>
            Trusted by Thousands of
            <br />
            Happy Customer
          </h3>
          <p>
            These are the stories of our customers who have joined us with great
            <br />
            pleasure when using this crazy feature.
          </p>
        </div>
        <div class="customer-message">
          <div class="row">
            <div class="col-md-4">
              <div class="message-1">
                <div class="row">
                  <div class="col-sm-6">
                    <img
                      class="cutomer-picture"
                      src="./asset/Group 1152.png"
                      alt="viezh"
                    />
                  </div>
                  <div class="col-sm-6">
                    <div class="rating">
                      <div class="box-1">
                        <h4>4.5</h4>
                      </div>
                      <div class="box-2">
                        <img src="./asset/star.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="message-2">
                <div class="row">
                  <div class="col-sm-6">
                    <img
                      class="cutomer-picture"
                      src="./asset/Group 1153.png"
                      alt="viezh"
                    />
                  </div>
                  <div class="col-sm-6">
                    <div class="rating">
                      <div class="box-1">
                        <h4>4.5</h4>
                      </div>
                      <div class="box-2">
                        <img src="./asset/star.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="message-3">
                <div class="row">
                  <div class="col-sm-6">
                    <img
                      class="cutomer-picture"
                      src="./asset/Group 1154.png"
                      alt="viezh"
                    />
                  </div>
                  <div class="col-sm-6">
                    <div class="rating">
                      <div class="box-1">
                        <h4>4.5</h4>
                      </div>
                      <div class="box-2">
                        <img src="./asset/star.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-bottom">
          <div class="row">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </section>

      <section class="subscribtion">
        <div class="message">
          <h3>
            Subscribe Now for <br />
            Get Special Features!
          </h3>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div class="subcribe-btn">
          <button>Subscribe Now</button>
        </div>
      </section>

      <footer>
        <div class="row">
          <div class="col-lg-6">
            <div class="social-media">
              <img src="./asset/Logo.jpg" alt="logo" />
              <p>
                <strong>LaslesVPN</strong> is a private virtual network that
                <br />
                has unique features and has high security.
              </p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </div>
              <div class="copyright">
                &copy;2020Lasles<strong>VPN</strong>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product-enage-earn">
              <div class="row">
                <div class="col-md-4">
                  <div class="product">
                    <h3>Product</h3>
                    <ul>
                      <li>Download</li>
                      <li>Pricing</li>
                      <li>Locations</li>
                      <li>Server</li>
                      <li>Countries</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="enage">
                    <h3>Engage</h3>
                    <ul>
                      <li>LaslesVPN ?</li>
                      <li>FAQ</li>
                      <li>Tutorials</li>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="earn">
                    <h3>Earn Money</h3>
                    <ul>
                      <li>Affiliate</li>
                      <li>Become Partner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
