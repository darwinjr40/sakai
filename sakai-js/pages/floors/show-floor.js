import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { ProductService } from '../../demo/service/ProductService';
import { PhotoService } from '../../demo/service/PhotoService';
import { plantas } from './data';
import Link from 'next/link';

const MediaDemo = () => {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);

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
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const paramValue = params.get('id');
        console.log(paramValue);
        setProducts(plantas[paramValue])
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

    };
    return (
        <div className="grid p-fluid">
            <div className="col-10">
                <div className="card">
                    <h5>Fotografias de Proceso</h5>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                </div>
            </div>
            <div className="col-2">
                <div className="card">
                    {/* <img src='https://media.istockphoto.com/id/1095468748/es/vector/c%C3%B3digo-qr-resumen-vector-moderno-bar-c%C3%B3digo-de-ejemplo-para-smartphone-an%C3%A1lisis-aislado.jpg?s=612x612&w=0&k=20&c=TaGm94BpiWPRm8xWk4RYvdrKN7vAN27nyv37tUxjWbo=' style={{ width: '100%', display: 'block' }}></img> */}
                    <img src='https://uploads-ssl.webflow.com/600d5379677b7b23d3066067/6029c72c210ac36ba68e4c45_qrcode.png' style={{ width: '100%', display: 'block' }}></img>
                    <Link href="/traceability">
                        ver publico
                    </Link>
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
