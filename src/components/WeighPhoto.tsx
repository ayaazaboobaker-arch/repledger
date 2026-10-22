import { useEffect, useRef, useState, type ReactNode } from "react";
import { addPhoto, removePhoto, usePhoto } from "../lib/photos";
import { useStore } from "../lib/store";
import { fmt, longDate } from "../lib/util";
import { Icon, Sheet, toast } from "./ui";

/** Open the phone's camera / photo library, shrink and save the picture, and hand back its id. */
export function usePickPhoto(onPicked: (id: string) => void) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const input = (
    <input
      ref={ref} type="file" accept="image/*" hidden tabIndex={-1} aria-hidden="true"
      onChange={async (e) => {
        const f = e.target.files?.[0];
        e.target.value = "";
        if (!f) return;
        setBusy(true);
        try { onPicked(await addPhoto(f)); } catch (err) { toast((err as Error).message || "Couldn't save that photo"); } finally { setBusy(false); }
      }}
    />
  );
  return { pick: () => ref.current?.click(), input, busy };
}

/** Attach / replace / remove the photo on a day that has a weigh-in. */
export function useDayPhoto() {
  const updateDay = useStore((s) => s.updateDay);
  const current = (date: string) => useStore.getState().days[date]?.photo ?? null;
  return {
    attach(date: string, id: string) {
      const old = current(date);
      updateDay(date, (d) => { d.photo = id; });
      if (old && old !== id) void removePhoto(old);
    },
    detach(date: string) {
      const old = current(date);
      updateDay(date, (d) => { delete d.photo; });
      if (old) void removePhoto(old);
    },
  };
}

export function PhotoImg({ id, alt, className, fit = "cover" }: { id: string; alt: string; className?: string; fit?: "cover" | "contain" }) {
  const { url, loading } = usePhoto(id);
  if (url) return <img className={className} src={url} alt={alt} style={{ objectFit: fit }} draggable={false} />;
  return <span className={`wp-wait ${className ?? ""}`}>{loading ? <i className="wp-spin" aria-label="Loading photo" /> : <small>Photo not on this device yet</small>}</span>;
}

/** Full-size photo with Replace / Remove. */
export function PhotoViewer({ id, title, onClose, onPicked, onRemove }: { id: string; title: ReactNode; onClose: () => void; onPicked: (id: string) => void; onRemove: () => void }) {
  const { pick, input, busy } = usePickPhoto((nid) => { onPicked(nid); onClose(); });
  return (
    <Sheet
      open onClose={onClose} label="Weigh-in photo" title={<h2 style={{ margin: 0 }}>{title}</h2>}
      footer={<>
        {input}
        <button className="btn" onClick={pick} disabled={busy}>{Icon.camera} {busy ? "Saving…" : "Replace"}</button>
        <button className="btn" onClick={() => { onRemove(); onClose(); }}>{Icon.x} Remove</button>
        <button className="btn primary" style={{ marginLeft: "auto" }} onClick={onClose}>Done</button>
      </>}
    >
      <div className="wp-full"><PhotoImg id={id} alt="Weigh-in photo" fit="contain" /></div>
    </Sheet>
  );
}

/** Small camera / thumbnail button for one weigh-in row. */
export function WeighPhotoButton({ date, kg, id }: { date: string; kg: number; id?: string | null }) {
  const { attach, detach } = useDayPhoto();
  const [open, setOpen] = useState(false);
  const { pick, input, busy } = usePickPhoto((nid) => { attach(date, nid); toast("Photo saved"); });
  return (
    <>
      {input}
      {id ? (
        <button className="wp-mini" onClick={() => setOpen(true)} aria-label={`View photo from ${longDate(date)}`}><PhotoImg id={id} alt="" /></button>
      ) : (
        <button className="wp-mini add" onClick={pick} disabled={busy} aria-label={`Add a photo to the ${longDate(date)} weigh-in`}>{Icon.camera}</button>
      )}
      {open && id && <PhotoViewer id={id} title={`${longDate(date)} · ${fmt(kg, 1)} kg`} onClose={() => setOpen(false)} onPicked={(nid) => attach(date, nid)} onRemove={() => detach(date)} />}
    </>
  );
}

export interface WeighEntry { date: string; kg: number; photo?: string | null }

/**
 * Under the weight graph: the photo that belongs to the weigh-in you tapped.
 * A week or month point can cover several weigh-ins, so each one gets its own thumbnail to switch between.
 */
export function WeighPhotoPanel({ entries, period }: { entries: WeighEntry[]; period: string }) {
  const { attach, detach } = useDayPhoto();
  const best = () => { for (let i = entries.length - 1; i >= 0; i--) if (entries[i].photo) return i; return entries.length - 1; };
  const [pickIdx, setPickIdx] = useState(best);
  const key = entries.map((e) => e.date).join();
  useEffect(() => setPickIdx(best()), [key]); // eslint-disable-line react-hooks/exhaustive-deps
  const [open, setOpen] = useState(false);
  const e = entries[Math.min(pickIdx, entries.length - 1)];
  const { pick, input, busy } = usePickPhoto((nid) => { if (e) { attach(e.date, nid); toast("Photo saved"); } });

  if (!e) return <div className="wp-panel"><div className="wp-info"><small className="muted">No weigh-in for {period}.</small></div></div>;
  return (
    <div className="wp-panel" aria-live="polite">
      {input}
      {e.photo ? (
        <button className="wp-img" onClick={() => setOpen(true)} aria-label="Open photo full size"><PhotoImg id={e.photo} alt={`Progress photo, ${longDate(e.date)}, ${fmt(e.kg, 1)} kg`} /></button>
      ) : (
        <button className="wp-img empty" onClick={pick} disabled={busy} aria-label="Add a photo to this weigh-in">{Icon.camera}<small>{busy ? "Saving…" : "Add photo"}</small></button>
      )}
      <div className="wp-info">
        <div className="eyebrow">{period}</div>
        <b className="num">{fmt(e.kg, 1)} kg</b>
        <div className="small muted">{longDate(e.date)}</div>
        {!e.photo && <div className="xs faint" style={{ marginTop: 4 }}>No photo with this weigh-in.</div>}
        {entries.length > 1 && (
          <div className="wp-strip" role="group" aria-label="Weigh-ins in this period">
            {entries.map((x, i) => (
              <button key={x.date} className={i === pickIdx ? "on" : ""} aria-pressed={i === pickIdx} onClick={() => setPickIdx(i)} title={`${longDate(x.date)} · ${fmt(x.kg, 1)} kg`}>
                {x.photo ? <PhotoImg id={x.photo} alt="" /> : <span>{fmt(x.kg, 1)}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
      {open && e.photo && <PhotoViewer id={e.photo} title={`${longDate(e.date)} · ${fmt(e.kg, 1)} kg`} onClose={() => setOpen(false)} onPicked={(nid) => attach(e.date, nid)} onRemove={() => detach(e.date)} />}
    </div>
  );
}
