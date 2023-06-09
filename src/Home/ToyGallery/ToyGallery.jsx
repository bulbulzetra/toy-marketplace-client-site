import Marquee from "react-fast-marquee";

// This is Toy Photo Gallery Section
const ToyGallery = () => {
    return (
        <div className="my-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Toy Gallery</h2>
            <Marquee>
                <img className="w-[300px] h-[400px] mx-5" src="https://cdn.pixabay.com/photo/2023/04/11/15/51/ai-generated-7917611_1280.jpg" />
                <img className="w-[300px] h-[400px] mx-5" src="https://cdn.pixabay.com/photo/2014/12/21/23/58/toy-576484_1280.png" />
                <img className="w-[300px] h-[400px] mx-5" src="https://www.superherotoystore.com/cdn/shop/products/15266_03_PNG__05404_1600x.png?v=1674125789"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/41DGTYc90qL.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://www.shoppersbd.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/u/superman-man2.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://images-na.ssl-images-amazon.com/images/I/715zrqwr8qL._AC_UL600_SR600,600_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://www.hasbro.com/common/productimages/en_US/EE8FF2CE80434147BC15FAB2E95580CF/a4f4933cd4bef095a3aa9222f1e99670d3cbbb30.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/71vJN7454cL._AC_SL1500_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/61BQr8cGfUL._AC_UF1000,1000_QL80_.jpg"/>
                <img className="w-[300px] h-[400px] mx-5" src="https://m.media-amazon.com/images/I/719s1194ksL._AC_SL1500_.jpg"/>
            </Marquee>
        </div>
    );
};

export default ToyGallery;