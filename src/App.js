import './App.css';

function RecentlyAdded()
{
  return(
    <div className="main">
      <p className="m1">Recently Added Properties</p>
      <div style={{display:"flex",paddingLeft:"10%"}}>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      </div>
      <div className="m1"><p>Featured Properties</p> </div>
      <div style={{display:"flex",paddingLeft:"10%"}}>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      </div>
      <div style={{display:"flex",paddingLeft:"10%", marginTop:"3%"}}>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      <div className="m2">
        <img className="m3" src="\assets\img\f(3).jpg"/>
        <div className="m4">House Title</div>
        <div className="m5">
          <img src="\assets\img\LocationVector.png"/> Islamabad</div>
          <div className="m5">
          <img src="\assets\img\HouseSizeVector.png"/> 10 Marlas</div>
          <div className="m4">120000 PKR</div>
          <button className="m6">View Property</button>
      </div>
      </div>
     
    </div>
  );
}
function Footer()
{
  return(
    <div className="footer">
      <div className="f1">
      <img style={{padding:"30px"}} src="/assets/img/Aangan_238x238 2.png"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
      </div>
      <div className="f2">JOIN AS:</div>
      <div className="f3">
            PRIVATE USER
          </div>
      <div className="f4">
            REAL ESTATE AGENT
          </div>    
      <div className="f5">
            REAL ESTATE COMPANY
          </div>   
      <div className="f6">
        Quick Link
      </div>
      <div className="f7">
        ABOUT
      </div>
      <div className="f7">
        Contact us
      </div>
      <div className="f7">
        Plots
      </div>
      <div className="f7">
        Privacy
      </div>
      <div style={{ position:"absolute", width:"100%", height:"10%", marginTop:"22%"}}>
      <hr style={{backgroundColor:"white", width:"50%"}} />
      <h style={{marginLeft:"40%"}}>&copy; Copyright 2021. Aangan. All Rights Reserved</h>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="App"> 
      <div className="carousel slide" data-ride="carousel" id="carousel-1">
      <img className="logo" src="/assets/img/Aangan_238x238 2.png"/>
      <button className="AddProperty">Add Property+</button>
      <button className="SignIn">Sign In</button>
      <button className="SignUp">Sign Up</button>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100 d-block" src="assets/img/Rectangle_20.png" alt="Slide Image" loading="eager" />
              <div className="SearchBar ">
            <div>
          <button className="btnBUY">BUY</button>
          <button className="btnRENT">RENT</button>
          <button className="btnInvest">INVEST</button>
           </div>
           <div className="propertymenu">
             <p className="tag1">Location</p>
             <p className="tag2">Where to rent?</p>
             <p className="tag1">Price Range</p>
             <p className="tag2">Add Price</p>
           </div>
           <div className="propertymenu1">
             <p className="tag1">Area</p>
             <p className="tag2">Specific Area</p>
             <p className="tag1">Size Range</p>
             <p className="tag2">Add Size</p>
           </div>
           <div className="propertymenu2">
             <p className="tag1">Type</p>
             <p className="tag2">Property type</p>
             <p className="tag1">Beds</p>
             <p className="tag2">No. of Beds</p>
           </div>
           <div className="propertymenu3">
           </div>
           <div className="propertymenu4">
             <div style={{ width:"60%", marginLeft:"20%"}}>
             <img style={{Zindex:"1",width:"100%"}} src="/assets/img/Rectangle8.png"/>
             </div>
           </div>
          </div>
          
          <img className="logo1" src="/assets/img/NewAngan1.png"/>
              </div>
            <div className="carousel-item">
              <img class="img-fluid w-100 d-block shadow-lg" src="assets/img/Rectangle_20.png" alt="Slide Image" loading="eager" />
              <div className="SearchBar1" >
                <div style={{ width:"100%"}}>
                <img className="cirMenu2" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu1" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu3" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu4" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu5" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu6" src="/assets/img/Aangan_238x2383.png"/>
                  </div>
                
              </div>
              </div>
        </div>
        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon text-light"></span><span class="sr-only">Next</span></a></div>
        <ol class="carousel-indicators" data-bss-hover-animate="flash">
        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li> 
        </ol>
    </div>
    

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    </div>
  );
}
export default Slider;
export {Footer,RecentlyAdded};