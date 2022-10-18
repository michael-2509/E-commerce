import React from "react";

import { useParams } from "react-router-dom";
import BestGear from "../components/BestGear/BestGear";
import CategoryNavigation from "../components/CategoryNavigation/CategoryNavigation";
import Nav from "../components/Nav/Nav";
import Feature from "../components/Product/FeatureItem";
import Gallery from "../components/Product/GalleryItem";
import Info from "../components/Product/InfoItem";
import Likes from "../components/Product/LikeItem";

import productData from "../components/Product/ProductPageData";

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
    </>
  );
};

export default Product;
