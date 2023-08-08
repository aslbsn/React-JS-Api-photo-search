import ImageItem from "./ImageItem";

function ImageList ({imagesPlaceholder}) {
    return (<div className='imageList'>

{imagesPlaceholder.map((image, index)=>{
   return <ImageItem key={index} item={image}/>
})}
    </div>  );
}

export default ImageList;