import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chithramaya & Thalam | Coming Soon",
  description: "A premium creative studio offering precision offsite and human onsite visual experiences. We are currently preparing something extraordinary.",
};

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white selection:bg-white/20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Chithramaya & Thalam
          </span>
        </h1>
        
        <p className="max-w-xl text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDuration: '1s', animationDelay: '0.4s', animationFillMode: 'both' }}>
          We are currently elevating our digital experience.
        </p>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        
        <p className="mt-12 text-sm text-white/30 tracking-widest uppercase font-light animate-fade-in-up" style={{ animationDuration: '1s', animationDelay: '0.6s', animationFillMode: 'both' }}>
          Coming Soon
        </p>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCA0MGw0MC00ME0wIDBsNDAgNDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      
      {/* Custom Keyframes inside style tag for tailwind if they don't exist */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
        }
      `}} />
    </main>
  );
}
