


// navbar start here

export const Header = () => {
  return (
    <div className="container  bg-body-tertiary header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href='' >Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='' >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='' >Feature</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href='' role="button">
                  Pricing
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link disabled" href='' aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
// navbar end here 

// top heading body start here 
export const Body = () => {
  return (
    <div className="container  bg-body-tertiary">
      <div className="heading col-lg-5">
        <h1>Custom jumbotron</h1>
        <p>Using  series of  utilities, you can create this jumbotron,
          just like the one in previous versions of Bootstrap.Check
          out the examples below for how you can remix and
          restyle it to your liking.
        </p>
        <button type="button" class="btn btn-primary">Example button</button>
      </div>
    </div>
  );
}
// top heading body end here 

// top heading footer strt here 
export const Footer = ()=> {
  return (
    <div className="container">
      <div className=" container col-lg-6  footer">
        <ul>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href='' >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='' >Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href='' aria-disabled="true">Pricing</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href='' role="button">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href='' aria-disabled="true">About</a>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className=" company">
        <p>2021 company, Inc</p>
      </div>


    </div>

  );
}


// top heading footer end here 



// CommentCard.js


export const CommentCard = ({ data }) => {
  return (
    <div className="comment-card container shadow">
      <img src={data.userProfilePicture} alt={`Person image`} className="profile-picture" />
      <div className="comment-details">
        <h4>{data.userName} <span>. UCLA</span></h4>
        <p>{data.userMessage}</p>
        <div className="footer">
          <a href='' >like . </a>
          <a href=''>reply</a>
          <p> . 2 sceonds ago</p>
        </div>
      </div>
    </div>
  );
};






// car cards strt here 



export const  Car= ({value}) => {
  return ( <div className="container">
  {value.map(( value,index) => {
    console.log(index);
    return (
      <div className="shadow " style={{ float: "left" }}>
        <div className="card" style={{ padding: 10, marginLeft: "10%", marginRight: "10%", border: "1px solid" }}>
          <img src={value.imgsrc} alt="car-img" className='img-fluid' style={{ marginBottom: 10, width: 250, height: 200 }}></img>
          <h3>{value.name}</h3>
          <p>{value.color}</p>
          <p>{value.model}</p>
        </div>
      </div>
    );
  })}
</div> );
}



// car cards end here 






