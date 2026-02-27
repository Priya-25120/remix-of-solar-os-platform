import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import solarVideo from "@/assets/solar-industry.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            See Solar OS in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how leading solar companies manage leads, installations, and teams with Solar OS.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div
            className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl cursor-pointer group"
            style={{ boxShadow: "0 25px 80px -12px hsl(var(--primary) / 0.2)" }}
            onClick={togglePlay}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 gradient-bg rounded-2xl opacity-10 blur-2xl pointer-events-none" />

            <video
              ref={videoRef}
              src={solarVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl block"
            />

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                showOverlay || !playing ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center shadow-lg transform transition-transform duration-200 group-hover:scale-110">
                {playing ? (
                  <Pause size={26} className="text-primary-foreground" />
                ) : (
                  <Play size={26} className="text-primary-foreground ml-1" />
                )}
              </div>
            </div>
          </div>

          {/* Pill tags below video */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Lead Tracking", "Installation Management", "Solar CRM", "Project Scheduling", "Solar Analytics"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium border border-border rounded-full px-3 py-1.5 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
