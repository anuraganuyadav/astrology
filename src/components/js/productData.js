export const products = [
  {
    category_name: "Gemstones",
    title: "Amethyst Gemstone, Katela Stone, Oval Shape",
    image: "../img/products/gemstone.jfif",
    date: "28th January",
    views: "5 Views",
    popular_products: "Active",
  },
  {
    category_name: "Bracelets",
    title: "Amethyst Gemstone, Katela Stone, Oval Bracelets",
    image: "../img/products/bracelet.jfif",
    date: "28th January",
    views: "5 Views",
    popular_products: "Active",
  },
  {
    category_name: "Crystal",
    title: "Amethyst Gemstone, Katela Stone, Oval Crystal",
    image: "../img/products/crystal.jfif",
    date: "28th January",
    views: "5 Views",
    popular_products: "Active",
  },
  {
    category_name: "Conch",
    title: "Amethyst Gemstone, Katela Stone, Oval Conch",
    image: "../img/products/coach.jfif",
    date: "28th January",
    views: "5 Views",
    popular_products: "Active",
  },
];

// Pagination logic function
export const getPaginatedProducts = (
  currentPage,
  productsPerPage,
  filteredProducts
) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastProduct - productsPerPage;
  return filteredProducts.slice(indexOfFirstPost, indexOfLastProduct);
};

export const calculateTotalPages = (filteredProducts, productsPerPage) => {
  return Math.ceil(filteredProducts.length / productsPerPage);
};
