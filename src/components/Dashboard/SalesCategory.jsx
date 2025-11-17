import React from "react";

export default function SalesCategory({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const radius = 60; // Radius réduit pour mieux s'adapter
  const circ = 2 * Math.PI * radius;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full h-full overflow-hidden">
      
      <h2 className="text-lg font-semibold mb-6">Répartition de la consommation de gaz</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
        
        {/* Donut Chart */}
        <div className="flex-shrink-0">
          <div className="relative w-[150px] h-[150px] mx-auto">
            <svg width="150" height="150" viewBox="0 0 150 150">
              <g transform="translate(75,75)">
                {data.reduce(
                  (acc, item, index) => {
                    const startOffset = acc.offset;
                    const strokeDash = (item.percent / 100) * circ;

                    acc.offset += strokeDash;

                    acc.elements.push(
                      <circle
                        key={index}
                        r={radius}
                        stroke={item.color}
                        strokeWidth="16" // Épaisseur réduite
                        fill="transparent"
                        strokeDasharray={`${strokeDash} ${circ}`}
                        strokeDashoffset={-startOffset}
                        strokeLinecap="round"
                        transform="rotate(-90)"
                      />
                    );

                    return acc;
                  },
                  { offset: 0, elements: [] }
                ).elements}
              </g>
            </svg>

            {/* Total center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-gray-500 text-xs">Total</span>
              <span className="text-xl font-bold">{total.toLocaleString()} kWh</span>
            </div>
          </div>
        </div>

        {/* Right labels */}
        <div className="space-y-4 flex-1 min-w-0">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span
                className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                style={{ background: item.color }}
              ></span>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm truncate">{item.label}</p>
                <p className="text-xs text-gray-500 whitespace-nowrap">
                  {item.percent}% • {item.value.toLocaleString()} kWh
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}