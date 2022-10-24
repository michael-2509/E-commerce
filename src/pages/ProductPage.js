import React from "react";

import { useParams } from "react-router-dom";

import BestGear from "../components/BestGear/BestGear";
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation";
import Feature from "../components/Product/FeatureItem";
import Gallery from "../components/Product/GalleryItem";
import Info from "../components/Product/InfoItem";
import Likes from "../components/Product/LikeItem";
import Nav from "../components/Nav/Nav";
import productData from "../components/Product/ProductPageData";
import Footer from "../components/Footer/Footer";

const Product = () => {
  const params = useParams();
  const { slug } = params;

  const data = productData.find((item) => item.slug === slug);

  return (
    <>
      <Nav />
      <Info data={data} />
      <Feature data={data} />
      <Gallery data={data} />
      <Likes data={data} />
      <CategoryNavigation />
      <BestGear />
      <Footer />
    </>
  );
};

export default Product;
