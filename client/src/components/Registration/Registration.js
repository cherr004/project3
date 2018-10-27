import React from "react";
import '../../Account.css';

class Registration extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
          <section className="signup">
            <img src="images/signup-bg.jpg" alt="" />
            <div className="container registration-form">
              <div className="signup-content">
                <form method="POST" id="signup-form" className="signup-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first_name">First name</label>
                      <input type="text" className="form-input" name="first_name" id="first_name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Last name</label>
                      <input type="text" className="form-input" name="last_name" id="last_name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-input" name="email" id="email" placeholder="johndoe@gmail.com" />
                  </div>
                  <div className="form-row">
                    <div className="form-group form-icon">
                      <label htmlFor="birth_date">Birth date</label>
                      <input type="text" className="form-input" name="birth_date" id="birth_date" placeholder="MM-DD-YYYY" />
                    </div>
                    <div className="form-radio">
                      <label htmlFor="gender">Gender</label>
                      <div className="form-flex">
                        <input type="radio" name="gender" defaultValue="male" id="male" defaultChecked="checked" />
                        <label htmlFor="male">Mr.</label>
                        <input type="radio" name="gender" defaultValue="female" id="female" />
                        <label htmlFor="female">Ms.</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone_number">Phone number</label>
                    <input type="number" className="form-input" name="phone_number" id="phone_number" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-input" name="password" id="password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="re_password">Repeat your password</label>
                      <input type="password" className="form-input" name="re_password" id="re_password" />
                    </div>
                  </div>
                  <div className="form-text">
                    <span className="add-info-link"><i className="zmdi zmdi-chevron-right" />Billing Info</span>
                    <div className="add_info">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-75">
                            <div className="container">
                              <div className="row">
                                <div className="col-50">
                                  <h3>Billing Information</h3>
                                  <label htmlFor="adr"><i className="fa fa-address-card-o" />
                                    Address</label>
                                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                  <div className="row">
                                    <div className="col-50">
                                      <label htmlFor="City">City</label>
                                      <input type="text" id="state" name="state" placeholder="Miami" />
                                      <div className="col-12">
                                        <label htmlFor="state">State</label>
                                        <input type="text" id="state" name="state" placeholder="FL" />
                                      </div>
                                      <div className="col-12">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder={10001} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <label htmlFor="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                <label htmlFor="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                <label htmlFor="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                <div className="row">
                                  <div className="col-50">
                                    <label htmlFor="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder={2018} />
                                  </div>
                                  <div className="col-50">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder={352} />
                                  </div>
                                </div>
                              </div>
                              <label>
                                <input type="checkbox" defaultChecked="checked" name="sameadr" className="valid" aria-invalid="false" style={{height: '1%'}} />
                                Shipping address same as billing
                              </label>
                              <input type="submit" defaultValue="Submit" className="btn" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Registration;
