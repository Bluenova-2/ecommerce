const Products = () => {
  const productList = [
    { id: 1, name: "Neural Link Headset", price: "$299", desc: "Experience the future of audio." },
    { id: 2, name: "Smart Glass Gen-4", price: "$450", desc: "AR integration for daily life." },
    { id: 3, name: "Bio-Watch Pro", price: "$199", desc: "Advanced health tracking." },
  ];

  return (
    <div className="page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productList.map(product => (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p>{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;