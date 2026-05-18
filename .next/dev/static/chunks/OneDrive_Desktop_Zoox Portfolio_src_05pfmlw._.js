(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Zoox Portfolio/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "panelPrimaryLinks",
    ()=>panelPrimaryLinks,
    "panelSecondaryLinks",
    ()=>panelSecondaryLinks,
    "primaryNavLinks",
    ()=>primaryNavLinks,
    "projects",
    ()=>projects,
    "secondaryNavLinks",
    ()=>secondaryNavLinks,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const primaryNavLinks = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Projects",
        href: "#projects"
    }
];
const secondaryNavLinks = [
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
const panelPrimaryLinks = [
    {
        label: "About Me",
        href: "#about"
    },
    {
        label: "Projects",
        href: "#projects"
    },
    {
        label: "Skills & Stats",
        href: "#skills"
    },
    {
        label: "Get In Touch",
        href: "#contact"
    }
];
const panelSecondaryLinks = [
    {
        label: "GitHub",
        href: "https://github.com/"
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/"
    },
    {
        label: "Resume",
        href: "#"
    },
    {
        label: "Blog",
        href: "#"
    },
    {
        label: "Twitter / X",
        href: "https://x.com/"
    },
    {
        label: "Instagram",
        href: "https://instagram.com/"
    },
    {
        label: "Dribbble",
        href: "#"
    },
    {
        label: "Email",
        href: "mailto:arnav@example.com"
    }
];
const projects = [
    {
        id: 1,
        title: "VIBE Music Player",
        description: "A premium Spotify-inspired music streaming app with AI-powered recommendations, real-time lyrics, and immersive playback experience.",
        tag: "Music · Streaming",
        gradient: "from-emerald-400 to-cyan-500",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Spotify API"
        ]
    },
    {
        id: 2,
        title: "IAF Tactical Portfolio",
        description: "Military-themed 3D portfolio with tactical UI, cinematic GSAP animations, and interactive mission-style navigation built on Three.js.",
        tag: "3D · Portfolio",
        gradient: "from-indigo-500 to-pink-500",
        technologies: [
            "React",
            "Three.js",
            "GSAP",
            "Vercel"
        ]
    },
    {
        id: 3,
        title: "Neural Vision AI",
        description: "AI-powered image recognition platform with real-time object detection, scene analysis, and intelligent content tagging.",
        tag: "AI · Computer Vision",
        gradient: "from-amber-400 to-red-500",
        technologies: [
            "Python",
            "TensorFlow",
            "FastAPI",
            "Docker"
        ]
    },
    {
        id: 4,
        title: "CloudSync Dashboard",
        description: "Scalable SaaS dashboard with real-time analytics, team collaboration tools, and automated billing integration.",
        tag: "SaaS · Analytics",
        gradient: "from-teal-400 to-blue-500",
        technologies: [
            "Next.js",
            "Supabase",
            "Stripe",
            "Tailwind"
        ]
    }
];
const stats = [
    {
        value: 5,
        suffix: "+",
        label: "Years Experience"
    },
    {
        value: 50,
        suffix: "+",
        label: "Projects Delivered"
    },
    {
        value: 20,
        suffix: "+",
        label: "Technologies"
    },
    {
        value: 100,
        suffix: "K+",
        label: "Lines of Code"
    }
];
const skills = [
    {
        name: "Frontend",
        percent: 92
    },
    {
        name: "Backend",
        percent: 88
    },
    {
        name: "UI/UX Design",
        percent: 85
    },
    {
        name: "DevOps",
        percent: 78
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const [panelOpen, setPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ── Track scroll for glassmorphism background ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[scrollTo]": (href)=>{
            setPanelOpen(false);
            if (href.startsWith("#")) {
                const el = document.querySelector(href);
                if (el) el.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                window.open(href, "_blank");
            }
        }
    }["Navbar.useCallback[scrollTo]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-500 ${scrolled ? "bg-white/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPanelOpen(true),
                            className: "flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-black/5",
                            "aria-label": "Open menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[16px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-1 md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryNavLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(link.href),
                                    className: "nav-link-hover group relative rounded-full px-5 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]",
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-1.5 left-5 right-5 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.label, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-x-[2px] gap-y-0 text-[22px] font-extrabold leading-[1.1] tracking-tight text-[#1c1c1c]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "R"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-500",
                                        children: "N"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-500",
                                        children: "V"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-1 md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondaryNavLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollTo(link.href),
                                    className: "nav-link-hover group relative rounded-full px-5 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]",
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-1.5 left-5 right-5 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.label, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollTo("#contact"),
                            className: "rounded-full bg-[#1c1c1c] px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg",
                            children: "Let's Talk"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: panelOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "fixed inset-0 z-[998] bg-black/20 backdrop-blur-[2px]",
                            onClick: ()=>setPanelOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                            initial: {
                                x: -420
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: -420
                            },
                            transition: {
                                duration: 0.5,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            },
                            className: "fixed top-4 bottom-4 left-4 z-[999] w-[380px] max-w-[calc(100vw-32px)] overflow-y-auto rounded-[20px] bg-white/95 shadow-2xl backdrop-blur-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPanelOpen(false),
                                                className: "flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c1c1c] text-white transition-transform hover:scale-105",
                                                "aria-label": "Close panel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 4L4 12M4 4l8 8",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold tracking-tight text-[#1c1c1c]",
                                                children: "ARNAV"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex flex-col gap-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelPrimaryLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo(link.href),
                                                className: "group flex items-center justify-between rounded-2xl px-4 py-4 text-left transition-colors hover:bg-[#f5f5f5]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[17px] font-semibold text-[#1c1c1c]",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c1c1c] text-white transition-transform group-hover:translate-x-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 14 14",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 3l4 4-4 4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, link.label, true, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 h-px bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-x-4 gap-y-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["panelSecondaryLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo(link.href),
                                                className: "group flex items-center gap-2 rounded-xl px-3 py-3 text-left transition-colors hover:bg-[#f5f5f5]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px] font-medium text-[#1c1c1c]/70 group-hover:text-[#1c1c1c]",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 10 10",
                                                        fill: "none",
                                                        className: "opacity-0 transition-opacity group-hover:opacity-60",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3 2l3 3-3 3",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, link.label, true, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "3DrrtcOV/aAQ/ir2KbUV98iBnpA=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#d4dde3]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-[900px] px-6 pt-[72px] text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            y: 40,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.2,
                            ease: "easeOut"
                        },
                        className: "text-[clamp(2.5rem,6vw,5rem)] leading-[1.08] font-bold tracking-tight text-[#0a1628]",
                        style: {
                            fontFamily: "'SF Pro Display', 'Inter', system-ui, sans-serif"
                        },
                        children: [
                            "It's not just code.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            "It's craft designed",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            "around",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent",
                                children: "you"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: 30,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut"
                        },
                        className: "mx-auto mt-6 max-w-[520px] text-[17px] leading-relaxed text-[#0a1628]/60",
                        children: "Full-stack developer & creative technologist — building digital experiences that push boundaries."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.8,
                            ease: "easeOut"
                        },
                        className: "mt-10 flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: "rounded-full bg-[#0a1628] px-8 py-3.5 text-[14px] font-semibold tracking-wide text-white uppercase transition-all hover:scale-105 hover:shadow-xl",
                                children: "View Projects"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "rounded-full border-2 border-[#0a1628]/20 px-8 py-3.5 text-[14px] font-semibold tracking-wide text-[#0a1628] uppercase transition-all hover:border-[#0a1628]/40 hover:scale-105",
                                children: "Contact Me"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1.2,
                    delay: 0.6,
                    ease: "easeOut"
                },
                className: "relative mt-16 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto h-[45vh] max-w-[1400px] overflow-hidden rounded-t-[32px] bg-gradient-to-b from-[#1c2a3a] to-[#0a1628]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-end gap-3",
                                children: [
                                    120,
                                    200,
                                    160,
                                    240,
                                    140,
                                    180,
                                    220,
                                    100,
                                    260,
                                    150
                                ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0
                                        },
                                        animate: {
                                            height: h
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.8 + i * 0.08,
                                            ease: [
                                                0.25,
                                                0.46,
                                                0.45,
                                                0.94
                                            ]
                                        },
                                        className: "w-[18px] rounded-t-[4px] sm:w-[24px] md:w-[32px]",
                                        style: {
                                            background: `linear-gradient(to top, rgba(0,240,181,${0.08 + i * 0.03}), rgba(99,102,241,${0.05 + i * 0.02}))`,
                                            boxShadow: i % 3 === 0 ? "0 0 20px rgba(0,240,181,0.15)" : "none"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden opacity-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/3 left-1/4 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-2/3 right-1/4 h-px w-48 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5,
                    duration: 0.8
                },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            10,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-px bg-gradient-to-b from-[#0a1628]/40 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-medium tracking-[0.2em] text-[#0a1628]/40 uppercase",
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScrollReveal(options = {}) {
    _s();
    const { threshold = 0.15, rootMargin = "0px", once = true } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "useScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) observer.unobserve(el);
                    } else if (!once) {
                        setIsVisible(false);
                    }
                }
            }["useScrollReveal.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(el);
            return ({
                "useScrollReveal.useEffect": ()=>observer.disconnect()
            })["useScrollReveal.useEffect"];
        }
    }["useScrollReveal.useEffect"], [
        threshold,
        rootMargin,
        once
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useScrollReveal, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AboutSection() {
    _s();
    const { ref: headingRef, isVisible: headingVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    const { ref: contentRef, isVisible: contentVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative bg-white py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-6 lg:px-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 items-center gap-16 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headingRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    y: 20,
                                    opacity: 0
                                },
                                animate: headingVisible ? {
                                    y: 0,
                                    opacity: 1
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                className: "mb-4 inline-block rounded-full bg-[#1c1c1c]/5 px-5 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-[#1c1c1c]/60 uppercase",
                                children: "About Me"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                animate: headingVisible ? {
                                    y: 0,
                                    opacity: 1
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.05,
                                    ease: "easeOut"
                                },
                                className: "mb-6 text-[clamp(2rem,4vw,3rem)] leading-tight font-bold text-[#0a1628]",
                                children: [
                                    "Building digital",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    "experiences that feel",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            color: "transparent"
                                        },
                                        animate: headingVisible ? {
                                            color: "#10b981"
                                        } : {},
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.5
                                        },
                                        className: "font-bold",
                                        children: "effortless"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                animate: headingVisible ? {
                                    y: 0,
                                    opacity: 1
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.15,
                                    ease: "easeOut"
                                },
                                className: "mb-4 text-[16px] leading-[1.8] text-[#0a1628]/55",
                                children: "I'm a full-stack developer with a passion for clean architecture and stunning interfaces. I bridge the gap between design and engineering — turning complex ideas into simple, beautiful products."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                animate: headingVisible ? {
                                    y: 0,
                                    opacity: 1
                                } : {},
                                transition: {
                                    duration: 0.7,
                                    delay: 0.25,
                                    ease: "easeOut"
                                },
                                className: "text-[16px] leading-[1.8] text-[#0a1628]/55",
                                children: "From React and Node.js to Python and Cloud — I approach every project with the rigor of an engineer and the eye of a designer. Every pixel has purpose. Every line of code has intent."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: contentRef,
                        initial: {
                            y: 60,
                            opacity: 0
                        },
                        animate: contentVisible ? {
                            y: 0,
                            opacity: 1
                        } : {},
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                            ease: [
                                0.25,
                                0.46,
                                0.45,
                                0.94
                            ]
                        },
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0a1628] to-[#1a2d45] p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full border border-emerald-500/10"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full border border-emerald-500/5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-indigo-500/10"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-[12px] font-semibold text-emerald-400",
                                            children: "✦ Available for work"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                {
                                                    label: "Location",
                                                    value: "New Delhi, IN"
                                                },
                                                {
                                                    label: "Experience",
                                                    value: "5+ Years"
                                                },
                                                {
                                                    label: "Focus",
                                                    value: "Full-Stack"
                                                },
                                                {
                                                    label: "Education",
                                                    value: "B.Tech CS"
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl bg-white/[0.05] p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-1 text-[11px] font-medium tracking-wide text-white/30 uppercase",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-semibold text-white",
                                                            children: item.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, item.label, true, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                "React",
                                                "Next.js",
                                                "TypeScript",
                                                "Node.js",
                                                "Python",
                                                "AWS",
                                                "Figma",
                                                "Docker"
                                            ].map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/50",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/AboutSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "tKtiP7fIN88OoovKMjGTSVw4FP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProjectCard({ project, index }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            y: 60,
            opacity: 0
        },
        animate: isVisible ? {
            y: 0,
            opacity: 1
        } : {
            y: 60,
            opacity: 0
        },
        transition: {
            duration: 0.7,
            delay: index * 0.15,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        className: "group relative cursor-pointer overflow-hidden rounded-[28px] bg-[#242424] transition-shadow duration-350",
        style: {
            transform: hovered ? "scale(1.03)" : "scale(1)",
            boxShadow: hovered ? "0 25px 60px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.15)",
            transition: "transform 0.35s ease, box-shadow 0.35s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex h-[240px] items-end justify-between overflow-hidden bg-gradient-to-br p-6 ${project.gradient}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            x: -20,
                            opacity: 0
                        },
                        animate: hovered ? {
                            x: 0,
                            opacity: 1
                        } : {
                            x: -20,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.25,
                            ease: "easeOut"
                        },
                        className: "rounded-full bg-white/90 px-4 py-1.5 text-[12px] font-semibold text-[#1c1c1c] shadow-sm backdrop-blur-sm",
                        children: project.tag
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[4rem] leading-none font-bold text-white/15",
                        children: String(project.id).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap gap-2",
                        children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold tracking-wide text-white/50",
                                children: tech
                            }, tech, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-2.5 text-[1.3rem] font-semibold text-white",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-5 text-[14px] leading-relaxed text-white/50",
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "group/link inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-400",
                        children: [
                            "View Project",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                className: "transition-transform duration-300 group-hover/link:translate-x-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 7h12M8 2l5 5-5 5",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "/YW7GC4NuPVljCt10IKhE39/EbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProjectsSection() {
    _s();
    const { ref: headingRef, isVisible: headingVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "relative bg-[#1c1c1c] py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: headingRef,
                className: "mx-auto mb-16 max-w-[800px] px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: headingVisible ? {
                            y: 0,
                            opacity: 1
                        } : {},
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        },
                        className: "mb-4 inline-block rounded-full bg-emerald-500/10 px-5 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-emerald-400 uppercase",
                        children: "Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            y: 30,
                            opacity: 0
                        },
                        animate: headingVisible ? {
                            y: 0,
                            opacity: 1
                        } : {},
                        transition: {
                            duration: 0.7,
                            delay: 0.05,
                            ease: "easeOut"
                        },
                        className: "mb-4 text-[clamp(2rem,4vw,3rem)] font-bold text-white",
                        children: "Selected Projects"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: 30,
                            opacity: 0
                        },
                        animate: headingVisible ? {
                            y: 0,
                            opacity: 1
                        } : {},
                        transition: {
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut"
                        },
                        className: "text-[16px] leading-relaxed text-white/50",
                        children: [
                            "A curated showcase of work that defines my craft — built with",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    color: "transparent"
                                },
                                animate: headingVisible ? {
                                    color: "#34d399"
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: 0.5
                                },
                                className: "font-medium",
                                children: "precision, passion, and purpose"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-14",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: project,
                        index: i
                    }, project.id, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ProjectsSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "jRCObjFcnaf5E/00tVGIJqCljbE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Counter({ value, suffix }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.3
    });
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (isVisible && !hasAnimated.current) {
                hasAnimated.current = true;
                const duration = 2000;
                const steps = 60;
                const stepTime = duration / steps;
                let current = 0;
                const interval = setInterval({
                    "Counter.useEffect.interval": ()=>{
                        current += value / steps;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(interval);
                        } else {
                            setCount(Math.round(current));
                        }
                    }
                }["Counter.useEffect.interval"], stepTime);
                return ({
                    "Counter.useEffect": ()=>clearInterval(interval)
                })["Counter.useEffect"];
            }
        }
    }["Counter.useEffect"], [
        isVisible,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: "tabular-nums",
        children: [
            count,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Counter, "JAPD1NHStat82m37jPIX2ae0w2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = Counter;
function SkillArc({ name, percent, index }) {
    _s1();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.2
    });
    const circumference = 2 * Math.PI * 52;
    const offset = circumference - percent / 100 * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            y: 40,
            opacity: 0
        },
        animate: isVisible ? {
            y: 0,
            opacity: 1
        } : {},
        transition: {
            duration: 0.7,
            delay: index * 0.12,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        className: "flex flex-col items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "120",
                        height: "120",
                        viewBox: "0 0 120 120",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: `arc-grad-${index}`,
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#00f0b5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#6366f1"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "60",
                                cy: "60",
                                r: "52",
                                fill: "none",
                                stroke: "rgba(255,255,255,0.06)",
                                strokeWidth: "6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "60",
                                cy: "60",
                                r: "52",
                                fill: "none",
                                stroke: `url(#arc-grad-${index})`,
                                strokeWidth: "6",
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                initial: {
                                    strokeDashoffset: circumference
                                },
                                animate: isVisible ? {
                                    strokeDashoffset: offset
                                } : {
                                    strokeDashoffset: circumference
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: 0.3 + index * 0.12,
                                    ease: "easeOut"
                                },
                                style: {
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "center"
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 flex items-center justify-center text-[18px] font-bold text-emerald-400",
                        children: [
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[13px] font-medium tracking-wide text-white/50",
                children: name
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s1(SkillArc, "aCOyLg7yh4JHGJYS1/e1njthfZ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c1 = SkillArc;
function StatsSkillsSection() {
    _s2();
    const { ref: statsRef, isVisible: statsVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    const { ref: skillsHeadingRef, isVisible: skillsHeadingVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "relative bg-[#141414] py-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: statsRef,
                className: "mx-auto mb-24 flex max-w-[1000px] flex-wrap justify-center gap-12 px-6 text-center md:gap-16",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        animate: statsVisible ? {
                            y: 0,
                            opacity: 1
                        } : {},
                        transition: {
                            duration: 0.7,
                            delay: i * 0.1,
                            ease: "easeOut"
                        },
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-emerald-400 drop-shadow-[0_0_40px_rgba(0,240,181,0.25)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                    value: stat.value,
                                    suffix: stat.suffix
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 text-[12px] font-medium tracking-[0.15em] text-white/25 uppercase",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: skillsHeadingRef,
                className: "mx-auto mb-12 max-w-[800px] px-6 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        y: 30,
                        opacity: 0
                    },
                    animate: skillsHeadingVisible ? {
                        y: 0,
                        opacity: 1
                    } : {},
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    },
                    className: "mb-4 text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-white",
                    children: "Core Expertise"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-[800px] flex-wrap justify-center gap-12 px-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillArc, {
                        name: skill.name,
                        percent: skill.percent,
                        index: i
                    }, skill.name, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/StatsSkillsSection.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s2(StatsSkillsSection, "FZrduPt1B31dOyYSr0gfBH66nOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c2 = StatsSkillsSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Counter");
__turbopack_context__.k.register(_c1, "SkillArc");
__turbopack_context__.k.register(_c2, "StatsSkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ContactSection() {
    _s();
    const { ref: headingRef, isVisible: headingVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    const { ref: linksRef, isVisible: linksVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.15
    });
    const contactItems = [
        {
            icon: "✉",
            label: "arnav@example.com",
            href: "mailto:arnav@example.com"
        },
        {
            icon: "☎",
            label: "+91 98765 43210",
            href: "tel:+919876543210"
        },
        {
            icon: "📍",
            label: "New Delhi, India",
            href: "#"
        }
    ];
    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/",
            path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/",
            path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        },
        {
            label: "X",
            href: "https://x.com/",
            path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        },
        {
            label: "Instagram",
            href: "https://instagram.com/",
            path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative bg-[#1c1c1c] py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[700px] px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headingRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            initial: {
                                y: 30,
                                opacity: 0
                            },
                            animate: headingVisible ? {
                                y: 0,
                                opacity: 1
                            } : {},
                            transition: {
                                duration: 0.7,
                                ease: "easeOut"
                            },
                            className: "mb-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-bold text-white",
                            children: [
                                "Let's build",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-emerald-400 to-indigo-500 bg-clip-text text-transparent",
                                    children: "something"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                " ",
                                "extraordinary."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                y: 30,
                                opacity: 0
                            },
                            animate: headingVisible ? {
                                y: 0,
                                opacity: 1
                            } : {},
                            transition: {
                                duration: 0.7,
                                delay: 0.1,
                                ease: "easeOut"
                            },
                            className: "mb-12 text-[16px] leading-relaxed text-white/45",
                            children: "Have a project in mind? Looking for a developer who cares about craft? I'd love to hear from you."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: linksRef,
                    className: "mb-12 flex flex-col items-center gap-4",
                    children: contactItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: item.href,
                            initial: {
                                y: 30,
                                opacity: 0
                            },
                            animate: linksVisible ? {
                                y: 0,
                                opacity: 1
                            } : {},
                            transition: {
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: "easeOut"
                            },
                            className: "flex w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-[#242424] px-8 py-4 text-[15px] font-medium text-white/55 transition-all hover:bg-[#2e2e2e] hover:text-white hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[18px]",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 20,
                        opacity: 0
                    },
                    animate: linksVisible ? {
                        y: 0,
                        opacity: 1
                    } : {},
                    transition: {
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut"
                    },
                    className: "flex justify-center gap-4",
                    children: socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": social.label,
                            className: "flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#242424] text-white/45 transition-all hover:-translate-y-1 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_8px_24px_rgba(0,240,181,0.25)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "22",
                                height: "22",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: social.path
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        }, social.label, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/ContactSection.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "Z9yjtexHeEjANedUST3X/QQ9oKw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: footerRef,
        offset: [
            "start end",
            "end end"
        ]
    });
    // Parallax: vehicle rises from y:100 to y:0
    const vehicleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        100,
        0
    ]);
    const vehicleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footerRef,
        className: "relative bg-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-[60vh] items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    opacity: vehicleOpacity
                                },
                                className: "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    opacity: vehicleOpacity
                                },
                                className: "absolute top-1/2 left-[40%] h-32 w-32 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[60px]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    opacity: vehicleOpacity
                                },
                                className: "absolute top-1/2 left-[60%] h-32 w-32 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[60px]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: vehicleY,
                            opacity: vehicleOpacity
                        },
                        className: "relative z-10 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 w-52 rounded-[40px] bg-gradient-to-b from-[#1a1a2e] to-[#16162a] shadow-[0_0_60px_rgba(0,240,181,0.1)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-3 h-12 w-36 rounded-[20px] bg-gradient-to-b from-[#2a2a4a]/80 to-[#1a1a2e]/60"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex justify-between px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-12 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(0,240,181,0.6)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-12 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(0,240,181,0.6)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mt-2 h-1 w-40 rounded-full bg-emerald-500/20 blur-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-[13px] font-medium tracking-[0.3em] text-white/20 uppercase",
                                children: "Crafted with precision"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-white/[0.04] bg-[#0a0a0a] px-6 py-16 lg:px-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1200px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex flex-col justify-between gap-10 md:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[300px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mb-4 inline-block rounded-full bg-[#242424] px-6 py-2.5 text-[20px] font-bold text-emerald-400",
                                            children: "AR"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-[14px] leading-relaxed text-white/20",
                                            children: [
                                                "Crafted with precision.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                "Delivered with passion."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1 text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase",
                                                    children: "Navigate"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    "About",
                                                    "Projects",
                                                    "Skills",
                                                    "Contact"
                                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${l.toLowerCase()}`,
                                                        className: "text-[14px] text-white/40 transition-colors hover:text-emerald-400",
                                                        children: l
                                                    }, l, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mb-1 text-[11px] font-bold tracking-[0.2em] text-white/20 uppercase",
                                                    children: "Socials"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    {
                                                        l: "GitHub",
                                                        h: "https://github.com/"
                                                    },
                                                    {
                                                        l: "LinkedIn",
                                                        h: "https://linkedin.com/"
                                                    },
                                                    {
                                                        l: "X / Twitter",
                                                        h: "https://x.com/"
                                                    }
                                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: s.h,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-[14px] text-white/40 transition-colors hover:text-emerald-400",
                                                        children: s.l
                                                    }, s.l, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-[12px] text-white/20 md:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "© 2026 Arnav Ranjan. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Designed & Developed with ♥"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Footer, "qyT92z6u0JKlBEPsvh2DEYMrYSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Zoox%20Portfolio_src_05pfmlw._.js.map