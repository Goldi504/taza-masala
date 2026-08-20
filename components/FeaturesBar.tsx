import {
  Truck,
  Headphones,
  PackageCheck,
  LockKeyhole,
} from "lucide-react";

const services = [
  {
    title: "Free Shipping",
    description: "On orders above ₹499",
    icon: <Truck size={27} strokeWidth={1.5} />,
  },
  {
    title: "Customer Support",
    description: "+91 1800 123 4567",
    icon: <Headphones size={27} strokeWidth={1.5} />,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns",
    icon: <PackageCheck size={27} strokeWidth={1.5} />,
  },
  {
    title: "Secure Payment",
    description: "100% safe & secure",
    icon: <LockKeyhole size={27} strokeWidth={1.5} />,
  },
];

export default function FeaturesBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#073c2f]">
      
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#d9a544]/10 blur-3xl" />

      <div className="absolute right-[-100px] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#0f6049]/30 blur-3xl" />

      <div className="relative mx-auto grid w-[92%] max-w-[1450px] sm:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => (
          <div
            key={service.title}
            className={`group flex items-center gap-4 px-6 py-7 transition duration-300 hover:bg-white/[0.04] ${
              index !== services.length - 1
                ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9a544]/15 text-[#e5bb67] transition duration-300 group-hover:scale-110 group-hover:bg-[#d9a544] group-hover:text-[#073c2f]">
              {service.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-sm font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-1 text-xs text-white/55">
                {service.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}