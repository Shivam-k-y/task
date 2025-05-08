import { useState } from "react";

const menu = {
    "Products": [
      { name: "Servers", detail: "High-performance servers for all workloads." },
      { name: "Data Storage", detail: "Reliable storage solutions for your data." },
      { name: "Data Protection", detail: "Secure and recover your critical data." },
      { name: "Hyperconverged Infrastructure", detail: "Integrated compute and storage." },
      { name: "Networking", detail: "Scalable, high-speed networking hardware." },
      { name: "Infrastructure Accessories", detail: "Cables, racks, and other hardware." },
      { name: "AIOps & IT Observability", detail: "AI-powered monitoring and automation." },
    ],
    "Workloads": [
      { name: "AI & ML", detail: "Powerful infrastructure to accelerate AI workloads." },
      { name: "Database Management", detail: "Optimized systems for database processing." },
      { name: "Virtualization", detail: "Solutions to virtualize your IT environment." },
      { name: "Backup & Recovery", detail: "Efficient backup systems and disaster recovery." },
    ],
    "Industry": [
      { name: "Healthcare", detail: "Secure and scalable IT for healthcare systems." },
      { name: "Finance", detail: "Compliance-ready solutions for financial services." },
      { name: "Education", detail: "Connected classrooms and data security in education." },
      { name: "Manufacturing", detail: "Industrial-grade IT systems for automation." },
    ],
    "Payment Solutions": [
      { name: "Subscription Billing", detail: "Automated recurring billing tools." },
      { name: "Point-of-Sale Systems", detail: "Integrated POS hardware and software." },
      { name: "Online Payment Gateway", detail: "Secure online transactions with ease." },
      { name: "Fraud Detection", detail: "AI-based fraud monitoring and prevention." },
    ],
    "Developers & DevOps": [
      { name: "CI/CD Tools", detail: "Automate build and deployment pipelines." },
      { name: "API Management", detail: "Design, secure, and monitor your APIs." },
      { name: "Dev Environments", detail: "Cloud-based development and testing environments." },
      { name: "Monitoring & Logging", detail: "Track performance and logs in real time." },
    ],
  };
  

export default function Dropdown() {
  const [mainHovered, setMainHovered] = useState(null);
  const [subHovered, setSubHovered] = useState(null);

  return (
    <div className="relative inline-block">
      {/* Top Bar */}
      <div className="bg-white px-6 py-3 text-gray-800 font-semibold text-lg border-b shadow-sm">
        <span className="cursor-pointer">IT Infrastructure ⌄</span>

        {/* Dropdown Container */}
        <div className="absolute left-0 mt-2 flex bg-white border border-gray-200 rounded-lg shadow-2xl z-50">
          {/* Panel 1 - Main Menu */}
          <ul className="w-56 border-r border-gray-200 bg-gray-50 rounded-l-lg">
            {Object.keys(menu).map((mainItem) => (
              <li
                key={mainItem}
                onMouseEnter={() => {
                  setMainHovered(mainItem);
                  setSubHovered(null);
                }}
                className={`px-5 py-3 hover:bg-blue-100 transition-colors duration-150 cursor-pointer ${
                  mainHovered === mainItem ? "bg-blue-100 text-blue-800" : ""
                }`}
              >
                {mainItem}
              </li>
            ))}
          </ul>

          {/* Panel 2 - Sub Menu */}
          {mainHovered && menu[mainHovered]?.length > 0 && (
            <ul className="w-64 border-r border-gray-200 bg-white py-2">
              {menu[mainHovered].map((subItem) => (
                <li
                  key={subItem.name}
                  onMouseEnter={() => setSubHovered(subItem)}
                  className={`px-5 py-2 hover:bg-gray-100 transition-colors duration-150 cursor-pointer ${
                    subHovered?.name === subItem.name
                      ? "bg-gray-100 font-medium"
                      : ""
                  }`}
                >
                  {subItem.name}
                </li>
              ))}
            </ul>
          )}

          {/* Panel 3 - Detail Box */}
          {subHovered && (
            <div className="w-80 bg-gray-50 p-5 rounded-r-lg transition-all duration-200">
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                {subHovered.name}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {subHovered.detail}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
