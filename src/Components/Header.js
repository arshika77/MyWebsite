import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
      var certificates = this.props.data.certificates;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var designation = this.props.data.designation;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <ParticlesBg type="cobweb" color = '#D4AF37' num = '150' bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Projects and Background</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
            <li><a className = "nav-right-btn" href="#writing">Writing Portfolio</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <br></br>
            <h1 className="responsive-headline">{name}</h1>
            <br></br>
            <h3>{description}.</h3>
            <br></br>
            <h3>{designation}</h3>
            <hr />
            <ul className="social">
               <a href={certificates} className="button btn project-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-book"></i>Certificates</a>
               <a href={github} className="button btn github-btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;