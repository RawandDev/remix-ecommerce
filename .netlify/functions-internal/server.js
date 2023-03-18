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
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navbar({ carts }) {
  let activeClassName = ({ isActive }) => isActive ? "active" : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
            lineNumber: 17,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 16,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-links__li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { className: activeClassName, to: "/products", children: "Products" }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-links__li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.NavLink, { className: activeClassName, to: "/cart", children: "Cart" }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 27,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Navbar.jsx",
            lineNumber: 26,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: carts == null ? void 0 : carts.length }, void 0, !1, {
          fileName: "app/components/Navbar.jsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 8,
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
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
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

// app/routes/products/index.jsx
var products_exports = {};
__export(products_exports, {
  action: () => action,
  default: () => products_default3,
  links: () => links2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_react9 = __toESM(require("react"));

// app/components/SidebarFilter.jsx
var import_react5 = require("@remix-run/react"), import_react6 = __toESM(require("react")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function SidebarFilter({ isFilterShown, setIsFilterShown }) {
  let ref = import_react6.default.useRef(null), submit = (0, import_react5.useSubmit)(), [params] = (0, import_react5.useSearchParams)();
  function handleChange() {
    ref && submit(ref.current, {
      replace: !0
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react5.Form,
    {
      method: "get",
      className: `sidebar-form ${isFilterShown ? "" : "hidden"}`,
      ref,
      onChange: handleChange,
      children: [
        isFilterShown ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sidebar-container", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "price-filter", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "price-filter__title", children: "Price" }, void 0, !1, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 27,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "price-filter__range", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "MIN" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 29,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                  lineNumber: 30,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 28,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "price-filter__range", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "MAX" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 38,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                  lineNumber: 39,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 37,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SidebarFilter.jsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "category-filter", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "price-filter__title", children: "Category" }, void 0, !1, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 48,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "category-filter__type", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  name: "category",
                  id: "top",
                  value: "top",
                  defaultChecked: params.get("category") === "top"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 50,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "top", children: "Top" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 57,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "category-filter__type", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  name: "category",
                  id: "bottom",
                  value: "bottom",
                  defaultChecked: params.get("category") === "bottom"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 60,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "bottom", children: "Bottom" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 67,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 59,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "category-filter__type", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  name: "category",
                  id: "shoes",
                  value: "shoes",
                  defaultChecked: params.get("category") === "shoes"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/SidebarFilter.jsx",
                  lineNumber: 70,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "shoes", children: "Shoes" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 77,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SidebarFilter.jsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "gender-filter", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "price-filter__title", children: "Gender" }, void 0, !1, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { name: "gender", defaultValue: params.get("gender"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", children: "All" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 83,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "male", children: "Male" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 84,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "female", children: "Female" }, void 0, !1, {
                fileName: "app/components/SidebarFilter.jsx",
                lineNumber: 85,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/SidebarFilter.jsx",
              lineNumber: 82,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/SidebarFilter.jsx",
            lineNumber: 80,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/SidebarFilter.jsx",
          lineNumber: 25,
          columnNumber: 9
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                lineNumber: 101,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/SidebarFilter.jsx",
            lineNumber: 90,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SidebarFilter.jsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
var SidebarFilter_default = SidebarFilter;

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

// app/styles/sidebar-filters.css
var sidebar_filters_default = "/build/_assets/sidebar-filters-6LC6JEAR.css";

// app/styles/products.css
var products_default2 = "/build/_assets/products-6XCS2SSZ.css";

// app/components/Card.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Card({
  data,
  carts,
  shouldShowTitle = !0,
  isFilterShown,
  shouldShowAddToCart = !0
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: `products__container products__container--${isFilterShown ? "" : "hidden"}`,
      children: [
        shouldShowTitle && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "products__title", children: {
          top: "Top Products",
          shoes: "Shoes"
        }[data[0].category] }, void 0, !1, {
          fileName: "app/components/Card.jsx",
          lineNumber: 22,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "products__list", children: data.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "products__item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              src: product.image,
              alt: product.title,
              className: "products__image"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Card.jsx",
              lineNumber: 28,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Card.jsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "products__info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Link, { to: `/products/${product._id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "products__name", children: product.title }, void 0, !1, {
              fileName: "app/components/Card.jsx",
              lineNumber: 36,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/Card.jsx",
              lineNumber: 35,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "products__price", children: [
              "$",
              product.price
            ] }, void 0, !0, {
              fileName: "app/components/Card.jsx",
              lineNumber: 38,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react7.Form, { method: "post", children: [
              Object.keys(product).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                  lineNumber: 42,
                  columnNumber: 19
                },
                this
              )),
              shouldShowAddToCart && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                    lineNumber: 51,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                    lineNumber: 59,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/Card.jsx",
                lineNumber: 50,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "button",
                {
                  type: "submit",
                  name: "_action",
                  value: "removeFromCart",
                  disabled: !(carts != null && carts.some((cart) => cart._id === product._id)),
                  children: "Remove cart"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Card.jsx",
                  lineNumber: 78,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Card.jsx",
              lineNumber: 39,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Card.jsx",
            lineNumber: 34,
            columnNumber: 13
          }, this)
        ] }, product._id, !0, {
          fileName: "app/components/Card.jsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/components/Card.jsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Card.jsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}
var Card_default = Card;

// app/styles/card.css
var card_default = "/build/_assets/card-BRLWFRAC.css";

// app/routes/products/index.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function links2() {
  return [
    { rel: "stylesheet", href: sidebar_filters_default },
    { rel: "stylesheet", href: products_default2 },
    { rel: "stylesheet", href: card_default }
  ];
}
async function loader2({ request }) {
  let form = await products_default.find(), url = new URL(request.url), category = url.searchParams.getAll("category"), min = url.searchParams.get("min"), max = url.searchParams.get("max"), price = min || max ? { $gte: min || 0, $lte: max || 999999 } : null, gender = url.searchParams.get("gender"), cart = (await getSession(request.headers.get("Cookie"))).get("cart") || [];
  if (console.log(cart), category || price) {
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
    return console.log(cart.filter((item) => item._id === form._id)), cart.filter((item) => item._id === form._id).length ? (console.log("if", form, form._id), cart.map((item) => (item._id === form._id && (item.quantity = parseInt(item.quantity) + parseInt(form.quantity)), item))) : (console.log("else", form, form._id), cart.push(form)), session.set("cart", cart), (0, import_node4.json)(
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
  let data = (0, import_react8.useLoaderData)(), [isFilterShown, setIsFilterShown] = import_react9.default.useState(!0);
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      SidebarFilter_default,
      {
        isFilterShown,
        setIsFilterShown
      },
      void 0,
      !1,
      {
        fileName: "app/routes/products/index.jsx",
        lineNumber: 131,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
        lineNumber: 135,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/products/index.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
var products_default3 = Products;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index,
  links: () => links3,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/styles/home.css
var home_default = "/build/_assets/home-AJ5NRWXH.css";

// app/assets/nike.jpg
var nike_default = "/build/_assets/nike-G37O4RDL.jpg";

// app/routes/index.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  let session = await getSession(request.headers.get("Cookie")), [top, shoes] = await Promise.all([
    await products_default.find({ category: "top" }).limit(3),
    await products_default.find({ category: "shoes" }).limit(3)
  ]), carts = session.get("cart") || [];
  return (0, import_node5.json)({ top, shoes, carts });
}
async function action2({ request, params }) {
  let formData = await request.formData(), session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), cart = session.get("cart") || [];
  if (console.log(form), cart.includes(form._id)) {
    let index = cart.indexOf(form._id);
    index > -1 && (console.log("splice"), cart.splice(index, 1));
  } else
    cart.push(form._id);
  return session.set("cart", cart), (0, import_node5.json)(
    { cart },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
function links3() {
  return [
    { rel: "stylesheet", href: home_default },
    { rel: "stylesheet", href: card_default }
  ];
}
function Index() {
  let data = (0, import_react10.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "hero-image", src: nike_default, alt: "plant" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container__content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "container__title", children: [
          "Incredible Selection, Unbeatable Prices \u2013 Get Ready to Fall in Love with",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { children: " Recommerce" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.Link, { to: "/products", className: "container__button", children: "Shop Now" }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "products", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card_default, { data: data.top, carts: data.carts }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card_default, { data: data.shoes, carts: data.carts }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/routes/Cart.jsx
var Cart_exports = {};
__export(Cart_exports, {
  action: () => action3,
  default: () => Cart_default,
  links: () => links4,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function links4() {
  return [{ rel: "stylesheet", href: card_default }];
}
async function loader4({ request }) {
  let carts = (await getSession(request.headers.get("Cookie"))).get("cart") || [];
  return (0, import_node6.json)({ carts });
}
async function action3({ request, params }) {
  let formData = await request.formData(), { _action } = Object.fromEntries(formData.entries());
  if (_action === "addToCart") {
    let session = await getSession(request.headers.get("Cookie")), form = Object.fromEntries(formData.entries()), cart = session.get("cart") || [];
    return console.log(cart.filter((item) => item._id === form._id)), cart.filter((item) => item._id === form._id).length ? (console.log("if", form, form._id), cart.map((item) => (item._id === form._id && (item.quantity = parseInt(item.quantity) + parseInt(form.quantity)), item))) : (console.log("else", form, form._id), cart.push(form)), session.set("cart", cart), (0, import_node6.json)(
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
function Cart() {
  let data = (0, import_react11.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: data.carts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
      fileName: "app/routes/Cart.jsx",
      lineNumber: 97,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Cart is empty" }, void 0, !1, {
      fileName: "app/routes/Cart.jsx",
      lineNumber: 105,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react11.Link, { to: "/products", children: "Go to products" }, void 0, !1, {
      fileName: "app/routes/Cart.jsx",
      lineNumber: 106,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Cart.jsx",
    lineNumber: 104,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/Cart.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
var Cart_default = Cart;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a11a447b", entry: { module: "/build/entry.client-IMUS3UUL.js", imports: ["/build/_shared/chunk-X6CU6HJT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VHZYFPBU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Cart": { id: "routes/Cart", parentId: "root", path: "Cart", index: void 0, caseSensitive: void 0, module: "/build/routes/Cart-YRJQWVCA.js", imports: ["/build/_shared/chunk-7HAQQ5G5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CSTILF3J.js", imports: ["/build/_shared/chunk-7HAQQ5G5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-MNEGAA7Z.js", imports: ["/build/_shared/chunk-7HAQQ5G5.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-A11A447B.js" };

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
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Cart": {
    id: "routes/Cart",
    parentId: "root",
    path: "Cart",
    index: void 0,
    caseSensitive: void 0,
    module: Cart_exports
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
