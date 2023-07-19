import {z as ee, d as _e, r as w, c as b, u as o, a as de, w as Ye, s as ae, o as ha, b as W, e as se, U as ka, F as ba, D as fa, f as M, g as ne, t as F, h as T, i as O, j as E, m as ce, k as P, l as D, V as Pe, n as Ze, p as ea, q as A, v as ya, x as ue, y as me, A as Me, B as x, C as I, E as j, G as ve, H as De, I as R, J as pe, K as aa, L as va, M as Ta, N as na, S as Ee, O as wa, P as _a, Q as Pa, R as Sa, T as La, W as Aa, X as Ca, Y as xa, Z as Ba, _ as Va, $ as Ma, a0 as Ie, a1 as Da, a2 as Ea, a3 as Ia, a4 as Oa, a5 as Fa, a6 as $a, a7 as Ha} from "./vendor-fd5e6eea.js";
function bt() {
    import.meta.url,
    import("_").catch(()=>1);
    async function *e() {}
}
(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        t(i);
    new MutationObserver(i=>{
        for (const r of i)
            if (r.type === "childList")
                for (const l of r.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && t(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity),
        i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function t(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r)
    }
}
)();
const Ua = "modulepreload"
  , Ka = function(e) {
    return "//p.bstarstatic.com/fe-static/bstar-web-new/client/" + e
}
  , Oe = {}
  , y = function(a, n, t) {
    if (!n || n.length === 0)
        return a();
    const i = document.getElementsByTagName("link");
    return Promise.all(n.map(r=>{
        if (r = Ka(r),
        r in Oe)
            return;
        Oe[r] = !0;
        const l = r.endsWith(".css")
          , s = l ? '[rel="stylesheet"]' : "";
        if (!!t)
            for (let g = i.length - 1; g >= 0; g--) {
                const m = i[g];
                if (m.href === r && (!l || m.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${r}"]${s}`))
            return;
        const u = document.createElement("link");
        if (u.rel = l ? "stylesheet" : Ua,
        l || (u.as = "script",
        u.crossOrigin = ""),
        u.href = r,
        document.head.appendChild(u),
        l)
            return new Promise((g,m)=>{
                u.addEventListener("load", g),
                u.addEventListener("error", ()=>m(new Error(`Unable to preload CSS for ${r}`)))
            }
            )
    }
    )).then(()=>a())
}
  , Se = typeof window > "u"
  , Na = e=>Se ? `http:${e}` : e
  , ja = ()=>!Se && window.location.host.includes("biliintl.com")
  , Ga = ()=>{
    const e = ja()
      , a = "//api.bilibili.tv";
    return Se ? `http:${a}` : e ? "//api.biliintl.com" : a
}
  , ge = {
    studioUrl: "https://studio.bilibili.tv",
    loginUrl: Na("//passport.bilibili.tv"),
    apiUrl: Ga(),
    dataUrl: "//data.bilibili.tv",
    payUrl: "",
    domain: "https://www.bilibili.tv"
}
  , ia = ()=>{
    const e = ee()
      , a = ee({
        baseURL: `${ge.apiUrl}`
    });
    return {
        queryBadges: ()=>e.get("badges"),
        queryConfig: n=>e.get("configs", n),
        queryPopups: ()=>e.get("popups"),
        upload: (n,t)=>e.postFormData(n, t),
        queryIpRegion: ()=>a.get("/intl/gateway/web/common/region")
    }
}
  , qa = ()=>{
    const e = ee();
    return {
        queryUserInfo: ()=>e.get("user"),
        getUserCard: a=>e.get("user/card", {
            mid: a
        }),
        modifyFollow: a=>e.post("user/follow/modify", a)
    }
}
;
var Ra = (e=>(e[e.PC = 0] = "PC",
e[e.Mobile = 1] = "Mobile",
e))(Ra || {})
  , re = (e=>(e[e.Normal = 0] = "Normal",
e[e.Wide = 1] = "Wide",
e[e.WebFull = 2] = "WebFull",
e[e.Full = 3] = "Full",
e[e.Mini = 4] = "Mini",
e))(re || {})
  , $ = (e=>(e[e.Below13 = 1] = "Below13",
e[e.Above13 = 2] = "Above13",
e))($ || {})
  , Wa = (e=>(e[e.Other = 0] = "Other",
e[e.Anime = 101] = "Anime",
e[e.TvShow = 102] = "TvShow",
e))(Wa || {})
  , ta = (e=>(e.Dev = "dev",
e.Uat = "uat",
e.Pre = "pre",
e.Prod = "prod",
e))(ta || {});
const Qa = new Map([["development", "dev"], ["uat", "uat"], ["pre", "pre"], ["production", "prod"]])
  , oa = e=>{
    var t, i;
    const a = typeof window < "u";
    if (!e && !a)
        return {
            inBrowser: a
        };
    const n = e != null ? e : window.navigator.userAgent;
    return {
        inBrowser: a,
        isAndroid: n.includes("Android") || n.includes("Adr"),
        isiOS: /iPad|iPhone|iPod/.test(n),
        isSafari: n.includes("Safari") && !n.includes("Chrome"),
        isChrome: n.includes("Chrome"),
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n),
        isInApp: /bstar_[a|i]/i.test(n),
        safariVersion: (i = (t = n.match(/[v|V]ersion\/([\w|.]+)/)) == null ? void 0 : t[1]) != null ? i : "0"
    }
}
  , ie = ()=>oa(void 0)
  , V = oa()
  , za = ()=>{
    var e;
    return (e = Qa.get("production")) != null ? e : ta.Prod
}
;
var X = (e=>(e.en = "en",
e.th = "th",
e.vi = "vi",
e.id = "id",
e.ms = "ms",
e))(X || {})
  , Te = (e=>(e.normal = "Bilibili",
e.indonesia = "Bstation",
e))(Te || {});
const we = new Map([["en", "en_US"], ["th", "th_TH"], ["vi", "vi_VN"], ["id", "id_ID"], ["ms", "ms_MY"]])
  , yt = new Map([["en", "en"], ["th", "th-th"], ["vi", "vi-vn"], ["id", "id-id"], ["ms", "ms-my"]])
  , G = _e("global", ()=>{
    const e = w(!1)
      , a = w(X.en)
      , n = w(!1)
      , t = w(!1)
      , i = w(re.Normal)
      , r = b(()=>o(n) ? Te.indonesia : Te.normal)
      , l = b(()=>[re.Full, re.WebFull].includes(o(i)));
    return {
        fallback: e,
        sLocale: a,
        useBstation: n,
        largeScreen: t,
        uiMode: i,
        brand: r,
        isFullscreen: l
    }
}
)
  , Ja = ()=>{
    const e = G();
    return {
        s_locale: we.get(e.sLocale),
        platform: "web"
    }
}
  , Xa = _e("user", ()=>{
    const e = de()
      , a = w(new Map)
      , n = w({
        face: "",
        name: "",
        birthday: "",
        sign: ""
    });
    return Ye(()=>{
        var i;
        return (i = o(e)) == null ? void 0 : i.path
    }
    , ()=>{
        o(a).clear()
    }
    ),
    {
        updatedFollow: a,
        profileParams: n,
        syncProfileParams: i=>{
            var r, l, s, c, u;
            n.value = {
                face: (r = i == null ? void 0 : i.avatar) != null ? r : "",
                name: (l = i == null ? void 0 : i.nickname) != null ? l : "",
                sign: (s = i == null ? void 0 : i.sign) != null ? s : "",
                birthday: (u = (c = i == null ? void 0 : i.birth) == null ? void 0 : c.date) != null ? u : ""
            }
        }
    }
}
)
  , Le = ()=>V.inBrowser ? window.location.host : "www.bilibili.tv"
  , Ya = e=>`https://${Le()}${e}`
  , Za = (e,a={})=>{
    const n = G()
      , t = Le()
      , i = t ? `https://${t}` : "";
    if (typeof a == "string")
        return `${i}/${n.sLocale}/${e}${a ? `?${a}` : ""}`.replace(/http:|https:/, "");
    const r = new URL(`${i}/${n.sLocale}/${e}`);
    return Object.keys(a).forEach(l=>{
        r.searchParams.set(l, `${a[l]}`)
    }
    ),
    r.toString().replace(/http:|https:/, "")
}
  , vt = (e,a)=>{
    const n = G()
      , t = Le();
    return `${t ? `//${t}` : ""}/vip/${n.sLocale}/${e}${a ? `?${a}` : ""}`
}
  , en = (e,a={},n)=>{
    const t = Za(e, a);
    n ? window.open(t, "_blank") : window.location.href = t
}
  , Ae = _e("common", ()=>{
    const e = qa()
      , a = ia()
      , n = Xa()
      , {isMobile: t} = ie()
      , {fallback: i} = ae(G())
      , r = w(null)
      , l = w(null)
      , s = w(null)
      , c = w(!1)
      , u = w(!1)
      , g = b(()=>{
        var f, h;
        return (h = (f = o(l)) == null ? void 0 : f.is_login) != null ? h : !1
    }
    )
      , m = b(()=>{
        var f, h;
        return (h = (f = o(r)) == null ? void 0 : f.can_buy_vip) != null ? h : !1
    }
    )
      , p = b(()=>{
        var f, h, C;
        return (C = (h = (f = o(l)) == null ? void 0 : f.vip_info) == null ? void 0 : h.is_vip) != null ? C : !1
    }
    )
      , _ = async()=>{
        u.value = !0;
        try {
            l.value = await e.queryUserInfo(),
            n.syncProfileParams(o(l))
        } catch (f) {
            i.value = !0
        } finally {
            u.value = !1
        }
    }
      , v = de()
      , k = f=>{
        if (!f)
            return f;
        const h = new URL(f);
        return h.searchParams.set("description_url", Ya(v.path)),
        h.toString()
    }
    ;
    return {
        configs: r,
        userInfo: l,
        isFetching: u,
        isLogin: g,
        isVip: p,
        popupInfo: s,
        popupVisible: c,
        fetchUserInfo: _,
        fetchConfigs: async()=>{
            try {
                const f = await a.queryConfig({
                    platform: t ? "html5" : "web"
                });
                r.value = {
                    ...f,
                    in_stream_ad: f.in_stream_ad ? {
                        ...f.in_stream_ad,
                        tag_url: k(f.in_stream_ad.tag_url)
                    } : void 0
                }
            } catch (f) {
                i.value = !0
            }
        }
        ,
        fetchPopups: async()=>{
            try {
                const {popups: f} = await a.queryPopups()
                  , h = (f != null ? f : []).findIndex(C=>[$.Above13, $.Below13].includes(C.type));
                h > -1 ? (s.value = f[h],
                c.value = !0) : (s.value = null,
                c.value = !1)
            } catch (f) {
                s.value = null,
                c.value = !1
            }
        }
        ,
        canBuyVip: m
    }
}
)
  , an = (e,a,n)=>{
    ha(async()=>{
        await e()
    }
    ),
    W(()=>{
        a.map(t=>!!t).includes(!1) && e()
    }
    )
}
;
var Y = (e=>(e[e.Known = 1] = "Known",
e[e.Update = 2] = "Update",
e))(Y || {});
const nn = ()=>{
    const e = ee({
        baseURL: `${ge.apiUrl}/x/intl/member/web`
    });
    return {
        recordActionNote: a=>{
            const n = se.get("bili_jct");
            return e.postFormData("action/note", a, {
                csrf: n
            })
        }
        ,
        updateUserInfo: a=>{
            const n = se.get("bili_jct");
            return e.postFormData("profile/update", a, {
                csrf: n
            })
        }
    }
}
  , tn = ()=>{
    const e = de()
      , a = w(!1)
      , n = nn()
      , t = Ae()
      , {popupVisible: i, popupInfo: r, userInfo: l} = ae(t)
      , s = b(()=>{
        var m, p, _;
        return {
            visible: o(i),
            title: (m = o(r)) == null ? void 0 : m.title,
            content: (p = o(r)) == null ? void 0 : p.content,
            type: (_ = o(r)) == null ? void 0 : _.type,
            loading: o(a)
        }
    }
    );
    W(()=>{
        t.fetchPopups()
    }
    );
    const c = async m=>{
        var p;
        if (!m) {
            u();
            return
        }
        a.value = !0;
        try {
            const {mid: _=""} = (p = o(l)) != null ? p : {};
            await n.recordActionNote({
                mid: Number(_),
                action: m
            }),
            u(),
            m === Y.Update && g()
        } catch (_) {} finally {
            a.value = !1
        }
    }
      , u = ()=>{
        i.value = !1
    }
      , g = ()=>{
        var m;
        ((m = e.name) == null ? void 0 : m.toString()) !== "setting" && en("account/setting", "", !0)
    }
    ;
    return {
        dialogProps: s,
        handleLegalClose: u,
        handleLegalAction: c
    }
}
  , on = ()=>{
    const e = V.inBrowser ? ka({
        logId: {
            pv: "000014",
            click: "000017",
            expose: "018050"
        },
        watcher: {
            expose: {
                enable: !0
            }
        }
    }) : null;
    return {
        setSpmPrefix: ba,
        getBuvid: fa,
        sendPv: l=>{
            e && e.sendPv(l)
        }
        ,
        sendEvent: (l,s)=>{
            e && e.sendClick({
                event: l,
                value: s != null ? s : {}
            })
        }
        ,
        getExposeMeta: (l,s,c)=>({
            id: l,
            key: s,
            data: JSON.stringify(c)
        }),
        sendExpose: (l,s)=>{
            e && e.sendExpose({
                id: l,
                msg: JSON.stringify(s)
            })
        }
        ,
        sendReport: l=>{
            var s, c;
            if (e) {
                const {fromSpmId: u, sLocale: g, sessionId: m, eventCategory: p, eventId: _, eventParam: v} = l
                  , k = Math.round(window.screen.width * window.devicePixelRatio)
                  , S = Math.round(window.screen.height * window.devicePixelRatio)
                  , L = (c = (s = document.querySelector('meta[name="spm_prefix"]')) == null ? void 0 : s.getAttribute("content")) != null ? c : "";
                e.sendCustom({
                    url: encodeURIComponent(window.location.href).slice(0, 1e3),
                    ts: Date.now(),
                    webVersion: "6d8208757ed97cefc0a7634c19cd3d20bf92a6c2",
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    screenDpi: `${k}x ${S}`,
                    platform: V.isMobile ? 2 : 1,
                    fromSpmId: u,
                    spmId: L,
                    browserLanguage: navigator.language,
                    sLocale: g,
                    sessionId: m,
                    eventCategory: p,
                    eventId: _,
                    eventParam: JSON.stringify(v),
                    biz: 2
                }, {
                    logId: "018062",
                    rules: ["url", "ts", "webVersion", "screenWidth", "screenHeight", "screenDpi", "platform", "fromSpmId", "spmId", "browserLanguage", "sLocale", "sessionId", "eventCategory", "eventId", "eventParam", "biz"]
                })
            }
        }
    }
}
  , U = on()
  , Fe = {
    clickNavTab: (e,a)=>{
        U.sendEvent("left_nav_click", {
            tab_status: e,
            tab_name: a
        })
    }
    ,
    clickHome: e=>{
        U.sendEvent("route_click_home", {
            path: e
        })
    }
    ,
    toHome: ()=>{
        U.sendEvent("to_home", "header")
    }
    ,
    selectLang: e=>{
        U.sendEvent("select_language_s_locale", e)
    }
    ,
    showCompliancePopupNotice: e=>{
        U.sendExpose("compliance_popup_notice_show", {
            type: e
        })
    }
    ,
    clickCompliancePopupNotice: e=>{
        U.sendEvent("compliance_popup_notice_click", {
            type: e
        })
    }
}
  , rn = M({
    __name: "legal-dialog",
    props: {
        visible: {
            type: Boolean,
            default: !1
        },
        type: {
            default: $.Above13
        },
        title: {
            default: ""
        },
        content: {
            default: ""
        },
        loading: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["action", "close"],
    setup(e, {emit: a}) {
        const n = e
          , t = new Map([[$.Below13, Y.Update], [$.Above13, Y.Known]])
          , {t: i} = ne()
          , {type: r, title: l, visible: s, loading: c} = F(n)
          , u = b(()=>{
            switch (o(r)) {
            case $.Below13:
                return i("btnTextLang.update");
            case $.Above13:
                return i("btnTextLang.confirm");
            default:
                return ""
            }
        }
        )
          , g = b(()=>({
            visible: o(s),
            title: o(l),
            buttonText: o(u),
            cancelButtonText: o(r) === $.Below13 ? i("btnTextLang.known") : "",
            fullscreen: !1,
            showClose: !1,
            loading: o(c)
        }))
          , m = ()=>{
            Fe.showCompliancePopupNotice(o(r))
        }
          , p = ()=>{
            const k = t.get(o(r));
            Fe.clickCompliancePopupNotice(o(r)),
            a("action", k)
        }
          , _ = ()=>{
            o(r) === $.Below13 ? a("action", Y.Known) : v()
        }
          , v = ()=>{
            a("close")
        }
        ;
        return (k,S)=>(T(),
        O(o(Pe), ce(g.value, {
            onClose: v,
            onSubmit: p,
            onCancel: _,
            onShow: m
        }), {
            default: E(()=>[P("div", null, D(k.content), 1)]),
            _: 1
        }, 16))
    }
});
var Z = (e=>(e.XXL = "xxl",
e.XL = "xl",
e.L = "l",
e.M = "m",
e.S = "s",
e.XS = "xs",
e.XXS = "xxs",
e.PlayBreakGt = "playBreakGt",
e.PlayBreakLt = "playBreakLt",
e))(Z || {});
const $e = 2318
  , He = 1920
  , Ue = 1366
  , he = 1280
  , ke = 888
  , Ke = 512
  , Ne = 1e3
  , je = {
    xxl: {
        min: $e
    },
    xl: {
        min: He,
        max: $e - 1
    },
    l: {
        min: Ue,
        max: He - 1
    },
    m: {
        min: he,
        max: Ue - 1
    },
    s: {
        min: ke,
        max: he - 1
    },
    xs: {
        min: Ke,
        max: ke - 1
    },
    xxs: {
        max: Ke - 1
    },
    playBreakGt: {
        min: Ne,
        max: he - 1
    },
    playBreakLt: {
        min: ke,
        max: Ne - 1
    }
}
  , Tt = {
    xxl: 6,
    xl: 5,
    l: 4,
    m: 4,
    playBreakGt: 3,
    s: 3,
    playBreakLt: 3,
    xs: 2,
    xxs: 1
}
  , ln = e=>V.inBrowser ? Object.keys(e).find(a=>{
    var t;
    const n = e[a];
    return n.max ? n.min ? window.innerWidth > n.min && window.innerWidth < n.max : window.innerWidth < n.max : window.innerWidth > ((t = n.min) != null ? t : 0)
}
) : "xl"
  , sn = (e,a)=>{
    Object.entries(e).forEach(([n,t])=>{
        const i = t.min ? `(min-width:${t.min}px)` : ""
          , r = t.max ? `(max-width:${t.max}px)` : ""
          , l = [i, r].filter(c=>c).join(" and ")
          , s = window.matchMedia(`only screen and ${l}`);
        s.matches && (a.value = n),
        V.safariVersion && parseInt(V.safariVersion) <= 14 ? s.addListener(c=>{
            c.matches && (a.value = n)
        }
        ) : s.addEventListener("change", c=>{
            c.matches && (a.value = n)
        }
        )
    }
    )
}
  , dn = ()=>{
    const e = ln(je)
      , a = w(e);
    return W(()=>{
        sn(je, a)
    }
    ),
    {
        size: a
    }
}
  , ra = Symbol("context")
  , cn = ()=>{
    const {size: e} = dn()
      , a = w(!1)
      , n = b(()=>[Z.S, Z.XS, Z.XXS].includes(o(e)))
      , t = {
        loginPanelVisible: a,
        windowSize: e,
        isMobileScreen: n
    }
      , i = ()=>{
        a.value = !0
    }
    ;
    return ea(ra, t),
    {
        ...t,
        showLoginPanel: i
    }
}
  , wt = ()=>{
    const e = Ze(ra);
    return e || {
        loginPanelVisible: w(!1),
        isMobileScreen: b(()=>!1),
        windowSize: w(Z.L)
    }
}
;
const H = (e,a)=>{
    const n = e.__vccOpts || e;
    for (const [t,i] of a)
        n[t] = i;
    return n
}
  , un = {}
  , mn = {
    class: "quiz__icon",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
}
  , pn = ya('<g data-v-25f9feb8><rect x="0" y="0" width="20" height="20" data-v-25f9feb8></rect><line class="quiz__icon--line" x1="10.9064043" y1="16.8941561" x2="16.1062722" y2="11.3700802" data-v-25f9feb8></line><path d="M6.82633566,17.2927274 L3.61500042,17.2927274 C3.06271567,17.2927274 2.61500042,16.8450121 2.61500042,16.2927274 L2.61500042,4.29272736 C2.61500042,3.74044261 3.06271567,3.29272736 3.61500042,3.29272736 L14.5398446,3.29272736 C15.0921293,3.29272736 15.5398446,3.74044261 15.5398446,4.29272736 L15.5398446,7.75966719 L15.5398446,7.75966719" data-v-25f9feb8></path><line x1="6.30969424" y1="6.89480691" x2="11.9432616" y2="6.89480691" data-v-25f9feb8></line><line x1="6.30969424" y1="10" x2="9.6812446" y2="10" data-v-25f9feb8></line><line x1="6.30969424" y1="13.1051931" x2="7.55832543" y2="13.1051931" data-v-25f9feb8></line></g>', 1)
  , gn = [pn];
function hn(e, a) {
    return T(),
    A("svg", mn, gn)
}
const kn = H(un, [["render", hn], ["__scopeId", "data-v-25f9feb8"]]);
const bn = {}
  , fn = e=>(ue("data-v-c0d8a5b8"),
e = e(),
me(),
e)
  , yn = {
    class: "quiz__close-icon",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
}
  , vn = fn(()=>P("g", null, [P("rect", {
    x: "0",
    y: "0",
    width: "14",
    height: "14"
}), P("g", {
    transform: "translate(7.045275, 7.045275) rotate(-315.000000) translate(-7.045275, -7.045275) translate(2.447145, 2.447145)"
}, [P("path", {
    d: "M4.59812927,1.42108547e-14 C4.93036307,1.42108547e-14 5.20493386,0.246884646 5.24838848,0.567200762 L5.25437927,0.65625 L5.254,3.941 L8.54000854,3.94187927 C8.90244541,3.94187927 9.19625854,4.23569241 9.19625854,4.59812927 C9.19625854,4.93036307 8.9493739,5.20493386 8.62905778,5.24838848 L8.54000854,5.25437927 L5.254,5.254 L5.25437927,8.54000854 C5.25437927,8.90244541 4.96056614,9.19625854 4.59812927,9.19625854 C4.26589548,9.19625854 3.99132468,8.9493739 3.94787006,8.62905778 L3.94187927,8.54000854 L3.941,5.254 L0.65625,5.25437927 C0.293813133,5.25437927 2.84397003e-14,4.96056614 2.84618932e-14,4.59812927 C2.84822366e-14,4.26589548 0.246884646,3.99132468 0.567200762,3.94787006 L0.65625,3.94187927 L3.941,3.941 L3.94187927,0.65625 C3.94187927,0.293813133 4.23569241,1.42108547e-14 4.59812927,1.42108547e-14 Z"
})])], -1))
  , Tn = [vn];
function wn(e, a) {
    return T(),
    A("svg", yn, Tn)
}
const _n = H(bn, [["render", wn], ["__scopeId", "data-v-c0d8a5b8"]])
  , Pn = {
    key: 0,
    class: "quiz"
}
  , Sn = ["href"]
  , Ge = "bstar-quiz"
  , Ln = M({
    __name: "quiz",
    setup(e) {
        const {isMobile: a} = ie()
          , {configs: n} = ae(Ae())
          , t = w(!1)
          , i = b(()=>{
            var s;
            return (s = o(n)) == null ? void 0 : s.survey
        }
        )
          , r = b(()=>{
            var s;
            return ((s = o(i)) == null ? void 0 : s.enable) && o(t)
        }
        )
          , l = ()=>{
            t.value = !1,
            window.localStorage.setItem(Ge, new Date().getTime().toString())
        }
        ;
        return W(()=>{
            var s;
            if (!a) {
                const c = parseInt((s = window.localStorage.getItem(Ge)) != null ? s : "");
                t.value = isNaN(c) || !Me(c).isSame(Me(), "day")
            }
        }
        ),
        (s,c)=>{
            var u, g;
            return r.value ? (T(),
            A("div", Pn, [P("a", {
                href: (u = i.value) == null ? void 0 : u.link,
                class: "quiz__content",
                target: "_blank"
            }, [x(kn), P("p", null, D((g = i.value) == null ? void 0 : g.title), 1)], 8, Sn), P("button", {
                class: "quiz__close",
                onClick: l
            }, [x(_n)])])) : I("", !0)
        }
    }
});
const An = H(Ln, [["__scopeId", "data-v-28b43fa7"]]);
var la = (e=>(e[e.Global = 1] = "Global",
e[e.UgcPlayer = 2] = "UgcPlayer",
e[e.OgvPlayer = 3] = "OgvPlayer",
e[e.Comment = 4] = "Comment",
e[e.OgvSubtitle = 6] = "OgvSubtitle",
e[e.UgcArchive = 9] = "UgcArchive",
e))(la || {})
  , Cn = (e=>(e[e.Invalid = -1] = "Invalid",
e[e.Author = 1] = "Author",
e[e.CopyrightOwner = 2] = "CopyrightOwner",
e[e.CopyrightAgent = 3] = "CopyrightAgent",
e[e.None = 4] = "None",
e))(Cn || {})
  , xn = (e=>(e[e.Reason = 0] = "Reason",
e[e.ProofId = 1] = "ProofId",
e[e.Report = 2] = "Report",
e))(xn || {})
  , Bn = (e=>(e[e.Others = 29] = "Others",
e))(Bn || {})
  , Vn = (e=>(e[e.Invalid = 0] = "Invalid",
e[e.Mistranslations = 601] = "Mistranslations",
e[e.LackOfLanguages = 602] = "LackOfLanguages",
e[e.SubtitleMissing = 72] = "SubtitleMissing",
e[e.SubtitleOutOfSync = 42] = "SubtitleOutOfSync",
e[e.Others = 49] = "Others",
e))(Vn || {})
  , Mn = (e=>(e[e.Invalid = 0] = "Invalid",
e[e.FailedToLoad = 79] = "FailedToLoad",
e[e.VideoLagging = 80] = "VideoLagging",
e[e.BlackScreenAudioOn = 81] = "BlackScreenAudioOn",
e[e.BlackScreenAudioOff = 82] = "BlackScreenAudioOff",
e[e.BlackScreenBeforePlay = 83] = "BlackScreenBeforePlay",
e[e.AudioOutOfSync = 84] = "AudioOutOfSync",
e[e.FlyingComments = 85] = "FlyingComments",
e[e.PlaybackProblem = 16] = "PlaybackProblem",
e[e.Other = 29] = "Other",
e))(Mn || {})
  , Dn = (e=>(e[e.Invalid = 0] = "Invalid",
e[e.FailedToLoad = 7] = "FailedToLoad",
e[e.VideoLagging = 8] = "VideoLagging",
e[e.BlackScreenAudioOn = 76] = "BlackScreenAudioOn",
e[e.BlackScreenAudioOff = 77] = "BlackScreenAudioOff",
e[e.BlackScreenBeforePlay = 78] = "BlackScreenBeforePlay",
e[e.AudioOutOfSync = 12] = "AudioOutOfSync",
e[e.FlyingComments = 13] = "FlyingComments",
e[e.Other = 29] = "Other",
e))(Dn || {})
  , K = (e=>(e[e.Invalid = 0] = "Invalid",
e[e.AccountProblem = 1] = "AccountProblem",
e[e.VideoPlayerProblem = 2] = "VideoPlayerProblem",
e[e.AnimeContentProblem = 3] = "AnimeContentProblem",
e[e.FlyingComment = 4] = "FlyingComment",
e[e.PersonalizedRecommendation = 5] = "PersonalizedRecommendation",
e[e.PremiumOrPayment = 75] = "PremiumOrPayment",
e[e.Other = 29] = "Other",
e))(K || {})
  , En = (e=>(e[e.Invalid = 0] = "Invalid",
e[e.IllegalContent = 66] = "IllegalContent",
e[e.PornographicContent = 67] = "PornographicContent",
e[e.HarmfulOrDangerousActs = 68] = "HarmfulOrDangerousActs",
e[e.InappropriateTitleAndCover = 69] = "InappropriateTitleAndCover",
e[e.UncomfortableContent = 70] = "UncomfortableContent",
e[e.ChildSexualContent = 86] = "ChildSexualContent",
e[e.PiracyAndInfringingContent = 903] = "PiracyAndInfringingContent",
e[e.Others = 71] = "Others",
e))(En || {});
const In = "//p.bstarstatic.com/fe-static/bstar-web-new/client/assets/icon_loading-eade708d.gif"
  , On = e=>(ue("data-v-f09ca3a8"),
e = e(),
me(),
e)
  , Fn = {
    class: "loading"
}
  , $n = On(()=>P("img", {
    class: "loading__icon",
    src: In,
    alt: "loading"
}, null, -1))
  , Hn = M({
    __name: "loading",
    setup(e) {
        const {t: a} = ne();
        return (n,t)=>(T(),
        A("div", Fn, [$n, j(n.$slots, "default", {}, ()=>[ve(D(o(a)("home.loading")), 1)], !0)]))
    }
});
const Un = H(Hn, [["__scopeId", "data-v-f09ca3a8"]])
  , sa = ()=>{
    const e = ee({
        baseURL: `${ge.apiUrl}/feedback/web`
    });
    return {
        getForm: a=>e.get("/form", {
            type: a
        }),
        reportComment: a=>e.post("/reply", a),
        reportSubtitle: a=>e.post("/ogv/subtitle", a),
        reportArchive: a=>e.post("/ugc/report", a),
        reportUgcPlayer: a=>e.post("/player/ugc", a),
        reportOgvPlayer: a=>e.post("/player/ogv", a),
        reportGlobal: a=>e.post("/global", a)
    }
}
  , Kn = {
    key: 1
}
  , Nn = {
    key: 0,
    class: "feedback-dialog__desc"
}
  , jn = {
    class: "feedback-dialog__footer"
}
  , Gn = {
    key: 0,
    class: "feedback-dialog__error"
}
  , qn = {
    class: "feedback-dialog__operate"
}
  , Rn = M({
    __name: "feedback-dialog",
    props: {
        visible: {
            type: Boolean
        },
        feedbackType: {},
        size: {
            default: "large"
        },
        error: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        loading: {
            type: Boolean,
            default: !1
        },
        showNext: {
            type: Boolean
        },
        showBack: {
            type: Boolean,
            default: !0
        },
        showClose: {
            type: Boolean,
            default: !0
        },
        showCancel: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["close", "submit", "back"],
    setup(e, {emit: a}) {
        const n = e
          , {visible: t, feedbackType: i, size: r, disabled: l, loading: s, showNext: c, showBack: u, showClose: g, showCancel: m} = F(n)
          , p = sa()
          , {t: _} = ne()
          , v = w({
            title: "",
            description: "",
            submit_text: "",
            close_text: "",
            components: {}
        })
          , k = w(!1)
          , S = b(()=>c.value ? o(v).next_text : o(v).submit_text)
          , L = b(()=>o(m) ? o(v).close_text : void 0)
          , f = b(()=>({
            visible: o(t),
            title: o(v).title,
            size: o(r),
            showBack: o(u),
            showClose: o(g)
        }))
          , h = b(()=>o(v).description !== "")
          , C = b(()=>Object.keys(o(v).components).length > 0);
        Ye(t, z=>{
            z && q()
        }
        );
        const q = async()=>{
            k.value = !0;
            try {
                v.value = await p.getForm(i.value)
            } catch (z) {} finally {
                k.value = !1
            }
        }
          , Q = ()=>{
            a("submit")
        }
          , ga = ()=>{
            a("back")
        }
          , Ve = ()=>{
            a("close")
        }
        ;
        return (z,kt)=>(T(),
        O(o(Pe), ce(f.value, {
            class: "feedback-dialog",
            onSubmit: Q,
            onClose: Ve,
            onBack: ga
        }), {
            footer: E(()=>[P("div", jn, [z.error ? (T(),
            A("p", Gn, D(o(_)("feedback.error")), 1)) : I("", !0), P("div", qn, [L.value ? (T(),
            O(o(De), {
                key: 0,
                size: "large",
                type: "default",
                hollow: "",
                bold: "",
                class: "dialog__cancel",
                onClick: Ve
            }, {
                default: E(()=>[ve(D(L.value), 1)]),
                _: 1
            })) : I("", !0), S.value ? (T(),
            O(o(De), {
                key: 1,
                type: "default",
                size: "large",
                bold: "",
                disabled: o(l),
                loading: o(s),
                onClick: Q
            }, {
                default: E(()=>[ve(D(S.value), 1)]),
                _: 1
            }, 8, ["disabled", "loading"])) : I("", !0)])])]),
            default: E(()=>[k.value ? (T(),
            O(Un, {
                key: 0
            })) : C.value ? (T(),
            A("div", Kn, [h.value ? (T(),
            A("p", Nn, D(v.value.description), 1)) : I("", !0), j(z.$slots, "default", {
                components: v.value.components
            }, void 0, !0)])) : I("", !0)]),
            _: 3
        }, 16))
    }
});
const Wn = H(Rn, [["__scopeId", "data-v-1995f9a4"]])
  , Qn = e=>(ue("data-v-e0b95ead"),
e = e(),
me(),
e)
  , zn = ["aria-checked", "aria-disabled"]
  , Jn = Qn(()=>P("span", {
    class: "bstar-radio__inner"
}, null, -1))
  , Xn = ["value", "name", "disabled", "checked"]
  , Yn = {
    class: "bstar-radio__label"
}
  , Zn = M({
    __name: "radio-item",
    props: {
        checked: {
            type: Boolean,
            default: !1
        },
        value: {
            type: [String, Number, Boolean],
            default: ""
        },
        label: {
            default: ""
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["change"],
    setup(e, {emit: a}) {
        const n = e
          , {value: t} = F(n)
          , i = ()=>{
            a("change", o(t))
        }
        ;
        return (r,l)=>(T(),
        A("label", {
            class: R(["bstar-radio", {
                "is-disabled": r.disabled,
                "is-checked": r.checked
            }]),
            role: "radio",
            "aria-checked": r.checked,
            "aria-disabled": r.disabled
        }, [P("span", {
            class: R(["bstar-radio__input", {
                "is-disabled": r.disabled,
                "is-checked": r.checked
            }])
        }, [Jn, P("input", {
            class: "bstar-radio__original",
            value: o(t),
            type: "radio",
            "aria-hidden": "true",
            name: r.label,
            disabled: r.disabled,
            checked: r.checked,
            tabindex: "-1",
            onChange: i
        }, null, 40, Xn)], 2), P("span", Yn, D(r.label), 1)], 10, zn))
    }
});
const ei = H(Zn, [["__scopeId", "data-v-e0b95ead"]])
  , ai = {
    class: "bstar-radio-group",
    role: "radiogroup"
}
  , qe = M({
    __name: "radio",
    props: {
        checked: {
            type: Boolean
        },
        modelValue: {
            type: [String, Number, Boolean],
            default: ""
        },
        options: {}
    },
    emits: ["change", "input", "update:modelValue"],
    setup(e, {emit: a}) {
        const n = e
          , {modelValue: t, disabled: i, options: r} = F(n)
          , l = b(()=>o(r).map(c=>({
            ...c,
            disabled: c.disabled || o(i),
            checked: c.value === o(t)
        })))
          , s = c=>{
            a("change", c),
            a("input", c),
            a("update:modelValue", c)
        }
        ;
        return (c,u)=>(T(),
        A("div", ai, [(T(!0),
        A(pe, null, aa(l.value, (g,m)=>(T(),
        O(ei, {
            key: m,
            label: g.label,
            value: g.value,
            disabled: g.disabled,
            checked: g.checked,
            onChange: p=>s(g.value)
        }, null, 8, ["label", "value", "disabled", "checked", "onChange"]))), 128))]))
    }
})
  , ni = ["value", "rows", "disabled", "readonly", "placeholder", "maxlength"]
  , ii = {
    key: 0,
    class: "textarea__count"
}
  , ti = {
    key: 1,
    class: "textarea__suffix"
}
  , oi = M({
    __name: "textarea",
    props: {
        modelValue: {},
        placeholder: {},
        disabled: {
            type: Boolean,
            default: !1
        },
        readonly: {
            type: Boolean
        },
        showWordLimit: {
            type: Boolean,
            default: !1
        },
        maxlength: {
            default: void 0
        },
        rows: {
            default: 2
        },
        resize: {
            default: "vertical"
        },
        error: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:modelValue", "focus", "blur", "input", "change"],
    setup(e, {emit: a}) {
        const n = e
          , {modelValue: t, showWordLimit: i, maxlength: r, disabled: l, error: s} = F(n)
          , c = va()
          , u = w(!1)
          , g = b(()=>c.suffix !== void 0)
          , m = b(()=>{
            var h;
            return ((h = r == null ? void 0 : r.value) != null ? h : 0) > 0
        }
        )
          , p = b(()=>i.value && m.value && !l.value)
          , _ = b(()=>(t.value || "").length)
          , v = b(()=>{
            const h = "textarea";
            return [h, {
                [`${h}--limit`]: i.value,
                [`${h}--has-suffix`]: g.value,
                [`${h}--focus`]: u.value,
                [`${h}--error`]: s.value
            }]
        }
        )
          , k = h=>{
            var Q;
            const C = h.target
              , q = m.value ? C.value.slice(0, (Q = r == null ? void 0 : r.value) != null ? Q : C.value.length) : C.value;
            a("input", q),
            a("update:modelValue", q)
        }
          , S = h=>{
            const C = h.target;
            a("change", C.value)
        }
          , L = h=>{
            u.value = !0,
            a("focus", h)
        }
          , f = h=>{
            u.value = !1,
            a("blur", h)
        }
        ;
        return (h,C)=>(T(),
        A("div", {
            class: R(v.value)
        }, [j(h.$slots, "prepend", {}, void 0, !0), P("textarea", {
            class: "textarea__inner",
            value: o(t),
            style: Ta({
                resize: h.resize
            }),
            rows: h.rows,
            disabled: o(l),
            readonly: h.readonly,
            placeholder: h.placeholder,
            maxlength: o(r),
            onInput: k,
            onChange: S,
            onBlur: f,
            onFocus: L
        }, null, 44, ni), p.value ? (T(),
        A("span", ii, D(_.value) + "/" + D(o(r)), 1)) : I("", !0), o(c).suffix ? (T(),
        A("div", ti, [j(h.$slots, "suffix", {}, void 0, !0)])) : I("", !0)], 2))
    }
});
const ri = H(oi, [["__scopeId", "data-v-8c52517f"]])
  , da = Symbol("form")
  , li = e=>{
    ea(da, e)
}
  , si = ()=>{
    const e = Ze(da);
    if (!e)
        throw new Error("You must useFormProvider before useForm");
    return e
}
  , di = {
    class: "bstar-form"
}
  , ci = M({
    __name: "b-form",
    props: {
        type: {
            default: "secondary"
        },
        invalid: {
            default: ()=>[]
        }
    },
    setup(e) {
        const a = e
          , {type: n, invalid: t} = F(a);
        return li({
            type: n,
            invalid: t
        }),
        (i,r)=>(T(),
        A("div", di, [j(i.$slots, "default")]))
    }
})
  , ui = {
    class: "bstar-form-item__label"
}
  , mi = {
    class: "bstar-form-item__content"
}
  , pi = {
    class: "bstar-form-item__error-msg"
}
  , te = M({
    __name: "b-form-item",
    props: {
        label: {},
        prop: {},
        required: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const a = e
          , {prop: n, required: t} = F(a)
          , i = w(null)
          , {invalid: r, type: l} = si()
          , s = b(()=>o(r).find(p=>p.field === o(n)))
          , c = b(()=>o(u) === 2)
          , u = b(()=>{
            var p;
            return o(s) ? ((p = o(s)) == null ? void 0 : p.field) !== o(n) ? 0 : 2 : 1
        }
        )
          , g = b(()=>["bstar-form-item", {
            "is-required": o(t),
            "is-error": o(c)
        }, `is-${o(l)}`])
          , m = b(()=>{
            var p, _, v;
            return !o(s) || ((p = o(s)) == null ? void 0 : p.field) !== o(n) ? "" : (v = (_ = o(s)) == null ? void 0 : _.message) != null ? v : ""
        }
        );
        return (p,_)=>(T(),
        A("div", {
            ref_key: "bstarFormItem",
            ref: i,
            class: R(g.value)
        }, [P("label", ui, D(p.label), 1), P("div", mi, [j(p.$slots, "default", {
            error: c.value
        }), c.value ? j(p.$slots, "errorMsg", {
            key: 0
        }, ()=>[P("span", pi, D(m.value), 1)]) : I("", !0)])], 2))
    }
});
const gi = "//p.bstarstatic.com/fe-static/bstar-web-new/client/assets/btn_pic_delete-cb2b3404.svg"
  , ca = e=>{
    const {isMobile: a} = ie();
    return [e, {
        [`${e}--mobile`]: a
    }]
}
  , hi = {
    class: "upload-list__images"
}
  , ki = ["src"]
  , bi = ["src", "onClick"]
  , fi = {
    key: 0,
    class: "upload-list__image-wrap"
}
  , yi = {
    class: "upload-list__desc"
}
  , vi = M({
    __name: "upload-list",
    props: {
        description: {},
        fileList: {},
        exceedLimit: {
            type: Boolean
        }
    },
    emits: ["remove"],
    setup(e, {emit: a}) {
        const n = e
          , {fileList: t} = F(n)
          , i = ca("upload-list")
          , r = b(()=>o(t).map(s=>`${s}?x-oss-process=image/resize,w_160,h_160`))
          , l = s=>{
            a("remove", s)
        }
        ;
        return (s,c)=>(T(),
        A("div", {
            class: R(o(i))
        }, [P("ul", hi, [(T(!0),
        A(pe, null, aa(r.value, (u,g)=>(T(),
        A("li", {
            key: `${u}${g}`,
            class: "upload-list__image-wrap border-wrap"
        }, [P("img", {
            src: u,
            alt: "upload image",
            class: "upload-list__image"
        }, null, 8, ki), P("img", {
            class: "upload-list__delete-icon",
            src: o(gi),
            alt: "delete icon",
            onClick: m=>l(g)
        }, null, 8, bi)]))), 128)), s.exceedLimit ? I("", !0) : (T(),
        A("li", fi, [j(s.$slots, "default", {}, void 0, !0)]))]), P("div", yi, D(s.description), 1)], 2))
    }
});
const Ti = H(vi, [["__scopeId", "data-v-311c01a7"]])
  , wi = e=>(ue("data-v-5ee8d3f0"),
e = e(),
me(),
e)
  , _i = {
    key: 0,
    class: "upload-wrap__loading"
}
  , Pi = wi(()=>P("i", {
    class: "upload-wrap__plus"
}, null, -1))
  , Si = ["accept", "multiple"]
  , Li = M({
    __name: "upload-item",
    props: {
        accept: {
            default: ""
        },
        multiple: {
            type: Boolean,
            default: !1
        },
        loading: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["change"],
    setup(e, {emit: a}) {
        const n = e
          , {loading: t} = F(n)
          , i = ca("upload-wrap")
          , r = b(()=>[...i, {
            loading: o(t)
        }])
          , l = w()
          , s = c=>{
            a("change", c)
        }
        ;
        return (c,u)=>(T(),
        A("label", {
            class: R(r.value)
        }, [o(t) ? (T(),
        A("i", _i)) : (T(),
        A(pe, {
            key: 1
        }, [Pi, P("input", {
            ref_key: "input",
            ref: l,
            class: "upload-wrap__input",
            type: "file",
            accept: c.accept,
            multiple: c.multiple,
            title: "",
            onChange: s
        }, null, 40, Si)], 64))], 2))
    }
});
const Ai = H(Li, [["__scopeId", "data-v-5ee8d3f0"]])
  , Ci = M({
    __name: "b-upload",
    props: {
        action: {},
        name: {
            default: "file"
        },
        accept: {
            default: "image/png,image/jpeg,image/jpg"
        },
        limit: {
            default: 1
        },
        description: {
            default: ""
        },
        multiple: {
            type: Boolean
        },
        fileList: {
            default: ()=>[]
        }
    },
    emits: ["remove", "change", "success", "error"],
    setup(e, {emit: a}) {
        const n = e
          , {t} = ne()
          , i = ia()
          , {fileList: r, limit: l, accept: s, name: c, action: u} = F(n)
          , g = w(!1)
          , m = b(()=>o(r).length >= o(l))
          , p = k=>{
            var S;
            Array.from((S = k.target.files) != null ? S : []).forEach(L=>{
                (!o(s) || o(s).includes(L.type)) && v(L)
            }
            )
        }
          , _ = k=>{
            const S = o(r).filter((L,f)=>f !== k);
            a("remove", o(r)[k], S),
            a("change", S)
        }
          , v = async k=>{
            g.value = !0;
            const S = new FormData;
            S.append(o(c), k);
            try {
                const L = await i.upload(o(u), S)
                  , {url: f} = L;
                o(m) || (a("success", f, k),
                a("change", [...o(r), f]))
            } catch (L) {
                a("error", L, k),
                na({
                    type: "error",
                    text: t("feedback.uploadError")
                })
            } finally {
                g.value = !1
            }
        }
        ;
        return (k,S)=>(T(),
        O(Ti, {
            "file-list": o(r),
            description: k.description,
            "exceed-limit": m.value,
            onRemove: _
        }, {
            default: E(()=>[x(Ai, {
                class: "upload-block",
                accept: o(s),
                multiple: k.multiple,
                loading: g.value,
                onChange: p
            }, null, 8, ["accept", "multiple", "loading"])]),
            _: 1
        }, 8, ["file-list", "description", "exceed-limit"]))
    }
})
  , xi = M({
    __name: "global-form",
    props: {
        components: {},
        log: {},
        errors: {
            default: ()=>[]
        }
    },
    emits: ["change", "input"],
    setup(e, {emit: a}) {
        const n = e
          , {components: t, log: i} = F(n)
          , r = b(()=>o(t).reason.options.map(g=>({
            value: g.value,
            label: g.title
        })))
          , l = b(()=>o(i).reason_id === K.PremiumOrPayment || o(i).reason_id === K.Other)
          , s = b(()=>o(i).reason_id === K.PremiumOrPayment)
          , c = b(()=>o(t).other_contact_type.options.map(g=>({
            value: g.title,
            label: g.title
        })))
          , u = (g,m)=>{
            a("change", {
                [g]: m
            })
        }
        ;
        return (g,m)=>(T(),
        O(ci, {
            invalid: g.errors
        }, {
            default: E(()=>[x(te, {
                class: "form__reason",
                prop: "reason_id",
                label: o(t).reason.title
            }, {
                default: E(()=>[x(qe, {
                    modelValue: o(i).reason_id,
                    "onUpdate:modelValue": m[0] || (m[0] = p=>o(i).reason_id = p),
                    class: "form__options",
                    options: r.value,
                    "is-two-columns": !0,
                    onChange: m[1] || (m[1] = p=>u("reason_id", p))
                }, null, 8, ["modelValue", "options"])]),
                _: 1
            }, 8, ["label"]), x(te, {
                class: "form__detail",
                prop: "supplement_content",
                label: o(t).additional_detail.title,
                required: l.value
            }, {
                default: E(()=>[x(ri, {
                    modelValue: o(i).supplement_content,
                    "onUpdate:modelValue": m[2] || (m[2] = p=>o(i).supplement_content = p),
                    placeholder: o(t).additional_detail.placeholder,
                    rows: 5,
                    maxlength: 200,
                    "show-word-limit": !0,
                    resize: "none",
                    onInput: m[3] || (m[3] = p=>u("supplement_content", p))
                }, null, 8, ["modelValue", "placeholder"])]),
                _: 1
            }, 8, ["label", "required"]), x(Ci, {
                class: "form__image",
                action: "/upload/image",
                limit: 4,
                description: o(t).screenshot.description,
                "file-list": o(i).images,
                onChange: m[4] || (m[4] = p=>u("images", p))
            }, null, 8, ["description", "file-list"]), x(te, {
                class: "form__email",
                prop: "email",
                label: o(t).email.title,
                required: s.value
            }, {
                default: E(()=>[x(o(Ee), {
                    modelValue: o(i).email,
                    "onUpdate:modelValue": m[5] || (m[5] = p=>o(i).email = p),
                    placeholder: o(t).email.placeholder,
                    onInput: m[6] || (m[6] = p=>u("email", p))
                }, null, 8, ["modelValue", "placeholder"])]),
                _: 1
            }, 8, ["label", "required"]), x(te, {
                class: "form__other",
                prop: "other_contact",
                label: o(t).other_contact_type.title
            }, {
                default: E(()=>[x(qe, {
                    modelValue: o(i).contact_type,
                    "onUpdate:modelValue": m[7] || (m[7] = p=>o(i).contact_type = p),
                    class: "form__type",
                    options: c.value,
                    "is-two-columns": !0,
                    onChange: m[8] || (m[8] = p=>u("contact_type", p))
                }, null, 8, ["modelValue", "options"]), x(o(Ee), {
                    modelValue: o(i).contact_detail,
                    "onUpdate:modelValue": m[9] || (m[9] = p=>o(i).contact_detail = p),
                    placeholder: o(t).other_contact_detail.placeholder,
                    onInput: m[10] || (m[10] = p=>u("contact_detail", p))
                }, null, 8, ["modelValue", "placeholder"])]),
                _: 1
            }, 8, ["label"])]),
            _: 1
        }, 8, ["invalid"]))
    }
});
const Bi = H(xi, [["__scopeId", "data-v-f811fc3f"]]);
var Vi = (e=>(e.ShowMobileComment = "showMobileComment",
e.ClickCommentReport = "ClickCommentReport",
e.ReportSuccess = "reportCommentSuccess",
e))(Vi || {})
  , J = (e=>(e.OpenGlobalFeedback = "OpenGlobalFeedback",
e.CloseGlobalFeedback = "CloseGlobalFeedback",
e.SubmitGlobalFeedback = "SubmitGlobalFeedback",
e))(J || {})
  , Mi = (e=>(e.ClickCCReport = "clickCCReport",
e.CloseCCReport = "closeCCReport",
e.OpenCCReportLayer = "openCCReportLayer",
e.ClickReport = "clickReport",
e.CloseReport = "closeReport",
e.OpenReportLayer = "openReportLayer",
e.ClickOgvPlayerReport = "ClickOgvPlayerReport",
e.OpenOgvPlayerReport = "OpenOgvPlayerReport",
e.CloseOgvPlayerReport = "CloseOgvPlayerReport",
e.ClickUgcPlayerReport = "ClickUgcPlayerReport",
e.OpenUgcPlayerReport = "OpenUgcPlayerReport",
e.CloseUgcPlayerReport = "CloseUgcPlayerReport",
e))(Mi || {})
  , Di = (e=>(e.OpenVipDialog = "openVipDialog",
e.CloseVipDialog = "closeVipDialog",
e.OpenVipCallbackDialog = "openVipCallbackDialog",
e.CloseVipCallbackDialog = "closeVipCallbackDialog",
e.BuyVipSuccess = "buyVipSuccess",
e))(Di || {});
const oe = wa()
  , Ei = M({
    __name: "global-feedback",
    setup(e) {
        const {t: a} = ne()
          , n = sa()
          , t = w({
            reason_id: K.Invalid,
            supplement_content: "",
            images: [],
            email: "",
            contact_type: "",
            contact_detail: ""
        })
          , i = b(()=>new _a({
            email: {
                type: "email",
                message: a("feedback.invalidEmail")
            }
        }))
          , r = w(!1)
          , l = w(!1)
          , s = w(!1)
          , c = w([])
          , u = b(()=>{
            const k = o(t);
            if (k.reason_id === K.Invalid)
                return !0;
            switch (k.reason_id) {
            case K.PremiumOrPayment:
                return !k.supplement_content || !k.email;
            case K.Other:
                return !k.supplement_content;
            default:
                return !1
            }
        }
        )
          , g = b(()=>({
            visible: o(r),
            feedbackType: la.Global,
            showCancel: !0,
            showClose: !1,
            showBack: !1,
            showNext: !1,
            error: o(l),
            disabled: o(u),
            loading: o(s)
        }))
          , m = k=>{
            t.value = {
                ...t.value,
                ...k
            }
        }
          , p = async()=>{
            _(!1);
            try {
                await o(i).validate({
                    ...o(t)
                })
            } catch ({errors: k}) {
                return c.value = k,
                !1
            }
            s.value = !0;
            try {
                oe.emit(J.SubmitGlobalFeedback, {
                    id: o(t).reason_id
                });
                const k = await n.reportGlobal({
                    ...o(t)
                });
                na({
                    type: "success",
                    text: k == null ? void 0 : k.toast
                }),
                v()
            } catch (k) {
                l.value = !0
            } finally {
                s.value = !1
            }
        }
          , _ = (k=!0)=>{
            l.value = !1,
            c.value = [],
            k && (t.value = {
                reason_id: K.Invalid,
                supplement_content: "",
                images: [],
                email: "",
                contact_type: "",
                contact_detail: ""
            })
        }
          , v = ()=>{
            r.value = !1,
            setTimeout(()=>{
                _(),
                oe.emit(J.CloseGlobalFeedback, null)
            }
            , 400)
        }
        ;
        return W(()=>{
            oe.on(J.OpenGlobalFeedback, ()=>{
                r.value = !0
            }
            )
        }
        ),
        Pa(()=>{
            oe.off(J.OpenGlobalFeedback)
        }
        ),
        (k,S)=>(T(),
        O(Wn, ce(g.value, {
            onClose: v,
            onSubmit: p
        }), {
            default: E(({components: L})=>[x(Bi, {
                components: L,
                log: t.value,
                errors: c.value,
                onChange: m
            }, null, 8, ["components", "log", "errors"])]),
            _: 1
        }, 16))
    }
});
var d = (e=>(e.Home = "home",
e.Ogv = "ogv",
e.OgvSimple = "ogvSimple",
e.Ugc = "ugc",
e.UgcSimple = "ugcSimple",
e.Download = "download",
e.Space = "space",
e.About = "about",
e.Copyright = "copyright",
e.UserAgreement = "userAgreement",
e.PaymentAgreement = "paymentAgreement",
e.Privacy = "privacy",
e.Index = "category",
e.CategorySimple = "categorySimple",
e.OgvCollections = "ogvCollections",
e.UgcCollections = "ugcCollections",
e.Popular = "popular",
e.Trending = "trending",
e.TrendingDetailUgc = "trendingDetailUgc",
e.TrendingDetailOgv = "trendingDetailOgv",
e.History = "history",
e.SearchResult = "searchResult",
e.SearchPanel = "searchPanel",
e.Anime = "anime",
e.Live = "live",
e.CashierResult = "cashierResult",
e.CashierDesk = "cashierDesk",
e.Fav = "fav",
e.NotFound = "notFound",
e.Profile = "profile",
e.Followers = "followers",
e.Followings = "followings",
e.Media = "media",
e.PayResult = "payResult",
e.Timeline = "timeline",
e.Benefits = "benefits",
e.Hashtag = "hashtag",
e.NetCheck = "netCheck",
e))(d || {});
const Ii = {
    home: "333.981",
    ogv: "333.990",
    ogvSimple: "333.990",
    ugc: "333.989",
    ugcSimple: "333.1316",
    download: "333.991",
    space: "333.995",
    about: "333.992",
    userAgreement: "333.994",
    privacy: "333.993",
    copyright: "333.993",
    paymentAgreement: "333.1108",
    anime: "333.1003",
    category: "333.1004",
    categorySimple: "333.1004",
    ogvCollections: "333.1310",
    ugcCollections: "333.1315",
    popular: "333.1040",
    trending: "333.1257",
    trendingDetailUgc: "333.1258",
    trendingDetailOgv: "333.1259",
    history: "333.1042",
    searchResult: "333.1046",
    searchPanel: "333.1044",
    live: "333.1063",
    cashierResult: "333.1112",
    cashierDesk: "333.1113",
    fav: "333.1186",
    profile: "333.1182",
    followers: "333.1233",
    followings: "333.1232",
    media: "333.1079",
    payResult: "333.1235",
    timeline: "333.1240",
    benefits: "333.1273",
    hashtag: "333.1320",
    netCheck: "333.1314"
}
  , Oi = ["netCheck"]
  , _t = {
    ugc: "bstar-web.ugc-video-detail.0.0",
    ogv: "bstar-web.pgc-video-detail.0.0",
    fav: "bstar-web.mylist-video.0.0",
    media: "bstar-web.pgc-media-info.0.0",
    timeline: "bstar-web.timeline-detail.0.0",
    ogvCollections: "bstar-web.collection-detail.0.0",
    ugcCollections: "bstar-web.ugc-collection-detail.0.0"
}
  , Pt = "bstar_from"
  , Fi = "from";
var $i = (e=>(e.Video = "bstar-web.pgc-video-detail.episode.0",
e.Quality = "bstar-web.pgc-video-detail.switch-quality.0",
e.PayTip = "bstar-web.pgc-video-detail.premium-btn.all",
e.Callback = "bstar-web.vip-order.confirm.repay",
e.Benefits = "bstar-web.vip-benefits.premium-btn.all",
e.UgcAd = "bstar-web.ugc-video-detail.player.skip-ads",
e.OgvAd = "bstar-web.pgc-video-detail.player.skip-ads",
e))($i || {})
  , Hi = (e=>(e.Collection = "bstar-main.anime-episodes-list.main-cards.all",
e.Discover = "bstar-search.search-discover.platform-value9h5.0",
e))(Hi || {});
const Ui = {
    class: "bstar-web"
}
  , Re = M({
    __name: "app",
    setup(e) {
        Sa();
        const {showLoginPanel: a} = cn()
          , n = Ae()
          , {fallback: t, sLocale: i} = ae(G())
          , {isLogin: r} = ae(n)
          , l = za()
          , {isMobile: s, inBrowser: c} = ie()
          , u = de()
          , g = w(0)
          , m = b(()=>c ? window.location.href : "")
          , p = b(()=>{
            var h, C;
            return ((C = (h = u.name) == null ? void 0 : h.toString()) != null ? C : "") === d.About
        }
        )
          , _ = {
            google: "popup",
            facebook: "popup",
            twitter: "popup"
        }
          , v = [];
        an(async()=>{
            await Promise.all([n.fetchConfigs(), n.fetchUserInfo()])
        }
        , [!o(t)]);
        const {handleLegalAction: k, handleLegalClose: S, dialogProps: L} = tn()
          , f = async()=>{
            const {renderGoogleOneTapLogin: h} = xa({
                env: l,
                sLocale: o(i),
                platform: "web"
            }, ()=>{
                window.location.reload()
            }
            );
            try {
                await h() || a()
            } catch (C) {
                o(g) < 3 ? (g.value = o(g) + 1,
                setTimeout(()=>{
                    f()
                }
                , 500)) : a()
            }
        }
        ;
        return W(()=>{
            ["development", "uat", "pre"].includes("production") && s && y(()=>import("./vconsole.min-4a2ccf62.js").then(h=>h.v), ["assets/vconsole.min-4a2ccf62.js", "assets/vendor-fd5e6eea.js"]).then(({default: h})=>{
                new h
            }
            ),
            o(r) || f()
        }
        ),
        (h,C)=>{
            const q = La("router-view");
            return T(),
            A(pe, null, [P("div", Ui, [x(q)]), x(o(Aa), {
                "disable-qrcode": o(s),
                locale: o(i),
                env: o(l),
                mode: _,
                "redirect-url": m.value,
                disabled: v,
                platform: "web"
            }, null, 8, ["disable-qrcode", "locale", "env", "redirect-url"]), x(rn, ce(o(L), {
                onAction: o(k),
                onClose: o(S)
            }), null, 16, ["onAction", "onClose"]), o(s) ? I("", !0) : (T(),
            O(o(Ca), {
                key: 0,
                locale: o(i),
                env: o(l)
            }, null, 8, ["locale", "env"])), p.value ? I("", !0) : (T(),
            O(An, {
                key: 1
            })), x(Ei)], 64)
        }
    }
});
var B = (e=>(e.none = "none",
e.hsf = "hsf",
e.hf = "hf",
e.h = "h",
e))(B || {});
const Ki = [{
    path: "/:sLocale(th|en|vi|id|ms)?",
    component: ()=>y(()=>import("./index-fe92859c.js"), ["assets/index-fe92859c.js", "assets/vendor-fd5e6eea.js", "assets/index-c61c8d00.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/code-f7d1d677.js", "assets/ogv-74ac50e6.js", "assets/useVipLogin-bd643e79.js", "assets/index-b81714a6.css"]),
    sensitive: !1,
    children: [{
        path: "",
        component: ()=>y(()=>import("./home-4d3d65e2.js"), ["assets/home-4d3d65e2.js", "assets/seo-fefc36ed.js", "assets/vendor-fd5e6eea.js", "assets/image-8d130017.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/array-5149a4d9.js", "assets/ugc-89674248.js", "assets/scroll-container-22ea644d.js", "assets/index-c61c8d00.js", "assets/scroll-container-6041ed41.css", "assets/ogv-395b8956.js", "assets/scroll-card-section-b80ff6bb.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/play-52c40022.js", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/home-e90bc515.css"]),
        name: d.Home,
        meta: {
            breadcrumb: []
        }
    }, {
        path: "play/:seasonId(\\d+)/:epId(\\d+)?",
        component: ()=>y(()=>import("./ogv-b1f3c3ce.js"), ["assets/ogv-b1f3c3ce.js", "assets/vendor-fd5e6eea.js", "assets/ogv-74ac50e6.js", "assets/code-f7d1d677.js", "assets/fav-6155bb69.js", "assets/fav-9d0621a3.js", "assets/login-49e4b281.js", "assets/useSpm-017b0d1f.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/callback-5d774cb3.js", "assets/useFold-a88f1fb0.js", "assets/index-c61c8d00.js", "assets/interaction-2cda5683.js", "assets/useScrollIntoView-68ccab52.js", "assets/index-78ade6ce.js", "assets/play-52c40022.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/ugc-89674248.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/ogv-395b8956.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/b-error.es-6311b504.js", "assets/image-8d130017.js", "assets/meta-tag.vue_vue_type_style_index_0_lang-efe14f5b.js", "assets/meta-tag-75e6ed44.css", "assets/vip-product-dialog-1139442f.js", "assets/user-4cc7a9ee.js", "assets/vip-be51f564.js", "assets/useVipLogin-bd643e79.js", "assets/util-504d8e78.js", "assets/vip-ad21d0c9.js", "assets/vip-product-dialog-b0abf0d1.css", "assets/callback-27ee3357.css", "assets/style-640243e2.css", "assets/ep-section-f462e52d.js", "assets/ogv-7e5f6d6d.js", "assets/ep-section-31411a38.css", "assets/index.vue_vue_type_script_setup_true_lang-8edae7cd.js", "assets/index-b62999a4.css", "assets/ogv-feedback.vue_vue_type_script_setup_true_lang-d829a204.js", "assets/player-feedback.vue_vue_type_script_setup_true_lang-6fb91c17.js", "assets/history-cd83ef81.js", "assets/util-3716b8a7.js", "assets/player-feedback-0b340599.css", "assets/storage-b326e563.js", "assets/ogv-feedback-60330cd7.css", "assets/seo-fefc36ed.js", "assets/share-622f77a4.js", "assets/hijackClass-6e9eafb8.js", "assets/toast-72c84554.js", "assets/toast-5418c8f4.css", "assets/hijackClass-4d4ee17f.css", "assets/ogv-a55587b5.css"]),
        name: d.Ogv,
        children: [{
            path: "comments",
            redirect: {
                name: d.Ogv
            }
        }],
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "playsimple/:seasonId(\\d+)/:epId(\\d+)?",
        component: ()=>y(()=>import("./ogv-simple-a4ec7ca8.js"), ["assets/ogv-simple-a4ec7ca8.js", "assets/ogv-74ac50e6.js", "assets/vendor-fd5e6eea.js", "assets/code-f7d1d677.js", "assets/fav-6155bb69.js", "assets/fav-9d0621a3.js", "assets/login-49e4b281.js", "assets/useSpm-017b0d1f.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/callback-5d774cb3.js", "assets/useFold-a88f1fb0.js", "assets/index-c61c8d00.js", "assets/interaction-2cda5683.js", "assets/useScrollIntoView-68ccab52.js", "assets/index-78ade6ce.js", "assets/play-52c40022.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/ugc-89674248.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/ogv-395b8956.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/b-error.es-6311b504.js", "assets/image-8d130017.js", "assets/meta-tag.vue_vue_type_style_index_0_lang-efe14f5b.js", "assets/meta-tag-75e6ed44.css", "assets/vip-product-dialog-1139442f.js", "assets/user-4cc7a9ee.js", "assets/vip-be51f564.js", "assets/useVipLogin-bd643e79.js", "assets/util-504d8e78.js", "assets/vip-ad21d0c9.js", "assets/vip-product-dialog-b0abf0d1.css", "assets/callback-27ee3357.css", "assets/style-640243e2.css", "assets/ogv-feedback.vue_vue_type_script_setup_true_lang-d829a204.js", "assets/player-feedback.vue_vue_type_script_setup_true_lang-6fb91c17.js", "assets/history-cd83ef81.js", "assets/util-3716b8a7.js", "assets/player-feedback-0b340599.css", "assets/storage-b326e563.js", "assets/ogv-feedback-60330cd7.css", "assets/seo-fefc36ed.js", "assets/ogv-7e5f6d6d.js", "assets/ogv-simple-c4ecd3ba.css"]),
        name: d.OgvSimple,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "video/:aid(\\d+)",
        component: ()=>y(()=>import("./ugc-cc5e6784.js"), ["assets/ugc-cc5e6784.js", "assets/vendor-fd5e6eea.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/code-f7d1d677.js", "assets/fav-6155bb69.js", "assets/fav-9d0621a3.js", "assets/login-49e4b281.js", "assets/useSpm-017b0d1f.js", "assets/ogv-74ac50e6.js", "assets/callback-5d774cb3.js", "assets/useFold-a88f1fb0.js", "assets/index-c61c8d00.js", "assets/interaction-2cda5683.js", "assets/useScrollIntoView-68ccab52.js", "assets/index-78ade6ce.js", "assets/play-52c40022.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/ugc-89674248.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/ogv-395b8956.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/b-error.es-6311b504.js", "assets/image-8d130017.js", "assets/meta-tag.vue_vue_type_style_index_0_lang-efe14f5b.js", "assets/meta-tag-75e6ed44.css", "assets/vip-product-dialog-1139442f.js", "assets/user-4cc7a9ee.js", "assets/vip-be51f564.js", "assets/useVipLogin-bd643e79.js", "assets/util-504d8e78.js", "assets/vip-ad21d0c9.js", "assets/vip-product-dialog-b0abf0d1.css", "assets/callback-27ee3357.css", "assets/style-640243e2.css", "assets/seo-fefc36ed.js", "assets/share-622f77a4.js", "assets/hijackClass-6e9eafb8.js", "assets/toast-72c84554.js", "assets/toast-5418c8f4.css", "assets/hijackClass-4d4ee17f.css", "assets/ugc-feedback.vue_vue_type_script_setup_true_lang-632b0cb8.js", "assets/user-0bd8fd38.js", "assets/user-2238533c.css", "assets/useFakeFollow-44a9f85e.js", "assets/ugc-feedback-92c05ddd.css", "assets/player-feedback.vue_vue_type_script_setup_true_lang-6fb91c17.js", "assets/history-cd83ef81.js", "assets/util-3716b8a7.js", "assets/player-feedback-0b340599.css", "assets/index.vue_vue_type_script_setup_true_lang-8edae7cd.js", "assets/index-b62999a4.css", "assets/storage-b326e563.js", "assets/ugc-459928a0.css"]),
        name: d.Ugc,
        children: [{
            path: "comments",
            redirect: {
                name: d.Ugc
            }
        }],
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "videosimple/:aid(\\d+)",
        component: ()=>y(()=>import("./ugc-simple-43b1e3e9.js"), ["assets/ugc-simple-43b1e3e9.js", "assets/vendor-fd5e6eea.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/code-f7d1d677.js", "assets/fav-6155bb69.js", "assets/fav-9d0621a3.js", "assets/login-49e4b281.js", "assets/useSpm-017b0d1f.js", "assets/ogv-74ac50e6.js", "assets/callback-5d774cb3.js", "assets/useFold-a88f1fb0.js", "assets/index-c61c8d00.js", "assets/interaction-2cda5683.js", "assets/useScrollIntoView-68ccab52.js", "assets/index-78ade6ce.js", "assets/play-52c40022.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/ugc-89674248.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/ogv-395b8956.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/b-error.es-6311b504.js", "assets/image-8d130017.js", "assets/meta-tag.vue_vue_type_style_index_0_lang-efe14f5b.js", "assets/meta-tag-75e6ed44.css", "assets/vip-product-dialog-1139442f.js", "assets/user-4cc7a9ee.js", "assets/vip-be51f564.js", "assets/useVipLogin-bd643e79.js", "assets/util-504d8e78.js", "assets/vip-ad21d0c9.js", "assets/vip-product-dialog-b0abf0d1.css", "assets/callback-27ee3357.css", "assets/style-640243e2.css", "assets/seo-fefc36ed.js", "assets/ugc-feedback.vue_vue_type_script_setup_true_lang-632b0cb8.js", "assets/user-0bd8fd38.js", "assets/user-2238533c.css", "assets/useFakeFollow-44a9f85e.js", "assets/ugc-feedback-92c05ddd.css", "assets/ugc-simple-20bd8eb1.css"]),
        name: d.UgcSimple,
        children: [{
            path: "comments",
            redirect: {
                name: d.UgcSimple
            }
        }],
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "anime",
        component: ()=>y(()=>import("./anime-bf8577de.js"), ["assets/anime-bf8577de.js", "assets/vendor-fd5e6eea.js", "assets/array-5149a4d9.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/scroll-container-22ea644d.js", "assets/index-c61c8d00.js", "assets/scroll-container-6041ed41.css", "assets/ogv-395b8956.js", "assets/scroll-card-section-b80ff6bb.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/anime-a9d2a89a.css"]),
        name: d.Anime,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "search",
        component: ()=>y(()=>import("./search-ec2de452.js"), ["assets/search-ec2de452.js", "assets/vendor-fd5e6eea.js", "assets/index-c61c8d00.js", "assets/storage-b326e563.js", "assets/search-352e363d.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/image-8d130017.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/seo-fefc36ed.js", "assets/search-69734424.css"]),
        name: d.SearchPanel,
        meta: {
            layoutType: B.none
        }
    }, {
        path: "search-result",
        component: ()=>y(()=>import("./search-result-4c4e5f58.js"), ["assets/search-result-4c4e5f58.js", "assets/max-container-cb6778e9.js", "assets/vendor-fd5e6eea.js", "assets/max-container-137471ff.css", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/search-352e363d.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/meta-tag.vue_vue_type_style_index_0_lang-efe14f5b.js", "assets/meta-tag-75e6ed44.css", "assets/image-8d130017.js", "assets/ogv-7e5f6d6d.js", "assets/scroll-card-section-b80ff6bb.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/card-section-48085fc6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/play-52c40022.js", "assets/user-4cc7a9ee.js", "assets/interaction-2cda5683.js", "assets/user-0bd8fd38.js", "assets/login-49e4b281.js", "assets/user-2238533c.css", "assets/useFakeFollow-44a9f85e.js", "assets/index-c61c8d00.js", "assets/seo-fefc36ed.js", "assets/search-result-d41e936f.css"]),
        name: d.SearchResult,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "fav",
        component: ()=>y(()=>import("./fav-f0903d14.js"), ["assets/fav-f0903d14.js", "assets/vendor-fd5e6eea.js", "assets/fav-9d0621a3.js", "assets/code-f7d1d677.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/more-action-090b7bbc.js", "assets/util-504d8e78.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/more-action-ba46fc67.css", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/fav-52b6cf97.css"]),
        name: d.Fav
    }, {
        path: "history",
        component: ()=>y(()=>import("./history-ab5d7ab6.js"), ["assets/history-ab5d7ab6.js", "assets/vendor-fd5e6eea.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/history-cd83ef81.js", "assets/util-3716b8a7.js", "assets/more-action-090b7bbc.js", "assets/util-504d8e78.js", "assets/drawer-cd47bdf2.js", "assets/drawer-36966098.css", "assets/more-action-ba46fc67.css", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/code-f7d1d677.js", "assets/history-0c3e32ec.css"]),
        name: d.History
    }, {
        path: "trending",
        component: ()=>y(()=>import("./trending-de9c0f06.js"), ["assets/trending-de9c0f06.js", "assets/vendor-fd5e6eea.js", "assets/trending-card-e3287335.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/code-f7d1d677.js", "assets/trending-card-90717c4b.css", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/index-c61c8d00.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/trending-f9daf1df.css"]),
        name: d.Trending,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "popular",
        redirect: {
            name: d.Trending
        }
    }, {
        path: "trending/ugc",
        component: ()=>y(()=>import("./trending-detail-3f9d53d7.js"), ["assets/trending-detail-3f9d53d7.js", "assets/vendor-fd5e6eea.js", "assets/trending-card-e3287335.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/code-f7d1d677.js", "assets/trending-card-90717c4b.css"]),
        name: d.TrendingDetailUgc,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "trending/:type(anime|premium)/:id?",
        component: ()=>y(()=>import("./trending-detail-3f9d53d7.js"), ["assets/trending-detail-3f9d53d7.js", "assets/vendor-fd5e6eea.js", "assets/trending-card-e3287335.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/trending-3310f203.js", "assets/code-f7d1d677.js", "assets/trending-card-90717c4b.css"]),
        name: d.TrendingDetailOgv,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "space/:mid(\\d+)",
        component: ()=>y(()=>import("./space-5a2e3f21.js"), ["assets/space-5a2e3f21.js", "assets/b-error.es-6311b504.js", "assets/vendor-fd5e6eea.js", "assets/space-74154369.js", "assets/user-4cc7a9ee.js", "assets/code-f7d1d677.js", "assets/image-8d130017.js", "assets/seo-fefc36ed.js", "assets/b-avatar.es-98024b5b.js", "assets/user-0bd8fd38.js", "assets/login-49e4b281.js", "assets/user-2238533c.css", "assets/interaction-2cda5683.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/space-afbc935f.css", "assets/style-640243e2.css"]),
        children: [{
            path: "",
            component: ()=>y(()=>import("./videos-1e87b0d1.js"), ["assets/videos-1e87b0d1.js", "assets/scroll-card-section-b80ff6bb.js", "assets/vendor-fd5e6eea.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/space-74154369.js", "assets/user-4cc7a9ee.js", "assets/code-f7d1d677.js"]),
            name: d.Space
        }, {
            path: "followers",
            component: ()=>y(()=>import("./followers-d8c3d592.js"), ["assets/followers-d8c3d592.js", "assets/scroll-loading-bb62eaf3.js", "assets/vendor-fd5e6eea.js", "assets/scroll-loading-f0ec2f46.css", "assets/follow-item-b4031e0d.js", "assets/b-avatar.es-98024b5b.js", "assets/user-0bd8fd38.js", "assets/login-49e4b281.js", "assets/user-4cc7a9ee.js", "assets/user-2238533c.css", "assets/follow-item-88543cdf.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/b-error.es-6311b504.js", "assets/space-74154369.js", "assets/code-f7d1d677.js", "assets/image-8d130017.js", "assets/followers-244f9226.css"]),
            name: d.Followers
        }, {
            path: "followings",
            component: ()=>y(()=>import("./followings-1829e3df.js"), ["assets/followings-1829e3df.js", "assets/scroll-loading-bb62eaf3.js", "assets/vendor-fd5e6eea.js", "assets/scroll-loading-f0ec2f46.css", "assets/follow-item-b4031e0d.js", "assets/b-avatar.es-98024b5b.js", "assets/user-0bd8fd38.js", "assets/login-49e4b281.js", "assets/user-4cc7a9ee.js", "assets/user-2238533c.css", "assets/follow-item-88543cdf.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/b-error.es-6311b504.js", "assets/pendant_live-8c77f0e2.js", "assets/space-74154369.js", "assets/code-f7d1d677.js", "assets/image-8d130017.js", "assets/followings-44da3330.css"]),
            name: d.Followings
        }],
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "category",
        component: ()=>y(()=>import("./category-be5f8376.js"), ["assets/category-be5f8376.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/selected-result-bc39233c.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/array-5149a4d9.js", "assets/selected-result-c230bd43.css", "assets/scroll-card-section-b80ff6bb.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/ogv-395b8956.js", "assets/category-12c61b68.css"]),
        name: d.Index,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "categorysimple",
        component: ()=>y(()=>import("./category-simple-60b6860d.js"), ["assets/category-simple-60b6860d.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/selected-result-bc39233c.js", "assets/tabs-33c99563.js", "assets/tabs-2ba8bee6.css", "assets/array-5149a4d9.js", "assets/selected-result-c230bd43.css", "assets/scroll-card-section-b80ff6bb.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/scroll-loading-bb62eaf3.js", "assets/scroll-loading-f0ec2f46.css", "assets/scroll-card-section-d407ca06.css", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/ogv-395b8956.js", "assets/category-simple-20229097.css"]),
        name: d.CategorySimple,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "ogv-collection",
        component: ()=>y(()=>import("./ogv-collection-c1d28288.js"), ["assets/ogv-collection-c1d28288.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/pay_result_fail-7e1abf4a.js", "assets/fav-6155bb69.js", "assets/fav-9d0621a3.js", "assets/login-49e4b281.js", "assets/useSpm-017b0d1f.js", "assets/ogv-74ac50e6.js", "assets/code-f7d1d677.js", "assets/ugc-04f98e50.js", "assets/ugc-450e0a02.js", "assets/toast-72c84554.js", "assets/toast-5418c8f4.css", "assets/ogv-collection-1eaa1b03.css"]),
        name: d.OgvCollections,
        meta: {
            layoutType: B.none
        }
    }, {
        path: "ugc-collection",
        component: ()=>y(()=>import("./ugc-collection-21e363f9.js"), ["assets/ugc-collection-21e363f9.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/toast-72c84554.js", "assets/toast-5418c8f4.css", "assets/util-3716b8a7.js", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/index-c61c8d00.js", "assets/pay_result_fail-7e1abf4a.js", "assets/ugc-collection-790ba0cd.css"]),
        name: d.UgcCollections,
        meta: {
            layoutType: B.none
        }
    }, {
        path: "index",
        redirect: {
            name: d.Index
        }
    }, {
        path: "account/setting",
        component: ()=>y(()=>import("./profile-52e6123a.js"), ["assets/profile-52e6123a.js", "assets/vendor-fd5e6eea.js", "assets/image-8d130017.js", "assets/b-error.es-6311b504.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/code-f7d1d677.js", "assets/profile-d9ae0b44.css", "assets/style-640243e2.css"]),
        name: d.Profile
    }, {
        path: "media/:seasonId(\\d+)",
        component: ()=>y(()=>import("./media-b6f4a6b9.js"), ["assets/media-b6f4a6b9.js", "assets/vendor-fd5e6eea.js", "assets/ogv-74ac50e6.js", "assets/code-f7d1d677.js", "assets/image-8d130017.js", "assets/seo-fefc36ed.js", "assets/b-error.es-6311b504.js", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/ogv-7e5f6d6d.js", "assets/useFold-a88f1fb0.js", "assets/useSpm-017b0d1f.js", "assets/ugc-450e0a02.js", "assets/index-c61c8d00.js", "assets/card-section-583ec318.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/useScrollIntoView-68ccab52.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/card-section-48085fc6.css", "assets/index.vue_vue_type_script_setup_true_lang-8edae7cd.js", "assets/index-b62999a4.css", "assets/ep-section-f462e52d.js", "assets/vip-be51f564.js", "assets/ogv-395b8956.js", "assets/ep-section-31411a38.css", "assets/play-52c40022.js", "assets/media-d78e4cce.css", "assets/style-640243e2.css"]),
        name: d.Media,
        meta: {
            breadcrumb: [d.Home]
        }
    }, {
        path: "about",
        component: ()=>y(()=>import("./about-ca0d2504.js"), ["assets/about-ca0d2504.js", "assets/seo-fefc36ed.js", "assets/vendor-fd5e6eea.js", "assets/image-8d130017.js", "assets/about-2c129ab7.css"]),
        name: d.About,
        meta: {
            layoutType: B.h,
            breadcrumb: [d.Home]
        }
    }, {
        path: "timeline",
        component: ()=>y(()=>import("./timeline-a161a5c4.js"), ["assets/timeline-a161a5c4.js", "assets/vendor-fd5e6eea.js", "assets/useScrollIntoView-68ccab52.js", "assets/fav-9d0621a3.js", "assets/useVideoCard-5387f2d5.js", "assets/pendant_live-8c77f0e2.js", "assets/video-card.es-128ca29c.js", "assets/b-avatar.es-98024b5b.js", "assets/login-49e4b281.js", "assets/toast-72c84554.js", "assets/toast-5418c8f4.css", "assets/empty-5cf7d5b0.js", "assets/empty-27433c17.css", "assets/section-title-663e4f46.js", "assets/section-title-47f44628.css", "assets/max-container-cb6778e9.js", "assets/max-container-137471ff.css", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/timeline-2ea772ff.css"]),
        name: d.Timeline,
        meta: {
            layoutType: B.hsf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "copyright-policy",
        component: ()=>y(()=>import("./policy-48c5dc21.js"), ["assets/policy-48c5dc21.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/policy-d6fc222c.css"]),
        name: d.Copyright,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "user-agreement",
        component: ()=>y(()=>import("./policy-48c5dc21.js"), ["assets/policy-48c5dc21.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/policy-d6fc222c.css"]),
        name: d.UserAgreement,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "payment-agreement",
        component: ()=>y(()=>import("./policy-48c5dc21.js"), ["assets/policy-48c5dc21.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/policy-d6fc222c.css"]),
        name: d.PaymentAgreement,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "privacy-policy",
        component: ()=>y(()=>import("./policy-48c5dc21.js"), ["assets/policy-48c5dc21.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/policy-d6fc222c.css"]),
        name: d.Privacy,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "download",
        component: ()=>y(()=>import("./download-527983d8.js"), ["assets/download-527983d8.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/download-b9d68c78.css"]),
        name: d.Download,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "payment-result",
        component: ()=>y(()=>import("./result-a19fdc78.js"), ["assets/result-a19fdc78.js", "assets/vendor-fd5e6eea.js", "assets/vip-ad21d0c9.js", "assets/vip-be51f564.js", "assets/pay_result_fail-7e1abf4a.js", "assets/result-db52ec6b.css"]),
        name: d.PayResult,
        meta: {
            layoutType: B.h
        }
    }, {
        path: "vip-benefits",
        component: ()=>y(()=>import("./vip-benefits-8c4504a6.js"), ["assets/vip-benefits-8c4504a6.js", "assets/vendor-fd5e6eea.js", "assets/index-c61c8d00.js", "assets/vip-ad21d0c9.js", "assets/useVipLogin-bd643e79.js", "assets/vip-product-dialog-1139442f.js", "assets/user-4cc7a9ee.js", "assets/image-8d130017.js", "assets/vip-be51f564.js", "assets/util-504d8e78.js", "assets/ogv-74ac50e6.js", "assets/code-f7d1d677.js", "assets/vip-product-dialog-b0abf0d1.css", "assets/vip-benefits-1ecec916.css"]),
        name: d.Benefits,
        meta: {
            layoutType: B.hf,
            breadcrumb: [d.Home]
        }
    }, {
        path: "hashtag",
        component: ()=>y(()=>import("./hashtag-0810beaf.js"), ["assets/hashtag-0810beaf.js", "assets/vendor-fd5e6eea.js", "assets/seo-fefc36ed.js", "assets/image-8d130017.js", "assets/share-622f77a4.js", "assets/hashtag-78f962d3.css"]),
        name: d.Hashtag,
        meta: {
            layoutType: B.none
        }
    }, {
        path: "net-check",
        component: ()=>y(()=>import("./net-check-98d8f5e7.js"), ["assets/net-check-98d8f5e7.js", "assets/vendor-fd5e6eea.js", "assets/net-check-c37e2574.css"]),
        name: d.NetCheck,
        meta: {
            layoutType: B.none
        }
    }, {
        path: "/:pathMatch(.*)*",
        component: ()=>y(()=>import("./error-b39c71cb.js"), ["assets/error-b39c71cb.js", "assets/b-error.es-6311b504.js", "assets/vendor-fd5e6eea.js", "assets/image-8d130017.js", "assets/style-640243e2.css"]),
        name: d.NotFound,
        meta: {
            layoutType: B.hf
        }
    }]
}];
function Ni() {
    return Ba({
        history: Va(),
        routes: Ki,
        scrollBehavior(e, a) {
            return e.path === a.path ? {
                x: 0,
                y: window.scrollY
            } : {
                top: 0
            }
        }
    })
}
const ji = {
    description: "{description}, Southeast Asia's leading anime, comics, and games (ACG) community where people can create, watch and share engaging videos.",
    keyWord: "{title},{brand},free anime,anime,Top Anime,BL,GL,cosplay,SubThai",
    header: {
        download: "Get App",
        upload: "Upload"
    },
    common: {
        noResult: "No relevant results were found",
        error: "Error"
    },
    navList: ["Home", "Anime", "Trending", "Category", "History"],
    errorText: {
        ogvVipLimitText: "Get Premium and enjoy the Premium-exclusive video!",
        ogvLocaleLimitText: "Sorry, according to the request of the copyright owner, this video is not available at the moment.",
        notAvailable: "Sorry, according to the request of the copyright owner, this video is not available on the Web end.",
        noDataText: "Result Missing",
        ogvLoginLimitText: "Sorry, according to the copyright owner's request, you may only watch the video after you log in. ",
        joinVipByQuality: "This video resolution is exclusive to Premium. Start a Premium plan to enjoy Ultra HD videos.",
        ogvDeviceLimit: "This video is unplayable because the account you use is being used on another device for Premium-exclusive content.",
        enLocalBlackLimit: "Sorry, according to the request of the copyright owner, this film is not available in your area.",
        ugcLocaleLimitText: "Oops! o(╥﹏╥)o The video could not be found."
    },
    download: {
        download: "Download Now",
        desc: "Your best community of live commented videos with anime, entertainment and more!",
        phone: "https://p.bstarstatic.com/fe-lib/images/web/phone-en.png"
    },
    footerLang: {
        about: "About us",
        contactUs: "Contact us",
        agreement: "Terms of Service",
        privacy: "Privacy Policy",
        infringe: "Infringement Complaint",
        download: "Download APP"
    },
    usLang: {
        title: "About us",
        describe: ["{brand} is a highly engaged, interactive and sticky video community designed to enrich the everyday life of the young generation through Anime, Comics and Games (ACG) videos and more.", "{brand} is continuously expanding its content ecosystem to fulfill the diverse and expanding interests of our users. "]
    },
    title: {
        home: "{brand}",
        popular: "Trending - {brand}",
        trending: "Trending - {brand}",
        category: "Category{filter} - {brand}",
        anime: "Anime - {brand}",
        history: "History - {brand}",
        fav: "My List - {brand}",
        ugc: "{title} - {brand}",
        ogv: "{season} {epTitle} - {brand}",
        collection: "{title}",
        media: "{season} details - {brand}",
        searchResult: "{keyword} - {brand} search",
        aboutUs: "About Us - {brand}",
        userAgreement: "Terms of Service - {brand}",
        privacy: "Privacy Policy - {brand}",
        copyright: "Infringement Complaint - {brand}",
        download: "Get App - {brand}",
        404: "{brand}",
        search: "{brand} search - {searchWord}",
        live: "{title} - {brand}",
        profile: "Profile - {brand}",
        space: "{nickname}'s {pathName} - {brand}",
        paymentAgreement: "Join Premium - {brand}",
        cashierDesk: "Join Premium - {brand}",
        cashierResult: "Join Premium - {brand}",
        timeline: "Release Calendar - {brand}"
    },
    privacyLang: {
        title: "Privacy Policy"
    },
    agreementLang: {
        title: "Terms of Service"
    },
    home: {
        loading: "Loading more...",
        subTitle: {
            ugcTopVideo: "Top Videos",
            forYou: "For You",
            trending: "Trending Now",
            timeline: "Release Calendar",
            index: "Index",
            viewAll: "View All"
        },
        continueWatch: "Continue Watching",
        noUpdates: "No updates"
    },
    history: {
        title: "History",
        emptyText: "No history",
        delete: "Delete",
        confirmDelete: "Are you sure to delete this watch history?",
        confirm: "Confirm",
        cancel: "Cancel",
        noMore: "No more results found"
    },
    search: {
        searchHistory: "Search History",
        allTab: "All",
        animeTab: "Anime",
        creatorTab: "Creator"
    },
    account: {
        myProfile: "My Profile",
        avatarLimit: "Support JPG/PNG format (2M at most)",
        avatarTooLarge: "The picture size is too large, please select a picture within 2MB",
        title: "Account",
        avatarLabel: "Avatar",
        nickLabel: "Nickname",
        bioLabel: "Bio",
        birthLabel: "Date of Birth",
        bioPlaceholder: "Please introduce yourself.",
        nickPlaceholder: "Please enter your nickname.",
        emptyBioText: "Please introduce yourself.",
        nicknameLengthErr: "Nickname should be from 2 to 20 characters.",
        needLogin: "Log in to edit your profile",
        editSuccessTip: "Profile updated successfully"
    },
    btnTextLang: {
        cancel: "Cancel",
        login: "Log in",
        logout: "Log Out",
        save: "Save",
        joinVip: "Join the Premium",
        nextStep: "Next",
        payNow: "Pay Now",
        known: "Got it",
        update: "Update",
        confirm: "Confirm",
        toAPP: "View more in App"
    },
    space: {
        editBtn: "Edit profile",
        videoTitle: "Video",
        videoText: {
            singular: "Video",
            plural: "Videos"
        },
        upLikedText: {
            singular: "Like",
            plural: "Likes"
        },
        noVideosText: "No videos uploaded",
        spaceTitle: "space",
        followersTitle: "followers",
        followingsTitle: "followings"
    },
    anime: {
        forYou: "For You",
        myList: "My List",
        category: "Category",
        timeline: "Release Calendar",
        ranking: "Trending",
        moreAnime: "More Anime",
        requestFail: "Failed to load the content. Please refresh and try again.",
        noMore: "No more content"
    },
    video: {
        recommend: "Recommended for You",
        like: "Like",
        download: "Download",
        episodes: "Episode",
        series: "Series",
        seriesMore: "More",
        viewMore: "View More",
        comingSoon: "EP1 starts on",
        comingSoonTip: "Coming soon",
        notDownloadTips: "The video does not support downloading.",
        info: {
            details: "Details",
            originName: "Initial",
            aliasName: "Alias",
            styles: "Genres",
            directors: "Director",
            writers: "Editor",
            actors: "VA",
            performers: "Actor/Actress",
            staff: "Staff"
        },
        comment: {
            comments: "Comments",
            reply: "Reply",
            replyTo: "Reply to {user}",
            report: "Report",
            reportTitle: "Report Comment",
            send: "Send",
            addComment: "Leave a friendly comment(°▽°)~",
            sendFail: "Send failed",
            fold: "fold",
            moreReplies: "More replies",
            noResult: "There is nothing here",
            noMoreComments: "No more comments",
            watchMore: "View more in Bilibili App"
        },
        anime: {
            desc: "Free popular animes are streaming now"
        },
        top50: "Top 50",
        viewmore: "View more"
    },
    openApp: "Open App",
    watchOnApp: "Watch on Bilibili",
    openAppBtn: "Open in App",
    top: "TOP",
    card: {
        only: "{brand} ONLY",
        freeNow: "FREE NOW",
        premium: "Premium",
        anime: "Anime",
        tvShow: "TV Show"
    },
    feedback: {
        feedback: "Feedback",
        search: "Search",
        noResult: "No results found",
        invalidPhone: "Please enter the correct telephone number.",
        invalidEmail: "Please enter the correct e-mail address.",
        error: "Submission failed. Please try again.",
        uploadError: "Failed to upload the image"
    },
    drawer: {
        info: "Info"
    },
    live: {
        addDm: "Add a live comment"
    },
    player: {
        playTip: "Play(space)",
        pauseTip: "Pause(space)",
        closeSubtitle: "Closed",
        nextEpTooltip: "Next episode(shift+n){epTitle}",
        nextEpTip: "Next episode{epTitle}",
        fullscreenTip: "Full screen(f)",
        closeFullscreenTip: "Exit full screen(f)",
        report: "Report",
        ccReport: "Subtitle Report",
        changingQuality: "Quality switching, please wait",
        changeQualitySuccess: "Switched successfully",
        changeQualityFail: "Switching failed",
        skipTo: "Skip to",
        speed: "Playback speed",
        quality: "Quality",
        ccTitle: "Subtitles",
        subtitle: {
            loading: "Loading subtitles... Please wait.",
            success: "Subtitles loaded",
            fail: ["Failed to load subtitles. ", "Go to feedback."]
        },
        emptySubtitleTip: "No subtitles available",
        cancel: "cancel",
        wideScreenTip: "Theater Mode",
        closeWideSceenTip: "Exit Theater Mode",
        tapToUnmute: "Tap to unmute",
        danmakuSend: "Send",
        danmakuOff: "Danmaku Off",
        danmakuOn: "Danmaku On",
        danmakuPlaceholder: "Tap here and send danmaku",
        danmakuFequently: "Danmaku are sent too frequently",
        danmakuClosedToast: "Danmaku are disabled",
        danmakuSwitchOffToast: "Failed to send. Danmaku is off. ",
        skipLabel: "Skip the Intro/Outro",
        skipToast: ["Skip the Intro/Outro, ", "turn on"],
        skipingOp: "Skipping the intro",
        skipedOp: "Intro skipped",
        skipingEd: "Skipping the outro",
        skipedEd: "Outro skipped",
        adsPremiumBtn: "Premium skip ads"
    },
    media: {
        views: "Total Views",
        region: "Region",
        desc: "Description",
        cvTitle: "VA & STAFF",
        playNow: "Watch Now",
        starting: "Starting",
        noEp: "No episodes yet"
    },
    follow: {
        unfollow: "Follow",
        followed: "Following",
        unfollowConfirmText: "Are you sure to unfollow this creator?",
        confirmBtn: "Confirm",
        cancelBtn: "Cancel",
        fans: {
            singular: "Follower",
            plural: "Followers"
        },
        followings: {
            singular: "Following",
            plural: "Followings"
        }
    },
    vipGoods: {
        title: "Premium Plans",
        benefits: {
            only: "Enjoy Premium-exclusive content",
            free: "Download Premium-exclusive content for free",
            advance: "Watch anime before they air",
            quality: "1080P+"
        },
        tipsTitle: "Premium Benefits",
        paymentAgreement: "{brand} Premium Service Agreement",
        guideToast: "The service is being upgraded. Please download the app to subscribe to Premium."
    },
    vipConfirm: {
        title: "Complete the payment on the page you are being redirected to.",
        desc: "Do not close this window before the payment is complete. After you complete the payment, tap either of the following buttons as needed.",
        boughtBtn: "Get Paid",
        repurchaseBtn: "Repay"
    },
    vipError: {
        order: "Order creation failed.",
        pay: "No subscription was found.",
        loading: "Failed to load. Please retry."
    },
    cashierDesk: {
        selected: "Selected",
        setPaymentMethod: "Select payment method"
    },
    vipCallback: {
        success: "You have now successfully subscribed to Premium!",
        fail: "Failed to subscribe to Premium."
    },
    vip: {
        title: "Join the Premium",
        toast: {
            priceChange: "Due to the change in payment method, the currency and price of Premium plans change."
        },
        header: {
            expireAt: "Your Premium is valid until {time}",
            loginToPreview: "Log in to view your Premium services",
            joinVipTip: "Subscribe to enjoy thousands of episodes for free"
        },
        benefits: {
            title: "Premium Benefits"
        },
        result: {
            timeout: "Timeout for payment result inquiry",
            retry: "Retry",
            loading: "Inquiring, please wait patiently."
        },
        footer: {
            buyNow: "Subscribe Now",
            vipOptions: "Premium Plans",
            redeem: "Redeem Premium",
            moreMethods: "More Subscription Methods"
        }
    },
    basicComponent: {
        datePlaceHolder: "Select date",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun"
    },
    login: {
        loginGuide: "Log in and watch HD videos",
        loginNow: "Log in Now",
        title: {
            main: "Log in to {brand}",
            toLogin: "Log in",
            register: "Sign up",
            reset: "Reset password",
            imgCode: "Please enter the code on the image"
        },
        tabs: {
            phone: "Phone number",
            account: "Account"
        },
        rememberMe: "Remember me",
        forgetPassword: "Forgot Password?",
        panel: {
            loginWith: "Log in with",
            orContinue: "Or continue with",
            loginWithPhone: "Phone",
            login: "Log in",
            loginTip: "If the number you entered is not registered, a new account will be created  once clicking Login.",
            exceptionTip: "Sorry, something went wrong there. Please try again later."
        },
        form: {
            phonePlaceholder: "Phone number",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Enter Password",
            confirmPasswordPlaceholder: "Confirm password",
            codePlaceholder: "Enter verification code",
            sendCode: "Send Code",
            emptyAccount: "Please enter your email address",
            emptyPassword: "Please enter your password",
            passwordRule: "8-20 characters from at least 2 categories: letters, numbers, special characters.",
            emptyPhoneTip: "Please enter your phone number",
            wrongPhoneTip: "Invalid phone number",
            diffCountryTip: "Phone number does not match the selected region.",
            notMatchPhoneAndCode: "Invalid vertification code. Resend the code and try again.",
            getSms: "Send Code",
            getSmsAgain: "Resend",
            getSmsLater: "Resend ({0}s)",
            noSmsCode: "Enter verification code",
            wrongSmsCode: "Enter verification code",
            sentTip: "Verification code sent via SMS",
            noSentCodeTip: "Please send the code first.",
            countryInputPlaceholder: "Search",
            noSearchData: "No results found",
            diffEmail: "Emails are inconsistent, please check it again",
            emailSentTip: "Verification code has been sent via email",
            diffPassword: "The two passwords you entered are different",
            resetSuccessTip: "Password changed. Please log in with the new password",
            incorrectEmailFormat: "Incorrect email format, please check it again"
        },
        footer: {
            agreement: "Terms of Service",
            and: "&",
            privacy: "Privacy Policy",
            loginAgree: "I have attained the age of 13. By logging in, you acknowledge and agree you have read and agree to be bound by",
            noRegisterLabel: "Don't have an account?",
            toRegister: "Sign up",
            legalTooltip: "Please confirm",
            alreadyRegister: "Already have an account?",
            toLogin: "Log in"
        },
        imageCode: {
            imgCodePlaceholder: "Image vertification Code",
            changeCodeBtnText: "Change an image",
            emptyImgCodeTip: "Please enter the code",
            errorImgCodeTip: "Please enter the valid code"
        }
    },
    fav: {
        title: "My List",
        tabs: {
            all: "All",
            anime: "Anime",
            video: "Video",
            tvShows: "TV Shows"
        }
    },
    moreAction: {
        title: "",
        actions: {
            del: "Delete"
        }
    },
    pendingStopPushing: "The video is under review. Please come by later.",
    riskTag: "Sorry. The content is contentious and not available for now.",
    notFound: "404 Page not found",
    serverError: "Server request error",
    forbidden: "You are not allowed to access this page.",
    notAvailable: "The video is not available at the moment, please view other content",
    homeText: "Home",
    category: {
        selected: "Selected"
    },
    timeline: {
        noUpdateToday: "No updates today",
        addFav: "Saved to My List",
        delFav: "Removed from My List"
    },
    about: {
        intro: {
            title: "About Bilibili",
            content: ['We consider ourselves "hardcore fans" of anime, comics, and games. We love this community and want to celebrate it. Born out of our shared passion, is Bilibili. What started out as a community inspired by our love for anime, comics, and games (ACG) has now beautifully transformed into a leading platform with the most expansive anime library, including both anime series and creator videos.', "Bilibili is not just a platform. It’s a place where people can feel a sense of belonging. Bilibili is about coming together and enjoying content with like-minded people who want to express their creativity and connect with their community.", 'Besides the Greater China Region, Bilibili is now available in Indonesia, the Philippines, Thailand, Vietnam, Singapore, and Malaysia. In Indonesia, we are branded as "Bstation".']
        },
        services: {
            title: "Services",
            content: ["We have the largest anime inventory in SEA from the latest releases to the classic titles everyone knows and loves. New anime episodes are released on a daily basis, with genres including but not limited to action, adventure, comedy, fantasy, romance, school, sci-fi, and sports.", `Apart from our massive animations, we also host creator's videos to answer to the needs of the young generation who both loves to "watch" as well as to "create" in one place. Bilibili builds its community around active users, high-quality content, talented creators and the strong emotional bond among them.`, "Aiming to become a full-spectrum video platform, our current priority is to continuously broaden and enrich our content ecosystem, provide support to our content creators and constantly upgrade our products based on their feedback."]
        },
        products: {
            title: "Products",
            platform: ["App", "Smart TV Version", "Viddup", "Virtual Assets"],
            app: ["Content varies from region to region and may be subjected to changes at any time.", "As a hybrid platform that hosts both OGVs (Occupationally-Generated Videos) and UGCs (User-Generated Content), you can watch many animations, movies and variety shows as well as creator's videos.", "You can also upload your videos on our platform."],
            tv: ["A subscription-based streaming service for Smart TV. Currently available on Android and LG. Enjoy content from Bilibili app with an HD viewing experience.", "Multi-language subtitles are available including English, Thai, Vietnamese, and more.", "With one Bilibili account, a user's viewing history will be synchronized from mobile phone and PC to TV."],
            vu: "Viddup is a smart video editing application that makes creating high-quality videos easy.",
            va: "Virtual Assets include App Theme, Stickers, and Avatar Frames provide users with customized experiences featuring their favorite IPs."
        },
        footer: {
            download: {
                title: "Product Download",
                app: "Bilibili App",
                viddupAndroid: "Viddup Android",
                viddupiOS: "Viddup iOS"
            },
            lib: {
                title: "Brand Library",
                guide: "Brand Identity Guidebook",
                assets: "Brand Assets"
            },
            sns: {
                title: "SNS",
                twitter: "Twitter",
                facebook: "Facebook",
                ins: "Instagram"
            }
        }
    },
    trending: {
        trending: "Trending",
        dailyUpdate: "Daily update",
        hourlyUpdate: "Hourly update",
        viewMore: "View More",
        animeTitle: "Anime List",
        ugcTitle: "Videos List",
        detailDefaultTitle: "General List"
    },
    ogvCollection: {
        total: "{total} in total",
        noMore: "No more content",
        noResult: "There is nothing here"
    },
    toApp: "Get better experience on the App!",
    confirm: "Confirm",
    cancel: "Cancel",
    needUpgrade: "You are using an older version, some features may not be available."
}
  , Gi = {
    description: "{description}, ชุมชนอนิเมะ การ์ตูนและเกม (ACG) ชั้นนำแห่งเอเชียตะวันออกเฉียงใต้ ที่ทุกคนสามารถเข้ามาร่วมสร้างสรรค์ รับชมและแบ่งปันวิดีโอที่น่าสนใจร่วมกันได้",
    keyWord: "{title},{brand},อนิเมะฟรี,การ์ตูน，อนิเมะสั้น,อนิเมะยอดนิยม,Y,วาย,อนิเมะยูริ,คอสเพลย์,ซับไทย",
    header: {
        download: "ดาวน์โหลดแอป",
        upload: "อัพโหลด"
    },
    common: {
        noResult: "ขออภัย, ไม่พบรายการอนิเมะจากการค้นหา",
        error: "ข้อผิดพลาด"
    },
    navList: ["หน้าหลัก", "อนิเมะ", "ฮอตฮิต", "หมวดหมู่"],
    errorText: {
        ogvVipLimitText: "สมาชิก Premium สามารถรับชมได้！",
        ogvLocaleLimitText: "ขออภัย ตามคำขอของเจ้าของลิขสิทธิ์ อนิเมะเรื่องนี้ไม่สามารถรับชมได้ในขณะนี้",
        notAvailable: "ขออภัย ตามคำขอของเจ้าของลิขสิทธิ์ อนิเมะเรื่องนี้ไม่สามารถรับชมได้ในเว็บไซต์",
        noDataText: "Result Missing",
        ogvLoginLimitText: "ขออภัยตามคำขอของเจ้าของลิขสิทธิ์คุณสามารถรับชมภาพยนตร์เรื่องนี้ได้หลังจากเข้าสู่ระบบเท่านั้น",
        joinVipByQuality: "ความละเอียดนี้เป็นสิทธิของ Premium คุณสามารถรับชมความละเอียดดีที่สุดหลังจากสมัครเป็น Premium",
        ogvDeviceLimit: "บัญชีล็อกอินในปัจจุบันถูกใช้สมัคร Premium บนอุปกรณ์อื่น และเนื้อหานี้ไม่สามารถรับชมได้",
        enLocalBlackLimit: "Sorry, according to the request of the copyright owner, this film is not available in your area.",
        ugcLocaleLimitText: "อุต๊ะ!  o(╥﹏╥)o ไม่พบวิดีโอนี้แล้ว"
    },
    download: {
        download: "ดาวน์โหลดทันที",
        desc: "ที่นี่คือชุมชนวิดีโอคอมเมนต์สดที่ดีที่สุดของคุณพร้อมอนิเมะ ความบันเทิงและอีกมากมาย!",
        phone: "https://p.bstarstatic.com/fe-lib/images/web/phone-th.png"
    },
    footerLang: {
        about: "เกี่ยวกับเรา",
        contactUs: "ติดต่อเรา",
        agreement: "ข้อกำหนดการให้บริการ",
        privacy: "นโยบายความเป็นส่วนตัว",
        infringe: "การร้องเรียนการละเมิด"
    },
    usLang: {
        title: "เกี่ยวกับเรา",
        describe: ["{brand} เป็นชุมชนวิดีโอที่มีส่วนร่วมสูง โต้ตอบได้และมีความเหนียวแน่น มีการออกแบบมาเพื่อตอบโจทย์ชีวิตประจำวันของคนรุ่นใหม่ผ่านวิดีโออนิเมะ การ์ตูน เกม (ACG) และอื่น ๆ โดย", "{brand} กำลังขยายขอบเขตของเนื้อหาอย่างต่อเนื่องเพื่อตอบสนองความสนใจที่หลากหลายและเพิ่มมากขึ้นจากผู้ใช้ของเรา"]
    },
    title: {
        home: "{brand}",
        popular: "ฮอตฮิต - {brand}",
        trending: "กำลังมาแรง - {brand}",
        category: "หมวดหมู่{filter} - {brand}",
        anime: "อนิเมะ - {brand}",
        history: "ประวัติ - {brand}",
        fav: "รายการโปรด - {brand}",
        ugc: "{title} - {brand}",
        ogv: "{season} {epTitle} - {brand}",
        collection: "{title}",
        media: "{season} รายละเอียด - {brand}",
        searchResult: "{keyword} - {brand} ค้นหา",
        aboutUs: "เกี่ยวกับเรา - {brand}",
        userAgreement: "ข้อกำหนดการให้บริการ - {brand}",
        privacy: "นโยบายความเป็นส่วนตัว - {brand}",
        copyright: "การร้องเรียนการละเมิด - {brand}",
        download: "ดาวน์โหลดแอป - {brand}",
        404: "{brand}",
        search: "{brand} ค้นหา - {searchWord}",
        live: "{title} - {brand}",
        profile: "โปรไฟล์ - {brand}",
        space: "{pathName} {nickname} - {brand}",
        paymentAgreement: "สมัครสมาชิก Premium - {brand}",
        cashierDesk: "สมัครสมาชิก Premium - {brand}",
        cashierResult: "สมัครสมาชิก Premium - {brand}",
        timeline: "ตารางใหม่ - {brand}"
    },
    privacyLang: {
        title: "นโยบายความเป็นส่วนตัว"
    },
    agreementLang: {
        title: "ข้อกำหนดการให้บริการ"
    },
    home: {
        loading: "กำลังประมวลผล ...",
        subTitle: {
            ugcTopVideo: "วีดีโอ",
            forYou: "แนะนำสำหรับคุณ",
            trending: "อนิเมะมาแรง",
            timeline: "ตารางใหม่",
            index: "ทั้งหมด",
            viewAll: "ดูทั้งหมด"
        },
        continueWatch: "ดูต่อ",
        noUpdates: "ไม่มีอะไรเลย"
    },
    history: {
        title: "ประวัติ",
        emptyText: "ที่นี่ไม่มีอะไรเลย ~",
        delete: "ลบ",
        confirmDelete: "คุณแน่ใจหรือไม่ว่าลบประวัติการดูนี้",
        confirm: "ยืนยัน",
        cancel: "ยกเลิก",
        noMore: "ไม่พบผลลัพธ์เพิ่มเติม"
    },
    search: {
        searchHistory: "ประวัติการค้นหา",
        allTab: "ทั้งหมด",
        animeTab: "อนิเมะ",
        creatorTab: "ครีเอเตอร์"
    },
    account: {
        myProfile: "โปรไฟล์ของฉัน",
        avatarLimit: "รองรับไฟล์ JPG/PNG ได้สูงสุด 2M",
        avatarTooLarge: "ขนาดรูปโปรไฟล์เกินขีดจำกัด สูงสุดไม่สามารถเกิน 2M",
        title: "ข้อมูลบัญชี",
        avatarLabel: "รูปโปรไฟล์",
        nickLabel: "ชื่อเล่น",
        bioLabel: "คำแนะนำตัวเอง",
        birthLabel: "วันเดือนปีเกิด",
        editAvatarLabel: "เปลี่ยนรูปโปรไฟล์",
        editText: "แก้ไข",
        reUpload: "อัปโหลดใหม่",
        preview: "ตัวอย่าง",
        bioPlaceholder: "กรุณากรอกคำแนะนำของคุณ",
        nickPlaceholder: "กรุณากรอกชื่อเล่น",
        emptyBioText: "กรุณากรอกคำแนะนำของคุณ",
        nicknameLengthErr: "ชื่อเล่นมีความยาว 2-20 ตัวอักษร",
        needLogin: "เข้าสู่ระบบเพื่อแก้ไขข้อมูลส่วนตัว",
        editSuccessTip: "แก้โปรไฟล์สำเร็จแล้ว"
    },
    btnTextLang: {
        cancel: "ยกเลิก",
        login: "เข้าสู่ระบบทันที",
        logout: "ออกจากระบบ",
        save: "บันทึก",
        joinVip: "เป็น Premium",
        nextStep: "ถัดไป",
        payNow: "ซื้อ",
        known: "รับรู้แล้ว",
        update: "อัปเดต",
        confirm: "ยืนยัน",
        toAPP: "ดูเพิ่มเติมที่แอป"
    },
    space: {
        editBtn: "แก้ไขโปรไฟล์",
        videoTitle: "วิดีโอ",
        videoText: {
            singular: "วิดีโอ",
            plural: "วิดีโอ"
        },
        upLikedText: {
            singular: "ไลก์",
            plural: "ไลก์"
        },
        noVideosText: "ค้นหาไม่เจอ",
        spaceTitle: "ช่องของ",
        followersTitle: "แฟนคลับ",
        followingsTitle: "ติดตามแล้ว"
    },
    anime: {
        forYou: "แนะนำให้คุณ",
        myList: "รายการโปรด",
        category: "หมวดหมู่",
        timeline: "ตารางใหม่",
        ranking: "กำลังมาแรง",
        moreAnime: "การแนะนำเพิ่มเติม",
        requestFail: "ข้อมูลผิดพลาด โปรดรีเฟรชและลองอีกครั้ง",
        noMore: "ไม่มีเนื้อหาเพิ่มเติม"
    },
    video: {
        recommend: "วีดีโอแนะนำสำหรับคุณ",
        like: "กดไลก์",
        download: "ดาวน์โหลด",
        series: "ซีรี่ย์",
        episodes: "ตอน",
        seriesMore: "ตรวจดูเพิ่มเติม",
        viewMore: "ดูเพิ่มเติม",
        comingSoon: "ตอนที่ 1 เริ่มเวลา",
        comingSoonTip: "เร็ว ๆ นี้",
        notDownloadTips: "วิดีโอนี้ไม่รองรับการดาวน์โหลด",
        info: {
            details: "รายละเอียด",
            originName: "ชื่อเดิม",
            aliasName: "ชื่ออื่น",
            styles: "สไตล์",
            directors: "ผู้กำกับ",
            writers: "นักเขียนบท",
            actors: "VA",
            performers: "นักแสดง",
            staff: "พนักงาน",
            viewMode: "ดูเพิ่มเติม"
        },
        comment: {
            comments: "คอมเมนต์",
            reply: "ตอบกลับ",
            replyTo: "ตอบกลับ{user}",
            report: "รายงาน",
            reportTitle: "รายงานความคิดเห็น",
            send: "ส่ง",
            addComment: "เพิ่มความคิดเห็นที่เป็นมิตร(°▽°)~",
            sendFail: "การเผยแพร่ล้มเหลว",
            fold: "ซ่อน",
            moreReplies: "ตอบกลับเพิ่มเติม",
            noResult: "ไม่พบอะไรเลย",
            noMoreComments: "ไม่พบทั้งหมด",
            watchMore: "ดูเพิ่มเติมที่แอป Bilibili"
        },
        anime: {
            desc: "อนิเมะลิขสิทธิ์แท้ อัปเดตทุกวัน"
        },
        top50: "อนิเมะยอดนิยม",
        viewmore: "ดูเพิ่มเติม"
    },
    openApp: "เปิดแอป",
    watchOnApp: "รับชมใน Bilibili",
    openAppBtn: "เปิดในแอพ",
    top: "Top",
    card: {
        only: "{brand} เท่านั้น",
        freeNow: "ฟรีตอนนี้",
        premium: "Premium",
        anime: "อนิเมะ",
        tvShow: "ซีรีส์"
    },
    feedback: {
        feedback: "ข้อเสนอแนะ",
        search: "ค้นหา",
        noResult: "ไม่พบผลลัพธ์",
        invalidPhone: "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง",
        invalidEmail: "กรุณากรอกที่อยู่อีเมลที่ถูกต้อง",
        error: "การส่งล้มเหลว กรุณาลองใหม่อีกครั้ง",
        uploadError: "การอัปโหลดรูปภาพล้มเหลว"
    },
    drawer: {
        info: "เรื่องย่อ"
    },
    live: {
        addDm: "เพิ่มความคิดเห็นสด"
    },
    player: {
        playTip: "เล่น(space)",
        pauseTip: "หยุดชั่วคราว(space)",
        closeSubtitle: "ปิด",
        nextEpTooltip: "ตอนต่อไป(shift+n){epTitle}",
        nextEpTip: "ตอนต่อไป{epTitle}",
        fullscreenTip: "เต็มหน้าจอ(f)",
        closeFullscreenTip: "ออกจากโหมดเต็มหน้าจอ(f)",
        report: "รายงาน",
        ccReport: "รีพอร์ตปัญหาซับ",
        changingQuality: "กำลังเปลี่ยน โปรดรอสักครู่",
        changeQualitySuccess: "เปลี่ยนสำเร็จ",
        changeQualityFail: "เปลี่ยนล้มเหลว",
        skipTo: "ข้ามไปที่",
        speed: "ความเร็วในการเล่น",
        quality: "คุณภาพ",
        ccTitle: "คำบรรยาย",
        subtitle: {
            loading: "กำลังขอคำบรรยาย กรุณารอสักครู่",
            success: "ดาวน์โหลดคำบรรยายสำเร็จ",
            fail: ["การรับคำบรรยายล้มเหลว ", "กรุณารายงาน"]
        },
        emptySubtitleTip: "ไม่พบคำบรรยาย",
        cancel: "ยกเลิก",
        wideScreenTip: "โหมดไวด์สกรีน",
        closeWideSceenTip: "ปิดโหมดไวด์สกรีน",
        tapToUnmute: "แตะเพื่อเปิดเสียง",
        danmakuSend: "ส่ง",
        danmakuOn: "เปิด ข้อความลอย",
        danmakuOff: "ปิด ข้อความลอย",
        danmakuPlaceholder: "คลิกเพื่อส่ง ข้อความลอย",
        danmakuFequently: "การส่ง ข้อความลอย ถี่เกินไป",
        danmakuClosedToast: "ฟังก์ชัน ข้อความลอย ถูกปิด",
        danmakuSwitchOffToast: "การส่งล้มเหลว  ไม่ได้เปิด ข้อความลอย",
        skipLabel: "ข้ามช่วงต้น/ช่วงท้าย",
        skipToast: ["ต้องการเปิดการข้ามช่วงต้น/ช่วงท้ายหรือไม่ ", "เปิด"],
        skipingOp: "ข้ามช่วงต้น",
        skipedOp: "ข้ามช่วงต้นแล้ว",
        skipingEd: "ข้ามช่วงท้าย",
        skipedEd: "ข้ามช่วงท้ายแล้ว",
        adsPremiumBtn: "Premium ข้ามโฆษณา"
    },
    media: {
        views: "ยอดผู้ชม",
        region: "ภูมิภาค",
        desc: "บรรยาย",
        cvTitle: "VA & พนักงาน",
        playNow: "รับชมทันที",
        starting: "เวลาเริ่มฉาย",
        noEp: "ยังไม่มีตอน"
    },
    follow: {
        unfollow: "ติดตาม",
        followed: "ติดตามแล้ว",
        unfollowConfirmText: "ยืนยันที่จะเลิกติดตามครีเอเตอร์หรือไม่?",
        confirmBtn: "ยืนยัน",
        cancelBtn: "ยกเลิก",
        fans: {
            singular: "แฟนคลับ",
            plural: "แฟนคลับ"
        },
        followings: {
            singular: "ติดตามแล้ว",
            plural: "ติดตามแล้ว"
        }
    },
    vipGoods: {
        title: "แพ็คเกจ Premium",
        benefits: {
            only: "รับชมเนื้อหาเฉพาะ Premium",
            free: "ดาวน์โหลดฟรี",
            advance: "รับชมเนื้อหาล่วงหน้า",
            quality: "ความละเอียด 1080 P+"
        },
        tipsTitle: "สิทธิ Premium",
        paymentAgreement: "ข้อตกลงการบริการ {brand} Premium",
        guideToast: "ในระหว่างการอัปเกรดบริการ กรุณาดาวน์โหลดแอป bilibili เพื่อซื้อ Premium"
    },
    vipConfirm: {
        title: "กรุณาชำระเงินให้สำเร็จที่หน้าต่างใหม่",
        desc: "อย่าปิดหน้าต่างนี้จนกว่าจะทำการชำระเงินสำเร็จ เมื่อชำระเงินสำเร็จแล้ว กรุณากดปุ่มด้านล่าง",
        boughtBtn: "ชำระเงินสำเร็จ",
        repurchaseBtn: "ชำระเงินอีกครั้ง"
    },
    vipError: {
        order: "การซื้อล้มเหลว",
        pay: "ไม่พบการซื้อที่สำเร็จ",
        loading: "การโหลตไม่สำเร็จ โปรดลองอีกครั้งในภายหลัง"
    },
    cashierDesk: {
        selected: "แพ็คเกจที่เลือก",
        setPaymentMethod: "เลือกวิธีการชำระเงิน"
    },
    vipCallback: {
        success: "สมัคร Premium สำเร็จ",
        fail: "สมัคร Premium ไม่สำเร็จ"
    },
    vip: {
        title: "เป็น Premium",
        toast: {
            priceChange: "เนื่องจากการเปลี่ยนแปลงวิธีการชำระเงิน สกุลเงินและราคาแพ็คเกจ Premium จึงเปลี่ยนไป"
        },
        header: {
            expireAt: "ใช้ได้จนถึง: วันที่ {time}",
            loginToPreview: "เข้าสู่ระบบเพื่อตรวจสอบสิทธิประโยชน์จากการเป็น Premium ของคุณ",
            joinVipTip: "สมัคร Premium และรับชมอนิเมะนับพันเรื่องได้ฟรี"
        },
        benefits: {
            title: "สิทธิ Premium"
        },
        result: {
            timeout: "การตรวจสอบผลการชำระเงินหมดอายุแล้ว",
            retry: "ลองอีกครั้ง",
            loading: "กำลังดำเนินการตรวจสอบ กรุณารอสักครู่"
        },
        footer: {
            buyNow: "สมัครทันที",
            vipOptions: "แพ็คเกจ Premium",
            redeem: "แลกรับ Premium",
            moreMethods: "วิธีเปิดใช้งานเพิ่มเติม"
        }
    },
    basicComponent: {
        datePlaceHolder: "กรุณาเลือกวันที่",
        mon: "จ",
        tue: "อ",
        wed: "พ",
        thu: "พฤ",
        fri: "ศ",
        sat: "ส",
        sun: "อา"
    },
    login: {
        loginGuide: "เข้าสู่ระบบเพื่อรับชมวิดีโอ HD",
        loginNow: "เข้าสู่ระบบทันที",
        title: {
            main: "Log in to {brand}",
            toLogin: "เข้าสู่ระบบ",
            register: "ลงทะเบียน",
            reset: "รีเซ็ตรหัสผ่าน",
            imgCode: "กรุณากรอกรหัสบนรูปภาพ"
        },
        tabs: {
            phone: "เบอร์ติดต่อ",
            account: "บัญชี"
        },
        rememberMe: "บันทึกไว้",
        forgetPassword: "ลืมรหัสผ่าน?",
        panel: {
            loginWith: "เข้าสู่ระบบด้วย",
            orContinue: "หรือเลือกวิธีต่อไปนี้เพื่อเข้าสู่ระบบ",
            loginWithPhone: "โทรศัพท์",
            login: "เข้าสู่ระบบ",
            loginTip: "หากหมายเลขโทรศัพท์มือถือของคุณยังไม่ได้ลงทะเบียนหรือยังไม่ได้ผูกมัดกับบัญชี {brand} การเข้าสู่ระบบครั้งนี้จะลงทะเบียนบัญชีใหม่โดยอัตโนมัติ",
            exceptionTip: "ขออภัยมีบางอย่างผิดพลาดเกิดขึ้น โปรดลองใหม่ในภายหลัง"
        },
        form: {
            phonePlaceholder: "หมายเลขโทรศัพท์มือถือ",
            emailPlaceholder: "โปรดกรอกที่อยู่อีเมล์ของคุณ",
            passwordPlaceholder: "กรอกรหัสผ่าน",
            confirmPasswordPlaceholder: "ยืนยันรหัสผ่าน",
            codePlaceholder: "ป้อนรหัสยืนยัน",
            sendCode: "ส่งรหัสยืนยัน",
            emptyAccount: "กรุณากรอกข้อมูลบัญชีของคุณ",
            emptyPassword: "กรุณากรอกรหัสผ่านของคุณ",
            passwordRule: "รหัสผ่านความยาวอย่างน้อย 8-20 ตัวอักษร ประกอบด้วยอักขระดังต่อไปนี้อย่างน้อย 2 ใน 3. – ตัวอักษร ตัวเลขและเครื่องหมายหรืออักขระพิเศษ",
            emptyPhoneTip: "กรุณากรอกหมายเลขโทรศัพท์ของคุณ",
            wrongPhoneTip: "หมายเลขโทรศัพท์ที่ไม่ถูกต้อง",
            diffCountryTip: "หมายเลขโทรศัพท์ไม่ตรงกับภูมิภาคที่เลือก กรุณาลองอีกครั้ง.",
            notMatchPhoneAndCode: "รหัสผ่านไม่ถูกต้อง กรุณาส่งรหัสและลองอีกครั้ง",
            getSms: "ส่งรหัสยืนยัน",
            getSmsAgain: "ส่งอีกครั้ง",
            getSmsLater: "ส่งอีกครั้ง ({0}s)",
            noSmsCode: "ป้อนรหัสยืนยัน",
            wrongSmsCode: "ป้อนรหัสยืนยัน",
            sentTip: "ส่ง SMS เรียบร้อยแล้ว",
            noSentCodeTip: "กรุณาส่งรหัสยืนยัน",
            countryInputPlaceholder: "ค้นหา",
            noSearchData: "ไม่พบผลลัพธ์",
            diffEmail: "อีเมลไม่ตรงกัน โปรดตรวจสอบอีกครั้ง",
            emailSentTip: "รหัสยืนยันถูกส่งไปทางอีเมลแล้ว",
            diffPassword: "รหัสผ่านสองรหัสที่คุณป้อนแตกต่างกัน",
            resetSuccessTip: "กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่อีกครั้ง",
            incorrectEmailFormat: "รูปแบบอีเมลไม่ถูกต้อง โปรดตรวจสอบอีกครั้ง"
        },
        footer: {
            agreement: "ข้อกำหนดการให้บริการ",
            and: "เเละ",
            privacy: "นโยบายความเป็นส่วนตัว",
            loginAgree: "ฉันมีอายุครบ 13 ปี เพื่อลงชื่อเข้าใช้ คุณรับทราบและยอมรับว่าคุณได้อ่านและตกลงที่จะถูกผูกมัดด้วย",
            noRegisterLabel: "ไม่มีบัญชีใช่หรือไม่",
            toRegister: "ลงทะเบียน",
            legalTooltip: "กรุณายืนยัน",
            alreadyRegister: "มีบัญชีอยู่แล้วใช่หรือไม่",
            toLogin: "เข้าสู่ระบบ"
        },
        imageCode: {
            imgCodePlaceholder: "รหัสผ่านในรูป",
            changeCodeBtnText: "เปลี่ยนรูปภาพ",
            emptyImgCodeTip: "กรุณากรอกรหัส",
            errorImgCodeTip: "กรุณากรอกรหัสยืนยันที่ถูกต้อง"
        }
    },
    fav: {
        title: "รายการโปรด",
        tabs: {
            all: "ทั้งหมด",
            anime: "อนิเมะ",
            video: "วิดีโอ",
            tvShows: "ซีรีส์"
        }
    },
    moreAction: {
        title: "",
        actions: {
            del: "ลบ"
        }
    },
    pendingStopPushing: "วิดีโอกำลังตรวจสอบ กรุณามาใหม่ในภายหลัง",
    riskTag: "ขออภัย เนื่องจากเนื้อหามีข้อโต้แย้ง จะไม่เปิดเพื่อเรียกดูชั่วคราว",
    notFound: "404 ไม่พบหน้า",
    serverError: "การขอเซิร์ฟเวอร์ผิดพลาด",
    forbidden: "คุณไม่ได้รับอนุญาตให้เข้าถึงหน้านี้",
    notAvailable: "วิดีโอนี้ถูกนำออกแล้ว กรุณาตรวจสอบวิดีโออื่น ๆ",
    homeText: "หน้าหลัก",
    category: {
        selected: "เลือก"
    },
    timeline: {
        noUpdateToday: "ไม่มีอะไรเลย",
        addFav: "สำเร็จ",
        delFav: "ยกเลิกแล้ว"
    },
    about: {
        intro: {
            title: "เกี่ยวกับ Bilibili",
            content: ['เรานิยามตัวเองว่าเป็น "แฟนพันธุ์แท้" อนิเมะ การ์ตูน และเกม เรารักและต้องการสร้างชุมชนจากคนที่มีความชอบเหมือนๆ กัน และเริ่มต้นจากการเป็นชุมชนที่ได้รับแรงบันดาลใจจากความรักที่มีต่ออนิเมะ การ์ตูน และเกม (ACG) จนกลายเป็นแพลตฟอร์มชั้นนำที่มีคลังอนิเมะขนาดใหญ่ที่สุด รวมไปถึงซีรีส์ และวิดีโอสร้างสรรค์จากเหล่าครีเอเตอร์', "Bilibili ไม่ได้เป็นเพียงแค่แพลตฟอร์มสตรีมมิ่ง แต่เราเป็นเหมือนสะพานแห่งโอกาสที่เชื่อมให้ทุกคนเข้าถึงกัน เป็นที่ที่ให้คุณได้โชว์ศักยภาพ แสดงความคิดสร้างสรรค์ ผ่านผลงานที่น่าภาคภูมิใจ พร้อมเป็นส่วนหนึ่งในคอมมูนิตี้ที่เป็นพื้นที่แห่งแรงบันดาลใจอย่างแท้จริง", "นอกจากในประเทศจีน Bilibili ก็ยังขยายแพลตฟอร์มเข้าสู่หลายประเทศในภูมิภาคเอเชียตะวันออกเฉียงใต้ เช่น ประเทศไทย เวียดนาม สิงคโปร์ และมาเลเซีย รวมถึงอินโดนีเซีย ที่นำเสนอแพลตฟอร์มผ่านชื่อ Bstation"]
        },
        services: {
            title: "การบริการ",
            content: ["เรามีคลังอนิเมะที่ใหญ่ที่สุดในภูมิภาคเอเชียตะวันออกเฉียงใต้ ตั้งแต่อนิเมะใหม่ล่าสุดไปจนถึงอนิเมะคลาสสิก ที่ทุกคนรู้จักและชื่นชอบ มีการอัปเดตอนิเมะตอนใหม่ทุกวัน ทั้งแนวแอ็กชัน ผจญภัย ตลก แฟนตาซี โรแมนติก โรงเรียน ไซไฟและกีฬา", 'นอกจากคลังอนิเมะขนาดใหญ่แล้ว เรายังเปิดโอกาสและให้พื้นที่สำหรับครีเอเตอร์รุ่นใหม่ สำหรับคนที่ชอบ "รับชม" และ "สร้างสรรค์" คอนเทนต์รวมไว้ในที่เดียว Bilibili สร้างชุมชนจากผู้ใช้งานจริง เรามีเนื้อหาที่มีคุณภาพสูง เหล่าครีเอเตอร์ที่มีความสามารถ จึงทำให้ความผูกพันระหว่างครีเอเตอร์และผู้ใช้นั้นแน่นแฟ้นยิ่งขึ้น', "เป้าหมายของเราต้องการเป็นแพลตฟอร์มวิดีโอเต็มรูปแบบ โดยปัจจุบันเราให้ความสำคัญกับทุกๆ ความคิดเห็นจากผู้ใช้งานจริง เพื่อขยายและปรับปรุงเนื้อหา เพื่อสนับสนุนคอนเทนต์ครีเอเตอร์ และยกระดับผลิตภัณฑ์ของเราอย่างต่อเนื่อง"]
        },
        products: {
            title: "ผลิตภัณฑ์",
            platform: ["แอปพลิเคชัน", "Smart TV", "Viddup", "Virtual Assets"],
            app: ["เนื้อหาแตกต่างกันไปในแต่ละภูมิภาคและอาจมีการเปลี่ยนแปลงอยู่ตลอดเวลา", "ฐานะที่เป็นแพลตฟอร์มไฮบริด ที่มีพื้นที่ทั้ง OGVs (วิดีโอที่เป็นคอนเทนต์ลิขสิทธิ์เพื่อความบันเทิง) และ UGCs (เนื้อหาที่ผู้ใช้สร้างขึ้น) คุณสามารถรับชมแอนิเมชันทั้ง ภาพยนตร์ รายการวาไรตี้ รวมถึงวิดีโอครีเอเตอร์ได้อย่างหลากหลาย", "คุณสามารถอัปโหลดวิดีโอบนแพลตฟอร์ม Bilibili ได้เช่นกัน"],
            tv: ["บริการสตรีมมิงแบบสมัครสมาชิก สำหรับ Smart TV พร้อมใช้งานบน Android และ LG แล้ววันนี้ ร่วมเพลิดเพลินกับเนื้อหาจากแอปพลิเคชัน พร้อมประสบการณ์การรับชมแบบ HD", "มีคำบรรยายหลายภาษา เช่น ภาษาอังกฤษ ไทย เวียดนาม และอีกมากมาย", "หนึ่งบัญชีบน Bilibili จะถูกซิงค์ประวัติการรับชมของผู้ใช้ระหว่างอุปกรณ์ต่าง ๆ จากโทรศัพท์มือถือ คอมพิวเตอร์ และทีวี"],
            vu: "Viddup เป็นแอปพลิเคชันตัดต่อวิดีโออัจฉริยะ ที่จะทำให้การสร้างวิดีโอง่ายและมีคุณภาพสูงมากยิ่งขึ้น",
            va: "Virtual Assets ประกอบไปด้วย ธีมแอปพลิเคชัน สติกเกอร์ และกรอบอวตาร์ ที่จะมอบประสบการณ์การสุดพิเศษในการปรับแต่งแอปด้วยVirtual Assets จากอนิเนะที่คุณชื่นชอบ"
        },
        footer: {
            download: {
                title: "ดาวน์โหลดผลิตภัณฑ์",
                app: "แอปพลิเคชัน Bilibili",
                viddupAndroid: "Viddup Android",
                viddupiOS: "Viddup iOS"
            },
            lib: {
                title: "Brand Library",
                guide: "Brand Identity Guidebook",
                assets: "Brand Assets"
            },
            sns: {
                title: "SNS",
                twitter: "Twitter",
                facebook: "Facebook",
                ins: "Instagram"
            }
        }
    },
    trending: {
        trending: "กำลังมาแรง",
        dailyUpdate: "อัปเดตทุกวัน",
        hourlyUpdate: "อัปเดตทุกชั่วโมง",
        viewMore: "ดูเพิ่มเติม",
        animeTitle: "ประเภทอนิเมะ",
        ugcTitle: "ประเภทวิดีโอ",
        detailDefaultTitle: "ประเภทโดยรวม"
    },
    ogvCollection: {
        total: "ทั้งหมด {total} เรื่อง",
        noMore: "ไม่มีเนื้อหาเพิ่มเติม",
        noResult: "ไม่พบอะไรเลย"
    },
    toApp: "เปิด Bilibili App เปิดความสนุกเต็มแม็กซ์!",
    confirm: "ยืนยัน",
    cancel: "ยกเลิก",
    needUpgrade: "คุณใช้เวอร์ชันเก่าอยู่ ส่วนของฟังก์ชันไม่สามารถแสดงผล"
}
  , qi = {
    description: "{description}, Cộng đồng anime, truyện tranh và trò chơi (ACG) hàng đầu Đông Nam Á, nơi mọi người có thể sáng tạo, xem và chia sẻ các video hấp dẫn.",
    keyWord: "{title}, {brand}, miễn phí, anime, anime hay, Top Anime, BL, GL, cosplay, Việt sub",
    header: {
        download: "Tải ứng dụng",
        upload: "Tải lên"
    },
    common: {
        noResult: "Xin lỗi. Không tìm thấy kết quả nào phù hợp",
        error: "lỗi"
    },
    navList: ["Trang chủ", "Anime", "Thịnh hành", "Mục lục"],
    errorText: {
        ogvVipLimitText: "Người dùng Premium có thể xem!",
        ogvLocaleLimitText: "Rất tiếc, do yêu cầu bản quyền, hiện giờ bạn không thể xem anime này.",
        notAvailable: "Rất tiếc, do yêu cầu bản quyền, bạn không thể xem anime này trên web.",
        noDataText: "Bị lỗi",
        ogvLoginLimitText: "Xin lỗi, theo yêu cầu bên bản quyền, bạn cần đăng nhập để xem phim này",
        joinVipByQuality: "Chất lượng này dành cho Premium. Mua Premium để xem video chất lượng cao.",
        ogvDeviceLimit: "Nội dung này không thể phát do tài khoản hiện đang sử dụng nội dung dành cho Premium ở thiết bị khác.",
        enLocalBlackLimit: "Sorry, according to the request of the copyright owner, this film is not available in your area.",
        ugcLocaleLimitText: "Ôi, o(╥﹏╥)o không tìm thấy video này nữa rồi"
    },
    download: {
        download: "Tải ngay",
        desc: "Đây là nền tảng chia sẻ video, bình luận trực tuyến tốt nhất về hoạt hình, giải trí và hơn thế nữa!",
        phone: "https://p.bstarstatic.com/fe-lib/images/web/phone-vi.png"
    },
    footerLang: {
        about: "Về chúng tôi",
        contactUs: "Liên hệ chúng tôi",
        agreement: "Điều khoản sử dụng",
        privacy: "Chính sách riêng tư",
        infringe: "Khiếu nại vi phạm"
    },
    usLang: {
        title: "Về chúng tôi",
        describe: ["{brand} là một cộng đồng video có sự tương tác cao và gắn bó chặt chẽ, được tạo ra để làm phong phú thêm cuộc sống hàng ngày của giới trẻ thông qua các video về Anime, Truyện tranh và Trò chơi (ACG) và hơn thế nữa.", "{brand} hiện đang không ngừng phát triển hệ sinh thái nội dung của mình để đáp ứng các sở thích đa dạng cũng như mở rộng sở thích của người dùng."]
    },
    title: {
        home: "{brand}",
        popular: "Thịnh hành - {brand}",
        trending: "Thịnh hành - {brand}",
        category: "Mục lục{filter} - {brand}",
        anime: "Anime - {brand}",
        history: "Lịch sử - {brand}",
        fav: "Yêu thích - {brand}",
        ugc: "{title} - {brand}",
        ogv: "{season} {epTitle} - {brand}",
        collection: "{title}",
        media: "{season} Chi tiết - {brand}",
        searchResult: "{keyword} - {brand} Tìm kiếm",
        aboutUs: "Về chúng tôi - {brand}",
        userAgreement: "Điều khoản sử dụng - {brand}",
        privacy: "Chính sách riêng tư - {brand}",
        copyright: "Khiếu nại vi phạm - {brand}",
        download: "Tải ứng dụng - {brand}",
        404: "{brand}",
        search: "{brand} Tìm kiếm - {searchWord}",
        live: "{title} - {brand}",
        profile: "Thông tin cá nhân - {brand}",
        space: "{pathName} {nickname} - {brand}",
        paymentAgreement: "Mua Premium - {brand}",
        cashierDesk: "Mua Premium - {brand}",
        cashierResult: "Mua Premium - {brand}",
        timeline: "Lịch chiếu - {brand}"
    },
    privacyLang: {
        title: "Chính sách riêng tư"
    },
    agreementLang: {
        title: "Điều khoản sử dụng"
    },
    home: {
        loading: "Đang tải...",
        subTitle: {
            ugcTopVideo: "Top Video",
            forYou: "Đề xuất",
            trending: "Bảng xếp hạng",
            timeline: "Lịch chiếu",
            index: "Tìm kiếm",
            viewAll: "Xem tất cả"
        },
        continueWatch: "Đã Quan Tâm",
        noUpdates: "Không thất gì đâu"
    },
    history: {
        title: "Lịch sử",
        emptyText: "Không có gì đâu",
        delete: "Xóa",
        confirmDelete: "Bạn có chắc chắn xóa lịch sử xem này không?",
        confirm: "Xác nhận",
        cancel: "Hủy",
        noMore: "Không có gì nữa"
    },
    search: {
        searchHistory: "Lịch sử tìm kiếm",
        allTab: "Tất cả",
        animeTab: "Anime",
        creatorTab: "Nhà sáng tạo"
    },
    account: {
        myProfile: "Trung tâm cá nhân",
        avatarLimit: "Hỗ trợ định dạng JPG/PNG, tối đa 2M",
        avatarTooLarge: "Ảnh đại diện quá to",
        title: "Thông tin tài khoản",
        avatarLabel: "Ảnh đại diện",
        nickLabel: "Biệt danh",
        bioLabel: "Mô tả bản thân",
        birthLabel: "Ngày sinh",
        editAvatarLabel: "Thay đổi ảnh đại diện",
        editText: "Chỉnh sửa",
        reUpload: "Đăng lại",
        preview: "Xem trước",
        bioPlaceholder: "Vui lòng mô tả bản thân",
        nickPlaceholder: "Vui lòng nhập biệt danh",
        emptyBioText: "Vui lòng mô tả bản thân",
        nicknameLengthErr: "Độ dài tên từ 2 - 20 ký tự.",
        needLogin: "Đăng nhập để chỉnh sửa thông tin cá nhân.",
        editSuccessTip: "Thông tin chỉnh sửa thành công"
    },
    btnTextLang: {
        cancel: "Hủy",
        login: "Đăng nhập",
        logout: "Thoát ra",
        save: "Lưu",
        joinVip: "Mua Premium",
        nextStep: "Tiếp",
        payNow: "Tiếp tục",
        known: "Đã hiểu",
        update: "Cập nhật",
        confirm: "Xác nhận",
        toAPP: "Truy cập App để xem nhiều hơn"
    },
    space: {
        editBtn: "Soạn hồ sơ",
        videoTitle: "Video",
        videoText: {
            singular: "Video",
            plural: "Videos"
        },
        upLikedText: {
            singular: "Lượt thích",
            plural: "Lượt thích"
        },
        noVideosText: "Chưa tải lên video",
        spaceTitle: "Trang của",
        followersTitle: "Người theo dõi",
        followingsTitle: "Đang theo dõi"
    },
    anime: {
        forYou: "Đề xuất",
        myList: "Mục yêu thích",
        category: "Mục lục",
        timeline: "Lịch chiếu",
        ranking: "Thịnh hành",
        moreAnime: "Nhiều hơn",
        requestFail: "Lỗi dữ liệu, vui lòng làm mới trang",
        noMore: "Không có gì nữa"
    },
    video: {
        recommend: "Đề xuất cho bạn",
        like: "Thích",
        download: "Tải",
        series: "Series",
        seriesMore: "Xem thêm",
        episodes: "Tập",
        viewMore: "Xem thêm",
        comingSoon: "Tập 1 bắt đầu vào",
        comingSoonTip: "Sắp chiếu",
        notDownloadTips: "Video này hiện không hỗ trợ tải xuống",
        info: {
            details: "Chi tiết",
            originName: "Tên",
            aliasName: "Tên khác",
            styles: "Loại",
            directors: "Đạo diễn",
            writers: "Biên kịch",
            actors: "VA",
            performers: "Diễn viên",
            staff: "Nhân viên"
        },
        comment: {
            comments: "Bình luận",
            reply: "Trả lời",
            replyTo: "Trả lời {user}",
            report: "Báo cáo bình luận",
            reportTitle: "Báo cáo bình luận",
            send: "Gửi",
            addComment: "Để lại bình luận thân thiện(°▽°)~",
            sendFail: "Gửi thất bại",
            fold: "Thu gọn",
            moreReplies: "Các câu trả lời khác",
            noResult: "Không thấy gì đâu",
            noMoreComments: "Không có gì nữa",
            watchMore: "Truy cập App Bilibili để xem nhiều hơn"
        },
        anime: {
            desc: "Toàn được xem miễn phí!"
        },
        top50: "Bảng Xếp Hạng",
        viewmore: "Xem thêm"
    },
    openApp: "Mở App",
    watchOnApp: "Xem trong Bilibili",
    openAppBtn: "Mở trong ứng dụng",
    top: "Top",
    card: {
        only: "Chỉ chiếu trên {brand}",
        freeNow: "MIỄN PHÍ",
        premium: "Premium",
        anime: "Anime",
        tvShow: "Phim & Show"
    },
    feedback: {
        feedback: "Phản hồi",
        search: "Tìm kiếm",
        noResult: "Không có dữ liệu",
        invalidPhone: "Vui lòng điền đúng số điện thoại",
        invalidEmail: "Vui lòng điền đúng địa chỉ email",
        error: "Nộp thất bại, vui lòng thử lại",
        uploadError: "Đăng ảnh lên thất bại."
    },
    drawer: {
        info: "Giới thiệu"
    },
    live: {
        addDm: "Viết bình luận vào đây"
    },
    player: {
        playTip: "Chơi(space)",
        pauseTip: "Tạm ngừng(space)",
        closeSubtitle: "Ẩn",
        nextEpTooltip: "Tập tiếp theo(shift+n){epTitle}",
        nextEpTip: "Tập tiếp theo{epTitle}",
        fullscreenTip: "Toàn màn hình(f)",
        closeFullscreenTip: "Thoát toàn màn hình(f)",
        report: "Báo xấu",
        ccReport: "Phản hồi về phụ đề",
        changingQuality: "Đang chuyển đổi chất lượng",
        changeQualitySuccess: "Đã chuyển đổi thành công",
        changeQualityFail: "Thay đổi độ phân giải thất bại",
        skipTo: "Tua tới",
        speed: "Tốc độ",
        quality: "Chất lượng",
        ccTitle: "Phụ đề",
        subtitle: {
            loading: "Đang yêu cầu phụ đề, vui lòng đợi",
            success: "Đã tải phụ đề thành công",
            fail: ["Tải phụ đề thất bại, ", "vui lòng phản hồi"]
        },
        emptySubtitleTip: "Video không có phụ đề",
        cancel: "Hủy",
        wideScreenTip: "Chế độ rạp chiếu phim",
        closeWideSceenTip: "Thoát chế độ rạp chiếu phim",
        tapToUnmute: "Chạm để bật âm thanh",
        danmakuSend: "Gửi",
        danmakuOn: "Mở danmaku",
        danmakuOff: "Tắt danmaku",
        danmakuPlaceholder: "Nhấn để gửi danmaku",
        danmakuFequently: "Gửi danmaku quá liên tục",
        danmakuClosedToast: "Đã đóng danmaku",
        danmakuSwitchOffToast: "Gửi thất bại, chưa mở danmaku.",
        skipLabel: "Bỏ qua đoạn đầu/đoạn kết",
        skipToast: ["Bật bỏ qua đoạn đầu đoạn kết? ", "Bật"],
        skipingOp: "Đang bỏ qua đoạn đầu",
        skipedOp: "Đã bỏ đoạn đầu",
        skipingEd: "Đang bỏ qua đoạn kết",
        skipedEd: "Đã bỏ đoạn kết",
        adsPremiumBtn: "Premium tắt quảng cáo"
    },
    media: {
        views: "Lượt xem",
        region: "Khu vực",
        desc: "Giới thiệu",
        cvTitle: "VA & NHÂN VIÊN",
        playNow: "Xem ngay",
        starting: "Khởi chiếu:",
        noEp: "Chưa có tập nào"
    },
    follow: {
        unfollow: "Theo dõi",
        followed: "Đang theo dõi",
        unfollowConfirmText: "Bỏ theo dõi nhà sáng tạo này?",
        confirmBtn: "Xác nhận",
        cancelBtn: "Huỷ bỏ",
        fans: {
            singular: "Người theo dõi",
            plural: "Người theo dõi"
        },
        followings: {
            singular: "Đang theo dõi",
            plural: "Đang theo dõi"
        }
    },
    vipGoods: {
        title: "Gói Premium",
        benefits: {
            only: "Nội dung dành cho Premium",
            free: "Tải xuống miễn phí nội dung Premium",
            advance: "Premium xem trước",
            quality: "1080P+"
        },
        tipsTitle: "Quyền lợi Premium",
        paymentAgreement: "Thỏa thuận Cung cấp Dịch vụ Premium {brand}",
        guideToast: "Đang nâng cấp server, vui lòng tải ứng dụng Bilibili để mua Premium"
    },
    vipConfirm: {
        title: "Bạn vui lòng hoàn thành thanh toán ở trang mới mở",
        desc: "Trước khi hoàn thành thanh toán vui lòng không đóng cửa sổ trang. Sau khi thanh toán vui lòng nhấn vào nút dưới đây tùy theo tình trạng của bạn.",
        boughtBtn: "Tôi đã mua",
        repurchaseBtn: "Thanh toán lại"
    },
    vipError: {
        order: "Tạo đơn hàng thất bại",
        pay: "Không có đơn hàng thanh toán thành công",
        loading: "Tải thất bại. Vui lòng thử lại."
    },
    cashierDesk: {
        selected: "Đã chọn",
        setPaymentMethod: "Chọn phương thức thanh toán"
    },
    vipCallback: {
        success: "Mua Premium thành công",
        fail: "Mua Premium không thành công"
    },
    vip: {
        title: "Mua Premium",
        toast: {
            priceChange: "Do sự thanh đổi phương thức thanh toán, giá của gói Premium có sự thay đổi."
        },
        header: {
            expireAt: "Premium có giá trị đến: {time}",
            loginToPreview: "Đăng nhập để xem quyền và lợi ích Premium",
            joinVipTip: "Mua Premium để xem hàng nghìn bộ anime miễn phí"
        },
        benefits: {
            title: "Quyền lợi Premium"
        },
        result: {
            timeout: "Quá thời gian kiểm tra kết quả thanh toán.",
            retry: "Thử lại",
            loading: "Đang kiểm tra, vui lòng kiên nhẫn chờ đợi"
        },
        footer: {
            buyNow: "Mua ngay",
            vipOptions: "Gói Premium",
            redeem: "Đổi Premium",
            moreMethods: "Cách mua Premium khác"
        }
    },
    basicComponent: {
        datePlaceHolder: "Lựa chọn thời gian",
        mon: "T2",
        tue: "T3",
        wed: "T4",
        thu: "T5",
        fri: "T6",
        sat: "T7",
        sun: "CN"
    },
    login: {
        loginGuide: "Đăng nhập để xem nội dung HD",
        loginNow: "Đăng nhập ngay",
        title: {
            main: "Đăng nhập {brand}",
            toLogin: "Đăng nhập",
            register: "Đăng ký",
            reset: "Đặt lại mật khẩu",
            imgCode: "Vui lòng nhập mã xác thực trong hình"
        },
        tabs: {
            phone: "Số điện thoại",
            account: "Tài khoản"
        },
        rememberMe: "Duy trì trạng thái đăng nhập",
        forgetPassword: "Quên mật khẩu?",
        panel: {
            loginWith: "Đăng nhập bằng",
            orContinue: "Hoặc đăng nhập bằng",
            loginWithPhone: "Điên thoai",
            login: "Đăng nhập",
            loginTip: "Nếu số điện thoại chưa đăng ký hoặc liên kết với {brand} , một tài khoản mới sẽ được tạo tự động",
            exceptionTip: "Đăng ký"
        },
        form: {
            phonePlaceholder: "Số điện thoại",
            emailPlaceholder: "Hòm thư điện tử",
            passwordPlaceholder: "Nhập mật khẩu",
            confirmPasswordPlaceholder: "Xác nhận mật khẩu",
            codePlaceholder: "Nhập mã xác nhận",
            sendCode: "Gửi mã",
            emptyAccount: "Vui lòng nhập tài khoản",
            emptyPassword: "Vui lòng nhập mật khẩu",
            passwordRule: "8-20 chữ gồm ít nhất hai loại như: chữ, số, ký tự đặc biệt",
            emptyPhoneTip: "Vui lòng điền số điện thoại của bạn",
            wrongPhoneTip: "Số không hợp pháp",
            diffCountryTip: "Số điện thoại không khớp với khu vực đã chọn.",
            notMatchPhoneAndCode: "Mã xác nhận không hợp lệ. Vui lòng kiểm tra và thử lại.",
            getSms: "Gửi mã",
            getSmsAgain: "Gửi lại",
            getSmsLater: "Gửi lại ({0}s)",
            noSmsCode: "Nhập mã xác nhận",
            wrongSmsCode: "Nhập mã xác nhận",
            sentTip: "Mã xác nhận đã được gửi",
            noSentCodeTip: "Vui lòng gửi mã xác nhận trước",
            countryInputPlaceholder: "Tìm kiếm",
            noSearchData: "Không có dữ liệu",
            diffEmail: "Địa chỉ email không chính xác, vui lòng kiểm tra lại",
            emailSentTip: "Mã xác minh đã được gửi qua email",
            diffPassword: "Hai lần nhập mật khẩu không trùng khớp",
            resetSuccessTip: "Mật khẩu đã được thay đổi. Vui lòng đăng nhập bằng mật khẩu mới",
            incorrectEmailFormat: "Định dạng email không hợp lệ"
        },
        footer: {
            agreement: "Điều khoản sử dụng",
            and: "và",
            privacy: "Chính sách riêng tư",
            loginAgree: "Tôi đã đủ 13 tuổi. Bằng việc nhấn Đăng nhập, bạn hiểu rõ và đồng ý rằng bạn đã đọc và chấp nhận bị ràng buộc bởi",
            noRegisterLabel: "Chưa đăng ký tài khoản?",
            toRegister: "Đăng ký",
            legalTooltip: "Vui lòng xác nhận",
            alreadyRegister: "Đã có tài khoản?",
            toLogin: "Đăng nhập"
        },
        imageCode: {
            imgCodePlaceholder: "Mã xác nhận bằng hình ảnh",
            changeCodeBtnText: "Đổi hình khác",
            emptyImgCodeTip: "Mã xác nhận không được để trống",
            errorImgCodeTip: "Vui lòng nhập mã xác nhận chính xác"
        }
    },
    fav: {
        title: "Yêu thích",
        tabs: {
            all: "Tất cả",
            anime: "Anime",
            video: "Video",
            tvShows: "Phim & Show"
        }
    },
    moreAction: {
        title: "",
        actions: {
            del: "Xóa"
        }
    },
    pendingStopPushing: "Video đang được xét duyệt, vui lòng xem lại sau.",
    riskTag: "Rất tiếc, do nội dung gây tranh cãi nên hiện không được công khai.",
    notFound: "404 Page Not Found",
    serverError: "Lỗi truy cập server",
    forbidden: "Bạn không có quyền truy cập trang này.",
    notAvailable: "Video này đã bị gỡ. Vui lòng xem video khác.",
    homeText: "Trang chủ",
    category: {
        selected: "Đã chọn"
    },
    timeline: {
        noUpdateToday: "Chưa có nội dung mới.",
        addFav: "Đã thêm vào Mục yêu thích",
        delFav: "Đã xóa khỏi Mục yêu thích"
    },
    about: {
        intro: {
            title: "Về Bilibili",
            content: ["Là những người hâm mộ cuồng nhiệt của anime, truyện tranh và trò chơi (ACG – anime, comics, games), chúng tôi quyết định taọ nên một cộng đồng để cùng chia sẻ đam mê. Tới nay, cộng đồng ấy đã chuyển mình mạnh mẽ để trở thành một nền tảng anime hàng đầu với kho video đa dạng, bao gồm những bộ anime đình đám nhất và những sản phẩm tự sản xuất đến từ những nhà sáng tạo trong cộng đồng.", "Hơn cả một nền tảng, Bilibili còn là ngôi nhà chung, nơi những người hâm mộ có thể cùng tụ họp, thưởng thức những nội dung yêu thích, thỏa sức sáng tạo những tác phẩm của riêng mình và kết nối với cộng đồng.", 'Bilibili hiện đã có mặt ở Trung Quốc, Indonesia, Philippines, Thái Lan, Singapore, Malaysia và Việt Nam. Tại Indonesia, chúng tôi còn có tên khác là "Bstation" (B Trạm).']
        },
        services: {
            title: "Dịch vụ",
            content: ["Chúng tôi sở hữu kho anime lớn nhất Đông Nam Á, từ những tác phẩm kinh điển nổi tiếng cho tới những tựa anime được phát hành mới nhất. Kho anime này được cập nhật hàng ngày với nhiều thể loại đa dạng như hành động, phiêu lưu, hài hước, siêu nhiên, lãng mạn, học đường, khoa học viễn tưởng và thể thao.", "Ngoài là nơi lưu trữ kho phim hoạt hình đồ sộ, chúng tôi còn khuyến khích Nhà sáng tạo nội dung trẻ thỏa sức thể hiện niềm đam mê, không chỉ dừng lại ở xem mà còn sáng tạo những tác phẩm video của riêng họ. Cộng đồng Bilibili được xây dựng nhờ vào sự kết nối chặt chẽ giữa những người dùng đam mê, nội dung chất lượng và các nhà sáng tạo nội dung tài năng.", "Hướng tới mục tiêu trở thành một nền tảng video toàn diện, ưu tiên hàng đầu của Bilibili hiện nay là tiếp tục mở rộng và làm phong phú hệ sinh thái nội dung, hỗ trợ cho những Nhà sáng tạo nội dung và đồng thời không ngừng nâng cấp, cải thiện sản phẩm dựa trên phản hồi của họ."]
        },
        products: {
            title: "Sản phẩm",
            platform: ["Ứng dụng", "TV thông minh (Smart TV)", "ứng dụng sửa video Viddup", "Tài nguyên ảo"],
            app: ["Nội dung có sự khác biệt giữa các khu vực và có thể được thay đổi hoặc cập nhật bất cứ lúc nào.", "Là một nền tảng kết hợp sở hữu cả nội dung OGV (Video sáng tạo chuyên nghiệp) và UGC (Nội dung do người dùng sáng tạo), người dùng có thể vừa xem hoạt hình, phim, chương trình giải trí cũng như những video của các Nhà sáng tạo trên Bilibili.", "Bạn có thể thoải mái chia sẻ video của mình trên nền tảng Bilibili."],
            tv: ["Là dịch vụ phát sóng trực tuyến theo đăng ký có trả phí trên TV thông minh. Bilibili hiện đã có mặt trên cả Android và LG. Bạn có thể thỏa sức trải nghiệm nội dung HD từ ứng dụng Bilibili.", "Chúng tôi cung cấp phụ đề đa ngôn ngữ bao gồm tiếng Anh, tiếng Thái, tiếng Việt và nhiều ngôn ngữ khác.", "Trong cùng một tài khoản Bilibili, lịch sử xem của người dùng sẽ được đồng bộ hóa trên các thiết bị khác nhau từ điện thoại di động, máy tính bàn (PC) đến TV."],
            vu: "Viddup là ứng dụng chỉnh sửa video thông minh, giúp sáng tạo video chất lượng cao một cách dễ dàng.",
            va: "Chúng tôi cung cấp Tài nguyên ảo bao gồm các Giao diện chủ đề cho ứng dụng, Nhãn dán, Khung ảnh đại diện với các tính năng tùy chỉnh dựa trên IP yêu thích của người dùng."
        },
        footer: {
            download: {
                title: "Tải sản phẩm",
                app: "Ứng dụng Bilibili",
                viddupAndroid: "Viddup Android",
                viddupiOS: "Viddup iOS"
            },
            lib: {
                title: "Thư viện Thương hiệu",
                guide: "Nhận diện Thương hiệu",
                assets: "Tài nguyên"
            },
            sns: {
                title: "Dịch vụ mạng xã hội",
                twitter: "Twitter",
                facebook: "Facebook",
                ins: "Instagram"
            }
        }
    },
    trending: {
        trending: "ดูเพิ่มเติม",
        dailyUpdate: "Cập nhật hàng ngày",
        hourlyUpdate: "Cập nhật hàng giờ",
        viewMore: "Xem thêm",
        animeTitle: "Bảng Anime",
        ugcTitle: "Bảng Video",
        detailDefaultTitle: "Bảng Tổng"
    },
    ogvCollection: {
        total: "Tổng {total}",
        noMore: "Không tìm thấy kết quả khác",
        noResult: "Không thấy gì đâu"
    },
    toApp: "Tiếp tục dùng App để có nhiều trải nghiệm tuyệt vời hơn",
    confirm: "Xác nhận",
    cancel: "Hủy",
    needUpgrade: "Bạn đang sử dụng phiên bản cũ, một số chức năng sẽ không hiển thị"
}
  , Ri = {
    description: "{description}, Komunitas anime, komik, dan game (ACG) terkemuka di Asia Tenggara sebagai tempat membuat, menonton, dan berbagi video yang menarik.",
    keyWord: "{title}, Bstation, anime gratis, anime, anime top,BL,GL,cosplay, SubThai",
    header: {
        download: "Dapatkan aplikasi",
        upload: "Unggah"
    },
    navList: ["Halaman utama", "Anime", "Populer", "Kategori", "Sejarah"],
    common: {
        noResult: "Tidak ada hasil relevan yang ditemukan",
        error: "Kesalahan"
    },
    errorText: {
        ogvVipLimitText: "Anggota Premium dapat menonton!",
        ogvLocaleLimitText: "Maaf. Sesuai permintaan pemilik hak cipta, untuk saat ini anime ini tidak tersedia.",
        notAvailable: "Maaf. Sesuai permintaan pemilik hak cipta, anime ini tidak tersedia pada situs web.",
        noDataText: "Hasil hilang",
        ogvLoginLimitText: "Maaf, sesuai permintaan pemilik hak cipta, Anda dapat menonton video setelah login",
        joinVipByQuality: "Resolusi ini hanya untuk Premium. Aktifkan Premium untuk menikmati kualitas gambar terbaik.",
        ogvDeviceLimit: "Saat ini akun sedang login di perangkat lain untuk menonton konten eksklusif Premium, konten ini tidak dapat diputar di sini.",
        enLocalBlackLimit: "Sorry, according to the request of the copyright owner, this film is not available in your area.",
        ugcLocaleLimitText: "Ups!  o(╥﹏╥)o Video tidak dapat ditemukan"
    },
    download: {
        download: "Unduh sekarang",
        desc: "Komunitas terbaik dari komentar video-video dengan anime, hiburan dan lainnya!",
        phone: "https://p.bstarstatic.com/fe-lib/images/web/phone-id.png"
    },
    footerLang: {
        about: "Tentang kami",
        contactUs: "Hubungi kami",
        agreement: "Syarat Layanan",
        privacy: "Kebijakan Privasi",
        infringe: "Keluhan pelanggaran"
    },
    usLang: {
        title: "Tentang kami",
        describe: ["{brand} adalah komunitas video yang sangat terikat, interaktif, dan melekat yang didesain untuk memperkaya kehidupan para generasi muda melalui video ACG dan lain-lain.", "{brand} terus mengembangkan ekosistem konten untuk memenuhi ketertarikan para pengguna kami yang beraneka-ragam."]
    },
    title: {
        home: "{brand}",
        popular: "Populer - {brand}",
        trending: "Trending - {brand}",
        category: "Kategori{filter} - {brand}",
        anime: "Anime - {brand}",
        history: "Sejarah - {brand}",
        fav: "Favorit Saya - {brand}",
        ugc: "{title} - {brand}",
        ogv: "{season} {epTitle} - {brand}",
        collection: "{title}",
        media: "{season} Detail - {brand}",
        searchResult: "{keyword} - {brand} Cari",
        aboutUs: "Tentang kami - {brand}",
        userAgreement: "Syarat Layanan - {brand}",
        privacy: "Kebijakan Privasi - {brand}",
        copyright: "Keluhan pelanggaran - {brand}",
        download: "Dapatkan aplikasi - {brand}",
        404: "{brand}",
        search: "{brand} Cari - {searchWord}",
        live: "{title} - {brand}",
        profile: "Profil - {brand}",
        space: "{pathName} {nickname} - {brand}",
        paymentAgreement: "Jadi anggota Premium - {brand}",
        cashierDesk: "Jadi anggota Premium - {brand}",
        cashierResult: "Jadi anggota Premium - {brand}",
        timeline: "Jadwal Rilis - {brand}"
    },
    privacyLang: {
        title: "Kebijakan Privasi"
    },
    agreementLang: {
        title: "Syarat Layanan"
    },
    home: {
        loading: "Memuat lainnya...",
        subTitle: {
            ugcTopVideo: "Video Teratas",
            forYou: "Untuk Anda",
            trending: "Trending",
            timeline: "Kalender Rilis",
            index: "Index",
            viewAll: "Lihat semua"
        },
        continueWatch: "Lanjutkan putar",
        noUpdates: "Tidak ada pembaruan"
    },
    history: {
        title: "Sejarah",
        emptyText: "Tidak ada sejarah",
        delete: "Hapus",
        confirmDelete: "Apakah Anda yakin akan menghapus histori tontonan ini?",
        confirm: "Konfirmasi",
        cancel: "Batal",
        noMore: "Tidak ada hasil lagi yang ditemukan"
    },
    search: {
        searchHistory: "Sejarah pencarian",
        allTab: "SEMUA",
        animeTab: "Anime",
        creatorTab: "Kreator"
    },
    account: {
        myProfile: "Profil saya",
        avatarLimit: "Mendukung format JPG/PNG, paling banyak 2M",
        avatarTooLarge: "Ukuran gambar terlalu besar, pilih gambar dalam 2MB",
        title: "Akun",
        avatarLabel: "Avatar",
        nickLabel: "Nama panggilan",
        bioLabel: "Bio",
        birthLabel: "Tanggal lahir",
        editAvatarLabel: "Mengedit avatar",
        editText: "Mengedit",
        reUpload: "Mengunggah",
        preview: "Pratinjau",
        bioPlaceholder: "Tolong perkenalkan diri anda",
        nickPlaceholder: "Tolong masukkan nama panggilan anda",
        emptyBioText: "Tolong perkenalkan diri anda",
        nicknameLengthErr: "Nama panggilan harus dalam 2-20 karakter",
        needLogin: "Login untuk edit profil",
        editSuccessTip: "Profil berhasil diperbarui"
    },
    btnTextLang: {
        cancel: "Batal",
        login: "Login",
        logout: "Logout",
        save: "Simpan",
        joinVip: "Aktifkan Premium",
        nextStep: "Lanjut",
        payNow: "Lanjutkan",
        known: "Saya mengerti",
        update: "Perbarui",
        confirm: "Konfirmasi",
        toAPP: "Tonton lebih banyak di App"
    },
    space: {
        editBtn: "Sunting profil",
        videoTitle: "Video",
        videoText: {
            singular: "Video",
            plural: "Videos"
        },
        upLikedText: {
            singular: "Suka",
            plural: "Suka"
        },
        noVideosText: "Tidak ada video yang diunggah",
        spaceTitle: "Halaman",
        followersTitle: "Pengikut",
        followingsTitle: "Mengikuti"
    },
    anime: {
        forYou: "Untuk Anda",
        myList: "Favorit Saya",
        category: "Kategori",
        timeline: "Jadwal Rilis",
        ranking: "Trending",
        moreAnime: "Rekomendasi lainnya",
        requestFail: "Data salah, harap segarkan dan coba lagi",
        noMore: "Tidak ada lagi konten yang lain"
    },
    video: {
        recommend: "Direkomendasikan untukmu",
        like: "Suka",
        download: "Unduh",
        series: "Serial",
        seriesMore: "Lainnya",
        episodes: "Semua episode",
        viewMore: "Menonton Lebih Banyak",
        comingSoon: "EP 1 mulai pada",
        comingSoonTip: "Segera tayang",
        notDownloadTips: "Video tidak dapat diunduh",
        info: {
            details: "Detail",
            originName: "Nama asli",
            aliasName: "Nama panggilan",
            styles: "Genre",
            directors: "Sutradara",
            writers: "Penulis skenario",
            actors: "VA",
            performers: "Aktor",
            staff: "Staf"
        },
        comment: {
            comments: "Komentar",
            reply: "Balas",
            replyTo: "Balas ke {user}",
            report: "Laporkan komentar",
            reportTitle: "Alasan Laporan",
            send: "Kirim",
            addComment: "Tulis komentar ramah(°▽°)~",
            sendFail: "Gagal mengirim",
            fold: "Melipat",
            moreReplies: "Lebih banyak balasan",
            noResult: "Tidak ada hasil yang ditemukan.",
            noMoreComments: "Tidak ada lagi komentar",
            watchMore: "Tonton lebih banyak di App Bstation"
        },
        anime: {
            desc: "Anime populer gratis sedang streaming sekarang"
        },
        top50: "Trend",
        viewmore: "Lebih banyak"
    },
    openApp: "Buka Aplikasi",
    watchOnApp: "Nonton di Bstation",
    openAppBtn: "Buka di Aplikasi",
    top: "Atas",
    card: {
        only: "Bstation eksklusif",
        freeNow: "SEKARANG GRATIS",
        premium: "Premium",
        anime: "Anime",
        tvShow: "Acara TV"
    },
    feedback: {
        feedback: "Feedback",
        search: "Cari",
        noResult: "Tidak ada hasil yang ditemukan.",
        invalidPhone: "Harap masukkan nomor telepon yang benar",
        invalidEmail: "Harap masukkan alamat email yang benar",
        error: "Gagal mengirim, harap coba lagi",
        uploadError: "Gagal mengunggah gambar"
    },
    drawer: {
        info: "Info"
    },
    live: {
        addDm: "Komentar langsung"
    },
    player: {
        playTip: "Putar(space)",
        pauseTip: "Jeda(space)",
        closeSubtitle: "Tutup",
        nextEpTooltip: "Episode berikutnya(shift+n){epTitle}",
        nextEpTip: "Episode berikutnya{epTitle}",
        fullscreenTip: "Layar penuh(f)",
        closeFullscreenTip: "Keluar dari tampilan layar penuh(f)",
        report: "Melaporkan",
        ccReport: "Feedback Subtitle",
        changingQuality: "Peralihan kualitas, harap tunggu",
        changeQualitySuccess: "Berhasil dialihkan",
        changeQualityFail: "Sakelar gagal",
        skipTo: "Pindah ke",
        speed: "Kecepatan",
        quality: "Kualitas",
        ccTitle: "Subtitle",
        subtitle: {
            loading: "Sedang memohon subtitle, harap tunggu",
            success: "Berhasil memuat subtitle",
            fail: ["Gagal memperoleh subtitle, ", "harap laporkan"]
        },
        emptySubtitleTip: "Subtitle tidak tersedia",
        cancel: "Batal",
        wideScreenTip: "Layah penuh",
        closeWideSceenTip: "Keluar dari layar penuh",
        tapToUnmute: "Klik untuk nyalakan suara",
        danmakuSend: "Kirim",
        danmakuOn: "Aktifkan danmaku",
        danmakuOff: "Nonaktifkan danmaku",
        danmakuPlaceholder: "Klik untuk mengirimkan danmaku",
        danmakuFequently: "Terlalu sering mengirim danmaku",
        danmakuClosedToast: "Fitur danmaku mati",
        danmakuSwitchOffToast: "Gagal mengirim. Danmaku belum aktif.",
        skipLabel: "Lewati intro dan outro",
        skipToast: ["Aktifkan lewati intro dan outro? ", "Aktifkan"],
        skipingOp: "Intro akan dilewatkan",
        skipedOp: "Intro dilewati",
        skipingEd: "Outro akan dilewatkan",
        skipedEd: "Outro dilewati",
        adsPremiumBtn: "Premium tanpa iklan"
    },
    media: {
        views: "Total jumlah tonton",
        region: "Daerah",
        desc: "Deskripsi",
        cvTitle: "VA & STAFF",
        playNow: "Segera Tonton",
        starting: "Waktu rilis",
        noEp: "Belum ada episode"
    },
    follow: {
        unfollow: "Mengikuti",
        followed: "Mengikuti",
        unfollowConfirmText: "Apa anda yakin untuk tidak mengikuti pengunggah ini?",
        confirmBtn: "Konfirmasi",
        cancelBtn: "Batal",
        fans: {
            singular: "Pengikut",
            plural: "Pengikut"
        },
        followings: {
            singular: "Mengikuti",
            plural: "Mengikuti"
        }
    },
    vipGoods: {
        title: "Paket Premium",
        benefits: {
            only: "[Premium eksklusif]",
            free: "[Premium] Download gratis",
            advance: "[Premium] Menonton terlebih dahulu",
            quality: "1080P+"
        },
        tipsTitle: "Keuntungan Premium",
        paymentAgreement: "Perjanjian Layanan Premium {brand}",
        guideToast: "Server sedang ditingkatkan, silakan unduh aplikasi Bstation untuk langganan Premium."
    },
    vipConfirm: {
        title: "Harap selesaikan pembayaran di halaman yang baru",
        desc: "Harap jangan meninggalkan halaman ini sebelum selesai membayar, klik tombol di bawah sesuai kondisi Anda setelah selesai membayar",
        boughtBtn: "Saya telah membeli",
        repurchaseBtn: "Bayar ulang"
    },
    vipError: {
        order: "Gagal membuat pesanan",
        pay: "Tidak menemukan pesanan yang telah dibayar",
        loading: "Terjadi kesalahan saat memuat, coba lagi"
    },
    cashierDesk: {
        selected: "Telah dipilih",
        setPaymentMethod: "Pilih metode pembayaran"
    },
    vipCallback: {
        success: "Berhasil aktifkan Premium",
        fail: "Gagal mengaktifkan Premium"
    },
    vip: {
        title: "Aktifkan Premium",
        toast: {
            priceChange: "Dikarenakan metode pembayaran diubah, mata uang dan harga paket Premium mengalami perubahan."
        },
        header: {
            expireAt: "Premium berlaku hingga {time}",
            loginToPreview: "Login untuk melihat hak Premium Anda",
            joinVipTip: "Langganan Premium untuk menikmati ribuan episode secara gratis"
        },
        benefits: {
            title: "Manfaat Premium"
        },
        result: {
            timeout: "Pemeriksaan hasil pembayaran melebihi batas waktu",
            retry: "Coba lagi",
            loading: "Sedang diperiksa, mohon menunggu"
        },
        footer: {
            buyNow: "Langganan sekarang",
            vipOptions: "Paket Premium",
            redeem: "Tukar Premium",
            moreMethods: "Lebih banyak cara langganan"
        }
    },
    basicComponent: {
        datePlaceHolder: "Pilih tanggal",
        mon: "Sen",
        tue: "Sel",
        wed: "Rab",
        thu: "Kam",
        fri: "Jum",
        sat: "Sab",
        sun: "Min"
    },
    login: {
        loginGuide: "Login untuk menonton video HD",
        loginNow: "Login sekarang",
        title: {
            main: "Login Bstation",
            toLogin: "Login",
            register: "Registrasi berhasil",
            reset: "Atur Ulang Kata Sandi",
            imgCode: "Silahkan masukkan kode pada gambar"
        },
        tabs: {
            phone: "Nomor telepon",
            account: "Info akun"
        },
        rememberMe: "Ingat saya",
        forgetPassword: "Tidak ingat kata sandi?",
        panel: {
            loginWith: "Lanjutkan dengan",
            orContinue: "atau lanjutkan dengan",
            loginWithPhone: "Telepon",
            login: "Login",
            loginTip: "Jika nomor telepon yang Anda masukkan tidak terdaftar, akun baru akan dibuat setelah mengklik Login.",
            exceptionTip: "Ada yang salah, coba lagi nanti."
        },
        form: {
            phonePlaceholder: "Nomor telepon",
            emailPlaceholder: "Email",
            passwordPlaceholder: "etel kata sandi",
            confirmPasswordPlaceholder: "Konfirmasi kata sandi",
            codePlaceholder: "Kode verifikasi",
            sendCode: "Kirim Kode",
            emptyAccount: "Alamat email",
            emptyPassword: "Setel kata sandi",
            passwordRule: "8-20 karakter dari minimal 2 kategori: huruf, angka, karakter khusus.",
            emptyPhoneTip: "Silakan masukkan nomor telepon",
            wrongPhoneTip: "Nomor telepon salah",
            diffCountryTip: "Nomor telepon tidak cocok dengan wilayah yang dipilih.",
            notMatchPhoneAndCode: "Kode verifikasi tidak valid. Kirim ulang kode dan coba lagi",
            getSms: "Kirim Kode",
            getSmsAgain: "Kirim ulang",
            getSmsLater: "Kirim ulang ({0}s)",
            noSmsCode: "Masukkan kode verifikasi",
            wrongSmsCode: "Masukkan kode verifikasi",
            sentTip: "Kode verifikasi dikirim melalui SMS",
            noSentCodeTip: "Silahkan kirim kodenya terlebih dahulu.",
            countryInputPlaceholder: "Cari",
            noSearchData: "Tidak ada hasil yang ditemukan.",
            diffEmail: "Email tidak konsisten, silakan periksa lagi",
            emailSentTip: "Kode verifikasi dikirim melalui Email",
            diffPassword: "Kedua kata sandi yang Anda masukkan berbeda",
            resetSuccessTip: "Kata sandi diubah. Silakan masuk dengan kata sandi baru",
            incorrectEmailFormat: "Format email salah, silakan periksa lagi"
        },
        footer: {
            agreement: "Syarat Layanan",
            and: "dan",
            privacy: "Kebijakan Privasi",
            loginAgree: "Saya telah berusia 13 tahun ke atas. Dengan login, Anda telah mengetahui dan menyetujui bahwa Anda telah membaca dan menyetujui untuk terikat dengan",
            noRegisterLabel: "Tidak punya akun?",
            toRegister: "Registrasi berhasil",
            legalTooltip: "Harap dikonfirmasi",
            alreadyRegister: "Sudah memiliki akun?",
            toLogin: "Login"
        },
        imageCode: {
            imgCodePlaceholder: "Kode Verifikasi Gambar",
            changeCodeBtnText: "Mengubah gambar",
            emptyImgCodeTip: "Harap masukkan kode verifikasi",
            errorImgCodeTip: "Silakan masukkan kode yang valid"
        }
    },
    fav: {
        title: "Favorit Saya",
        tabs: {
            all: "Semua",
            anime: "Anime",
            video: "Video",
            tvShows: "Acara TV"
        }
    },
    moreAction: {
        title: "",
        actions: {
            del: "Hapus"
        }
    },
    pendingStopPushing: "Video sedang ditinjau, harap datang lagi nanti.",
    riskTag: "Maaf, video tidak dipublikasikan karena konten bersifat kontroversial.",
    notFound: "Error 404 Halaman tidak ditemukan",
    serverError: "Kesalahan server",
    forbidden: "Anda tidak memiliki izin untuk mengakses halaman ini",
    notAvailable: "Video ini tidak tersedia, silakan nonton video lainnya.",
    homeText: "Halaman utama",
    category: {
        selected: "Terpilih"
    },
    timeline: {
        noUpdateToday: "Tidak ada pembaruan",
        addFav: "Berhasil ditambahkan ke Favorit Saya",
        delFav: "Berhasil dihapus dari Favorit Saya"
    },
    about: {
        intro: {
            title: "Tentang Bstation",
            content: ['Kami menganggap diri kami sebagai "penggemar berat" anime, komik, dan game. Kami sangat mencintai komunitas ini dan ingin merayakannya bersama. Bstation, terlahir dari keinginan kita bersama. Berawal dari komunitas yang terinspirasi dari rasa cinta terhadap anime, komik, dan game (ACG), kini telah berubah menjadi platform terkemuka dengan koleksi anime terlengkap, termasuk seri anime dan kreator video.', "Bstation bukan hanya sebuah platform, melainkan sebuah tempat di mana pengguna merasa diterima. Bstation adalah tentang berkumpul dan menikmati konten dengan orang-orang dengan minat yang sama dan ingin mengekspresikan kreativitasnya serta terhubung dengan komunitas.", "Selain di wilayah Tiongkok, Bilibili kini juga tersedia di Indonesia, Filipina, Thailand, Vietnam, Singapura, dan Malaysia. Di Indonesia, kami dikenal sebagai Bstation."]
        },
        services: {
            title: "Layanan",
            content: ["Kami memiliki koleksi anime terbesar di Asia Tenggara mulai dari anime terbaru hingga anime klasik yang dikenal dan disukai oleh semua kalangan. Episode baru anime dirilis setiap hari, dan terdapat banyak genre diantaranya; aksi, petualangan, komedi, fantasi, romansa, sekolah, sci-fi (fiksi ilmiah), olahraga, dan masih banyak lagi.", 'Selain koleksi anime yang sangat luas, kami juga memiliki banyak video buatan kreator untuk menjawab kebutuhan  generasi muda yang suka "menonton" dan "berkreasi" di satu platform. Bstation membangun komunitasnya dari pengguna aktif, konten yang berkualitas, kreator bertalenta, dan ikatan kuat di antara semuanya.', "Bertujuan untuk menjadi platform video terlengkap, prioritas kami saat ini adalah untuk terus memperluas dan memperkaya ekosistem konten, memberikan dukungan kepada kreator, dan terus meningkatkan kualitas produk berdasarkan masukan dari para pengguna."]
        },
        products: {
            title: "Produk",
            platform: ["Aplikasi", "Versi Smart TV", "Viddup", "Aset Virtual"],
            app: ["Konten bervariasi di setiap wilayah dan dapat berubah sewaktu-waktu.", "Sebagai platform hybrid yang mendukung baik OGV (Video Profesional) maupun UGCs (Video Buatan Pengguna), Pengguna dapat menonton banyak animasi, film, dan variety show, serta video-video kreasi kreator.", "Pengguna juga bisa mengunggah kreasi video ke platform kami."],
            tv: ["Layanan streaming berbasis langganan untuk Smart TV. Saat ini tersedia di Android dan LG. Nikmati konten dari aplikasi Bstation untuk pengalaman menonton HD.", "Tersedia subtitle dalam berbagai bahasa termasuk Inggris, Thailand, Vietnam, dan banyak lagi.", "Dengan satu akun Bstation, semua riwayat tontonan pengguna dapat terhubung ke seluruh perangkat, mulai dari ponsel, PC, sampai ke TV."],
            vu: "Viddup adalah aplikasi untuk mengedit video yang mempermudah proses pembuatan video yang berkualitas.",
            va: "Aset Virtual termasuk Tema Aplikasi, Stiker, dan Avatar Frame yang bisa memberikan pengalaman khusus bagi para pengguna dengan menampilkan IP favorit mereka."
        },
        footer: {
            download: {
                title: "Download Produk",
                app: "Aplikasi Bstation",
                viddupAndroid: "Viddup Android",
                viddupiOS: "Viddup iOS"
            },
            lib: {
                title: "Koleksi Brand",
                guide: "Buku Panduan Identitas Brand",
                assets: "Aset Brand"
            },
            sns: {
                title: "Media Sosial",
                twitter: "Twitter",
                facebook: "Facebook",
                ins: "Instagram"
            }
        }
    },
    trending: {
        trending: "Trending",
        dailyUpdate: "Diperbarui setiap hari",
        hourlyUpdate: "Diperbarui setiap jam",
        viewMore: "Lihat lebih banyak",
        animeTitle: "Peringkat Anime",
        ugcTitle: "Peringkat Video",
        detailDefaultTitle: "Peringkat Umum"
    },
    ogvCollection: {
        total: "Total {total}",
        noMore: "Tidak ada lagi konten yang lain",
        noResult: "Tidak ada hasil yang ditemukan."
    },
    toApp: "Dapatkan pengalaman terbaik di aplikasi!",
    confirm: "Konfirmasi",
    cancel: "Batal",
    needUpgrade: "Saat ini Anda menggunakan versi lama, beberapa fitur tidak dapat ditampilkan"
}
  , Wi = {
    description: "{description}, Komuniti anime, komik dan permainan (ACG) terkemuka di Asia Tenggara di mana orang ramai boleh mencipta, menonton dan berkongsi video yang menarik.",
    keyWord: "{title},{brand},anime percuma,anime,Anime Teratas,BL,GL,cosplay,SubThai",
    header: {
        download: "Dapatkan App",
        upload: "Muat naik"
    },
    common: {
        noResult: "Tiada hasil yang berkaitan ditemui",
        error: "Kesilapan"
    },
    navList: ["Laman utama", "Anime", "Popular", "Kategori"],
    errorText: {
        ogvVipLimitText: "Ahli Premium rasmi boleh menonton!",
        ogvLocaleLimitText: "Maaf, mengikut permintaan pemilik hak cipta, anime ini tidak tersedia sekarang.",
        notAvailable: "Maaf, mengikut permintaan pemilik hak cipta, anime ini tidak tersedia dalam pelayar laman sesawang.",
        noDataText: "Hasil Hilang",
        ogvLoginLimitText: "Maaf, mengikut permintaan pemilik hak cipta, anda hanya boleh menonton video selepas anda log in.",
        joinVipByQuality: "Resolusi ini hanya untuk Premium, anda boleh menikmati kualiti gambar terbaik apabila anda mengaktifkan Premium",
        ogvDeviceLimit: "Akaun yang masuk sedang membatalkan Premium pada peranti lain, kandungan ini tidak boleh dimainkan",
        enLocalBlackLimit: "Sorry, according to the request of the copyright owner, this film is not available in your area.",
        ugcLocaleLimitText: "Alamak! o(╥﹏╥)o Video ini tidak dapat dijumpai"
    },
    download: {
        download: "Muat turun sekarang",
        desc: "Komuniti terbaik video live comment anda dengan anime, hiburan dan banyak lagi!",
        phone: "https://p.bstarstatic.com/fe-lib/images/web/phone-en.png"
    },
    footerLang: {
        about: "Tentang Kami",
        contactUs: "Hubungi Kami",
        agreement: "Syarat Perkhidmatan",
        privacy: "Dasar Privasi",
        infringe: "Aduan Pelanggaran"
    },
    usLang: {
        title: "Tentang kami",
        describe: ["{brand} ialah komuniti video yang sangat terlibat, interaktif dan melekit yang direka untuk memperkayakan kehidupan seharian generasi muda melalui video Anime, Komik dan Permainan (AKP) dan banyak lagi.", "{brand} terus mengembangkan ekosistem kandungannya untuk memenuhi minat pengguna kami yang pelbagai dan berkembang."]
    },
    title: {
        home: "{brand}",
        popular: "Popular - {brand}",
        trending: "Trend - {brand}",
        category: "Kategori{filter} - {brand}",
        anime: "Anime - {brand}",
        history: "Sejarah - {brand}",
        fav: "Senarai saya - {brand}",
        ugc: "{title} - {brand}",
        ogv: "{epTitle} {season}- {brand}",
        collection: "{title}",
        media: "Butiran {season} - {brand}",
        searchResult: "{keyword} - carian {brand}.",
        aboutUs: "Tentang Kami - {brand}",
        userAgreement: "Syarat Perkhidmatan - {brand}",
        privacy: "Dasar Privasi - {brand}",
        copyright: "Aduan Pelanggaran - {brand}",
        download: "Dapatkan App - {brand}",
        404: "{brand}",
        search: "Cari {brand} - {searchWord}",
        live: "{title} - {brand}",
        profile: "Profil - {brand}",
        space: "{pathName} {nickname} - {brand}",
        paymentAgreement: "Jadi ahli Premium - {brand}",
        cashierDesk: "Jadi ahli Premium - {brand}",
        cashierResult: "Jadi ahli Premium - {brand}",
        timeline: "Kalender Keluaran - {brand}"
    },
    privacyLang: {
        title: "Dasar Privasi"
    },
    agreementLang: {
        title: "Syarat Perkhidmatan"
    },
    home: {
        loading: "Memuatkan lagi...",
        subTitle: {
            ugcTopVideo: "Video Teratas",
            forYou: "Untuk Anda",
            trending: "Trend Sekarang",
            timeline: "Kalendar Keluaran",
            index: "Indeks",
            viewAll: "Lihat semua"
        },
        continueWatch: "Teruskan Menonton",
        noUpdates: "Tiada kemas kini"
    },
    history: {
        title: "Sejarah",
        emptyText: "Tiada sejarah",
        delete: "Padam",
        confirmDelete: "Adakah anda pasti akan memadamkan sejarah tontonan ini?",
        confirm: "Sahkan",
        cancel: "Batal",
        noMore: "Tiada lagi hasil ditemui"
    },
    search: {
        searchHistory: "Sejarah carian",
        allTab: "Semua",
        animeTab: "Anime",
        creatorTab: "Pencipta"
    },
    account: {
        myProfile: "Profil saya",
        avatarLimit: "Menyokong format JPG/PNG (paling banyak 2M)",
        avatarTooLarge: "Saiz imej terlalu besar, sila pilih imej dalam 2MB",
        title: "Akaun",
        avatarLabel: "Avatar",
        nickLabel: "Nama",
        bioLabel: "Pengenalan",
        birthLabel: "Tarikh lahir",
        editAvatarLabel: "Edit Avatar",
        editText: "Sunting",
        reUpload: "Muat naik",
        preview: "Pratonton",
        bioPlaceholder: "Sila kenalkan diri anda.",
        nickPlaceholder: "Sila masukkan nama panggilan anda.",
        emptyBioText: "Sila kenalkan diri anda.",
        nicknameLengthErr: "Had panjang nama panggilan ialah 2-20 aksara",
        needLogin: "Log masuk untuk sunting profil peribadi",
        editSuccessTip: "Profil berjaya dikemas kini"
    },
    btnTextLang: {
        cancel: "Batal",
        login: "Log in",
        logout: "Log out",
        save: "Simpan",
        joinVip: "Dapatkan premium",
        nextStep: "Langkah seterusnya",
        payNow: "Bayar",
        known: "Faham",
        update: "Kemas kini",
        confirm: "Sahkan",
        toAPP: "Lihat lebih banyak di aplikasi"
    },
    space: {
        editBtn: "Sunting profil",
        videoTitle: "Video",
        videoText: {
            singular: "Video",
            plural: "Videos"
        },
        upLikedText: {
            singular: "Suka",
            plural: "Suka"
        },
        noVideosText: "Tiada video dimuat naik",
        spaceTitle: "Laman",
        followersTitle: "Pengikut",
        followingsTitle: "Mengikuti"
    },
    anime: {
        forYou: "Untuk anda",
        myList: "Senarai saya",
        category: "Kategori",
        timeline: "Kalender Keluaran",
        ranking: "Trend",
        moreAnime: "Lebih banyak",
        requestFail: "Ralat data, sila segarkan dan cuba lagi",
        noMore: "Tiada lagi kandungan"
    },
    video: {
        recommend: "Disyorkan untuk anda",
        like: "Suka",
        download: "Muat turun",
        series: "Siri",
        seriesMore: "Lihat lagi",
        episodes: "Episod",
        viewMore: "Yang lain",
        comingSoon: "EP1 bermula pada",
        comingSoonTip: "Akan datang",
        notDownloadTips: "Video ini tidak tersedia untuk muat turun",
        info: {
            details: "Butiran",
            originName: "Permulaan",
            aliasName: "Alias",
            styles: "Genre",
            directors: "Pengarah",
            writers: "Editor",
            actors: "VA",
            performers: "Pelakon lelaki/pelakon wanita",
            staff: "Pejabat"
        },
        comment: {
            comments: "Komen",
            reply: "Balas",
            replyTo: "Balas kepada {user}",
            report: "Laporkan komen",
            reportTitle: "Laporkan Komen",
            send: "Hantar",
            addComment: "Tinggalkan komen mesra(°▽°)~",
            sendFail: "Hantar gagal",
            fold: "Lipat",
            moreReplies: "Balasan lain",
            noResult: "Tiada hasil dijumpai",
            noMoreComments: "Tiada lagi komen",
            watchMore: "Lihat lebih banyak di Aplikasi Bilibili"
        },
        anime: {
            desc: "Anime popular percuma sedang distrim sekarang"
        },
        top50: "Ranking",
        viewmore: "Lihat lebih banyak"
    },
    openApp: "Buka Aplikasi",
    watchOnApp: "Tonton dalam Bilibili",
    openAppBtn: "Buka dalam Apl",
    top: "TOP",
    card: {
        only: "{brand} SAHAJA",
        freeNow: "PERCUMA SEKARANG",
        premium: "Premium",
        anime: "Anime",
        tvShow: "Acara TV"
    },
    feedback: {
        feedback: "Maklum balas",
        search: "Cari",
        noResult: "Tiada hasil dijumpai",
        invalidPhone: "Sila masukkan nombor telefon yang betul.",
        invalidEmail: "Sila masukkan alamat e-mel yang betul.",
        error: "Penyerahan gagal. Sila cuba lagi.",
        uploadError: "Gagal memuat naik imej"
    },
    drawer: {
        info: "Info"
    },
    live: {
        addDm: "Tambah live comment"
    },
    player: {
        playTip: "Main(space)",
        pauseTip: "Jeda(space)",
        closeSubtitle: "Tutup",
        nextEpTooltip: "Episod seterusnya(shift+n){epTitle}",
        nextEpTip: "Episod seterusnya{epTitle}",
        fullscreenTip: "Skrin penuh(f)",
        closeFullscreenTip: "Keluar dari skrin penuh(f)",
        report: "Laporan",
        ccReport: "Laporan Sarikata",
        changingQuality: "Penukaran kualiti, sila tunggu",
        changeQualitySuccess: "Berjaya ditukar",
        changeQualityFail: "Penukaran gagal",
        skipTo: "Langkau ke",
        speed: "Kelanjutan",
        quality: "Kualiti",
        ccTitle: "Sari kata",
        subtitle: {
            loading: "Sedang muat turun sari kata, sila tunggu",
            success: "Sari kata berjaya dimuat turun",
            fail: ["Gagal muat turun sari kata, ", "sila maklum balas"]
        },
        cancel: "Batal",
        wideScreenTip: "Skrin lebar",
        closeWideSceenTip: "Keluar dari skrin lebar",
        tapToUnmute: "Ketik untuk nyahredam",
        danmakuSend: "Hantar",
        danmakuOn: "Hidupkan danmaku",
        danmakuOff: "Matikan danmaku",
        danmakuPlaceholder: "Klik untuk hantar danmaku",
        danmakuFequently: "Hantar danmaku terlalu kerap",
        danmakuClosedToast: "Fungsi danmaku ditutup",
        danmakuSwitchOffToast: "Gagal menghantar, danmaku belum dihidupkan.",
        skipLabel: "Melangkau intro/outro",
        skipToast: ["Hidupkan langkau intro dan outro? ", "Hidupkan"],
        skipingOp: "Akan melangkau intro",
        skipedOp: "Intro dilangkau",
        skipingEd: "Akan melangkau outro",
        skipedEd: "Outro dilangkau",
        adsPremiumBtn: "Premium langkau iklan"
    },
    media: {
        views: "Bilangan tontonan",
        region: "Wilayah",
        desc: "Penerangan",
        cvTitle: "VA & Pejabat",
        playNow: "Menonton sekarang",
        starting: "",
        noEp: "Tiada episod lagi"
    },
    follow: {
        unfollow: "Ikut",
        followed: "Mengikuti",
        unfollowConfirmText: "Adakah anda pasti akan menyahikut pencipta ini?",
        confirmBtn: "Sahkan",
        cancelBtn: "Batal",
        fans: {
            singular: "Pengikut",
            plural: "Pengikut"
        },
        followings: {
            singular: "Mengikuti",
            plural: "Mengikuti"
        }
    },
    vipGoods: {
        title: "Rancangan Premium",
        benefits: {
            only: "Kandungan eksklusif premium",
            free: "Ahli premium boleh muat turun percuma",
            advance: "Premium Menonton duluan",
            quality: "1080P+"
        },
        tipsTitle: "Faedah premium",
        paymentAgreement: "Syarat perkhidmatan",
        guideToast: "Server sedang dinaik taraf, sila muat turun aplikasi bilibili untuk melanggan Premium"
    },
    vipConfirm: {
        title: "Sila selesaikan pembayaran pada halaman yang baru",
        desc: "Jangan tutup halaman ini sebelum pembayaran selesai. Selepas anda menyelesaikan pembayaran, ketuk salah satu daripada butang berikut mengikuti kebenaran anda.",
        boughtBtn: "Saya sudah beli",
        repurchaseBtn: "Bayar semula"
    },
    vipError: {
        order: "Pesanan langganan gagal",
        pay: "Tiada langganan dijumpai",
        loading: "Gagal memuatkan. Sila cuba semula."
    },
    cashierDesk: {
        selected: "Dipilih",
        setPaymentMethod: "Pilih Kaedah Pembayaran"
    },
    vipCallback: {
        success: "Premium berjaya diaktifkan",
        fail: "Pengaktifan premium tak berjaya"
    },
    vip: {
        title: "Dapatkan premium",
        toast: {
            priceChange: "Kerana cara pembayaran diubah, mata wang dan harga Premium akan berubah."
        },
        header: {
            expireAt: "Premium anda sah sehingga {time}",
            loginToPreview: "Log masuk untuk lihat faedah Premium anda",
            joinVipTip: "Langgan untuk menikmati beribu-ribu episod secara percuma"
        },
        benefits: {
            title: "Faedah premium"
        },
        result: {
            timeout: "Penyemakan hasil pembayaran melebihi had masa",
            retry: "Cuba semula",
            loading: "Sedang semak, sila tunggu"
        },
        footer: {
            buyNow: "Langgan sekarang",
            vipOptions: "Rancangan Premium",
            redeem: "Menebus Premium",
            moreMethods: "Lebih Banyak Cara Langganan"
        }
    },
    basicComponent: {
        datePlaceHolder: "Pilih tarikh",
        mon: "Isn",
        tue: "Sel",
        wed: "Rabu",
        thu: "Kha",
        fri: "Jum",
        sat: "Sab",
        sun: "Ahad"
    },
    login: {
        loginGuide: "Log masuk untuk tonton video HD",
        loginNow: "Log masuk sekarang",
        title: {
            main: "Log in ke {brand}",
            toLogin: "Log in",
            register: "Daftar",
            reset: "Menetapkan semula kata laluan",
            imgCode: "Sila masukkan kod pada imej"
        },
        tabs: {
            phone: "Nombor telefon",
            account: "Akaun"
        },
        rememberMe: "Ingat saya",
        forgetPassword: "Lupa kata laluan?",
        panel: {
            loginWith: "Log in dengan",
            orContinue: "Atau teruskan dengan",
            loginWithPhone: "Telefon",
            login: "Log in",
            loginTip: "Jika nombor yang anda masukkan tidak didaftarkan, akaun baharu akan dibuat setelah mengklik Log In.",
            exceptionTip: "Maaf, berlaku masalah di sana. Sila cuba sebentar lagi."
        },
        form: {
            phonePlaceholder: "Nombor telefon",
            emailPlaceholder: "Alamat e-mel",
            passwordPlaceholder: "Masukkan kata laluan",
            confirmPasswordPlaceholder: "Sahkan kata laluan",
            codePlaceholder: "Masukkan kod pengesahan",
            sendCode: "Hantar Kod",
            emptyAccount: "Sila masukkan alamat e-mel anda",
            emptyPassword: "Sila masukkan kata laluan anda",
            passwordRule: "8-20 aksara daripada sekurang-kurangnya 2 kategori: huruf, nombor, aksara khas.",
            emptyPhoneTip: "Sila masukkan nombor telefon anda",
            wrongPhoneTip: "Nombor telefon tidak sah",
            diffCountryTip: "Nombor telefon tidak sepadan dengan wilayah yang dipilih.",
            notMatchPhoneAndCode: "Kod pengesahan tidak sah. Hantar semula kod dan cuba lagi.",
            getSms: "Hantar Kod",
            getSmsAgain: "Hantar semula",
            getSmsLater: "Hantar semula ({0}s)",
            noSmsCode: "Masukkan kod pengesahan",
            wrongSmsCode: "Masukkan kod pengesahan",
            sentTip: "Kod pengesahan dihantar melalui SMS",
            noSentCodeTip: "Sila hantar kod dahulu.",
            countryInputPlaceholder: "Cari",
            noSearchData: "Tiada hasil dijumpai",
            diffEmail: "E-mel tidak konsisten, sila semak semula",
            emailSentTip: "Kod pengesahan telah dihantar melalui e-mel",
            diffPassword: "Kedua kata laluan yang anda masukkan adalah berbeza",
            resetSuccessTip: "Kata laluan ditukar. Sila log in dengan kata laluan baharu",
            incorrectEmailFormat: "Format e-mel salah, sila semak lagi"
        },
        footer: {
            agreement: "Syarat Perkhidmatan",
            and: "&",
            privacy: "Dasar Privasi",
            loginAgree: "Saya telah berumur 13 tahun ke atas. Dengan log masuk, anda mengakui dan bersetuju bahawa anda telah membaca dan bersetuju untuk terikat kepada",
            noRegisterLabel: "Tiada akaun?",
            toRegister: "Daftar",
            legalTooltip: "Sila sahkan",
            alreadyRegister: "Sudah mempunyai akaun?",
            toLogin: "Log in"
        },
        imageCode: {
            imgCodePlaceholder: "Kod pengesahan imej",
            changeCodeBtnText: "Tukar imej",
            emptyImgCodeTip: "Sila masukkan kod",
            errorImgCodeTip: "Sila masukkan kod yang sah"
        }
    },
    fav: {
        title: "Senarai saya",
        tabs: {
            all: "Semua",
            anime: "Anime",
            video: "Video",
            tvShows: "Acara TV"
        }
    },
    moreAction: {
        title: "",
        actions: {
            del: "Padam"
        }
    },
    pendingStopPushing: "Video sedang disemak, sila datang lagi nanti.",
    riskTag: "Maaf, video terbuka tidak tersedia kerana kandungan kontroversi.",
    notFound: "Halaman Web 404 tidak ditemui",
    serverError: "Ralat permintaan server",
    forbidden: "Anda tidak mempunyai kebenaran untuk mengakses halaman ini",
    notAvailable: "Video ini telah dialih keluar, sila tonton video lain",
    homeText: "Laman utama",
    category: {
        selected: "Dipilih"
    },
    timeline: {
        noUpdateToday: "Tiada kemas kini",
        addFav: "Disimpan ke Senarai Saya",
        delFav: "Dialih keluar daripada Senarai Saya"
    },
    about: {
        intro: {
            title: "Tentang Bilibili",
            content: ['Kami menganggap diri kami sebagai "peminat tegar" anime, komik dan permainan video. Kami menyayangi komuniti ini dan ingin meraikannya. Bilibili dilahirkan daripada minat kami yang sama. Bilibili yang bermula sebagai komuniti yang diilhamkan oleh kecintaan kami terhadap anime, komik, permainan video (ACG) kini telah berubah dengan mantap dan sekarang telah menjadi platform terkemuka dengan koleksi anime yang paling luas, termasuk kedua-dua siri anime dan video pencipta.', "Bilibili bukanlah sekadar satu platform. Ia ialah satu ruang yang kita boleh merasai dan memupuk semangat kekitaan. Bilibili adalah untuk menemukan sesiapa yang mempunyai minat yang sama dan ingin menonjolkan kreativiti mereka.", "Selain daripada wilayah Tanah Besar China, sekarang Bilibili juga tersedia di Indonesia, Filipina, Thailand, Vietnam, Singapura, dan Malaysia. Di Indonesia, kami dikenali sebagai Bstation."]
        },
        services: {
            title: "Perkhidmatan",
            content: ["Kami mempunyai inventori anime terbesar di SEA yang terdiri daripada keluaran-keluaran terbaharu dan tajuk-tajuk klasik yang disukai ramai. Episod anime terbaru ditayangkan setiap hari daripada pelbagai genre seperti aksi, pengembaraan, komedi, fantasi, percintaan, sekolah, fiksyen sains dan sukan.", 'Selain daripada koleksi anime kami yang besar, kami juga menyediakan video pencipta untuk memenuhi keperluan generasi muda yang suka "menonton" dan juga "mencipta" di satu tempat. Bilibili membina komunitinya dengan pengguna-pengguna aktif, kandungan berkualiti tinggi, pencipta-pencipta berbakat dan ikatan emosi yang kuat antara unsur-unsur tersebut.', "Bilibili bertujuan untuk menjadi platform video berspektrum penuh. Keutamaan kami pada masa ini adalah untuk terus meluaskan dan memperkayakan ekosistem kandungan kami, serta memberi sokongan kepada pencipta-pencipta kandungan dan meningkatkan kualiti produk kami berdasarkan maklum balas mereka."]
        },
        products: {
            title: "Produk",
            platform: ["Aplikasi", "Versi TV Pintar", "Viddup", "Aset Maya"],
            app: ["Kandungan berbeza dari rantau ke rantau dan mungkin tertakluk kepada perubahan pada bila-bila masa.", "Sebagai platform hibrid yang menganjurkan  OGVs (Occupationally-Generated Videos) and UGCs (User-Generated Content), anda boleh menonton pelbagai animasi, filem dan rancangan aneka ragam serta video-video pencipta.", "Anda juga boleh memuat naik video anda pada platform kami."],
            tv: ["Perkhidmatan penstriman berasaskan langganan untuk TV Pintar. Tersedia pada masa ini untuk peranti Android dan LG. Nikmatilah kandungan daripada aplikasi Bilibili dengan pengalaman penontonan HD.", "Sari kata pelbagai bahasa tersedia termasuklah dalam Bahasa Inggeris, Thai, Vietnam dan banyak lagi.", "Dengan satu akaun Bilibili, sejarah tontonan pengguna disegerakkan merentas peranti daripada telefon mudah alih dan PC ke TV."],
            vu: "Viddup ialah aplikasi penyuntingan video pintar yang memudahkan penghasilan video berkualiti tinggi",
            va: "Aset Maya termasuklah Tema Aplikasi, Stiker dan Bingkai Avatar memberi pengguna pengalaman tersuai yang menampilkan IP kegemaran mereka"
        },
        footer: {
            download: {
                title: "Muat Turun Produk",
                app: "Aplikasi Bilibili",
                viddupAndroid: "Viddup Android",
                viddupiOS: "Viddup iOS"
            },
            lib: {
                title: "Perpustakaan Jenama",
                guide: "Buku Panduan Identiti Jenama",
                assets: "Aset Jenama"
            },
            sns: {
                title: "SNS",
                twitter: "Twitter",
                facebook: "Facebook",
                ins: "Instagram"
            }
        }
    },
    trending: {
        trending: "Trend",
        dailyUpdate: "Dikemas kini setiap hari",
        hourlyUpdate: "Dikemas kini setiap jam",
        viewMore: "Lihat Lebih Banyak",
        animeTitle: "Senarai Anime",
        ugcTitle: "Senarai Video",
        detailDefaultTitle: "Senarai Umum"
    },
    ogvCollection: {
        total: "Jumlah {total}",
        noMore: "Tiada lagi kandungan",
        noResult: "Tiada hasil dijumpai"
    },
    toApp: "Mendapatkan pengalaman terbaik pada aplikasi!",
    confirm: "Sahkan",
    cancel: "Batal",
    needUpgrade: "Anda sedang menggunakan aplikasi versi lama, beberapa fungsi tidak dapat dipaparkan"
}
  , Qi = typeof window > "u"
  , zi = e=>typeof Element > "u" ? !1 : e instanceof Element
  , N = new Map;
let We;
Qi || (document.addEventListener("mousedown", e=>We = e),
document.addEventListener("mouseup", e=>{
    for (const a of N.values())
        for (const {documentHandler: n} of a)
            n(e, We)
}
));
function Qe(e, a) {
    let n = [];
    return Array.isArray(a.arg) ? n = a.arg : zi(a.arg) && n.push(a.arg),
    function(t, i) {
        const r = a.instance.popperRef
          , l = t.target
          , s = i == null ? void 0 : i.target
          , c = !a || !a.instance
          , u = !l || !s
          , g = e.contains(l) || e.contains(s)
          , m = e === l
          , p = n.length && n.some(v=>v == null ? void 0 : v.contains(l)) || n.length && n.includes(s)
          , _ = r && (r.contains(l) || r.contains(s));
        c || u || g || m || p || _ || a.value(t, i)
    }
}
const Ji = {
    beforeMount(e, a) {
        N.has(e) || N.set(e, []);
        const n = N.get(e);
        n == null || n.push({
            documentHandler: Qe(e, a),
            bindingFn: a.value
        })
    },
    updated(e, a) {
        N.has(e) || N.set(e, []);
        const n = N.get(e)
          , t = n == null ? void 0 : n.findIndex(r=>r.bindingFn === a.oldValue)
          , i = {
            documentHandler: Qe(e, a),
            bindingFn: a.value
        };
        t && t >= 0 ? n == null || n.splice(t, 1, i) : n == null || n.push(i)
    },
    unmounted(e) {
        N.delete(e)
    }
}
  , ze = (e,a)=>{
    var n, t, i;
    (n = a.value) != null && n.id && (e.dataset.bExposeId = a.value.id),
    (t = a.value) != null && t.key && (e.dataset.bExposeKey = a.value.key),
    (i = a.value) != null && i.data && (e.dataset.bExposeData = a.value.data)
}
  , Xi = {
    mounted: ze,
    updated: ze
}
  , Yi = M({
    __name: "confirm-modal",
    props: {
        onConfirm: {
            type: Function,
            default: async()=>!0
        },
        onCancel: {
            type: Function,
            default: async()=>{}
        },
        onDestroy: {
            type: Function,
            default: async()=>{}
        },
        title: {
            default: ""
        },
        content: {},
        confirmText: {
            default: ""
        },
        cancelText: {
            default: ""
        },
        to: {
            default: "body"
        }
    },
    setup(e) {
        const a = e
          , {onConfirm: n, onCancel: t, content: i} = F(a)
          , r = w(!0)
          , l = w(!1)
          , s = async()=>{
            l.value = !0,
            await o(n)() && (r.value = !1,
            l.value = !1)
        }
          , c = async()=>{
            await o(t)(),
            r.value = !1
        }
        ;
        return (u,g)=>(T(),
        O(o(Pe), {
            visible: r.value,
            title: u.title,
            "show-close": !1,
            "button-text": u.confirmText,
            "cancel-button-text": u.cancelText,
            loading: l.value,
            fullscreen: !1,
            to: u.to,
            onSubmit: s,
            onCancel: c,
            onHide: u.onDestroy
        }, {
            default: E(()=>[P("p", null, D(o(i)), 1)]),
            _: 1
        }, 8, ["visible", "title", "button-text", "cancel-button-text", "loading", "to", "onHide"]))
    }
})
  , Zi = e=>{
    if (!V.inBrowser)
        return;
    const a = document.createElement("div")
      , n = Ma(Yi, {
        ...e,
        onDestroy: ()=>Ie(null, a)
    });
    Ie(n, a)
}
  , ua = typeof window > "u"
  , {isMobile: et} = V
  , ma = "/download";
function at() {
    return window.location.pathname.replace(/^\/(en|th|vi|ms|id)\/?|(\/\d+)+$/ig, "") || window.location.pathname
}
function be(e) {
    return ua ? "" : window.location.search.replace(/^\?/, "").split("&").reduce((t,i)=>{
        const [r,l] = i.split("=");
        return r && l && (t[r] = l),
        t
    }
    , {})[e] || ""
}
function pa(e) {
    const {position: a, schema: n} = e;
    if (ua || !et)
        return "";
    const t = "https://bilibili.onelink.me/Q7gv"
      , i = at()
      , r = be("from")
      , s = (r ? `share_ ${r}` : "") || be("channel") || be("fromspmid") || "default";
    let c = `${t}?af_js_web=true&af_force_deeplink=true&af_ss_ver=2_2_0&pid=${s}&c=${a}&af_channel=${i}`;
    return n && (c = `${c}&af_dp=${encodeURIComponent(n)}`),
    c
}
function nt(e) {
    const a = pa(e);
    window.location.href = a || ma
}
function St(e) {
    const a = pa(e);
    return {
        onelinkUrl: w(a || ma)
    }
}
const Lt = e=>{
    const {scheme: a="bstar://home", universalLink: n="https://www.bilibili.tv/", downloadUrl: t="https://www.bilibili.tv/download", onlyScheme: i=!1, autoDownload: r=!0} = e
      , l = i ? a : V.isiOS ? n : a;
    if (V.isInApp) {
        document.location.href = a;
        return
    }
    it(r, l, t)
}
  , At = e=>{
    document.location.href = e
}
;
function it(e, a, n) {
    if (a) {
        if (e && n !== "") {
            const t = "hidden"in document ? "hidden" : "webkitHidden"in document ? "webkitHidden" : "mozHidden"in document ? "mozHidden" : null;
            let i = null;
            const r = ()=>{
                document[t] && i && clearTimeout(i)
            }
            ;
            document.addEventListener("visibilitychange", r),
            i = setTimeout(()=>{
                if (document.removeEventListener("visibilitychange", r),
                !document[t])
                    return document.location.href = n,
                    !1
            }
            , 3e3)
        }
        document.location.href = a
    }
}
const fe = (e,a,n)=>{
    var i;
    let t;
    switch (e) {
    case d.Home:
        t = "bstar://home";
        break;
    case d.Index:
        t = V.isAndroid ? "bstar://home" : "bstar://pgc/home";
        break;
    case d.Ogv:
        t = `bstar://pgc/season/${(i = a == null ? void 0 : a.seasonId) != null ? i : ""}${a != null && a.epId ? `/episode/${a.epId}` : ""}`;
        break;
    case d.Ugc:
        t = `bstar://av/${(a == null ? void 0 : a.aid) || ""}`;
        break;
    case d.Space:
        t = `bstar://space/${(a == null ? void 0 : a.mid) || ""}`;
        break;
    case d.Live:
        t = `bstar://live/${(a == null ? void 0 : a.roomId) || ""}`;
        break;
    default:
        t = "bstar://home"
    }
    return `${t}${n ? `?from_spmid=${n}` : ""}`
}
  , Ct = ({inAppFunc: e=()=>{}
, outAppFunc: a=()=>{}
})=>{
    V.isInApp ? e() : a()
}
  , {isMobile: tt, inBrowser: Ce} = ie()
  , ot = Ce && !!new URLSearchParams(window.location.search).get(Fi);
function rt() {
    if (!Ce)
        return "";
    const e = window.location.pathname
      , [,,a,n,t="",i=""] = e.match(/^\/((en|th|vi|ms|id)\/)?(\w+)(\/\w+)?(\/\w+)?/) || [];
    let r = "";
    return n === "video" ? r = fe(d.Ugc, {
        aid: t.replace(/[^\d]/ig, "")
    }) : n === "play" ? r = fe(d.Ogv, {
        seasonId: t.replace(/[^\d]/ig, ""),
        epId: i.replace(/[^\d]/ig, "")
    }) : n || (r = fe(d.Home, {})),
    r
}
function lt(e) {
    let a = !1;
    const {target: n, el: t, className: i} = e;
    let r = n
      , l = "";
    for (; !a && r && r !== t; )
        a = Array.from(r.classList).some(c=>{
            const u = i.includes(c);
            return u && (l = c),
            u
        }
        ),
        r = r.parentNode;
    return l
}
function st({key: e, interval: a}) {
    const n = window.localStorage.getItem(e)
      , t = Math.ceil(Date.now() / 1e3);
    if (n) {
        const i = Number(n);
        if (new Date().getTime(),
        t - i < a)
            return !1
    }
    return window.localStorage.setItem(e, String(t)),
    !0
}
const dt = ["click", "touchstart", "touchend"];
function ct(e) {
    return {
        beforeMount(a, n, t) {
            if (!Ce || !tt)
                return;
            const {arg: i, value: r={}} = n
              , l = e.global.t
              , [s,c] = i ? i.split(":") : [];
            (!s || dt.includes(s)) && (a == null || a.addEventListener(s || "click", u=>{
                const {schema: g, position: m, className: p, storage: _, confirmTo: v, eventCb: k, disabled: S} = r;
                let L = "";
                if (!(c === "from" && !ot) && !(p && (L = lt({
                    el: a,
                    target: u.target,
                    className: p
                }),
                !L))) {
                    if (_) {
                        const {key: f, interval: h} = _;
                        if (!st({
                            key: f,
                            interval: h
                        }))
                            return
                    }
                    if (S) {
                        u.stopPropagation(),
                        u.preventDefault();
                        return
                    }
                    k && k({
                        className: L || Array.from(u.target.classList).join(" ")
                    }),
                    Zi({
                        title: l("toApp"),
                        content: "",
                        to: v && document.querySelector(v) ? v : void 0,
                        confirmText: l("confirm"),
                        cancelText: l("cancel"),
                        onConfirm: async()=>(nt({
                            schema: g || rt(),
                            position: m || "floating"
                        }),
                        !0),
                        onCancel: async()=>{}
                    }),
                    u.stopPropagation(),
                    u.preventDefault()
                }
            }
            , {
                capture: !0
            }))
        }
    }
}
function ut() {
    const e = V.inBrowser ? Da(Re) : Ea(Re)
      , a = Ia()
      , n = Ni()
      , t = Fa()
      , i = Oa({
        legacy: !1,
        locale: "en",
        fallbackLocale: "en",
        messages: {
            en: ji,
            th: Gi,
            vi: qi,
            id: Ri,
            ms: Wi
        }
    });
    return e.use(n),
    e.use(a),
    e.use(i),
    e.use(t),
    e.directive("click-outside", Ji),
    e.directive("expose", Xi),
    e.directive("hijack-toapp", ct(i)),
    {
        app: e,
        router: n,
        pinia: a,
        i18n: i,
        head: t
    }
}
const Je = "bstar-web-lang"
  , mt = ()=>({
    get: n=>{
        var t;
        return V.inBrowser ? (t = se.get(Je)) != null ? t : null : n != null ? n : null
    }
    ,
    set: n=>{
        V.inBrowser && se.set(Je, n, {
            domain: ".bilibili.tv",
            path: "/",
            expires: 30
        })
    }
})
  , ye = mt();
function pt() {
    const e = $a.singleton({
        pid: "1hfr11220ve@80489e53680e0e1",
        appType: "web",
        imgUrl: "https://arms-retcode-sg.aliyuncs.com/r.png?",
        environment: "prod",
        release: "6d8208757ed97cefc0a7634c19cd3d20bf92a6c2",
        sample: 100,
        sendResource: !0,
        behavior: !0,
        useFmp: !0,
        autoSendPv: !0,
        enableSPA: !0,
        uid: U.getBuvid(),
        ignore: {
            ignoreUrls: [],
            ignoreApis: [/^api\.bilibili\.tv\/intl\/gateway\/web\/data\/report\//, /^api\.bilibili\.tv\/dm\/web\/(view|list)/, /^s\.bstarstatic\.com/, "dm-web-list"],
            ignoreErrors: [/^Script error\.?$/, /^Cannot read property '(src|querySelector|currentQualityIndex)' of null$/, /^Cannot read properties of null \(reading '(src|querySelector|currentQualityIndex)'\)$/],
            ignoreResErrors: []
        }
    });
    return e.setConfig({
        disabled: Math.random() < .75
    }),
    e
}
const {app: xe, router: le, pinia: Be, i18n: gt} = ut()
  , Xe = V.isMobile ? void 0 : pt();
xe.config.errorHandler = e=>{
    Xe && Xe.error(e)
}
;
Ha(xe, {
    timeout: 5e3,
    useParamsFn: Ja,
    baseUrl: ge.apiUrl
});
window.__initialState && (Be.state.value = window.__initialState);
const ht = e=>{
    switch (e.name) {
    case d.Space:
        return {
            msg: {
                uid: e.params.mid,
                channel: e.query.channel,
                channel_content_id: e.query.channel_content_id,
                share_channel: e.query.from
            }
        };
    case d.Ugc:
    case d.Ogv:
        return {
            msg: {
                share_channel: e.query.from
            }
        };
    case d.Followers:
    case d.Followings:
        return {
            msg: {
                uid: e.params.mid
            }
        };
    default:
        return
    }
}
;
le.afterEach((e,a)=>{
    if (e.name && e.path !== a.path) {
        const n = e.name
          , t = Ii[n];
        t && (U.setSpmPrefix(t),
        Oi.includes(n) || U.sendPv(ht(e)))
    }
    if (!window.__initialState || a.name) {
        const n = G(Be);
        n.fallback = !0
    }
}
);
le.isReady().then(()=>{
    var r;
    const e = le.currentRoute
      , {params: a, name: n} = o(e)
      , t = G(Be);
    let i = ((r = a.sLocale) == null ? void 0 : r.toString()) || ye.get() || X.en;
    i = we.has(i) ? i : X.en,
    !(a != null && a.sLocale) && n && we.has(i) && le.replace({
        ...e.value,
        params: {
            ...a,
            sLocale: i
        }
    }),
    gt.global.locale.value = i,
    t.sLocale = i,
    t.useBstation = t.useBstation || i === X.id,
    ye.get() || ye.set(i),
    xe.mount("#app")
}
);
export {Vi as $, nt as A, Pt as B, vt as C, Un as D, fe as E, la as F, J as G, ge as H, we as I, V as J, Fi as K, B as L, Zi as M, Mn as N, Ci as O, d as P, Dn as Q, Mi as R, Ii as S, Xa as T, re as U, Di as V, Z as W, xn as X, Cn as Y, En as Z, H as _, bt as __vite_legacy_guard, Za as a, Bn as a0, Wa as a1, _t as a2, qa as a3, Ct as a4, Hi as a5, At as a6, Lt as a7, nn as a8, Tt as a9, Te as aa, yt as ab, Ae as b, Fe as c, St as d, oe as e, wt as f, G as g, ca as h, za as i, an as j, en as k, ye as l, X as m, Ya as n, U as o, y as p, $i as q, Ra as r, Vn as s, qe as t, ie as u, ri as v, te as w, ci as x, sa as y, Wn as z};
