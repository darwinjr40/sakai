import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { ProductService } from '../../demo/service/ProductService';
import { PhotoService } from '../../demo/service/PhotoService';

const MediaDemo = () => {
    const [products, setProducts] = useState([
        {
            name: "Plantado",
            data: "Lote de Plantas",
            alt: "Description for Image 1",
            itemImageSrc: "https://www.orquideas.eu/wp-content/uploads/2020/12/1607291434_294_%C2%BFComo-crecen-las-orquideas-Ciclo-de-vida-fascinante-del-cultivo.jpg",
            thumbnailImageSrc: "https://www.orquideas.eu/wp-content/uploads/2020/12/1607291434_294_%C2%BFComo-crecen-las-orquideas-Ciclo-de-vida-fascinante-del-cultivo.jpg",
        },
        {
            name: "Crecimiento",
            data: "Lote de Plantas",
            alt: "Description for Image 2",
            itemImageSrc: "https://buenagranja.com/wp-content/uploads/2020/09/Siembra-y-trasplante-de-la-orqu%C3%ADdea.jpg",
            thumbnailImageSrc: "https://buenagranja.com/wp-content/uploads/2020/09/Siembra-y-trasplante-de-la-orqu%C3%ADdea.jpg",
        },
        {
            name: "desarollo",
            data: "Lote de Plantas",
            alt: "Description for Image 3",
            itemImageSrc: "https://i.ytimg.com/vi/NxhztpFGqfs/maxresdefault.jpg",
            thumbnailImageSrc: "https://i.ytimg.com/vi/NxhztpFGqfs/maxresdefault.jpg",
        },
        {
            name: "Preparado",
            data: "Lote de Plantas",
            alt: "Description for Image 4",
            itemImageSrc: "https://www.lanacion.com.py/resizer/Qdq_sY6muxuBWTUQmNM0Sg2k4CA=/1200x630/smart/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-lanacionpy.s3.amazonaws.com/public/IJOLWIX5UJHETMDJHXM373EVD4.jpg",
            thumbnailImageSrc: "https://www.lanacion.com.py/resizer/Qdq_sY6muxuBWTUQmNM0Sg2k4CA=/1200x630/smart/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-lanacionpy.s3.amazonaws.com/public/IJOLWIX5UJHETMDJHXM373EVD4.jpg",
        
        },
        {
            name: "comercio",
            data: "Lote de Plantas",
            alt: "Description for Image 5",
            itemImageSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/ZFN46PFOIRG5PIOCDQLPSQ7N6Y.jpg",
            thumbnailImageSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/ZFN46PFOIRG5PIOCDQLPSQ7N6Y.jpg",
        },
    ]);
    const [images, setImages] = useState([ ]);

    const galleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    const carouselResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        // ProductService.getProductsSmall().then((products) => setProducts(products));

        // PhotoService.getImages().then((images) => setImages(images));
    }, []);

    const carouselItemTemplate = (product) => {
        return (
            <div className="">
                {/* <div className="border-1 surface-border border-round m-1 text-center py-5"> */}
                <div className="mb-3">
                    {/* <img src={`/demo/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" /> */}
                    <img src={`${product.itemImageSrc}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="p-mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">{product.data}</h6>
                    <h6 className="mt-0 mb-3">Fecha: 05-06-2022</h6>
                    {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
                    {/* <span className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}>{product.inventoryStatus}</span> */}
                    {/* <div className="car-buttons mt-5">
                        <Button rounded className="mr-2" icon="pi pi-search"></Button>
                        <Button severity="success" rounded className="mr-2" icon="pi pi-star"></Button>
                        <Button severity="help" rounded icon="pi pi-cog"></Button>
                    </div> */}
                </div>
            </div>
        );
    };

    const galleriaItemTemplate = (item) => <img src={`${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    const galleriaThumbnailTemplate = (item) => <img src={`${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    // const galleriaItemTemplate = (item) => <img src={`/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    // const galleriaThumbnailTemplate = (item) => <img src={`/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;

    const handleClick = () => {
        // Acciones a realizar cuando se hace clic en el botón
        console.log(images);
    };
    return (
        <div className="grid p-fluid">
            <div className="col-12">
                <div className="card">
                    <h5>Fotografias de Proceso</h5>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Galleria</h5>
                    <Galleria value={products} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '800px', margin: 'auto' }} item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria>
                    {/* <Galleria value={images} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '800px', margin: 'auto' }} item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria> */}
                </div>
            </div>

            <div>
                <button onClick={handleClick}>Haz clic aquí</button>
            </div>
            {/* <div className="col-12">
                <div className="card">
                    <h5>Image</h5>
                    <div className="flex justify-content-center">
                        <Image src={`/demo/images/galleria/galleria11.jpg`} alt="galleria" width={250} preview />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MediaDemo;
