// zx9-speaker
import zx9speakerDesktop from "../../Assets/product-zx9-speaker/desktop/image-product.jpg";
import zx9speakermobile from "../../Assets/product-zx9-speaker/mobile/image-product.jpg";
import zx9speakertablet from "../../Assets/product-zx9-speaker/tablet/image-product.jpg";

// zx9-gallery one
import zx9Gallerymobile1 from "../../Assets/product-zx9-speaker/mobile/image-gallery-1.jpg";
import zx9Gallerytablet1 from "../../Assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
import zx9Gallerydesktop1 from "../../Assets/product-zx9-speaker/desktop/image-gallery-1.jpg";

// zx9 gallery two
import zx9Gallerymobile2 from "../../Assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
import zx9Gallerytablet2 from "../../Assets/product-zx9-speaker/tablet/image-gallery-2.jpg";
import zx9Gallerydesktop2 from "../../Assets/product-zx9-speaker/desktop/image-gallery-2.jpg";

// zx9 gallery three
import zx9Gallerymobile3 from "../../Assets/product-zx9-speaker/mobile/image-gallery-3.jpg";
import zx9Gallerytablet3 from "../../Assets/product-zx9-speaker/tablet/image-gallery-3.jpg";
import zx9Gallerydesktop3 from "../../Assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

// others zx7 speaker
import zx7LikesDesktop from "../../Assets/shared/desktop/image-zx7-speaker.jpg";
import zx7LikesTablet from "../../Assets/shared/tablet/image-zx7-speaker.jpg";
import zx7LikesMobile from "../../Assets/shared/mobile/image-zx7-speaker.jpg";

import xx99likesDesktop from "../../Assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import xx99likesTablet from "../../Assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import xx99likesMobile from "../../Assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

import xx59LikesDesktop from "../../Assets/shared/desktop/image-xx59-headphones.jpg";
import xx59LikesTablet from "../../Assets/shared/tablet/image-xx59-headphones.jpg";
import xx59LikesMobile from "../../Assets/shared/mobile/image-xx59-headphones.jpg";

const ProductData = [
  {
    category: "speaker",
    slug: "zx9-speaker",
    image: {
      mobile: zx9speakermobile,
      tablet: zx9speakertablet,
      desktop: zx9speakerDesktop,
    },
    newProduct: true,
    title: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: "4500",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    box: [
      { quantity: "2X", item: "Speaker unit" },
      { quantity: "2X", item: "Speaker cloth panel" },
      { quantity: "1X", item: "User manual" },
      { quantity: "1X", item: "3.5mm 10m audio cable" },
      { quantity: "1X", item: "10m optical cable" },
    ],

    gallery: {
      first: {
        mobile: zx9Gallerymobile1,
        tablet: zx9Gallerytablet1,
        desktop: zx9Gallerydesktop1,
      },
      second: {
        mobile: zx9Gallerymobile2,
        tablet: zx9Gallerytablet2,
        desktop: zx9Gallerydesktop2,
      },
      third: {
        mobile: zx9Gallerymobile3,
        tablet: zx9Gallerytablet3,
        desktop: zx9Gallerydesktop3,
      },
    },

    likes: [
      {
        id: "A1",
        image: {
          mobile: zx7LikesMobile,
          tablet: zx7LikesTablet,
          desktop: zx7LikesDesktop,
        },
        name: "ZX7 SPEAKER",
      },
      {
        id: "A2",
        image: {
          mobile: xx99likesMobile,
          tablet: xx99likesTablet,
          desktop: xx99likesDesktop,
        },
        name: "XX99 HEADPHONE",
      },
      {
        id: "A3",
        image: {
          mobile: xx59LikesMobile,
          tablet: xx59LikesTablet,
          desktop: xx59LikesDesktop,
        },
        name: "XX59  HEADPHONE",
      },
    ],
  },

  {
    category: "earphone",
    slug: "zx7-speaker",
    image: {
      mobile: zx9speakermobile,
      tablet: zx9speakertablet,
      desktop: zx9speakerDesktop,
    },
    new: true,
    title: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: "4500",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    box: [
      { quantity: "2X", item: "Speaker unit" },
      { quantity: "2X", item: "Speaker cloth panel" },
      { quantity: "1X", item: "User manual" },
      { quantity: "1X", item: "3.5mm 10m audio cable" },
      { quantity: "1X", item: "10m optical cable" },
    ],

    gallery: {
      first: {
        mobile: zx9Gallerymobile1,
        tablet: zx9Gallerytablet1,
        desktop: zx9Gallerydesktop1,
      },
      second: {
        mobile: zx9Gallerymobile2,
        tablet: zx9Gallerytablet2,
        desktop: zx9Gallerydesktop2,
      },
      third: {
        mobile: zx9Gallerymobile3,
        tablet: zx9Gallerytablet3,
        desktop: zx9Gallerydesktop3,
      },
    },

    likes: [
      {
        image: {
          mobile: zx7LikesMobile,
          tablet: zx7LikesTablet,
          desktop: zx7LikesDesktop,
        },
        name: "ZX7 SPEAKER",
      },
      {
        image: {
          mobile: xx99likesMobile,
          tablet: xx99likesTablet,
          desktop: xx99likesDesktop,
        },
        name: "XX59 HEADPHONE",
      },
      {
        image: {
          mobile: xx59LikesMobile,
          tablet: xx59LikesTablet,
          desktop: xx59LikesDesktop,
        },
        name: "XX59  HEADPHONE",
      },
    ],
  },
];

export default ProductData;
