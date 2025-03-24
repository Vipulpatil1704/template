module.exports = {

"[project]/app/useTemplateContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useTemplateContext": (()=>useTemplateContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$template$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/template-provider.tsx [app-ssr] (ecmascript)");
;
;
const useTemplateContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$template$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TemplateContext"]);
    if (!context) {
        throw new Error('useTemplateContext must be used within a TemplateProvider');
    }
    return context;
};
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$useTemplateContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/useTemplateContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const { state, dispatch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$useTemplateContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTemplateContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTemplates = async ()=>{
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
        };
        fetchTemplates();
    }, []);
    console.log(state.templates);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Templates"
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_f24d932d._.js.map