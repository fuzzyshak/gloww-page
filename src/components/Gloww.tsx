import { useEffect, useState } from 'react';
import { Menu, X, Sparkles, Camera, Wand2, Image as ImageIcon, Heart, Moon, Briefcase, Flower2, Sun, Gem } from 'lucide-react';

/* Page-scoped Gloww palette (taken from the brand photo) — kept local so it never leaks into GymmAI pages. */
const C = {
  deep: '#3B302B',
  taupe: '#8A766A',
  cream: '#F6EEE6',
  creamDark: '#EADCCF',
  rose: '#B5736A',
  roseLight: '#D9A08F',
  gold: '#E8C9A0',
  ink: '#2A211D',
}

const roseGrad = `linear-gradient(135deg, ${C.rose}, ${C.roseLight})`;
const serif = "'Cormorant Garamond', 'Cormorant', Georgia, serif";
const sans = "'Karla', system-ui, sans-serif";

const occasions = [
  { icon: Gem, label: 'Weddings' },
  { icon: Moon, label: 'Eid' },
  { icon: Sparkles, label: 'Evening' },
  { icon: Briefcase, label: 'Office' },
  { icon: Flower2, label: 'Henna Night' },
  { icon: Sun, label: 'Everyday' },
];

const steps = [
  { icon: Camera, title: 'Upload your photo', text: 'Take a selfie or upload a clear photo of your face.' },
  { icon: Wand2, title: 'Paris suggests looks', text: 'She picks looks that suit you and your occasion.' },
  { icon: ImageIcon, title: 'See them on you', text: 'Each look is applied to your own image, before and after.' },
];

export function Gloww() {
  const [open, setOpen] = useState(false);

  // Paris corner widget (pasted embed code), only on /gloww
  useEffect(() => {
    const before = new Set(Array.from(document.head.querySelectorAll('style')));
    const root = document.createElement('div');
    root.id = 'paris-widget-root';
    document.body.appendChild(root);
    const s = document.createElement('script');
    s.src = '/embed/paris-widget-snippet.js';
    document.body.appendChild(s);
    return () => {
      s.remove();
      document.getElementById('paris-widget-root')?.remove();
      document.querySelectorAll('style').forEach((el) => {
        if (!before.has(el) && el.textContent?.includes('paris-widget')) el.remove();
      });
    };
  }, []);

  useEffect(() => {
    document.title = 'Gloww – Meet Paris, your AI Beauty Consultant';
    const id = 'gloww-fonts';
    if (!document.getElementById(id)) {
      const l = document.createElement('link');
      l.id = id;
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Karla:wght@400;500;600&display=swap';
      document.head.appendChild(l);
    }
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const reveal = { opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s ease, transform .8s ease' } as const;
  const links = [
    { href: '#meet', label: 'Meet Paris' },
    { href: '#how', label: 'How it works' },
    { href: '#try', label: 'Try a look' },
  ];

  return (
    <div style={{ background: C.cream, color: C.ink, fontFamily: sans }} className="min-h-screen">
      {/* Nav */}
      <nav style={{ background: C.deep }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" style={{ fontFamily: serif, color: C.gold }} className="text-3xl font-semibold tracking-wide">
            gloww<span style={{ color: C.roseLight }}>.live</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} style={{ color: C.cream }} className="text-sm tracking-[0.15em] uppercase opacity-80 hover:opacity-100 transition-opacity">
                {l.label}
              </a>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: C.cream }} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-4" style={{ background: C.deep }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: C.cream }} className="text-sm tracking-[0.15em] uppercase">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header id="top" style={{ background: `radial-gradient(ellipse at 20% 30%, ${C.taupe} 0%, ${C.deep} 70%)` }} className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: C.gold }} />
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div data-reveal style={reveal}>
            <p style={{ color: C.gold }} className="text-xs tracking-[0.35em] uppercase mb-4">Beauty without borders · KSA | GCC</p>
            <h1 style={{ fontFamily: serif, color: C.cream }} className="text-5xl md:text-6xl leading-[1.05] font-semibold">
              Welcome to Gloww
              <span className="block italic mt-3 text-3xl md:text-4xl" style={{ color: C.roseLight }}>meet Paris —</span>
              <span className="block text-3xl md:text-4xl mt-1">your AI Beauty Consultant</span>
            </h1>
            <div className="w-16 h-px my-6" style={{ background: C.gold }} />
            <p style={{ color: C.creamDark }} className="text-lg max-w-md">
              Paris will save you time in finding the perfect makeup look for your occasion.
            </p>
          </div>
          <div data-reveal style={reveal} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-50" style={{ background: roseGrad }} />
              <picture>
                <source type="image/webp" srcSet="/gloww/paris-400.webp 400w, /gloww/paris-640.webp 640w, /gloww/paris-840.webp 840w" sizes="(max-width: 768px) 85vw, 420px" />
                <img
                  src="/gloww/paris-640.jpg"
                  srcSet="/gloww/paris-400.jpg 400w, /gloww/paris-640.jpg 640w, /gloww/paris-840.jpg 840w"
                  sizes="(max-width: 768px) 85vw, 420px"
                  alt="Paris, Gloww's AI Beauty Consultant"
                  fetchPriority="high"
                  decoding="async"
                  width={840}
                  height={1260}
                  className="relative w-full max-w-[420px] rounded-[2rem] shadow-2xl"
                  style={{ border: `1px solid ${C.gold}55`, height: 'auto' }}
                />
              </picture>
            </div>
          </div>
        </div>
      </header>

      {/* Occasions */}
      <section id="meet" className="max-w-6xl mx-auto px-5 py-20 text-center">
        <div data-reveal style={reveal}>
          <p style={{ color: C.rose }} className="text-xs tracking-[0.35em] uppercase mb-3">Meet Paris</p>
          <h2 style={{ fontFamily: serif }} className="text-4xl md:text-5xl font-semibold max-w-2xl mx-auto">
            Paris was trained on makeup looks for different occasions.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
          {occasions.map(({ icon: Icon, label }) => (
            <div key={label} data-reveal style={{ ...reveal, background: '#fff', border: `1px solid ${C.creamDark}` }} className="rounded-2xl py-6 px-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: C.cream, color: C.rose }}>
                <Icon size={22} />
              </div>
              <p style={{ fontFamily: serif }} className="text-xl font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Just ask */}
      <section id="how" style={{ background: C.creamDark }} className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <div data-reveal style={reveal} className="text-center mb-10">
            <p style={{ color: C.rose }} className="text-xs tracking-[0.35em] uppercase mb-3">How it works</p>
            <h2 style={{ fontFamily: serif }} className="text-4xl md:text-5xl font-semibold">Simply ask Paris</h2>
          </div>
          <div className="space-y-4">
            <div data-reveal style={reveal} className="flex justify-end">
              <div style={{ background: C.deep, color: C.cream }} className="max-w-md rounded-3xl rounded-br-md px-5 py-4 shadow-lg text-lg">
                "I'm going to a wedding in Riyadh as a guest, please give me options for makeup looks?"
              </div>
            </div>
            <div data-reveal style={reveal} className="flex gap-3 items-end">
              <img src="/gloww/paris-400.webp" alt="" width={40} height={40} loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover object-top" />
              <div style={{ background: '#fff' }} className="max-w-md rounded-3xl rounded-bl-md px-5 py-4 shadow-lg">
                <p className="mb-3">Lovely! Here are three looks for a Riyadh wedding guest:</p>
                <div className="flex flex-wrap gap-2">
                  {['Natural Glow', 'Classic Elegance', 'Bold Evening'].map((n) => (
                    <span key={n} style={{ background: C.cream, color: C.rose, border: `1px solid ${C.roseLight}` }} className="px-3 py-1 rounded-full text-sm font-semibold">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try on photo */}
      <section id="try" className="max-w-6xl mx-auto px-5 py-20">
        <div data-reveal style={reveal} className="text-center mb-12">
          <p style={{ color: C.rose }} className="text-xs tracking-[0.35em] uppercase mb-3">Try a look</p>
          <h2 style={{ fontFamily: serif }} className="text-4xl md:text-5xl font-semibold max-w-3xl mx-auto">
            Upload your photo to Paris, and she will give you different makeup looks that you can apply to your image.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} data-reveal style={{ ...reveal, background: '#fff', border: `1px solid ${C.creamDark}` }} className="rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow relative">
              <span style={{ fontFamily: serif, color: C.gold }} className="absolute top-4 right-6 text-5xl font-semibold">0{i + 1}</span>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: roseGrad, color: '#fff' }}>
                <Icon size={24} />
              </div>
              <h3 style={{ fontFamily: serif }} className="text-2xl font-semibold mb-2">{title}</h3>
              <p style={{ color: C.taupe }}>{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://gymmai.com/test7" style={{ background: roseGrad, color: '#fff' }} className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
            <Heart size={18} /> Find my look
          </a>
        </div>
      </section>

      <footer style={{ background: C.deep, color: C.creamDark }} className="py-8 text-center text-sm tracking-wide">
        <span style={{ fontFamily: serif, color: C.gold }} className="text-lg">gloww.live</span> · Beauty without borders · <span dir="rtl">جمالك بلا حدود</span>
      </footer>
    </div>
  );
}


