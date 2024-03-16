import React, { useState } from 'react';
import './VendorPage.css'; // Import custom CSS for styling

function VendorPage() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState(null); // State for image
  const [productType, setProductType] = useState('Premium'); // State for product type

  const handleAddProduct = () => {
    if (newProductName.trim() !== '' && newImage) { // Ensure name and image are provided
      const newProduct = {
        id: Math.random().toString(36).substr(2, 9),
        name: newProductName.trim(),
        description: newDescription.trim(),
        type: productType,
        image: newImage
      };
      setProducts([...products, newProduct]);
      setNewProductName('');
      setNewDescription('');
      setProductType('Premium'); // Reset product type to Premium
      setNewImage(null); // Reset image input
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="vendor-page card">
      <h1 className="page-title">Vendor Page</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Name</span>
        </div>
        <input type="text" className="form-control" placeholder="Enter Product Name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
      </div>
      <div className="radio-group mb-3">
        <label className="radio-label">Product Type:</label>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="productType" id="premium" value="Premium"
            checked={productType === 'Premium'}
            onChange={() => setProductType('Premium')}
          />
          <label className="form-check-label" htmlFor="premium">Premium</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="productType" id="non-premium" value="Non-Premium"
            checked={productType === 'Non-Premium'}
            onChange={() => setProductType('Non-Premium')}
          />
          <label className="form-check-label" htmlFor="non-premium">Non-Premium</label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Description</span>
        </div>
        <textarea className="form-control" aria-label="With textarea" placeholder="Enter Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Upload</span>
        </div>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile01" accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
          />
          {/* <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label> */}
        </div>
      </div>
      <button onClick={handleAddProduct} className="btn btn-primary">Add Product</button>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Type: {product.type}</p>
              <img src={URL.createObjectURL(product.image)} alt={product.name} className="product-image" width={"40%"}/>
            </div>
            <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendorPage;
