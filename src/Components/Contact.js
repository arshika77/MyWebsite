import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm" action="https://formspree.io/f/meqpowve" method="POST">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

           <a id = "writing"></a>
            <aside className="four columns footer-widgets">
               <div className="widget widget_tweets">
                  <h2 className="widget-title"><font color="#BFBFFF">Writings</font></h2>
                  <ul id="twitter">
                     <li>
                        <span>
                        <a href="https://bethenovelpoet.wordpress.com/" target="_blank" rel="noopener noreferrer"><h4>Check out my writing blog!</h4></a>
                        </span>
                     </li>
                     <li>
                        <span>
                        <a href="https://www.instagram.com/scribesbyarshika/" target="_blank" rel="noopener noreferrer"><h4>Check out my Instagram writing account!</h4></a>
                        </span>
                     </li>
                     <li>
                        <span>
                        <a href="https://store.pothi.com/book/arshika-lalan-dear-diary/" target="_blank" rel="noopener noreferrer"><h4>Check out my published poetry book!</h4></a>
                        </span>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
