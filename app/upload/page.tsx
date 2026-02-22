"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, Check, Hand } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function UploadPage() {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);
    const [form, setForm] = useState({ fullName: "", gender: "", age: "" });
    const [palmFile, setPalmFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: "" }));
    };

    const handleFile = (f: File) => {
        if (f.size > 5 * 1024 * 1024) { setErrors((p) => ({ ...p, palm: "Max 5 MB" })); return; }
        setPalmFile(f);
        const r = new FileReader();
        r.onload = () => setPreview(r.result as string);
        r.readAsDataURL(f);
        setErrors((p) => ({ ...p, palm: "" }));
    };

    const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) handleFile(f);
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.fullName.trim()) e.fullName = "Required";
        if (!form.gender) e.gender = "Required";
        if (!form.age || +form.age < 1 || +form.age > 120) e.age = "Enter valid age";
        if (!palmFile) e.palm = "Upload a palm image";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const submit = (ev: React.FormEvent) => {
        ev.preventDefault();
        if (!validate()) return;
        localStorage.setItem("celestik-data", JSON.stringify({ ...form, imagePreview: preview }));
        router.push("/payment");
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-20 pb-12 px-4">
                <div className="max-w-lg mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="text-center mb-8">
                            <h1 className="font-heading uppercase text-gold text-2xl md:text-3xl mb-3" style={{ letterSpacing: "0.08em" }}>
                                Upload Your Palm
                            </h1>
                            <div className="gold-divider" />
                        </div>

                        <div className="glass p-7 md:p-9">
                            <form onSubmit={submit}>
                                <div className="fl-group">
                                    <input type="text" name="fullName" value={form.fullName} onChange={set} className="fl-input" placeholder=" " autoComplete="off" />
                                    <label className="fl-label">Full Name</label>
                                    {errors.fullName && <p className="text-red-400 text-xs mt-1 font-body">{errors.fullName}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="fl-group">
                                        <select name="gender" value={form.gender} onChange={set} aria-label="Gender" className="fl-input pt-4">
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && <p className="text-red-400 text-xs mt-1 font-body">{errors.gender}</p>}
                                    </div>
                                    <div className="fl-group">
                                        <input type="number" name="age" value={form.age} onChange={set} className="fl-input" placeholder=" " min="1" max="120" />
                                        <label className="fl-label">Age</label>
                                        {errors.age && <p className="text-red-400 text-xs mt-1 font-body">{errors.age}</p>}
                                    </div>
                                </div>

                                <div className="mt-4 mb-6">
                                    <AnimatePresence mode="wait">
                                        {!preview ? (
                                            <motion.div key="up" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                onClick={() => fileRef.current?.click()}
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith("image/")) handleFile(f); }}
                                                className="relative w-full aspect-square max-w-[240px] mx-auto border border-dashed border-gold-border rounded-card flex flex-col items-center justify-center cursor-pointer hover:border-gold transition-colors group"
                                            >
                                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
                                                    <Hand className="w-10 h-10 text-gold/30 group-hover:text-gold/50 transition-colors" />
                                                </motion.div>
                                                <p className="text-gold-muted text-sm mt-2 font-body">Drag & drop or tap to upload</p>
                                                <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
                                            </motion.div>
                                        ) : (
                                            <motion.div key="prev" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                                className="relative w-full aspect-square max-w-[240px] mx-auto rounded-card overflow-hidden border border-gold-border"
                                            >
                                                <Image src={preview} alt="Palm preview" fill className="object-cover" style={{ filter: "contrast(1.15) saturate(0.7) sepia(0.2)" }} />
                                                <button type="button" onClick={() => { setPalmFile(null); setPreview(null); }}
                                                    className="absolute top-2 right-2 w-6 h-6 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90">
                                                    <X className="w-3 h-3 text-gold" />
                                                </button>
                                                <div className="absolute bottom-2 left-2 bg-green-600/80 rounded-full p-0.5">
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {errors.palm && <p className="text-red-400 text-xs mt-2 text-center font-body">{errors.palm}</p>}
                                </div>

                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                                    className="w-full btn-gold py-3.5 text-sm">
                                    Generate My Report
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
