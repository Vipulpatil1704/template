(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_800d52d2._.js", {

"[project]/app/useTemplateContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTemplateContext": (()=>useTemplateContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$template$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/template-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useTemplateContext = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$template$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplateContext"]);
    if (!context) {
        throw new Error('useTemplateContext must be used within a TemplateProvider');
    }
    return context;
};
_s(useTemplateContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$useTemplateContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/useTemplateContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Home() {
    _s();
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$useTemplateContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplateContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const fetchTemplates = {
                "Home.useEffect.fetchTemplates": async ()=>{
                    try {
                        dispatch({
                            type: 'FETCH_REQ'
                        });
                        const res = await fetch('http://127.0.0.1:8001/api/templates/');
                        if (!res.ok) {
                            throw new Error("Error in fetching templates");
                        }
                        const data = await res.json();
                        dispatch({
                            type: 'SUCCESS',
                            payload: data
                        });
                    } catch (error) {
                        console.log(error);
                        dispatch({
                            type: 'FAILED',
                            payload: error
                        });
                    }
                }
            }["Home.useEffect.fetchTemplates"];
            fetchTemplates();
        }
    }["Home.useEffect"], []);
    console.log(state.templates);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Templates"
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Home, "/5ASor0SdMwonm75MdsNbEMkUH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$useTemplateContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplateContext"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_800d52d2._.js.map