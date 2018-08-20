import React, { Component } from 'react';
import '../css/footer.css';




class Footer extends Component {
		
  render() {
    return (
		
		<div className="makeFlex column footerWrap  padding16 textCenter">
				
		<p className="makeFlex perfectCenter appendTop20 appendBottom24">
		<a href="javascript:void(0)" className="homeSprite twitterIcon appendRight16"> Twitter </a>
		<a href="javascript:void(0)" className="homeSprite facebookIcon appendLeft16 appendRight16"> Facebook </a>
		<a href="javascript:void(0)" className="homeSprite googleIcon appendLeft16"> Google plus </a>
		</p>
		
		<p className="appendBottom24 appendTop20 makeFlex vrtlCenter">
		<a href="javascript:void(0)" className="homeSprite playStoreIcon appendRight8">Play Store</a>
		<a href="javascript:void(0)" className="homeSprite appStoreIcon appendLeft8">App Store</a>
		
		</p>
		
		<p className="flexOne font10 whiteText appendTop20">© 2017 MAKEMYTRIP PVT. LTD. </p>
		
		</div>
	
		
    );
  }
	
}

export default Footer;
