var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/Navbar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = __toESM(require("react")), import_framer_motion = require("framer-motion"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navbar({ carts }) {
  let activeClassName = ({ isActive }) => isActive ? "active" : void 0, ref = import_react3.default.useRef(null);
  return import_react3.default.useEffect(() => {
    let node = ref.current;
    (0, import_framer_motion.animate)(node, {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5
      }
    });
  }, [carts.length]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      style: {
        zIndex: 100,
        position: "relative"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "nav-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav-links", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-links__li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { to: "/", className: activeClassName, children: "Home" }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 30,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-links__li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { className: activeClassName, to: "/products", children: "Products" }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 35,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-links__li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { className: activeClassName, to: "/cart", children: "Cart" }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_framer_motion.motion.div, { ref, children: carts == null ? void 0 : carts.length }, void 0, !1, {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
var Navbar_default = Navbar;

// app/session.js
var import_node2 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "cart",
    maxAge: 86400,
    secrets: ["S3CR3T_K3Y"],
    secure: !0
  }
});

// app/styles/globals.css
var globals_default = "/build/_assets/globals-N3PDIQ77.css";

// app/styles/navbar.css
var navbar_default = "/build/_assets/navbar-FEGD5WLC.css";

// app/root.jsx
var import_framer_motion2 = require("framer-motion"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [
    {
      rel: "stylesheet",
      href: globals_default
    },
    {
      rel: "stylesheet",
      href: navbar_default
    }
  ];
}
async function loader({ request }) {
  let cart = (await getSession(request.headers.get("Cookie"))).get("cart") || [];
  return (0, import_node3.json)(cart);
}
function App() {
  let carts = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar_default, { carts }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_framer_motion2.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/products/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  links: () => links2,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/db/db.js
var import_mongoose = __toESM(require("mongoose")), db;
connect();
async function connect() {
  return db || (global.__db || (global.__db = await import_mongoose.default.connect(process.env.MONGODB_URL, {
    useNewUrlParser: !0
  })), db = global.__db, db);
}

// app/db/products.js
var productsSchema = new import_mongoose.default.Schema({
  id: String,
  title: String,
  text: String,
  image: String,
  price: Number,
  category: String,
  createdAt: Date,
  updatedAt: Date
}), ProductsModel;
try {
  ProductsModel = import_mongoose.default.model("products");
} catch {
  ProductsModel = import_mongoose.default.model("products", productsSchema);
}
var products_default = ProductsModel;

// app/styles/product.css
var product_default = "/build/_assets/product-OP3JZ4ZL.css";

// app/routes/products/$slug.jsx
var import_framer_motion3 = require("framer-motion"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function links2() {
  return [{ rel: "stylesheet", href: product_default }];
}
async function loader2({ params }) {
  return products_default.findOne({ _id: params.slug });
}
function Cart() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: "product-wrapper",
      style: {
        position: "relative"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "product-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_framer_motion3.motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_framer_motion3.motion.img,
            {
              layoutId: data._id,
              transition: {
                duration: 0.3
              },
              src: data.image,
              alt: data.title,
              className: "product-image"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/products/$slug.jsx",
              lineNumber: 28,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/products/$slug.jsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "product-title", children: data.title }, void 0, !1, {
            fileName: "app/routes/products/$slug.jsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/products/$slug.jsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "product-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
            data.text,
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
              "$",
              data.price
            ] }, void 0, !0, {
              fileName: "app/routes/products/$slug.jsx",
              lineNumber: 42,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/products/$slug.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "p",
            {
              style: {
                position: "absolute",
                bottom: "0"
              },
              children: [
                "Created at: ",
                data.createdAt
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/products/$slug.jsx",
              lineNumber: 44,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/products/$slug.jsx",
          lineNumber: 40,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/products/$slug.jsx",
      lineNumber: 20,
      columnNumber: 5
    },
    this
  );
}
var slug_default = Cart;

// app/routes/products/index.jsx
var products_exports = {};
__export(products_exports, {
  action: () => action,
  default: () => products_default3,
  links: () => links3,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_react10 = __toESM(require("react"));

// app/components/SidebarFilter.jsx
var import_react6 = require("@remix-run/react"), import_react7 = __toESM(require("react")), import_framer_motion4 = require("framer-motion"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function SidebarFilter({ isFilterShown, setIsFilterShown }) {
  let ref = import_react7.default.useRef(null), submit = (0, import_react6.useSubmit)(), [params] = (0, import_react6.useSearchParams)();
  function handleChange() {
    ref && submit(ref.current, {
      replace: !0
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_framer_motion4.motion.div,
    {
      animate: {
        width: isFilterShown ? 200 : 40
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react6.Form,
        {
          method: "get",
          className: `sidebar-form ${isFilterShown ? "" : "hidden"}`,
          ref,
          onChange: handleChange,
          children: [
            isFilterShown ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sidebar-container", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "price-filter", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "price-filter__title", children: "Price" }, void 0, !1, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 33,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "price-filter__range", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "MIN" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 35,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "input",
                    {
                      type: "number",
                      name: "min",
                      id: "price",
                      defaultValue: params.get("min")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SidebarFilter.jsx",
                      lineNumber: 36,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 34,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "price-filter__range", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "MAX" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 44,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "input",
                    {
                      type: "number",
                      name: "max",
                      id: "price",
                      defaultValue: params.get("max")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SidebarFilter.jsx",
                      lineNumber: 45,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 43,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "category-filter", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "price-filter__title", children: "Category" }, void 0, !1, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 54,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "category-filter__type", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "input",
                    {
                      type: "checkbox",
                      name: "category",
                      id: "top",
                      value: "top",
                      defaultChecked: params.getAll("category").includes("top")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SidebarFilter.jsx",
                      lineNumber: 56,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "top", children: "Top" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 55,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "category-filter__type", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "input",
                    {
                      type: "checkbox",
                      name: "category",
                      id: "bottom",
                      value: "bottom",
                      defaultChecked: params.getAll("category").includes("bottom")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SidebarFilter.jsx",
                      lineNumber: 66,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "bottom", children: "Bottom" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 73,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 65,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "category-filter__type", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "input",
                    {
                      type: "checkbox",
                      name: "category",
                      id: "shoes",
                      value: "shoes",
                      defaultChecked: params.getAll("category").includes("shoes")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/SidebarFilter.jsx",
                      lineNumber: 76,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "shoes", children: "Shoes" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 83,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 53,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "gender-filter", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "price-filter__title", children: "Gender" }, void 0, !1, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 87,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { name: "gender", defaultValue: params.get("gender"), children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "", children: "All" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 89,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "male", children: "Male" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 90,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "female", children: "Female" }, void 0, !1, {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 88,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 86,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 31,
              columnNumber: 11
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "close-button",
                onClick: () => {
                  setIsFilterShown((prev) => !prev);
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/SidebarFilter.jsx",
                    lineNumber: 107,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 96,
                columnNumber: 9
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/SidebarFilter.jsx",
          lineNumber: 24,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/SidebarFilter.jsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
var SidebarFilter_default = SidebarFilter;

// app/styles/sidebar-filters.css
var sidebar_filters_default = "/build/_assets/sidebar-filters-ZKLIJ7DB.css";

// app/styles/products.css
var products_default2 = "/build/_assets/products-6XCS2SSZ.css";

// app/components/Card.jsx
var import_react8 = require("@remix-run/react"), import_framer_motion5 = require("framer-motion"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Card({
  data,
  carts,
  shouldShowTitle = !0,
  isFilterShown,
  shouldShowAddToCart = !0
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: `products__container products__container--${isFilterShown ? "" : "hidden"}`,
      children: [
        shouldShowTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "products__title", children: {
          top: "Top Products",
          shoes: "Shoes"
        }[data[0].category] }, void 0, !1, {
          fileName: "app/components/Card.jsx",
          lineNumber: 23,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "products__list", children: data.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_framer_motion5.motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "products__item",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  style: {
                    height: "200px",
                    overflow: "hidden"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    import_framer_motion5.motion.img,
                    {
                      layoutId: product._id,
                      whileHover: { scale: 1.1 },
                      transition: {
                        duration: 0.3
                      },
                      initial: {
                        x: 200
                      },
                      animate: {
                        x: 0
                      },
                      src: product.image,
                      alt: product.title,
                      className: "products__image"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Card.jsx",
                      lineNumber: 40,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/Card.jsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 33,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "products__info", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "products__name", children: product.title }, void 0, !1, {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 60,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 59,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "products__price", children: [
                  "$",
                  product.price
                ] }, void 0, !0, {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.Form, { method: "post", className: "products__form", children: [
                  Object.keys(product).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "input",
                    {
                      type: "hidden",
                      name: key,
                      value: product[key]
                    },
                    key,
                    !1,
                    {
                      fileName: "app/components/Card.jsx",
                      lineNumber: 66,
                      columnNumber: 19
                    },
                    this
                  )),
                  shouldShowAddToCart && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "input",
                      {
                        type: "number",
                        name: "quantity",
                        defaultValue: 1,
                        min: 1,
                        max: 10,
                        className: "products__quantity"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Card.jsx",
                        lineNumber: 75,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "button",
                      {
                        type: "submit",
                        className: `products__button ${carts != null && carts.some(
                          (cart) => cart === product._id || cart._id === product._id
                        ) ? "products__button--added" : ""}`,
                        name: "_action",
                        value: "addToCart",
                        children: carts != null && carts.some((cart) => cart._id === product._id) ? "Add more" : "Add to cart"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/Card.jsx",
                        lineNumber: 83,
                        columnNumber: 21
                      },
                      this
                    )
                  ] }, void 0, !0, {
                    fileName: "app/components/Card.jsx",
                    lineNumber: 74,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "button",
                    {
                      type: "submit",
                      name: "_action",
                      value: "removeFromCart",
                      disabled: !(carts != null && carts.some((cart) => cart._id === product._id)),
                      className: "products__button--remove",
                      title: "Remove from cart",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M6 18L18 6M6 6l12 12"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/Card.jsx",
                              lineNumber: 117,
                              columnNumber: 21
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/Card.jsx",
                          lineNumber: 110,
                          columnNumber: 19
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Card.jsx",
                      lineNumber: 102,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Card.jsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            ]
          },
          product._id,
          !0,
          {
            fileName: "app/components/Card.jsx",
            lineNumber: 27,
            columnNumber: 11
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/Card.jsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Card.jsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
var Card_default = Card;

// app/styles/card.css
var card_default = "/build/_assets/card-AURSJZNI.css";

// app/routes/products/index.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function links3() {
  return [
    { rel: "stylesheet", href: sidebar_filters_default },
    { rel: "stylesheet", href: products_default2 },
    { rel: "stylesheet", href: card_default }
  ];
}
async function loader3({ request }) {
  let form = await products_default.find(), url = new URL(request.url), category = url.searchParams.getAll("category"), min = url.searchParams.get("min"), max = url.searchParams.get("max"), price = min || max ? { $gte: min || 0, $lte: max || 999999 } : null, gender = url.searchParams.get("gender"), cart = (await getSession(request.headers.get("Cookie"))).get("cart") || [];
  if (category || price) {
    let filteredData = await products_default.find({
      category: category.length ? { $in: category } : { $exists: !0 },
      price: price || { $exists: !0 },
      gender: gender || { $exists: !0 }
    });
    return (0, import_node4.json)({ form: filteredData, addedToCartProducts: cart });
  }
  return (0, import_node4.json)({ form, addedToCartProducts: cart });
}
async function action({ request, params }) {
  let formData = await request.formData(), { _action } = Object.fromEntries(formData.entries());
  if (_action === "addToCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), cart = session.get("cart") || [];
    return cart.filter((item) => item._id === form._id).length ? cart.map((item) => (item._id === form._id && (item.quantity = parseInt(item.quantity) + parseInt(form.quantity)), item)) : cart.push(form), session.set("cart", cart), (0, import_node4.json)(
      { cart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  if (_action === "removeFromCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), updatedCart = (session.get("cart") || []).filter((item) => item._id !== form._id);
    return session.set("cart", updatedCart), (0, import_node4.json)(
      { cart: updatedCart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  return null;
}
function Products() {
  let data = (0, import_react9.useLoaderData)(), [isFilterShown, setIsFilterShown] = import_react10.default.useState(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      SidebarFilter_default,
      {
        isFilterShown,
        setIsFilterShown
      },
      void 0,
      !1,
      {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Card_default,
      {
        data: data.form,
        carts: data.addedToCartProducts,
        shouldShowTitle: !1,
        isFilterShown
      },
      void 0,
      !1,
      {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 110,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/products/index.jsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
var products_default3 = Products;

// app/routes/cart/index.jsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action2,
  default: () => cart_default,
  links: () => links4,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function links4() {
  return [{ rel: "stylesheet", href: card_default }];
}
async function loader4({ request }) {
  let carts = (await getSession(request.headers.get("Cookie"))).get("cart") || [];
  return (0, import_node5.json)({ carts });
}
async function action2({ request }) {
  let formData = await request.formData(), { _action } = Object.fromEntries(formData.entries());
  if (_action === "addToCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), cart = session.get("cart") || [];
    return cart.filter((item) => item._id === form._id).length ? cart.map((item) => (item._id === form._id && (item.quantity = parseInt(item.quantity) + parseInt(form.quantity)), item)) : cart.push(form), session.set("cart", cart), (0, import_node5.json)(
      { cart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  if (_action === "removeFromCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), updatedCart = (session.get("cart") || []).filter((item) => item._id !== form._id);
    return session.set("cart", updatedCart), (0, import_node5.json)(
      { cart: updatedCart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  return null;
}
function Cart2() {
  let data = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: data.carts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    Card_default,
    {
      data: data.carts,
      shouldShowTitle: !1,
      carts: data.carts,
      shouldShowAddToCart: !1
    },
    void 0,
    !1,
    {
      fileName: "app/routes/cart/index.jsx",
      lineNumber: 77,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Cart is empty" }, void 0, !1, {
      fileName: "app/routes/cart/index.jsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/products", children: "Go to products" }, void 0, !1, {
      fileName: "app/routes/cart/index.jsx",
      lineNumber: 86,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart/index.jsx",
    lineNumber: 84,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/cart/index.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
var cart_default = Cart2;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action3,
  default: () => Index,
  links: () => links5,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-AJ5NRWXH.css";

// app/assets/nike.jpg
var nike_default = "/build/_assets/nike-G37O4RDL.jpg";

// app/routes/index.jsx
var import_framer_motion6 = require("framer-motion"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
async function loader5({ request }) {
  let session = await getSession(request.headers.get("Cookie")), [top, shoes] = await Promise.all([
    await products_default.find({ category: "top" }).limit(3),
    await products_default.find({ category: "shoes" }).limit(3)
  ]), carts = session.get("cart") || [];
  return (0, import_node6.json)({ top, shoes, carts });
}
async function action3({ request, params }) {
  let formData = await request.formData(), { _action } = Object.fromEntries(formData.entries());
  if (_action === "addToCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), cart = session.get("cart") || [];
    return cart.filter((item) => item._id === form._id).length ? cart.map((item) => (item._id === form._id && (item.quantity = parseInt(item.quantity) + parseInt(form.quantity)), item)) : cart.push(form), session.set("cart", cart), (0, import_node6.json)(
      { cart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  if (_action === "removeFromCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), updatedCart = (session.get("cart") || []).filter((item) => item._id !== form._id);
    return session.set("cart", updatedCart), (0, import_node6.json)(
      { cart: updatedCart },
      {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      }
    );
  }
  return null;
}
function links5() {
  return [
    { rel: "stylesheet", href: home_default },
    { rel: "stylesheet", href: card_default }
  ];
}
function Index() {
  let data = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_framer_motion6.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { className: "hero-image", src: nike_default, alt: "plant" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container__content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "container__title", children: [
          "Incredible Selection, Unbeatable Prices \u2013 Get Ready to Fall in Love with",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: " Recommerce" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 96,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react12.Link, { to: "/products", className: "container__button", children: "Shop Now" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { className: "products", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card_default, { data: data.top, carts: data.carts }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card_default, { data: data.shoes, carts: data.carts }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0d56c100", entry: { module: "/build/entry.client-E7AFZTPC.js", imports: ["/build/_shared/chunk-BFJBBPET.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6OOKC2UZ.js", imports: ["/build/_shared/chunk-K6D5RIVX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart/index": { id: "routes/cart/index", parentId: "root", path: "cart", index: !0, caseSensitive: void 0, module: "/build/routes/cart/index-M24TZOCY.js", imports: ["/build/_shared/chunk-LRSM7N43.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GH3G53HB.js", imports: ["/build/_shared/chunk-LRSM7N43.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/$slug": { id: "routes/products/$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products/$slug-K7FQDTWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-DFWG7SYO.js", imports: ["/build/_shared/chunk-LRSM7N43.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-0D56C100.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products/$slug": {
    id: "routes/products/$slug",
    parentId: "root",
    path: "products/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/cart/index": {
    id: "routes/cart/index",
    parentId: "root",
    path: "cart",
    index: !0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
