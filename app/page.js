'use client';
import { useState } from "react";
import Image from "next/image";
import { Container } from "@medusajs/ui";
import About from "@/app/components/about.jsx";
import Contact from "@/app/components/contact";

const images = {
  brown: [
    { id: 1, url: '/b1.jpg' },
    { id: 2, url: '/b2.jpg' },
    { id: 3, url: '/b3.jpg' },
    { id: 4, url: '/b4.jpg' },
  ],
  green: [
    { id: 1, url: '/vert1.jpg' },
    { id: 2, url: '/vert2.jpg' },
    { id: 3, url: '/vert3.jpg' },
    { id: 4, url: '/vert4.jpg' },
  ],
};

const sizes = [
  { id: 'S', label: 'S' },
  { id: 'M', label: 'M' },
  { id: 'L', label: 'L' },
];

export default function Home() {
  const [color, setColor] = useState('brown'); // Default color changed to 'brown'
  const [selectedSize, setSelectedSize] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    topPrice: false, // State for top price checkbox
    labsaKemla: false, // State for labsa kemla checkbox
  });

  const handleImageClick = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if required fields are filled
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Prepare data to send
    const postData = {
      ...formData,
      size: selectedSize,
      color,
      type: formData.topPrice ? "Top Price - 20DT" : "Labsa Kemla - 54DT",
    };
  
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Response from server:', result);
  
      // Reset form data and selectedSize
      setFormData({
        name: '',
        phone: '',
        address: '',
        city: '',
        topPrice: false,
        labsaKemla: false,
      });
      setSelectedSize('');
      setColor('brown'); // Reset color to default after submission
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error, show error message, etc.
    }
  };
  

  return (
    <div>
      <About />
      <div className="flex flex-col lg:flex-row w-full h-screen">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-y-4 p-4 ">
          {images[color].map((image) => (
            <Container key={image.id} className="relative aspect-square w-full overflow-hidden bg-ui-bg-subtle cursor-pointer" onClick={() => handleImageClick(image)}>
              <Image
                src={image.url}
                priority={false}
                className="absolute inset-0 rounded"
                alt={`Product image ${image.id}`}
                fill
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                style={{ objectFit: "cover" }}
              />
            </Container>
          ))}
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg max-w-3xl overflow-hidden">
                <Image
                  src={modalImage.url}
                  priority={true}
                  className="rounded-lg"
                  alt={`Product image ${modalImage.id}`}
                  layout="responsive"
                  width={800}
                  height={600}
                />
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={closeModal}>
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 bg-gray-100 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-bold mb-4">Product Customization</h2>
          <form className="flex flex-col gap-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex gap-x-4 items-center">
              {/* Color Selection Buttons */}
              <button
                type="button"
                className={`w-8 h-8 rounded-full ${color === 'brown' ? 'ring-2 ring-blue-500' : ''}`}
                style={{ backgroundColor: '#F8E1BF' }}
                onClick={() => setColor('brown')}
              />
              <button
                type="button"
                className={`w-8 h-8 rounded-full ${color === 'green' ? 'ring-2 ring-green-500' : ''}`}
                style={{ backgroundColor: '#005148' }}
                onClick={() => setColor('green')}
              />
              
              {/* Size Selection Buttons */}
              {sizes.map((size) => (
                <button
                  key={size.id}
                  type="button"
                  className={`w-12 h-12 flex items-center justify-center border border-gray-300 rounded focus:outline-none ${selectedSize === size.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                  onClick={() => handleSizeSelect(size.id)}
                >
                  {size.label}
                </button>
              ))}
            </div>
            {/* Customization Checkboxes */}
            <div className="flex flex-col gap-y-2">
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="topPrice"
                  value="Top Price - 20DT"
                  checked={formData.topPrice}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span className={`text-gray-800 font-bold ${formData.topPrice ? 'text-blue-600' : ''}`}>Top Price - 20DT</span>
              </label>
              <label className="flex items-center gap-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="labsaKemla"
                  value="Labsa Kemla - 54DT"
                  checked={formData.labsaKemla}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span className={`text-gray-800 font-bold ${formData.labsaKemla ? 'text-blue-600' : ''}`}>Labsa Kemla - 54DT</span>
              </label>
            </div>
            {/* Form Inputs */}
            <label className="flex flex-col">
              <span className="font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium">Address</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium">City</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
              />
            </label>
            {/* Submit Button */}
            <button type="submit" className="p-2 bg-blue-600 text-white rounded mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
