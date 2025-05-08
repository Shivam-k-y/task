// File: src/App.jsx
import React, { useState } from "react";

const menuData = {
  "Dell APEX Multicloud & aaS": [],
  Products: [
    {
      name: "Servers",
      description: "PowerEdge servers for any workload.",
    },
    {
      name: "Data Storage",
      description: "Scalable storage for modern workloads.",
    },
    {
      name: "Data Protection",
      description: "Secure and recover your critical data.",
    },
    {
      name: "Hyperconverged Infrastructure",
      description: "Combine compute, storage, and networking.",
    },
    {
      name: "Networking",
      description: "Build fast, reliable, secure networks.",
    },
    {
      name: "Infrastructure Accessories",
      description: "Cables, racks, rails, and more.",
    },
    {
      name: "AIOps & IT Observability",
      description: "Enhance IT operations with AI insights.",
    },
  ],
  Workloads: [
    {
      name: "AI/ML",
      description: "Accelerate artificial intelligence workloads.",
    },
    {
      name: "Virtualization",
      description: "Efficient virtualization with vSphere and Hyper-V.",
    },
  ],
  Industry: [
    { name: "Healthcare", description: "Secure, scalable infrastructure for healthcare." },
    { name: "Education", description: "Empowering students and educators with tech." },
  ],
  "Payment Solutions": [
    { name: "Flexible Financing", description: "Finance your IT investments smartly." },
  ],
  "Developers & DevOps": [
    { name: "APIs", description: "Explore Dell's developer API offerings." },
  ],
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState("Products");
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-10 font-sans">
      <div className="flex rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto border border-blue-600">
        {/* Left Category Column */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          {Object.keys(menuData).map((category) => (
            <div
              key={category}
              onMouseEnter={() => {
                setActiveCategory(category);
                setActiveItem(null);
              }}
              className={`p-4 cursor-pointer border-l-4 hover:bg-blue-50 transition-all duration-200 ${
                activeCategory === category ? "border-blue-600 bg-blue-50" : "border-transparent"
              }`}
            >
              <span className="text-gray-800 font-medium">{category}</span>
            </div>
          ))}
        </div>

        {/* Middle Item Column */}
        <div className="w-1/4 bg-gray-50 border-r border-gray-300">
          {menuData[activeCategory]?.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setActiveItem(item)}
              className={`p-4 cursor-pointer border-l-4 hover:bg-blue-100 transition-all duration-200 ${
                activeItem?.name === item.name ? "border-blue-600 bg-blue-100" : "border-transparent"
              }`}
            >
              <span className="text-blue-900 font-semibold">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Right Detail Column */}
        <div className="w-1/2 bg-white p-6">
          {activeItem ? (
            <>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {activeItem.name}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {activeItem.description}
              </p>
              <div className="mt-4">
                <a href="#" className="text-blue-600 underline font-medium text-sm">
                  Learn More
                </a>
              </div>
            </>
          ) : (
            <div className="text-gray-400 italic">Hover over a product to see details here.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
