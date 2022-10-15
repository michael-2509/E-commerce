import React, { Fragment } from "react";

import BestGear from "../../components/BestGear/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { category } from "../../components/ProductCategory/availableProductCategory";
import CategoryItem from "../../components/ProductCategory/CategoryItem";
import styled from "styled-components";

const Background = styled.section`
  display: flex;
  justify-content: center;
  background-color: #181717;
  margin: 5rem 0 8rem;
  padding: 5rem 0 5rem;
`;

const HeadphonePage = () => {
  // import headphone from category
  const { headphone } = category;

  const width = window.innerWidth;

  return (
    <Fragment>
      <Nav />
      <Background>
        <h1>Header</h1>
      </Background>

      {headphone.map((item, index) => (
        <CategoryItem
          classInfo={index % 2 === 1 ? "content-reverse" : ""}
          image={
            width < 767
              ? item.img.mobile
              : width > 767 && width < 1024
              ? item.img.tablet
              : item.img.desktop
          }
          newProduct={item.product}
          title={item.title}
          description={item.description}
          key={Math.random()}
        />
      ))}
      <CategoryNavigation />
      <BestGear />
      <Footer />
    </Fragment>
  );
};

export default HeadphonePage;
