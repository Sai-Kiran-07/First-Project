const HeroContent = () =>{
 return (
    <div className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-button">
                <button className="shop-btn">Shop Now</button>
                <button className="cat-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand_icons">
                <img src="/images/flipkart.png"></img>
                <img src="/images/amazon.png"></img>
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png"></img>
        </div>
    </div>
 )
}

export default HeroContent;