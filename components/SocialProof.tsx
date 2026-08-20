import {
  Star,
  Heart,
  Users,
  PackageCheck,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Happy Kitchens",
    icon: <Users size={22} />,
  },
  {
    value: "50K+",
    label: "Products Delivered",
    icon: <PackageCheck size={22} />,
  },
  {
    value: "4.9/5",
    label: "Customer Rating",
    icon: <Star size={22} />,
  },
  {
    value: "100%",
    label: "Love for Flavour",
    icon: <Heart size={22} />,
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#efe7d9] py-16">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        <div className="mb-12 text-center">
          <div className="flex justify-center gap-1 text-[#d49326]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={17}
                fill="currentColor"
              />
            ))}
          </div>

          <h2 className="mt-4 text-2xl font-black text-[#26332d] md:text-3xl">
            Loved by kitchens across India
          </h2>

          <p className="mt-2 text-sm text-[#697169]">
            Everyday cooking. Authentic flavours. Happy families.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#0b4b38]/10 bg-[#faf7ef] p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#0b4b38]/8 text-[#0b4b38]">
                {stat.icon}
              </div>

              <p className="mt-4 text-3xl font-black text-[#0b4b38]">
                {stat.value}
              </p>

              <p className="mt-2 text-xs font-semibold text-[#697169]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}