import React,{Component} from 'react';
import './props/style.css';


class App extends Component {
    render(){
      return(
        
        <div className="wrapper">
         <div className="header">
            <div className="container">
               
                <img className="logo" src={require('./props/logozalo.jpg')} />
                <div className ="link1" >
		<ul>
		<li ><a href="#">Wanita</a></li>
		<li ><a href="#">pria</a></li>
		<li ><a href="#">anak anak </a></li>
		</ul>
  </div> 
 
  <form id="searchbox" method="" action="" >
    <input type="text" size="22" placeholder="Cari Produk, Tren dan Merek" />
    <input id="button-submit" type="submit" value=" "/>
    </form>  

      <div className="menu">
		<ul>
		<li class="nav1"><a href="#"></a></li>
		<li class="nav2"><a href="#"></a></li>
		<li class="nav3"><a href="#"></a></li>
		</ul>
		</div>
            </div>  
            
         </div>
         <div className ="link" >
		<ul>
		<li class="gam1"><a href="#">Produk original & terjamin</a></li>
		<li class="gam2"><a href="#">Ribuan fashion brand</a></li>
		<li class="gam3"><a href="#">Gratis pengembalian</a></li>
		<li class="gam4"><a href="#">Pertanyaan ?</a></li>

		</ul>
  </div>
  <div className="slider">
    <img className="container" src={require('./props/banner.png')} /> 

  </div>
   <div className="slider">

    <img className="container" src={require('./props/295cf90.png')} /> 
  </div>
	<div className= "content">
		<div class="container">
		<div class="content_top">
		  <p>&nbsp;</p>
		
		  <h1 align="center"> Featured Brands</h1>  
		<p align="center">&nbsp;</p>
		
    <img className="section1" src={require('./props/19-Fashion-Logo-Design.jpg')} />

    <img className="section1" src={require('./props/260px-Official_Logo_of_Splash_Fashions_(Splash_Gulf_LLC.).jpg')} />
			
    <img className="section1" src={require('./props/550x350_ALDO_02180702.png')} />

    <img className="section1" src={require('./props/550x350_DC_02180702_02180702.png')} />

    <img className="section1" src={require('./props/550x350_LEVIS_02180702.png')} />

    <img className="section1" src={require('./props/2215218765.png')} />
		
    <img className="last-section1" src={require('./props/Aurora+Logo.png')} />
		  
    <img className="section1" src={require('./props/BiteBrands_merek-fashion-brand-designer-luxury-dunia-world-famous-terkenal-populer_05.jpg')} />

    <img className="section1" src={require('./props/BiteBrands_merek-fashion-brand-designer-luxury-dunia-world-famous-terkenal-populer_25.jpg')} />

    <img className="section1" src={require('./props/HAPh7GFYgA.jpg')} />

    <img className="section1" src={require('./props/BiteBrands_merek-fashion-brand-designer-luxury-dunia-world-famous-terkenal-populer_32.jpg')} />

    <img className="section1" src={require('./props/images.png')} />

    <img className="section1" src={require('./props/YgUAvHBnzj.jpg')} />

     <img className="last-section1" src={require('./props/download.png')} />

		</div>
		</div>
		<p>&nbsp;</p>
		
		<div className="container">
	
		<h1 align="center"> New This Week </h1>
		<p align="center">&nbsp;</p>

		<div className="section">
	
		<img src={require('./props/8e07972a14714bf9d691786532490314_600x400 - Copy.jpg')} />
		<center>
		<h3> Outerwear pieces</h3>
		<p> Pilihan outerwear yang wajib kamu punya</p>
		</center>
		</div>


    
			<div class="section">

		
		<img src={require('./props/sksxxmlxs.jpg')} />
		<center>
		<h3> Columbia style</h3>
		<p> Koleksi untuk melengkapi segala kebutuhan</p>
		</center>
		
		</div>

			<div class="last-section">
				
		<img src={require('./props/xwwxwxw.jpg')} />
			
			<center>
		<h3> Sport Outfit </h3>
		<p> Tampilan menarik dari koleksi ini</p>
		</center>	
		
		</div>
	      
		</div>
		</div>
        </div>
        
      )
    }
}

export default App;