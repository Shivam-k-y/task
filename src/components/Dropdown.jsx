import { useState } from "react";

const menu = {
  Products: [
    { name: "Servers", detail: "High-performance servers for all workloads." },
    {
      name: "Data Storage",
      detail: "Reliable storage solutions for your data.",
    },
    { name: "Networking", detail: "Scalable, high-speed networking hardware." },
  ],
  Workloads: [
    { name: "AI & ML", detail: "Powerful infrastructure for AI/ML models." },
    {
      name: "Backup & Recovery",
      detail: "Efficient systems for disaster recovery.",
    },
  ],
  Industry: [
    { name: "Healthcare", detail: "Secure IT solutions for healthcare." },
    {
      name: "Finance",
      detail: "Compliant infrastructure for banks and fintech.",
    },
  ],
  "Payment Solutions": [
    {
      name: "POS Systems",
      detail: "Modern point-of-sale devices and software.",
    },
    {
      name: "Online Payment Gateway",
      detail: "Secure and fast digital transactions.",
    },
  ],
  "Developers & DevOps": [
    { name: "CI/CD Pipelines", detail: "Automate your delivery pipelines." },
    {
      name: "Monitoring Tools",
      detail: "Keep your apps observable and reliable.",
    },
  ],
};

export default function Dropdown() {
  const [mainHovered, setMainHovered] = useState(null);
  const [subHovered, setSubHovered] = useState(null);

  return (
    <div className="relative inline-block w-full">
      <div className="bg-white px-8 py-4 border-b shadow-sm text-gray-900 font-semibold text-xl">
        <span className="cursor-pointer">IT Infrastructure ⌄</span>

        {/* Dropdown */}
        <div className="absolute left-0 mt-2 flex border shadow-2xl bg-white rounded-lg z-50">
          {/* Panel 1 */}
          <ul className="w-64 bg-blue-50 rounded-l-lg border-r">
            {Object.keys(menu).map((main) => (
              <li
                key={main}
                onMouseEnter={() => {
                  setMainHovered(main);
                  setSubHovered(null);
                }}
                className={`px-6 py-4 cursor-pointer text-blue-800 hover:bg-blue-100 transition-all ${
                  mainHovered === main ? "bg-blue-100 font-medium" : ""
                }`}
              >
                {main}
              </li>
            ))}
          </ul>

          {/* Panel 2 */}
          {mainHovered && menu[mainHovered]?.length > 0 && (
            <ul className="w-72 bg-white border-r px-6 py-4">
              {menu[mainHovered].map((sub) => (
                <li
                  key={sub.name}
                  onMouseEnter={() => setSubHovered(sub)}
                  className={`py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md px-2 transition ${
                    subHovered?.name === sub.name
                      ? "bg-gray-100 font-medium"
                      : ""
                  }`}
                >
                  {sub.name}
                </li>
              ))}
            </ul>
          )}

          {/* Panel 3 */}
          {subHovered && (
            <div className="w-96 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {subHovered.name}
              </h3>
              <p className="text-sm text-gray-600">{subHovered.detail}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
