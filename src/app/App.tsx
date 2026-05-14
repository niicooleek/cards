import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/▶Frame427322165/svg-9vyphnrb2m";

const paths = svgPaths as Record<string, string>;
const LIME = "#C2D501";

function JarIllustration() {
  const keys = [
    "p3b947200","p394e3d00","p1eeac470","p3e31200","p15c75d80",
    "p17225d00","p2c67bd00","p2e0e1f00","p1ecf9a00","p1a114580",
    "p259baa80","p3bfd6c00","p33b06000","p15c87600","p989ec80",
    "p34254f80","p12bfc800","p216c8d80",
  ];
  return (
    <div className="absolute" style={{ top: "2.43%", right: "-4.9%", bottom: "43.93%", left: "17.78%" }}>
      <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.005 178.062">
        <g>{keys.map(k => <path key={k} d={paths[k]} fill={LIME} />)}</g>
      </svg>
    </div>
  );
}

function OrganicIllustration() {
  const keys = [
    "p1858a400","p2c531f80","p1f490700","p1a275180","p33d78380",
    "p29347270","p394004f0","p3ac3f200","p214b3200","p35d7a80",
    "p328b4600","p1322b500","p3a5d8f00","p65ba700","pac10700",
    "p1ef8940","p34156000","p13e98100","p3924c3a0","pc8ea800",
    "p2dfc5200","p2e32d980","p11fb0900","p4d9e200",
  ];
  return (
    <div className="absolute" style={{ top: "-0.3%", right: "0", bottom: "34.38%", left: "5.3%" }}>
      <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 250 218.853">
        <g>{keys.map(k => <path key={k} d={paths[k]} fill={LIME} />)}</g>
      </svg>
    </div>
  );
}

function BacteriaIllustration() {
  const keys = [
    "p6282780","pf28b2b1","p253e4380","p186c9380","p1ae5b00",
    "p6d9f780","p3017ae80","p180fd270","p1a96aa80","p298b2180",
    "p3b694300","p3647be80","p9eaac00","p32dd1700","p3f0d0e00",
    "p120638a0","p7938100","p225e5b00","p1e656200","p435a100",
    "p2a853f00","p161cc080","p3732ac00","p37587480","p1bf92200",
    "p1bcdbcc0","p1b8ea670","p3cf26f70",
  ];
  return (
    <div className="absolute" style={{ top: "0", right: "-3.66%", bottom: "47%", left: "18.56%" }}>
      <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224.66 172.543">
        <g>{keys.map(k => <path key={k} d={paths[k]} fill={LIME} />)}</g>
      </svg>
    </div>
  );
}

function CabbageIllustration() {
  return (
    <div className="absolute" style={{ top: "-1.81%", right: "-6.12%", bottom: "42.48%", left: "26.52%" }}>
      <svg className="absolute" style={{ left: "30.29px", top: "0px", width: "179.878px", height: "168.98px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 179.878 168.98">
        <path d={paths["p15c06c00"]} fill={LIME} />
      </svg>
      <svg className="absolute" style={{ left: "138.49px", top: "6.41px", width: "60.966px", height: "71.339px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 60.9662 71.3385">
        <path d={paths["p37e90c00"]} fill={LIME} />
      </svg>
      <svg className="absolute" style={{ left: "0px", top: "47.23px", width: "11.529px", height: "10.757px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 11.5288 10.7567">
        <path d={paths["p7042880"]} fill={LIME} />
      </svg>
      <svg className="absolute" style={{ left: "28.36px", top: "80.44px", width: "5.534px", height: "4.706px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 5.53399 4.7062">
        <path d={paths["p24c49a00"]} fill={LIME} />
      </svg>
      <svg className="absolute" style={{ left: "135.69px", top: "158.16px", width: "9.253px", height: "8.787px" }} fill="none" preserveAspectRatio="none" viewBox="0 0 9.2534 8.78687">
        <path d={paths["p1387a2f0"]} fill={LIME} />
      </svg>
    </div>
  );
}

const CARDS = [
  {
    id: "no-vinegar",
    title: "No Vinegar.\nNo Shortcuts.",
    body: "Real lacto-fermentation only.",
    Illustration: JarIllustration,
  },
  {
    id: "raw",
    title: "Raw & Unpasteurized",
    body: "Live cultures intact, exactly as fermentation created them.",
    Illustration: OrganicIllustration,
  },
  {
    id: "probiotic",
    title: "Probiotic-Rich",
    body: "Of naturally occurring beneficial cultures per serving.",
    Illustration: BacteriaIllustration,
  },
  {
    id: "nutrition",
    title: "Maximized Nutrition",
    body: "Fermentation unlocks nutrients your body can easily absorb.",
    Illustration: CabbageIllustration,
  },
] as const;

// Position 0 = active (front), 1–3 = behind in fan
const FAN = [
  { x: 0,    y: 40,  rotate: -6, scale: 1,    zIndex: 40 },
  { x: -130, y: -20, rotate: 9,  scale: 0.93, zIndex: 30 },
  { x: 30,   y: -80, rotate: -1, scale: 0.91, zIndex: 20 },
  { x: 155,  y: 10,  rotate: 5,  scale: 0.89, zIndex: 10 },
];

export default function App() {
  // Start with "Maximized Nutrition" (index 3) active — matching the Figma static frame
  const [activeIndex, setActiveIndex] = useState(3);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 4);
    }, 2600);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <div
      className="size-full flex flex-col items-center justify-center gap-10"
      style={{ background: "#00000000" }}
    >
      {/* Deck */}
      <div
        className="relative select-none"
        style={{ width: 540, height: 480 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {CARDS.map((card, i) => {
          const posIdx = (i - activeIndex + 4) % 4;
          const pos = FAN[posIdx];
          const isActive = posIdx === 0;
          const { Illustration } = card;

          return (
            <motion.div
              key={card.id}
              className="absolute cursor-pointer"
              style={{
                width: 264,
                height: 332,
                top: "50%",
                left: "50%",
                marginTop: -166,
                marginLeft: -132,
              }}
              animate={{
                x: pos.x,
                y: pos.y,
                rotate: pos.rotate,
                scale: pos.scale,
                zIndex: pos.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                mass: 1,
              }}
              onClick={() => {
                if (!isActive) setActiveIndex(i);
              }}
              whileHover={!isActive ? { scale: pos.scale * 1.03 } : undefined}
            >
              <div className="relative size-full bg-white overflow-hidden">
                {/* Illustration */}
                <Illustration />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 px-8 pb-8">
                  <p
                    className="text-[26px] leading-[1.3] font-semibold"
                    style={{
                      fontFamily: "'Barlow Semi Condensed', sans-serif",
                      color: "#006937",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[16px] leading-[24px]"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      color: "#323232",
                    }}
                  >
                    {card.body}
                  </p>
                </div>

                {/* Lime border */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ border: "12px solid #C2D501" }}
                />

                {/* Dim overlay on background cards */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-white"
                  animate={{ opacity: isActive ? 0 : 0.55 }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2.5">
        {CARDS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show card ${i + 1}`}
            className="rounded-full transition-all duration-300 focus:outline-none"
            style={{
              width: activeIndex === i ? 24 : 8,
              height: 8,
              backgroundColor: activeIndex === i ? "#C2D501" : "#CCCCCC",
            }}
          />
        ))}
      </div>
    </div>
  );
}
