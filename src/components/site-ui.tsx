"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LightboxMode = "schedule" | "estimate";

type SiteUi = {
  openSchedule: () => void;
  openEstimate: () => void;
};

const SiteUiContext = createContext<SiteUi | null>(null);

export function useSiteUi() {
  const value = useContext(SiteUiContext);
  if (!value) {
    throw new Error("useSiteUi must be used inside SiteShell");
  }
  return value;
}

export function SiteUiProvider({ children }: { children: ReactNode }) {
  const [lightbox, setLightbox] = useState<LightboxMode | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const openSchedule = useCallback(() => {
    setSubmitted(false);
    setFormError(null);
    setLightbox("schedule");
    document.body.style.overflow = "hidden";
  }, []);

  const openEstimate = useCallback(() => {
    setSubmitted(false);
    setFormError(null);
    setLightbox("estimate");
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setSubmitted(false);
    setFormError(null);
    setSubmitting(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest("[data-action]");
      if (!target) return;
      const action = target.getAttribute("data-action");
      if (action === "estimate") {
        event.preventDefault();
        openEstimate();
      }
      if (action === "schedule") {
        event.preventDefault();
        openSchedule();
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openEstimate, openSchedule]);

  useEffect(() => {
    const onFaqClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest(".faq-q");
      if (!btn) return;
      const item = btn.closest(".faq-item");
      const list = item?.closest(".faq-list");
      if (!item || !list) return;
      const isOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    };
    document.addEventListener("click", onFaqClick);
    return () => document.removeEventListener("click", onFaqClick);
  }, []);

  const copy =
    lightbox === "estimate"
      ? {
          eyebrow: "Free Estimate",
          title: "Get a Free Estimate",
          subtitle:
            "Tell us about your project and we'll get back to you with a no-obligation estimate.",
        }
      : {
          eyebrow: "Get In Touch",
          title: "Schedule a Service",
          subtitle:
            "Fill out the form below and we'll be in touch within one business day.",
        };

  const ui = useMemo(
    () => ({ openSchedule, openEstimate }),
    [openEstimate, openSchedule],
  );

  return (
    <SiteUiContext.Provider value={ui}>
      {children}
      {lightbox ? (
        <div
          className="lightbox-overlay open"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox">
            <button type="button" className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            {submitted ? (
              <>
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  Request received
                </p>
                <h3>We&apos;ll call you back</h3>
                <p>
                  Thanks for reaching out to Tailored Air. A teammate will contact you
                  within one business day. For emergencies, call (720) 296-6008 anytime.
                </p>
                <button type="button" className="form-submit" onClick={closeLightbox}>
                  Close
                </button>
              </>
            ) : (
              <>
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  {copy.eyebrow}
                </p>
                <h3>{copy.title}</h3>
                <p>{copy.subtitle}</p>
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    setFormError(null);
                    setSubmitting(true);
                    const form = event.currentTarget;
                    const data = new FormData(form);
                    try {
                      const response = await fetch("/api/leads", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          kind: lightbox,
                          firstName: data.get("firstName"),
                          lastName: data.get("lastName"),
                          phone: data.get("phone"),
                          email: data.get("email"),
                          service: data.get("service"),
                          message: data.get("message"),
                          company: data.get("company"),
                        }),
                      });
                      const payload = (await response.json()) as { error?: string };
                      if (!response.ok) {
                        setFormError(
                          payload.error ||
                            "We could not send that. Please call (720) 296-6008.",
                        );
                        return;
                      }
                      setSubmitted(true);
                    } catch {
                      setFormError(
                        "We could not send that. Please call (720) 296-6008.",
                      );
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hp"
                    aria-hidden="true"
                  />
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first-name">First Name</label>
                      <input id="first-name" name="firstName" type="text" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name">Last Name</label>
                      <input id="last-name" name="lastName" type="text" placeholder="Smith" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="(720) 555-0000" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="john@email.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service" defaultValue="" required>
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option>Heating Furnace / Boiler / Heat Pump</option>
                      <option>Cooling AC / Mini-Split</option>
                      <option>Air Quality</option>
                      <option>Water Heater</option>
                      <option>Commercial HVAC</option>
                      <option>Emergency Repair</option>
                      <option>Maintenance / Tune-Up</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea id="message" name="message" placeholder="Tell us a bit about your situation..." />
                  </div>
                  {formError ? <p className="form-error">{formError}</p> : null}
                  <button className="form-submit" type="submit" disabled={submitting}>
                    {submitting ? "Sending…" : "Request a Callback"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </SiteUiContext.Provider>
  );
}
