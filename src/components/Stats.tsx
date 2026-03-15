const stats = [
  { value: '500+',    label: 'Patios Installed'      },
  { value: '15+',     label: 'Years in Business'     },
  { value: '100%',    label: 'Perth-Based Team'      },
  { value: '10-Year', label: 'Structural Warranty'   },
];

export function Stats() {
  return (
    <section className="bg-[#151412] border-y border-[#22211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < 3 ? 'lg:border-r border-[#22211E]' : ''}`}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-[#C8713A] mb-1">
                {stat.value}
              </div>
              <div className="text-[#5E5E58] text-xs uppercase tracking-[0.18em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
