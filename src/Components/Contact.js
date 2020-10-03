import React, { Component } from 'react';
import axios from "axios";

class Contact extends Component {

   constructor(props){
      super(props);
      this.state = {contactName: "",  contactEmail: "", contactSubject: "", contactMessage: ""};
   }

   handleChange = e => this.setState({ [e.target.name]: e.target.value });

   handleForm = e => {
      axios.post(
          "https://formcarry.com/s/MAZVc9lP_", 
          this.state, 
          {headers: {"Accept": "application/json"}}
        )
        .then(function (response) {
          
          // access response.data in order to check formcarry response
          if(response.data.success){
            // handle success
            console.log(response.data.message)
          } else {
            // handle error
            console.log(response.data.message);
          }
   
        })
        .catch(function (error) {
          console.log(error);
        });
      
      e.preventDefault();
   }

   render() {

   if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var s = this.props.data.address.state;
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

               <form id="contactForm" onSubmit={this.handleForm} >
					<fieldset>

                  <div>
						   <label htmlFor="contactName" name="name">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail" name="email">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject" name="subject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage" name = "message">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit" name="Send">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>


           <div></div>
				   <div >
                  
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
