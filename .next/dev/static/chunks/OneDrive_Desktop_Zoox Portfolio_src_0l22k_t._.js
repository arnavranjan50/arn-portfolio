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
        href: "https://github.com/arnavranjan50"
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arnav-ranjan-972348207"
    },
    {
        label: "Resume",
        href: "/Resume.pdf"
    },
    {
        label: "Twitter / X",
        href: "https://x.com/arnavranjan50"
    },
    {
        label: "Instagram",
        href: "https://instagram.com/arnav_ranjan18"
    },
    {
        label: "Email",
        href: "mailto:arnavranjan50@gmail.com"
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
        title: "AI Based Stress Detection Using Typing Exercises",
        description: "An AI-based system that detects stress levels using typing exercises, speech analysis, and psychological questions.",
        tag: "AI · Machine Learning",
        gradient: "from-amber-400 to-red-500",
        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Flask",
            "Discord.js"
        ]
    },
    {
        id: 4,
        title: "Campus Hustlers",
        description: "Campus Hustlers is a next-gen campus-centric social media platform designed to connect college students for knowledge sharing, project collaboration, and hyperlocal community building.",
        tag: "Social Media · Community",
        gradient: "from-teal-400 to-blue-500",
        technologies: [
            "Next.js",
            "Supabase",
            "Stripe",
            "Tailwind"
        ]
    },
    {
        id: 5,
        title: "Animal Detection using YOLOv8",
        description: "A deep learning model using YOLOv8 architecture to detect animals in images and videos.",
        tag: "Deep Learning",
        gradient: "from-teal-400 to-blue-500",
        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV"
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
/* ── Floating vehicle icon with spinning wheels ── */ function ScrollVehicle({ scrollY }) {
    const wheelRotation = scrollY * 2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        initial: {
            y: -70,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -70,
            opacity: 0
        },
        transition: {
            duration: 0.4,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        },
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        className: "fixed top-4 left-1/2 z-50 -translate-x-1/2",
        "aria-label": "Scroll to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-xl shadow-black/10 backdrop-blur-xl transition-transform hover:scale-110",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `rotate(${wheelRotation} 14 32)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "32",
                                r: "8",
                                fill: "none",
                                stroke: "#1c1c1c",
                                strokeWidth: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "32",
                                r: "5.5",
                                fill: "none",
                                stroke: "#444",
                                strokeWidth: "0.8"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "32",
                                r: "2",
                                fill: "#1c1c1c"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "32",
                                r: "1",
                                fill: "#555"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            [
                                0,
                                60,
                                120,
                                180,
                                240,
                                300
                            ].map((angle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "14",
                                    y1: "32",
                                    x2: 14 + 5.5 * Math.cos(angle * Math.PI / 180),
                                    y2: 32 + 5.5 * Math.sin(angle * Math.PI / 180),
                                    stroke: "#666",
                                    strokeWidth: "0.6"
                                }, angle, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `rotate(${wheelRotation} 36 32)`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "36",
                                cy: "32",
                                r: "8",
                                fill: "none",
                                stroke: "#1c1c1c",
                                strokeWidth: "2.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "36",
                                cy: "32",
                                r: "5.5",
                                fill: "none",
                                stroke: "#444",
                                strokeWidth: "0.8"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "36",
                                cy: "32",
                                r: "2",
                                fill: "#1c1c1c"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "36",
                                cy: "32",
                                r: "1",
                                fill: "#555"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            [
                                0,
                                60,
                                120,
                                180,
                                240,
                                300
                            ].map((angle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "36",
                                    y1: "32",
                                    x2: 36 + 5.5 * Math.cos(angle * Math.PI / 180),
                                    y2: 32 + 5.5 * Math.sin(angle * Math.PI / 180),
                                    stroke: "#666",
                                    strokeWidth: "0.6"
                                }, angle, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 26 L22 20 L30 20 L36 26",
                        stroke: "#1c1c1c",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 22 Q22 18 28 19",
                        stroke: "#1c1c1c",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "25",
                        cy: "22",
                        rx: "4",
                        ry: "2.5",
                        fill: "#1c1c1c"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "32",
                        y1: "20",
                        x2: "36",
                        y2: "27",
                        stroke: "#1c1c1c",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "18",
                        y1: "26",
                        x2: "14",
                        y2: "28",
                        stroke: "#1c1c1c",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "30",
                        y1: "18",
                        x2: "34",
                        y2: "17",
                        stroke: "#1c1c1c",
                        strokeWidth: "1.8",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "35",
                        cy: "24",
                        r: "1.5",
                        fill: "#00f0b5"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "35",
                        cy: "24",
                        r: "2.5",
                        fill: "none",
                        stroke: "#00f0b5",
                        strokeWidth: "0.4",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "15",
                        cy: "24",
                        r: "1",
                        fill: "#ef4444"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 29 L10 30 L9 30",
                        stroke: "#666",
                        strokeWidth: "1.2",
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        animate: {
                            opacity: [
                                0.2,
                                0.5,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 0.6,
                            repeat: Infinity
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "2",
                                y1: "28",
                                x2: "6",
                                y2: "28",
                                stroke: "#999",
                                strokeWidth: "0.8",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "1",
                                y1: "31",
                                x2: "5",
                                y2: "31",
                                stroke: "#999",
                                strokeWidth: "0.8",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "2",
                                y1: "34",
                                x2: "5.5",
                                y2: "34",
                                stroke: "#999",
                                strokeWidth: "0.6",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ScrollVehicle;
function Navbar() {
    _s();
    const [panelOpen, setPanelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logoHovered, setLogoHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navHidden, setNavHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentScrollY, setCurrentScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* ── Track scroll: glassmorphism + hide/show + direction ── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    const y = window.scrollY;
                    setCurrentScrollY(y);
                    setScrolled(y > 40);
                    if (y > 80) {
                        if (y > lastScrollY.current + 5) {
                            // Scrolling DOWN → hide navbar
                            setNavHidden(true);
                        } else if (y < lastScrollY.current - 5) {
                            // Scrolling UP → show navbar
                            setNavHidden(false);
                        }
                    } else {
                        setNavHidden(false);
                    }
                    lastScrollY.current = y;
                }
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: navHidden && !panelOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollVehicle, {
                    scrollY: currentScrollY
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: false,
                animate: {
                    y: navHidden ? -80 : 0,
                    opacity: navHidden ? 0 : 1
                },
                transition: {
                    duration: 0.35,
                    ease: [
                        0.25,
                        0.46,
                        0.45,
                        0.94
                    ]
                },
                className: `fixed top-0 inset-x-0 z-50 h-[72px] transition-colors duration-500 ${scrolled && !navHidden ? "bg-white/70 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl" : "bg-transparent"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-full max-w-[1200px] items-center justify-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPanelOpen(true),
                            className: "absolute left-6 flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-black/5 lg:left-14",
                            "aria-label": "Open menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[5px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[22px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block h-[2px] w-[16px] rounded-full bg-[#1c1c1c]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 items-center justify-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden items-center gap-0.5 md:flex",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryNavLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollTo(link.href),
                                            className: "group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]",
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bottom-1.5 left-4 right-4 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.label, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                    onMouseEnter: ()=>setLogoHovered(true),
                                    onMouseLeave: ()=>setLogoHovered(false),
                                    className: "relative mx-3 select-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        className: "overflow-hidden text-[20px] font-extrabold tracking-tight text-[#1c1c1c]",
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: logoHovered ? "repeat(4, auto)" : "repeat(2, auto)",
                                            gap: logoHovered ? "0 6px" : "0 2px"
                                        },
                                        transition: {
                                            duration: 0.35,
                                            ease: [
                                                0.25,
                                                0.46,
                                                0.45,
                                                0.94
                                            ]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: "position",
                                                transition: {
                                                    duration: 0.35,
                                                    ease: [
                                                        0.25,
                                                        0.46,
                                                        0.45,
                                                        0.94
                                                    ]
                                                },
                                                children: "A"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: "position",
                                                transition: {
                                                    duration: 0.35,
                                                    ease: [
                                                        0.25,
                                                        0.46,
                                                        0.45,
                                                        0.94
                                                    ]
                                                },
                                                children: "R"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: "position",
                                                className: "text-emerald-500",
                                                transition: {
                                                    duration: 0.35,
                                                    ease: [
                                                        0.25,
                                                        0.46,
                                                        0.45,
                                                        0.94
                                                    ]
                                                },
                                                children: "N"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: "position",
                                                className: "text-emerald-500",
                                                transition: {
                                                    duration: 0.35,
                                                    ease: [
                                                        0.25,
                                                        0.46,
                                                        0.45,
                                                        0.94
                                                    ]
                                                },
                                                children: "V"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden items-center gap-0.5 md:flex",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondaryNavLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollTo(link.href),
                                            className: "group relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide text-[#1c1c1c]/70 uppercase transition-colors hover:text-[#1c1c1c]",
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute bottom-1.5 left-4 right-4 h-[1.5px] origin-right scale-x-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.label, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollTo("#contact"),
                            className: "absolute right-4 hidden rounded-full bg-[#1c1c1c] px-5 py-2 text-[12px] font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg sm:block sm:right-6 sm:px-6 sm:py-2.5 sm:text-[13px] lg:right-14",
                            children: "Let's Talk"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 162,
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
                            lineNumber: 258,
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
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold tracking-tight text-[#1c1c1c]",
                                                children: "ARNAV"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 274,
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
                                                        lineNumber: 293,
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
                                                                lineNumber: 296,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, link.label, true, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 h-px bg-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 302,
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
                                                        lineNumber: 310,
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
                                                            lineNumber: 312,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, link.label, true, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Navbar.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "iVusRDxWwrB0Ei4A+ADAahdHgBs=");
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollVehicle");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechStackInteractive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const TECH_DATA = [
    {
        id: 0,
        label: "JS",
        name: "JavaScript",
        description: "Dynamic scripting for interactive web experiences",
        bg: "#f7df1e",
        text: "#000",
        size: 76,
        baseX: -90,
        baseY: -35
    },
    {
        id: 1,
        label: "⚛",
        name: "React",
        description: "Component-driven UIs with virtual DOM efficiency",
        bg: "#61dafb",
        text: "#222",
        size: 84,
        baseX: 0,
        baseY: -15
    },
    {
        id: 2,
        label: "TS",
        name: "TypeScript",
        description: "Type-safe JavaScript for scalable applications",
        bg: "#3178c6",
        text: "#fff",
        size: 64,
        baseX: 90,
        baseY: -45
    },
    {
        id: 3,
        label: "🐳",
        name: "Docker",
        description: "Containerized deployments for consistent environments",
        bg: "#2496ed",
        text: "#fff",
        size: 68,
        baseX: 70,
        baseY: 35
    },
    {
        id: 4,
        label: "Py",
        name: "Python",
        description: "AI/ML pipelines and backend automation",
        bg: "#3776ab",
        text: "#ffd43b",
        size: 60,
        baseX: -70,
        baseY: 45
    },
    {
        id: 5,
        label: "N",
        name: "Node.js",
        description: "Server-side JS runtime for API development",
        bg: "#68a063",
        text: "#fff",
        size: 62,
        baseX: 30,
        baseY: 60
    },
    {
        id: 6,
        label: "⚡",
        name: "Next.js",
        description: "Full-stack React framework with SSR & ISR",
        bg: "#000",
        text: "#fff",
        size: 56,
        baseX: -120,
        baseY: 15
    },
    {
        id: 7,
        label: "🔥",
        name: "Firebase",
        description: "Realtime database, auth & cloud functions",
        bg: "#ff6f00",
        text: "#fff",
        size: 50,
        baseX: -25,
        baseY: -65
    },
    {
        id: 8,
        label: "☁",
        name: "AWS",
        description: "Cloud infrastructure — EC2, S3, Lambda",
        bg: "#ff9900",
        text: "#232f3e",
        size: 52,
        baseX: 55,
        baseY: -65
    },
    {
        id: 9,
        label: "🐘",
        name: "PostgreSQL",
        description: "Advanced relational database for complex queries",
        bg: "#336791",
        text: "#fff",
        size: 54,
        baseX: 120,
        baseY: 5
    },
    {
        id: 10,
        label: "🤖",
        name: "TensorFlow",
        description: "Machine learning models and neural networks",
        bg: "#ff6f00",
        text: "#fff",
        size: 48,
        baseX: -40,
        baseY: 65
    },
    {
        id: 11,
        label: "🧠",
        name: "LangChain",
        description: "LLM orchestration for AI-powered applications",
        bg: "#1c3c3c",
        text: "#00f0b5",
        size: 46,
        baseX: 100,
        baseY: 50
    }
];
function InteractiveBall({ ball, mouseX, mouseY, containerRef, isSelected, onSelect }) {
    _s();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, {
        stiffness: 150,
        damping: 20
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, {
        stiffness: 150,
        damping: 20
    });
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ballRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mouse repel effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveBall.useEffect": ()=>{
            if (!containerRef.current || !ballRef.current || isSelected) return;
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const centerX = rect.width / 2 + ball.baseX;
            const centerY = rect.height / 2 + ball.baseY;
            const relMouseX = mouseX - rect.left;
            const relMouseY = mouseY - rect.top;
            const dx = centerX - relMouseX;
            const dy = centerY - relMouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const repelRadius = 120;
            if (dist < repelRadius && dist > 0) {
                const force = (1 - dist / repelRadius) * 35;
                x.set(dx / dist * force);
                y.set(dy / dist * force);
            } else {
                x.set(0);
                y.set(0);
            }
        }
    }["InteractiveBall.useEffect"], [
        mouseX,
        mouseY,
        ball.baseX,
        ball.baseY,
        containerRef,
        x,
        y,
        isSelected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ballRef,
        drag: true,
        dragConstraints: containerRef,
        dragElastic: 0.3,
        dragMomentum: true,
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: isSelected ? 1.3 : 1,
            opacity: 1,
            zIndex: isSelected ? 50 : hovered ? 40 : 10
        },
        transition: {
            scale: {
                type: "spring",
                stiffness: 300,
                damping: 20
            },
            opacity: {
                delay: 0.9 + ball.id * 0.06,
                duration: 0.4
            }
        },
        whileTap: {
            scale: 0.9
        },
        onHoverStart: ()=>setHovered(true),
        onHoverEnd: ()=>setHovered(false),
        onClick: (e)=>{
            e.stopPropagation();
            onSelect(isSelected ? null : ball.id);
        },
        className: "absolute cursor-grab active:cursor-grabbing",
        style: {
            left: `calc(50% + ${ball.baseX}px)`,
            top: `calc(50% + ${ball.baseY}px)`,
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hovered && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 5,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.15
                    },
                    className: "absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0a0e1a] shadow-xl",
                    children: [
                        ball.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 8,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute -bottom-24 left-1/2 z-50 w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#12162a]/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:-bottom-28 sm:w-56",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-1 text-[13px] font-bold text-white",
                            children: ball.name
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] leading-relaxed text-white/50",
                            children: ball.description
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-[#12162a]/95"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    y: isSelected ? 0 : [
                        0,
                        -(5 + ball.id % 4 * 2),
                        0
                    ],
                    rotate: isSelected ? 0 : [
                        0,
                        ball.id % 2 === 0 ? 4 : -4,
                        0
                    ]
                },
                transition: {
                    duration: 3 + ball.id % 3,
                    repeat: isSelected ? 0 : Infinity,
                    ease: "easeInOut"
                },
                className: "relative flex items-center justify-center rounded-full",
                style: {
                    width: ball.size,
                    height: ball.size,
                    background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.95) 0%, ${ball.bg} 45%, rgba(0,0,0,0.2) 100%)`,
                    boxShadow: hovered || isSelected ? `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${ball.bg}40, inset 0 -4px 10px rgba(0,0,0,0.15), inset 0 6px 15px rgba(255,255,255,0.5)` : `0 8px 24px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.1), inset 0 4px 12px rgba(255,255,255,0.4)`,
                    transition: "box-shadow 0.3s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute rounded-full",
                        style: {
                            width: ball.size * 0.35,
                            height: ball.size * 0.25,
                            top: "15%",
                            left: "20%",
                            background: "radial-gradient(ellipse, rgba(255,255,255,0.6), transparent)",
                            filter: "blur(2px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative z-10 select-none font-bold",
                        style: {
                            fontSize: ball.size * 0.33,
                            color: ball.text,
                            textShadow: ball.text === "#fff" ? "0 1px 3px rgba(0,0,0,0.3)" : "none"
                        },
                        children: ball.label
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(InteractiveBall, "I4n/n3vSvT6wbToMJbwv7wtQBFo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = InteractiveBall;
function TechStackInteractive() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TechStackInteractive.useCallback[handleMouseMove]": (e)=>{
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        }
    }["TechStackInteractive.useCallback[handleMouseMove]"], []);
    // Handle touch for mobile
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TechStackInteractive.useCallback[handleTouchMove]": (e)=>{
            const touch = e.touches[0];
            if (touch) {
                setMousePos({
                    x: touch.clientX,
                    y: touch.clientY
                });
            }
        }
    }["TechStackInteractive.useCallback[handleTouchMove]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden rounded-t-[20px] bg-[#0a0e1a] px-6 py-12 sm:rounded-t-[32px] sm:py-16",
        onMouseMove: handleMouseMove,
        onTouchMove: handleTouchMove,
        onClick: ()=>setSelectedId(null),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                    delay: 0.8,
                    ease: "easeOut"
                },
                className: "mb-4 text-center text-[clamp(2rem,6vw,4.5rem)] leading-[1] font-bold tracking-tight text-white/90 italic",
                style: {
                    fontFamily: "'Inter', system-ui, sans-serif"
                },
                children: "MY TECHSTACK"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2,
                    duration: 0.6
                },
                className: "mb-6 text-center text-[11px] font-medium tracking-[0.2em] text-white/20 uppercase sm:mb-10",
                children: "Drag · Hover · Click to explore"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative mx-auto h-[280px] max-w-[600px] sm:h-[350px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            x: [
                                0,
                                20,
                                0
                            ],
                            y: [
                                0,
                                -15,
                                0
                            ]
                        },
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "pointer-events-none absolute right-[5%] bottom-[10%] h-8 w-8 rounded-full bg-purple-400/80 blur-[2px] sm:h-10 sm:w-10",
                        style: {
                            boxShadow: "0 0 30px 10px rgba(192,132,252,0.35)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[80px]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    TECH_DATA.map((ball)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveBall, {
                            ball: ball,
                            mouseX: mousePos.x,
                            mouseY: mousePos.y,
                            containerRef: containerRef,
                            isSelected: selectedId === ball.id,
                            onSelect: setSelectedId
                        }, ball.id, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s1(TechStackInteractive, "xfWKt2EyuzwFpc1DUSGoKKE6Qgg=");
_c1 = TechStackInteractive;
var _c, _c1;
__turbopack_context__.k.register(_c, "InteractiveBall");
__turbopack_context__.k.register(_c1, "TechStackInteractive");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$components$2f$TechStackInteractive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/components/TechStackInteractive.tsx [app-client] (ecmascript)");
"use client";
;
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
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            "It's craft designed",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            "around",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent",
                                children: "you"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 11,
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
                        className: "mx-auto mt-6 max-w-[520px] px-2 text-[15px] leading-relaxed text-[#0a1628]/60 sm:text-[17px]",
                        children: "AI Engineer & creative technologist — building digital experiences that push boundaries."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 29,
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
                        className: "mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: "w-full rounded-full bg-[#0a1628] px-8 py-3.5 text-center text-[14px] font-semibold tracking-wide text-white uppercase transition-all hover:scale-105 hover:shadow-xl sm:w-auto",
                                children: "View Projects"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "w-full rounded-full border-2 border-[#0a1628]/20 px-8 py-3.5 text-center text-[14px] font-semibold tracking-wide text-[#0a1628] uppercase transition-all hover:border-[#0a1628]/40 hover:scale-105 sm:w-auto",
                                children: "Contact Me"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                lineNumber: 10,
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
                    className: "mx-auto max-w-[1400px] overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$components$2f$TechStackInteractive$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
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
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-medium tracking-[0.2em] text-[#0a1628]/40 uppercase",
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Hero.tsx",
        lineNumber: 8,
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
                                            color: "rgba(16,185,129,0)"
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
                                children: "I'm an AI engineer with a passion for clean architecture and stunning interfaces. I bridge the gap between design and engineering — turning complex ideas into simple, beautiful products."
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
                                                    value: "Bengaluru, IN"
                                                },
                                                {
                                                    label: "Experience",
                                                    value: "2+ Years"
                                                },
                                                {
                                                    label: "Focus",
                                                    value: "AI, ML"
                                                },
                                                {
                                                    label: "Education",
                                                    value: "B.Tech CSE(AI & ML)"
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
                                    color: "rgba(52,211,153,0)"
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
            label: "arnavranjan50@gmail.com",
            href: "mailto:arnavranjan50@gmail.com"
        },
        {
            icon: "☎",
            label: "+91 8446548117",
            href: "tel:+918446548117"
        },
        {
            icon: "📍",
            label: "Bengaluru, India",
            href: "#"
        }
    ];
    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/arnavranjan50",
            path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/arnav-ranjan-972348207",
            path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        },
        {
            label: "X",
            href: "https://x.com/arnavranjan50",
            path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        },
        {
            label: "Instagram",
            href: "https://instagram.com/arnav_ranjan18",
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
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecorativeVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/src/hooks/useScrollReveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DecorativeVisual() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const bgY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        60,
        -60
    ]);
    const orb1Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        80,
        -80
    ]);
    const orb2Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        40,
        -120
    ]);
    const orb3Y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        100,
        -40
    ]);
    const gridOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3,
        0.7,
        1
    ], [
        0,
        0.6,
        0.6,
        0
    ]);
    const lineScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.3,
        1,
        0.3
    ]);
    const { ref: textRef, isVisible: textVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden bg-[#111] py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    opacity: gridOpacity
                },
                className: "pointer-events-none absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 1440 600",
                    preserveAspectRatio: "none",
                    className: "absolute inset-0",
                    children: [
                        Array.from({
                            length: 12
                        }).map((_, i)=>{
                            const y = 300 + (i - 6) * 25 + (i - 6) * (i - 6) * 1.5;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: y,
                                x2: "1440",
                                y2: y,
                                stroke: "rgba(0,240,181,0.06)",
                                strokeWidth: "0.5"
                            }, `h-${i}`, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this);
                        }),
                        Array.from({
                            length: 20
                        }).map((_, i)=>{
                            const x = i * (1440 / 19);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x,
                                y1: "600",
                                x2: 720 + (x - 720) * 0.1,
                                y2: "200",
                                stroke: "rgba(0,240,181,0.04)",
                                strokeWidth: "0.5"
                            }, `v-${i}`, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: orb1Y
                },
                className: "pointer-events-none absolute top-[10%] left-[15%] h-64 w-64 rounded-full bg-emerald-500/[0.07] blur-[80px]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: orb2Y
                },
                className: "pointer-events-none absolute top-[30%] right-[10%] h-48 w-48 rounded-full bg-indigo-500/[0.06] blur-[70px]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: orb3Y
                },
                className: "pointer-events-none absolute bottom-[15%] left-[40%] h-56 w-56 rounded-full bg-teal-500/[0.05] blur-[90px]"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-[1000px] items-center justify-center px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        y: bgY
                    },
                    className: "relative flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute h-[320px] w-[320px] md:h-[420px] md:w-[420px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 420 420",
                                fill: "none",
                                className: "h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "210",
                                        cy: "210",
                                        r: "200",
                                        stroke: "rgba(0,240,181,0.08)",
                                        strokeWidth: "0.5",
                                        strokeDasharray: "8 12"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "210",
                                        cy: "10",
                                        r: "3",
                                        fill: "rgba(0,240,181,0.3)"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "410",
                                        cy: "210",
                                        r: "2",
                                        fill: "rgba(99,102,241,0.3)"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "210",
                                        cy: "410",
                                        r: "2.5",
                                        fill: "rgba(0,240,181,0.2)"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "10",
                                        cy: "210",
                                        r: "2",
                                        fill: "rgba(99,102,241,0.2)"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: -360
                            },
                            transition: {
                                duration: 45,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute h-[220px] w-[220px] md:h-[300px] md:w-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 300 300",
                                fill: "none",
                                className: "h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "150",
                                        cy: "150",
                                        r: "140",
                                        stroke: "rgba(99,102,241,0.07)",
                                        strokeWidth: "0.5",
                                        strokeDasharray: "4 8"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        0,
                                        72,
                                        144,
                                        216,
                                        288
                                    ].map((deg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: 150 + 140 * Math.cos(deg * Math.PI / 180),
                                            cy: 150 + 140 * Math.sin(deg * Math.PI / 180),
                                            r: "2",
                                            fill: "rgba(0,240,181,0.25)"
                                        }, deg, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute h-[140px] w-[140px] md:h-[180px] md:w-[180px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 180 180",
                                fill: "none",
                                className: "h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "90",
                                        cy: "90",
                                        r: "80",
                                        stroke: "rgba(0,240,181,0.1)",
                                        strokeWidth: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        0,
                                        120,
                                        240
                                    ].map((deg)=>{
                                        const x = 90 + 80 * Math.cos(deg * Math.PI / 180);
                                        const y = 90 + 80 * Math.sin(deg * Math.PI / 180);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: `${x},${y - 4} ${x - 3.5},${y + 2} ${x + 3.5},${y + 2}`,
                                            fill: "rgba(0,240,181,0.2)"
                                        }, deg, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex h-[80px] w-[80px] items-center justify-center md:h-[100px] md:w-[100px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: [
                                            1,
                                            1.15,
                                            1
                                        ],
                                        opacity: [
                                            0.4,
                                            0.8,
                                            0.4
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    className: "absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-[#0a0a0a] md:h-20 md:w-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[24px] font-bold tracking-tight text-emerald-400 md:text-[28px]",
                                        children: "AR"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    scaleX: lineScale
                },
                className: "mx-auto mt-20 max-w-[600px] origin-center px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "mt-10 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        y: 30,
                        opacity: 0
                    },
                    animate: textVisible ? {
                        y: 0,
                        opacity: 1
                    } : {},
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    },
                    className: "text-[13px] font-medium tracking-[0.3em] text-white/15 uppercase",
                    children: "Building the future, one pixel at a time"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            Array.from({
                length: 20
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            -30 - Math.random() * 40,
                            0
                        ],
                        opacity: [
                            0.1,
                            0.4,
                            0.1
                        ]
                    },
                    transition: {
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                    },
                    className: "pointer-events-none absolute rounded-full bg-emerald-400",
                    style: {
                        width: 1.5 + Math.random() * 2,
                        height: 1.5 + Math.random() * 2,
                        left: `${5 + Math.random() * 90}%`,
                        top: `${10 + Math.random() * 80}%`
                    }
                }, i, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/DecorativeVisual.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(DecorativeVisual, "y3N/TvA1NE8Cr1fH4KdqzVWPJlc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollReveal"]
    ];
});
_c = DecorativeVisual;
var _c;
__turbopack_context__.k.register(_c, "DecorativeVisual");
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
    const vehicleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: vehicleRef,
        offset: [
            "start end",
            "end end"
        ]
    });
    const vehicleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        80,
        0
    ]);
    const vehicleOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.4
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#f5f5f5] px-6 pt-16 pb-10 lg:px-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase",
                                    children: "Navigate"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2.5",
                                    children: [
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
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: "group flex items-center gap-2 text-[15px] font-semibold text-[#1c1c1c] transition-colors hover:text-emerald-600",
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12",
                                                    height: "12",
                                                    viewBox: "0 0 12 12",
                                                    fill: "none",
                                                    className: "opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 3l3 3-3 3",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.label, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase",
                                    children: "Elsewhere"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-x-8 gap-y-2.5",
                                    children: [
                                        {
                                            label: "GitHub",
                                            href: "https://github.com/"
                                        },
                                        {
                                            label: "LinkedIn",
                                            href: "https://linkedin.com/"
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
                                            label: "Resume",
                                            href: "/src/Resume.pdf"
                                        }
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            target: link.href.startsWith("http") ? "_blank" : undefined,
                                            rel: link.href.startsWith("http") ? "noopener noreferrer" : undefined,
                                            className: "group flex items-center gap-1.5 text-[14px] font-medium text-[#1c1c1c]/70 transition-colors hover:text-[#1c1c1c]",
                                            children: [
                                                link.label,
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
                                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, link.label, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-5 text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/40 uppercase",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-[14px] leading-relaxed text-[#1c1c1c]/60",
                                    children: "Have a project in mind? Let's talk about how we can work together."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:arnav@example.com",
                                    className: "inline-flex items-center gap-2 rounded-full border-2 border-[#1c1c1c] px-6 py-2.5 text-[13px] font-semibold text-[#1c1c1c] uppercase tracking-wide transition-all hover:bg-[#1c1c1c] hover:text-white",
                                    children: [
                                        "Say Hello",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 3l3 3-3 3",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#1c1c1c]/10 bg-[#f5f5f5] px-6 py-5 lg:px-14",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-6",
                            children: [
                                "Privacy Policy",
                                "Terms of Use",
                                "Cookies"
                            ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "group flex items-center gap-1 text-[12px] font-semibold tracking-wide text-[#1c1c1c]/60 uppercase transition-colors hover:text-[#1c1c1c]",
                                    children: [
                                        link,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "8",
                                            height: "8",
                                            viewBox: "0 0 8 8",
                                            fill: "none",
                                            className: "opacity-0 transition-opacity group-hover:opacity-60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 1.5l2.5 2.5L2 6.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mr-2 text-[11px] font-bold tracking-[0.15em] text-[#1c1c1c]/40 uppercase",
                                    children: "Socials"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: "GitHub",
                                        path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                                    },
                                    {
                                        label: "LinkedIn",
                                        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                    },
                                    {
                                        label: "Instagram",
                                        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                    },
                                    {
                                        label: "X",
                                        path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        "aria-label": s.label,
                                        className: "flex h-8 w-8 items-center justify-center rounded-full text-[#1c1c1c]/50 transition-colors hover:text-[#1c1c1c]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: s.path
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    }, s.label, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vehicleRef,
                className: "relative bg-[#0a0a0a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[60px] left-0 right-0 h-[60px] overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 1440 60",
                            fill: "none",
                            preserveAspectRatio: "none",
                            className: "absolute bottom-0 h-[60px] w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 60 L0 30 Q720 -30 1440 30 L1440 60 Z",
                                fill: "#0a0a0a"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-[55vh] items-center justify-center overflow-hidden pt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    opacity: vehicleOpacity
                                },
                                className: "pointer-events-none absolute inset-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[100px]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[45%] left-[42%] h-24 w-24 rounded-full bg-emerald-400/15 blur-[50px]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[45%] left-[58%] h-24 w-24 rounded-full bg-emerald-400/15 blur-[50px]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: {
                                    y: vehicleY,
                                    opacity: vehicleOpacity
                                },
                                className: "relative z-10 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "200",
                                        height: "160",
                                        viewBox: "0 0 200 160",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M60 50 Q60 20 100 15 Q140 20 140 50 L145 90 Q145 100 135 105 L65 105 Q55 100 55 90 Z",
                                                fill: "#151520",
                                                stroke: "#222",
                                                strokeWidth: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M72 40 Q72 28 100 25 Q128 28 128 40 L130 60 L70 60 Z",
                                                fill: "#1a1a2e",
                                                opacity: "0.7"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M85 30 Q90 28 100 27 L98 45 L83 45 Z",
                                                fill: "white",
                                                opacity: "0.04"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "68",
                                                y: "75",
                                                width: "18",
                                                height: "12",
                                                rx: "3",
                                                fill: "#1a1a1a",
                                                stroke: "#333",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "114",
                                                y: "75",
                                                width: "18",
                                                height: "12",
                                                rx: "3",
                                                fill: "#1a1a1a",
                                                stroke: "#333",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "70",
                                                y: "77",
                                                width: "14",
                                                height: "8",
                                                rx: "2",
                                                fill: "#00f0b5",
                                                opacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "116",
                                                y: "77",
                                                width: "14",
                                                height: "8",
                                                rx: "2",
                                                fill: "#00f0b5",
                                                opacity: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "70",
                                                y: "77",
                                                width: "14",
                                                height: "8",
                                                rx: "2",
                                                fill: "#00f0b5",
                                                opacity: "0.3",
                                                filter: "url(#glow)"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "116",
                                                y: "77",
                                                width: "14",
                                                height: "8",
                                                rx: "2",
                                                fill: "#00f0b5",
                                                opacity: "0.3",
                                                filter: "url(#glow)"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "82",
                                                y: "92",
                                                width: "36",
                                                height: "16",
                                                rx: "4",
                                                fill: "#111",
                                                stroke: "#333",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: "100",
                                                y: "103",
                                                textAnchor: "middle",
                                                fill: "white",
                                                fontSize: "8",
                                                fontWeight: "bold",
                                                fontFamily: "system-ui",
                                                children: "ARNAV"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "90",
                                                cy: "18",
                                                r: "1.5",
                                                fill: "#333"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "100",
                                                cy: "16",
                                                r: "1.5",
                                                fill: "#333"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "110",
                                                cy: "18",
                                                r: "1.5",
                                                fill: "#333"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "58",
                                                cy: "70",
                                                r: "2.5",
                                                fill: "#00f0b5",
                                                opacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "142",
                                                cy: "70",
                                                r: "2.5",
                                                fill: "#00f0b5",
                                                opacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M65 105 Q100 112 135 105",
                                                stroke: "#222",
                                                strokeWidth: "0.5",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                    id: "glow",
                                                    x: "-50%",
                                                    y: "-50%",
                                                    width: "200%",
                                                    height: "200%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                            stdDeviation: "4",
                                                            result: "blur"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                    in: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                    in: "SourceGraphic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 h-[1px] w-20 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/[0.04] px-6 py-6 lg:px-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex max-w-[1200px] items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[12px] text-white/20",
                                    children: [
                                        "Copyright Arnav Ranjan. 2026",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        "All Rights Reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[20px] font-bold tracking-tight text-white/20",
                                    children: [
                                        "AR",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-500/30",
                                            children: "NV"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Footer.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Footer, "xXpySkEc1t4tjRwMse5fqA/boTk=", false, function() {
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
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trailRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [hovering, setHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clicking, setClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setTrailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomCursor.useCallback[setTrailRef]": (el, i)=>{
            if (el) trailRefs.current[i] = el;
        }
    }["CustomCursor.useCallback[setTrailRef]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Don't run on touch devices
            if ("ontouchstart" in window) return;
            let mouseX = 0;
            let mouseY = 0;
            let dotX = 0;
            let dotY = 0;
            let ringX = 0;
            let ringY = 0;
            const trailPositions = Array.from({
                length: 5
            }, {
                "CustomCursor.useEffect.trailPositions": ()=>({
                        x: 0,
                        y: 0
                    })
            }["CustomCursor.useEffect.trailPositions"]);
            let raf;
            const onMouseMove = {
                "CustomCursor.useEffect.onMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    if (!visible) setVisible(true);
                }
            }["CustomCursor.useEffect.onMouseMove"];
            const onMouseDown = {
                "CustomCursor.useEffect.onMouseDown": ()=>setClicking(true)
            }["CustomCursor.useEffect.onMouseDown"];
            const onMouseUp = {
                "CustomCursor.useEffect.onMouseUp": ()=>setClicking(false)
            }["CustomCursor.useEffect.onMouseUp"];
            const onMouseLeave = {
                "CustomCursor.useEffect.onMouseLeave": ()=>setVisible(false)
            }["CustomCursor.useEffect.onMouseLeave"];
            const onMouseEnter = {
                "CustomCursor.useEffect.onMouseEnter": ()=>setVisible(true)
            }["CustomCursor.useEffect.onMouseEnter"];
            const animate = {
                "CustomCursor.useEffect.animate": ()=>{
                    // Dot — fast
                    dotX += (mouseX - dotX) * 0.3;
                    dotY += (mouseY - dotY) * 0.3;
                    if (dotRef.current) {
                        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
                    }
                    // Ring — slower
                    ringX += (mouseX - ringX) * 0.12;
                    ringY += (mouseY - ringY) * 0.12;
                    if (ringRef.current) {
                        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
                    }
                    // Trail dots — progressively slower
                    trailPositions.forEach({
                        "CustomCursor.useEffect.animate": (pos, i)=>{
                            const target = i === 0 ? {
                                x: dotX,
                                y: dotY
                            } : trailPositions[i - 1];
                            const speed = 0.15 - i * 0.02;
                            pos.x += (target.x - pos.x) * speed;
                            pos.y += (target.y - pos.y) * speed;
                            const el = trailRefs.current[i];
                            if (el) {
                                el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
                            }
                        }
                    }["CustomCursor.useEffect.animate"]);
                    raf = requestAnimationFrame(animate);
                }
            }["CustomCursor.useEffect.animate"];
            // Hover detection
            const addHover = {
                "CustomCursor.useEffect.addHover": ()=>setHovering(true)
            }["CustomCursor.useEffect.addHover"];
            const removeHover = {
                "CustomCursor.useEffect.removeHover": ()=>setHovering(false)
            }["CustomCursor.useEffect.removeHover"];
            const bindHoverTargets = {
                "CustomCursor.useEffect.bindHoverTargets": ()=>{
                    const targets = document.querySelectorAll("a, button, [role='button'], input, textarea, .project-card");
                    targets.forEach({
                        "CustomCursor.useEffect.bindHoverTargets": (el)=>{
                            el.addEventListener("mouseenter", addHover);
                            el.addEventListener("mouseleave", removeHover);
                        }
                    }["CustomCursor.useEffect.bindHoverTargets"]);
                    return targets;
                }
            }["CustomCursor.useEffect.bindHoverTargets"];
            const targets = bindHoverTargets();
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
            document.documentElement.addEventListener("mouseleave", onMouseLeave);
            document.documentElement.addEventListener("mouseenter", onMouseEnter);
            raf = requestAnimationFrame(animate);
            return ({
                "CustomCursor.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mousedown", onMouseDown);
                    document.removeEventListener("mouseup", onMouseUp);
                    document.documentElement.removeEventListener("mouseleave", onMouseLeave);
                    document.documentElement.removeEventListener("mouseenter", onMouseEnter);
                    targets.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener("mouseenter", addHover);
                            el.removeEventListener("mouseleave", removeHover);
                        }
                    }["CustomCursor.useEffect"]);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        visible
    ]);
    if (("TURBOPACK compile-time value", "object") !== "undefined" && "ontouchstart" in window) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            Array.from({
                length: 5
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>setTrailRef(el, i),
                    className: "pointer-events-none fixed top-0 left-0 z-[9997] -translate-x-1/2 -translate-y-1/2",
                    style: {
                        opacity: visible ? 0.3 - i * 0.05 : 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full bg-emerald-400",
                        style: {
                            width: 4 - i * 0.5,
                            height: 4 - i * 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2",
                style: {
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.15s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full transition-all duration-200",
                    style: {
                        width: clicking ? 6 : hovering ? 14 : 8,
                        height: clicking ? 6 : hovering ? 14 : 8,
                        background: hovering ? "linear-gradient(135deg, #00f0b5, #6366f1)" : "#00f0b5",
                        boxShadow: hovering ? "0 0 16px rgba(0, 240, 181, 0.5)" : "0 0 8px rgba(0, 240, 181, 0.3)"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2",
                style: {
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.2s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full transition-all duration-300",
                    style: {
                        width: clicking ? 32 : hovering ? 52 : 40,
                        height: clicking ? 32 : hovering ? 52 : 40,
                        border: `1.5px solid ${hovering ? "rgba(0, 240, 181, 0.5)" : "rgba(0, 240, 181, 0.2)"}`,
                        background: hovering ? "rgba(0, 240, 181, 0.04)" : "transparent",
                        backdropFilter: hovering ? "blur(2px)" : "none"
                    }
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/CustomCursor.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "zOF5Mv2P8tdjU5VFOT8htSORfjg=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Zoox Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WORDS = [
    "Design.",
    "Engineer.",
    "Create.",
    "Innovate."
];
function Preloader() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Progress counter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const interval = setInterval({
                "Preloader.useEffect.interval": ()=>{
                    setProgress({
                        "Preloader.useEffect.interval": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(interval);
                                return 100;
                            }
                            const increment = prev < 40 ? 1.5 : prev < 70 ? 2.5 : prev < 90 ? 3.5 : 5;
                            return Math.min(prev + increment, 100);
                        }
                    }["Preloader.useEffect.interval"]);
                }
            }["Preloader.useEffect.interval"], 35);
            return ({
                "Preloader.useEffect": ()=>clearInterval(interval)
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], []);
    // Cycle words
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const interval = setInterval({
                "Preloader.useEffect.interval": ()=>{
                    setWordIndex({
                        "Preloader.useEffect.interval": (prev)=>(prev + 1) % WORDS.length
                    }["Preloader.useEffect.interval"]);
                }
            }["Preloader.useEffect.interval"], 600);
            return ({
                "Preloader.useEffect": ()=>clearInterval(interval)
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], []);
    // Exit after progress completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            if (progress === 100) {
                const timer = setTimeout({
                    "Preloader.useEffect.timer": ()=>setLoading(false)
                }["Preloader.useEffect.timer"], 500);
                return ({
                    "Preloader.useEffect": ()=>clearTimeout(timer)
                })["Preloader.useEffect"];
            }
        }
    }["Preloader.useEffect"], [
        progress
    ]);
    // Lock scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            if (loading) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            return ({
                "Preloader.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], [
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            exit: {
                opacity: 0,
                scale: 1.05
            },
            transition: {
                duration: 0.7,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ]
            },
            className: "fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#060608]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 opacity-[0.03]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full w-full",
                        style: {
                            backgroundImage: "linear-gradient(rgba(0,240,181,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,181,0.3) 1px, transparent 1px)",
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            0,
                            30,
                            0
                        ],
                        y: [
                            0,
                            -20,
                            0
                        ]
                    },
                    transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    className: "pointer-events-none absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-600/[0.04] blur-[120px]"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            0,
                            -25,
                            0
                        ],
                        y: [
                            0,
                            25,
                            0
                        ]
                    },
                    transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    className: "pointer-events-none absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-600/[0.04] blur-[120px]"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "h-[500px] w-[500px] sm:h-[600px] sm:w-[600px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 600 600",
                            fill: "none",
                            className: "h-full w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "300",
                                    cy: "300",
                                    r: "290",
                                    stroke: "rgba(0,240,181,0.04)",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "300",
                                    cy: "10",
                                    r: "2",
                                    fill: "rgba(0,240,181,0.3)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "590",
                                    cy: "300",
                                    r: "1.5",
                                    fill: "rgba(99,102,241,0.25)"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            rotate: -360
                        },
                        transition: {
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 400 400",
                            fill: "none",
                            className: "h-full w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "200",
                                    cy: "200",
                                    r: "190",
                                    stroke: "rgba(99,102,241,0.04)",
                                    strokeWidth: "0.5",
                                    strokeDasharray: "6 10"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this),
                                [
                                    0,
                                    90,
                                    180,
                                    270
                                ].map((deg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: 200 + 190 * Math.cos(deg * Math.PI / 180),
                                        cy: 200 + 190 * Math.sin(deg * Math.PI / 180),
                                        r: "1.5",
                                        fill: "rgba(0,240,181,0.2)"
                                    }, deg, false, {
                                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                Array.from({
                    length: 30
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: Math.random() * (("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable"),
                            y: Math.random() * (("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable")
                        },
                        animate: {
                            opacity: [
                                0,
                                0.4,
                                0
                            ],
                            y: [
                                0,
                                -(40 + Math.random() * 60),
                                0
                            ]
                        },
                        transition: {
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        },
                        className: "pointer-events-none absolute rounded-full",
                        style: {
                            width: 1 + Math.random() * 2,
                            height: 1 + Math.random() * 2,
                            background: i % 3 === 0 ? "#00f0b5" : "#6366f1",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }
                    }, i, false, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.6,
                                opacity: 0,
                                filter: "blur(10px)"
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)"
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.25,
                                    0.46,
                                    0.45,
                                    0.94
                                ]
                            },
                            className: "relative mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: [
                                            1,
                                            1.3,
                                            1
                                        ],
                                        opacity: [
                                            0.2,
                                            0.4,
                                            0.2
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    className: "absolute inset-0 -m-8 rounded-full bg-emerald-500/10 blur-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative grid grid-cols-2 gap-x-[6px] gap-y-[2px] text-[48px] font-extrabold leading-[1] tracking-tight sm:text-[56px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                y: 20,
                                                opacity: 0
                                            },
                                            animate: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.1,
                                                duration: 0.5
                                            },
                                            className: "text-white",
                                            children: "A"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                y: 20,
                                                opacity: 0
                                            },
                                            animate: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.5
                                            },
                                            className: "text-white",
                                            children: "R"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                y: 20,
                                                opacity: 0
                                            },
                                            animate: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.5
                                            },
                                            className: "text-emerald-400",
                                            children: "N"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                y: 20,
                                                opacity: 0
                                            },
                                            animate: {
                                                y: 0,
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.4,
                                                duration: 0.5
                                            },
                                            className: "text-emerald-400",
                                            children: "V"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 h-6 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        y: 20,
                                        opacity: 0
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        y: -20,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.25
                                    },
                                    className: "block text-[14px] font-medium tracking-[0.3em] text-white/30 uppercase",
                                    children: WORDS[wordIndex]
                                }, wordIndex, false, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-56 sm:w-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-4 h-[3px] overflow-hidden rounded-full bg-white/[0.05]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                width: `${progress}%`,
                                                background: "linear-gradient(90deg, #00f0b5, #34d399, #6366f1)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                x: [
                                                    "-100%",
                                                    "200%"
                                                ]
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            className: "absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.3
                                            },
                                            className: "text-[10px] font-medium tracking-[0.2em] text-white/15 uppercase",
                                            children: "Loading experience"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[12px] tabular-nums text-emerald-400/50",
                                            children: [
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5,
                        duration: 0.6
                    },
                    className: "pointer-events-none absolute top-6 left-6 flex items-center gap-2 sm:top-10 sm:left-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[1px] w-8 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-mono text-white/10",
                            children: "2026"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.6,
                        duration: 0.6
                    },
                    className: "pointer-events-none absolute right-6 bottom-6 flex items-center gap-2 sm:right-10 sm:bottom-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-mono text-white/10",
                            children: "PORTFOLIO"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[1px] w-8 bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 0.06
                    },
                    transition: {
                        delay: 0.4,
                        duration: 0.5
                    },
                    className: "pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "10",
                                y1: "0",
                                x2: "10",
                                y2: "20",
                                stroke: "white",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: "10",
                                x2: "20",
                                y2: "10",
                                stroke: "white",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 278,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 0.06
                    },
                    transition: {
                        delay: 0.4,
                        duration: 0.5
                    },
                    className: "pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "10",
                                y1: "0",
                                x2: "10",
                                y2: "20",
                                stroke: "white",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                lineNumber: 296,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Zoox__Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: "10",
                                x2: "20",
                                y2: "10",
                                stroke: "white",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                        lineNumber: 295,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
                    lineNumber: 289,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
            lineNumber: 57,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Zoox Portfolio/src/components/Preloader.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Preloader, "KwoU7uC/mW4l/f9hvjg9D7DRquU=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Zoox%20Portfolio_src_0l22k_t._.js.map