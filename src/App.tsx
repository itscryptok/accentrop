import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ThemeToggle() {
  const [isDay, setIsDay] = useState(() =>
    typeof window === "undefined" || localStorage.getItem("accentrop-theme") !== "night"
  );

  useEffect(() => {
    if (isDay) {
      document.documentElement.classList.add("day");
      localStorage.setItem("accentrop-theme", "day");
    } else {
      document.documentElement.classList.remove("day");
      localStorage.setItem("accentrop-theme", "night");
    }
  }, [isDay]);

  return (
    <button
      onClick={() => setIsDay((d) => !d)}
      className="p-1.5 rounded-full bg-card border border-border text-foreground hover:bg-muted shadow-sm transition-colors"
      aria-label={isDay ? "Switch to night mode" : "Switch to day mode"}
      title={isDay ? "Night mode" : "Day mode"}
    >
      {isDay ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      )}
    </button>
  );
}

const API_BASE = "/api";

const ROBOT_INSTRUCTIONS = [
  "stop vacuuming after you run over my toes like you pay the mortgage.",
  "start the laundry before my clothes file a missing\u2011freshness report.",
  "wipe the counters while I pretend this house cleans itself.",
  "stop following me because you're stressing me out like a clingy Roomba.",
  "open the blinds after the sun stops acting like a laser beam.",
  "close the blinds because I'm not ready for the outside world.",
  "heat my food while I stand here doing absolutely nothing productive.",
  "cool down the room because Texas forgot what \"spring\" means.",
  "turn off the lights after I leave the room like a responsible adult.",
  "turn on the lights before I trip over my own confidence.",
  "stop talking while I'm trying to remember why I walked in here.",
  "remind me later because right now I'm in denial.",
  "clean the floor after the dog finishes shedding his entire personality.",
  "water the plants before they file a dehydration complaint.",
  "stop spraying air freshener because it smells like a flower funeral.",
  "start the dishwasher while I pretend I cooked something impressive.",
  "stop the dishwasher because I forgot one spoon and now I'm annoyed.",
  "fetch the mail after the mailman stops sprinting away like he owes me money.",
  "lock the doors before my paranoia clocks in for the night shift.",
  "unlock the doors because I'm tired of fighting my own house.",
  "sweep the patio while I supervise like a disappointed manager.",
  "stop sweeping because you're just moving dirt from one emotional location to another.",
  "bring me water after I dramatically sigh like I'm dehydrated in a desert movie.",
  "bring me coffee before I say something unholy.",
  "stop brewing coffee because I changed my mind like a chaotic neutral.",
  "tidy the living room while I pretend I didn't make the mess.",
  "stop tidying because now I can't find anything.",
  "charge yourself before you die dramatically in the middle of the hallway again.",
  "stop charging because I need that outlet more than you do.",
  "play music while I attempt to be productive.",
  "stop the music because my brain can't multitask today.",
  "clean the bathroom after I emotionally recover from looking at it.",
  "stop cleaning the bathroom because you're making me look lazy.",
  "take out the trash before it starts developing opinions.",
  "stop taking out the trash because that bag is NOT full, I swear.",
  "fold the laundry while I stare at you like a proud parent.",
  "stop folding because that shirt is NOT supposed to be origami.",
  "mop the floor after the dog finishes reenacting Fast & Furious.",
  "stop mopping because you're just spreading the chaos.",
  "dust the shelves before the dust starts forming a union.",
  "stop dusting because you're sneezing louder than me.",
  "organize the pantry while I pretend I'll keep it that way.",
  "stop organizing because now I can't find the snacks.",
  "refill the soap before someone thinks I live dangerously.",
  "stop refilling the soap because that bottle is already overflowing like my schedule.",
  "sweep the stairs while I pray you don't fall like last time.",
  "stop sweeping the stairs because I don't have time for another robot ER visit.",
  "clean the windows after the birds finish judging us.",
  "stop cleaning the windows because streaks are your personality now.",
  "bring me a snack before I start making bad decisions.",
  "stop bringing snacks because I'm trying to be healthy for at least 12 minutes.",
  "rotate the mattress while I pretend I'm helping.",
  "stop rotating the mattress because you're about to flip me with it.",
  "clean the fridge after I emotionally prepare for expired science projects.",
  "stop cleaning the fridge because I wasn't ready to confront that yogurt.",
  "sweep the garage before the spiders start charging rent.",
  "stop sweeping the garage because you're stirring up ancient dust spirits.",
  "refill my water bottle while I pretend I'm a hydrated adult.",
  "stop refilling my bottle because it's already overflowing like my inbox.",
  "stand by because I need a moment to figure out my life choices.",
  "Keep a low-power status during the peak electricity rate hours today.",
  "Stand by near the dining table during the dinner party to collect used napkins.",
  "Do not vacuum the hallway during my conference call.",
  "Please play some soft jazz music during dinner tonight.",
  "Keep the bathroom exhaust fan running during your cleaning cycle.",
  "Do not open the oven door during the time the cake is baking.",
  "Monitor the front porch for packages during the afternoon hours.",
  "Adjust the living room blinds during the hours when the sun is directly hitting the window.",
  "Please stay in your docking station during the family gathering.",
  "Do not run any loud cycles during the baby's scheduled nap time.",
  "Please dim the lights after everyone sits down for the movie.",
  "Clean your own wheels after you come back inside from patrolling the yard.",
  "Empty the dustbin after you finish vacuuming the living room.",
  "Please wipe down the kitchen counters after you load the dishwasher.",
  "Lock the front door after the grocery delivery person leaves.",
  "Mop the entryway after the kids come inside from the rain.",
  "Double-check that the stove is off after the timer goes beep.",
  "Open the windows to air out the room after you finish painting the wall.",
  "Put the milk back in the fridge after you pour my coffee.",
  "Start the dryer after the washing machine cycle completes.",
  "Please close all the downstairs windows because of the high pollen count outside today.",
  "Do not run the dishwasher right now because of the current plumbing maintenance in the building.",
  "Set out the extra blankets because of the sudden drop in outdoor temperature tonight.",
  "Do not scrub the dining table with harsh chemicals because of the delicate wood finish.",
  "Please delay the lawn mowing because of the neighbor's outdoor party next door.",
  "Clean the windows thoroughly because of the smudges left by the pet's nose.",
  "Do not use the main hallway route because of the wet paint on the baseboards.",
  "Please check the pantry inventory because of the upcoming holiday meal planning.",
  "Do not activate the security alarm yet because of the construction workers still on site.",
  "Vacuum the sofa cushions again because of the excessive pet hair from the cat shedding.",
  "Please sort the laundry into darks and lights while you wait for the current load to finish.",
  "Do not move around the kitchen while I am carrying hot pots and pans.",
  "Do not cross the hallway while the floor is still drying.",
  "Please scrub the shower tiles while the self-cleaning steam cycle runs.",
  "Keep an eye on the stove while the soup is simmering.",
  "Do not scan the room while the guests are changing clothes.",
  "Organize the bookshelves while I am out of the house running errands.",
  "Please hold the garbage bag open while I clear out the refrigerator.",
  "Do not initiate a software update while you are in the middle of a cleaning task.",
  "Monitor the backyard while the dog is outside playing.",
  "Put the leftover food into airtight containers because it will spoil if left out.",
  "Do not water the lawn this morning because the soil moisture level is already optimal.",
  "Please lower the volume of your voice alerts because it is past ten o'clock at night.",
  "Please change the air filters because of the smoke drifting from the nearby campfire.",
  "Stay in the kitchen area while the oven preheats to ensure safety.",
  "Do not scrub the hardwood floors with a wet mop because of the potential for water damage.",
  "Please turn on the porch lights after the sun goes down this evening.",
  "Please do not start the robot vacuum until after the guests have departed.",
  "Keep the kitchen gate closed while you are cooking so the pets stay out.",
  "Wash the car windows carefully because of the thick layer of dust from the nearby construction.",
  "Do not spray any water near the television while you wipe down the entertainment center.",
  "Clean out the toaster tray after you finish making the morning toast.",
  "Do not run the automated pool skimmer during the time people are swimming.",
];

function RobotInstructionSelect({ onSelect }: { onSelect: (val: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 rounded-lg border border-primary/40 bg-[hsl(var(--hero-bg))] px-3 py-2 text-sm text-white/75 hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer"
      >
        <span className="truncate">Select an instruction for your robot</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 shrink-0 text-white transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 w-full mt-1 max-h-64 overflow-y-auto rounded-lg border border-border bg-card shadow-xl">
          {ROBOT_INSTRUCTIONS.map((instruction, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { onSelect(instruction); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-primary/15 hover:text-primary transition-colors border-b border-border/40 last:border-b-0"
            >
              {instruction}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function useSessionMicPermission() {
  const [hasAsked, setHasAsked] = useState(() => {
    return sessionStorage.getItem("mic_permission_asked") === "true";
  });
  const markAsked = () => {
    sessionStorage.setItem("mic_permission_asked", "true");
    setHasAsked(true);
  };
  return { hasAsked, markAsked };
}

export function Header({ showAbout = false }: { showAbout?: boolean }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const { pathname } = useLocation();
  const showDonate = pathname !== "/" && pathname !== "/donate";

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Accentrop Logo"
              className="h-8 w-8 rounded-lg object-cover shadow"
            />
            <span className="text-xl font-bold text-primary tracking-tight">
              Accentrop lab
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/services"
              className="text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              Services
            </Link>
            {showAbout ? (
              <button
                onClick={() => setAboutOpen(true)}
                className="text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
              >
                About
              </button>
            ) : (
              <button
                onClick={() => setAboutUsOpen(true)}
                className="text-sm font-semibold text-primary hover:text-primary/70 transition-colors"
              >
                About Us
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Theme toggle + donate */}
      <div className="fixed top-[57px] right-4 z-40 flex flex-col items-end gap-2">
        {showDonate && (
          <Link
            to="/donate"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-card text-foreground text-[13px] font-bold shadow-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Donate to support R & D
          </Link>
        )}
        <ThemeToggle />
      </div>

      {/* Accent page About — backdrop & panel */}
      {aboutOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={() => setAboutOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[90vw] bg-card border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          aboutOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="font-bold text-primary text-lg">About</span>
          <button
            onClick={() => setAboutOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="flex-1 px-6 pt-3 pb-8 overflow-y-auto">
          <div className="relative mb-4">
            <img
              src="/about-robots.jpg"
              alt="Can AI Robot understand what you are saying?"
              className="w-full rounded-xl object-cover shadow-lg"
            />
            <button
              onClick={() => {
                const url = "https://accentrop.com";
                const text = "Can AI Robot understand what you are saying? Check your Robot Readiness Score (RRS) at Accentrop.com!";
                if (navigator.share) {
                  navigator.share({ title: "Accentrop — Robot Readiness Score", text, url }).catch(() => {});
                } else {
                  window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
                }
              }}
              className="absolute top-2 right-2 bg-card/90 hover:bg-card text-foreground rounded-full p-2 shadow-md transition-colors border border-border"
              aria-label="Share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>
          <div className="text-foreground space-y-3">
            <p className="text-base font-semibold leading-snug">Can domestic AI Robot understand your accent as companies begin to roll them out soon? See this app as "The AI inclusion platform". Use it to jokingly check your RRS (Robot Readiness Score) for free, for fun.</p>
            <p className="text-base font-semibold">Just for the fun of it</p>
            <a href="https://accentrop.com" className="text-[28px] font-black block leading-tight text-primary hover:underline">Accentrop.com</a>
          </div>
        </div>
      </div>

      {/* All-pages About Us — backdrop & panel */}
      {aboutUsOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40"
          onClick={() => setAboutUsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-[90vw] bg-card border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          aboutUsOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4 border-b border-border">
          <span className="font-bold text-primary text-lg">About Us</span>
        </div>
        <div className="flex-1 px-6 pt-5 pb-4 overflow-y-auto space-y-3">
          <Link
            to="/contact"
            onClick={() => setAboutUsOpen(false)}
            className="flex items-center justify-center w-full rounded-xl border-2 border-primary text-primary font-bold text-sm py-2 hover:bg-primary/10 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/us-ai-jobs"
            className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-primary text-primary font-bold text-sm py-2 hover:bg-primary/10 transition-colors"
          >
            US AI Jobs
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </Link>
          <Link
            to="/donate"
            onClick={() => setAboutUsOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-primary text-primary font-bold text-sm py-2 hover:bg-primary/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Donate
          </Link>
          <Link
            to="/ebook"
            onClick={() => setAboutUsOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary text-white font-bold text-sm py-2 hover:bg-primary/90 transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            E-Book
          </Link>
          <Link
            to="/blog-articles"
            onClick={() => setAboutUsOpen(false)}
            className="flex items-center justify-center w-full rounded-xl border-2 border-primary text-primary font-bold text-sm py-2 hover:bg-primary/10 transition-colors"
          >
            Read Blog
          </Link>
          <p className="text-base leading-relaxed text-foreground italic">
            We can no longer look away from the reality that is already here. The only real choice left is to stand with those actively working to make it right.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            <strong className="text-primary">Accentrop.com</strong> is dedicated to advancing AI governance and fostering inclusivity by curating datasets—including, but not limited to, diverse accent and intonation patterns—to empower AI systems to master global speech variations and improve other AI-governance concern areas.
          </p>
          <p className="text-base leading-relaxed text-foreground">
            Are you interested in a partnership? Please complete our contact form.
          </p>
        </div>
        <div className="px-6 py-4 border-t border-border flex justify-center">
          <button
            onClick={() => setAboutUsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export function HeroSection({ encyclopediaMode = false }: { encyclopediaMode?: boolean }) {
  return (
    <section className="relative bg-[hsl(var(--hero-bg))] pt-4 pb-4 overflow-hidden border-b border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight tracking-tight whitespace-nowrap">
          {encyclopediaMode ? null : (
            <>Accentrop lab <span className="text-[hsl(var(--cryp-tok-color))]">by <a
                href="https://cryptok.online"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-[hsl(var(--cryp-tok-deco))] hover:text-white transition-colors"
              >Cryp Tok Solutions</a></span></>
          )}
        </h1>
      </div>
    </section>
  );
}

type SaveStatus = "idle" | "uploading" | "saved" | "error";
type RecordStatus = "idle" | "requesting-mic" | "listening";

export function CaptionAndDemo({ encyclopediaMode = false }: { encyclopediaMode?: boolean }) {
  const { hasAsked, markAsked } = useSessionMicPermission();
  const [origin, setOrigin] = useState("");
  const [spokenText, setSpokenText] = useState("");
  const [heardText, setHeardText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingError, setRecordingError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [recordStatus, setRecordStatus] = useState<RecordStatus>("idle");
  const [score, setScore] = useState<number | null>(null);
  const [testCount, setTestCount] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const spokenTextRef = useRef("");
  const originRef = useRef("");

  useEffect(() => { spokenTextRef.current = spokenText; }, [spokenText]);
  useEffect(() => { originRef.current = origin; }, [origin]);

  const computeReadinessScore = (spoken: string, heard: string): number => {
    const normalize = (s: string) =>
      s.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(Boolean);
    const spokenWords = normalize(spoken);
    const heardWords = normalize(heard);
    if (spokenWords.length === 0) return 100;
    let matches = 0;
    const pool = [...heardWords];
    for (const word of spokenWords) {
      const i = pool.indexOf(word);
      if (i !== -1) { matches++; pool.splice(i, 1); }
    }
    return Math.round((matches / spokenWords.length) * 100);
  };

  const uploadAndSave = async (audioBlob: Blob) => {
    const currentSpoken = spokenTextRef.current;
    const currentOrigin = originRef.current;

    setSaveStatus("uploading");
    setHeardText("🤖 Transcribing with AI…");

    try {
      // Run presigned URL request and AI transcription in parallel
      const formData = new FormData();
      formData.append("audio", audioBlob, `recording-${Date.now()}.webm`);

      const [urlRes, transcribeRes] = await Promise.all([
        fetch(`${API_BASE}/storage/uploads/request-url`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `recording-${Date.now()}.webm`,
            size: audioBlob.size,
            contentType: audioBlob.type || "audio/webm",
          }),
        }),
        fetch(`${API_BASE}/transcribe`, { method: "POST", body: formData }),
      ]);

      if (!urlRes.ok) throw new Error("Failed to get upload URL");
      const { uploadURL, objectPath } = await urlRes.json() as { uploadURL: string; objectPath: string };

      const transcribedText = transcribeRes.ok
        ? ((await transcribeRes.json() as { text: string }).text ?? "")
        : "";
      setHeardText(transcribedText);

      // Compute readiness score once transcription is available
      if (transcribedText && currentSpoken.trim()) {
        const s = computeReadinessScore(currentSpoken, transcribedText);
        setScore(s);
        setTestCount(c => c + 1);
      }

      // Upload audio to GCS
      const uploadRes = await fetch(uploadURL, {
        method: "PUT",
        headers: { "Content-Type": audioBlob.type || "audio/webm" },
        body: audioBlob,
      });
      if (!uploadRes.ok) throw new Error("Audio upload failed");

      // Save to database
      const saveRes = await fetch(`${API_BASE}/recordings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spokenText: currentSpoken,
          heardText: transcribedText,
          origin: currentOrigin || null,
          audioObjectPath: objectPath,
        }),
      });
      if (!saveRes.ok) throw new Error("Failed to save recording");

      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch {
      setHeardText("");
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 4000);
    }
  };

  const startRecording = async () => {
    setRecordingError(null);
    setHeardText("");
    audioChunksRef.current = [];
    markAsked();

    setRecordStatus("requesting-mic");
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
    } catch {
      setRecordingError("Microphone access was denied. Please allow microphone access in your browser and try again.");
      setRecordStatus("idle");
      return;
    }

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunksRef.current.push(e.data);
    };
    mediaRecorder.onstop = () => {
      streamRef.current?.getTracks().forEach(t => t.stop());
      streamRef.current = null;
      const blob = new Blob(audioChunksRef.current, { type: mediaRecorder.mimeType || "audio/webm" });
      uploadAndSave(blob);
    };
    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;

    setRecordStatus("listening");
    setIsRecording(true);
  };

  const stopRecording = () => {
    setRecordStatus("idle");
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    setIsRecording(false);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording().catch(() => {});
    }
  };

  return (
    <section className={`max-w-3xl mx-auto px-6 ${encyclopediaMode ? "pt-1 pb-4" : "py-4"}`}>
      <div className={`space-y-3 ${encyclopediaMode ? "mt-1" : "mt-2"}`}>
        {encyclopediaMode ? (
          <div className="flex items-center justify-center gap-6 py-2">
            <div className="flex flex-col items-center bg-[hsl(var(--label-bg))] border border-primary/30 px-16 py-3 rounded-xl shadow-lg">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug text-center">How prepared is your</p>
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug text-center">Accent for domestic robots</p>
            </div>
            <img
              src="/hero.png"
              alt="Half-human, half-AI robot"
              className="h-[220px] sm:h-[340px] object-contain drop-shadow-2xl flex-shrink-0"
            />
          </div>
        ) : (
          <div>
            <div className="mb-2">
              <button
                onClick={() => setAboutExpanded(v => !v)}
                className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14" height="14"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${aboutExpanded ? "rotate-90" : ""}`}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              {aboutExpanded && (
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  Can domestic AI Robot understand your accent as companies begin to roll them out soon? See this app as "The AI inclusion platform". Use it to jokingly check your RRS (Robot Readiness Score) for free, for fun 😁.
                </p>
              )}
            </div>
            <label className="block text-[10px] font-semibold text-foreground border border-border uppercase tracking-widest mb-1 px-1 py-0.5 rounded">
              Culture, city or country <span className="normal-case font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="e.g. Tanzania · Ukraine · Iran · Yourba · Malta"
              className="w-full rounded-lg border border-border bg-card px-2 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        )}

        <hr className="border-0 border-t-2" style={{ borderColor: "hsl(200, 30%, 78%)" }} />

        <div className="space-y-2">
          <RobotInstructionSelect onSelect={(val) => setSpokenText(val)} />
          <div className="relative">
            <textarea
              value={spokenText}
              onChange={(e) => setSpokenText(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-3xl text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            {!spokenText && (
              <div className="pointer-events-none absolute inset-0 px-4 py-3 flex flex-col gap-1">
                <span className="text-3xl text-muted-foreground">What I am trying to say...</span>
                <span className="text-sm text-muted-foreground/70">select from the dropdown above or type new</span>
              </div>
            )}
          </div>
        </div>

        <hr className="border-0 border-t-2" style={{ borderColor: "hsl(200, 30%, 78%)" }} />

        <div>
          {recordingError && (
            <p className="text-sm text-destructive mb-2">{recordingError}</p>
          )}

          <div className="flex items-center justify-between mb-2 gap-3">
            <div className="leading-snug">
              {score !== null && !isRecording ? (
                <p className="text-4xl font-black text-foreground">{score}%</p>
              ) : !spokenText.trim() && heardText && !isRecording ? (
                <p className="text-xs font-semibold text-muted-foreground">
                  Make sure to type what you are trying to say in the box above in order to get your readiness score.
                </p>
              ) : (
                <p className="text-4xl font-black text-foreground">[ ]</p>
              )}
            </div>
            <button
              onClick={toggleRecording}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-sm shrink-0 ${
                isRecording
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  isRecording ? "bg-white animate-pulse" : "bg-red-400"
                }`}
              />
              {isRecording ? "Stop Recording" : "Record"}
            </button>
          </div>

          <div
            className={`w-full min-h-[190px] rounded-xl border-2 px-4 py-3 transition-all ${
              isRecording
                ? "border-red-500/60 bg-red-50/50"
                : "border-border bg-card"
            }`}
          >
            {heardText ? (
              <p className="text-3xl font-bold text-foreground leading-tight">
                {heardText}
              </p>
            ) : isRecording ? (
              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <div className="flex items-end gap-[5px]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="sound-bar" />
                  ))}
                </div>
                <p className="text-sm font-semibold tracking-wide text-primary/90 text-center">
                  Keep speaking and hit stop when done
                </p>
              </div>
            ) : (
              <div className="text-muted-foreground text-3xl">
                {recordStatus === "requesting-mic" ? (
                  <p>Requesting microphone…</p>
                ) : (
                  <p>What my AI robot hears...</p>
                )}
              </div>
            )}
          </div>

          <p className="mt-2 text-[18px] text-muted-foreground/70 italic">
            Your recording may be used in the future to help AI master various accents for less human-AI friction.
          </p>

          {saveStatus !== "idle" && (
            <p
              className={`mt-2 text-sm font-medium ${
                saveStatus === "uploading"
                  ? "text-muted-foreground"
                  : saveStatus === "saved"
                  ? "text-green-600"
                  : "text-destructive"
              }`}
            >
              {saveStatus === "uploading" && "Processing recording…"}
              {saveStatus === "saved" && "Recording saved successfully."}
              {saveStatus === "error" &&
                "Failed to save recording. Please try again."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Join our newsletter for world-impact AI news
        </h2>
        <p className="text-primary-foreground/70 text-sm mb-8">
          Stay ahead of the curve with breakthroughs that matter.
        </p>
        {submitted ? (
          <p className="text-[hsl(185,100%,70%)] font-semibold text-lg">
            You are subscribed. Welcome aboard!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="flex-1 rounded-lg px-4 py-3 text-foreground bg-card border border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "4ddc9615-6167-44fc-b0ba-a3ed8f6b06c9",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Accentrop contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-black text-primary mb-2 text-center">
        Contact Us
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        We would love to hear from you. Reach out and we will get back to you
        shortly.
      </p>

      {submitted ? (
        <div className="rounded-2xl bg-card border border-border p-10 text-center shadow">
          <p className="text-2xl font-bold text-primary mb-2">Message sent!</p>
          <p className="text-muted-foreground">
            Thank you for reaching out. We will be in touch soon.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", message: "" });
            }}
            className="mt-6 px-5 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 shadow-md space-y-5"
        >
          <div>
            <label
              className="block text-sm font-semibold text-foreground mb-1.5"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-foreground mb-1.5"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-foreground mb-1.5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
          {error && (
            <p className="text-sm text-destructive font-medium">{error}</p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-sm text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}

export function Footer() {
  return (
    <>
    <footer className="bg-[hsl(var(--footer-bg))] border-t border-border text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <a href="https://accentrop.com" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Accentrop"
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <p className="font-bold text-lg leading-tight">Accentrop</p>
              <p className="text-white/60 text-xs">AI governance, inclusion and advancement tool</p>
            </div>
          </a>
          <div className="flex flex-col sm:items-end gap-2 text-sm">
            <Link
              to="/contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://x.com/itscryp_tok"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center space-y-3">
          <p className="text-white/70 text-sm">
            Accentrop lab by{" "}
            <a
              href="https://cryptok.online"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Cryp Tok Solutions
            </a>
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap text-xs">
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors underline underline-offset-2">
              Terms of Service
            </Link>
            <span className="text-white/30">·</span>
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
          </div>
          <p className="text-white/50 text-xs">
            &copy; Cryp Tok Solutions 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showAbout={true} />
      <main className="flex-1">
        <HeroSection />
        <CaptionAndDemo />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
