function Cards(obj) {
 return(
     <div className="cards">
         <div className="card">
             <img src={obj.image1} alt="" />
             <h3>{obj.title}</h3>
             <p>Price : $100</p>
             <button>Buy Now</button>
         </div>
     </div>
 )
}

export default Cards