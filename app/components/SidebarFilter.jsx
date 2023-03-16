import { Form, useSearchParams, useSubmit } from "@remix-run/react";
import React from "react";

function SidebarFilter({ isFilterShown, setIsFilterShown }) {
  const ref = React.useRef(null);
  const submit = useSubmit();
  const [params] = useSearchParams();

  function handleChange() {
    if (ref) {
      submit(ref.current, {
        replace: true,
      });
    }
  }

  return (
    <Form
      method="get"
      className={`sidebar-form ${!isFilterShown ? "hidden" : ""}`}
      ref={ref}
      onChange={handleChange}
    >
      {isFilterShown ? (
        <div className="sidebar-container">
          <div className="price-filter">
            <p className="price-filter__title">Price</p>
            <div className="price-filter__range">
              <span>MIN</span>
              <input
                type="number"
                name="min"
                id="price"
                defaultValue={params.get("min")}
              />
            </div>
            <div className="price-filter__range">
              <span>MAX</span>
              <input
                type="number"
                name="max"
                id="price"
                defaultValue={params.get("max")}
              />
            </div>
          </div>
          <div className="category-filter">
            <p className="price-filter__title">Category</p>
            <div className="category-filter__type">
              <input
                type="checkbox"
                name="category"
                id="top"
                value="top"
                defaultChecked={params.get("category") === "top"}
              />
              <label htmlFor="top">Top</label>
            </div>
            <div className="category-filter__type">
              <input
                type="checkbox"
                name="category"
                id="bottom"
                value="bottom"
                defaultChecked={params.get("category") === "bottom"}
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
            <div className="category-filter__type">
              <input
                type="checkbox"
                name="category"
                id="shoes"
                value="shoes"
                defaultChecked={params.get("category") === "shoes"}
              />
              <label htmlFor="shoes">Shoes</label>
            </div>
          </div>
          <div className="gender-filter">
            <p className="price-filter__title">Gender</p>
            <select name="gender" defaultValue={params.get("gender")}>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      ) : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="close-button"
        onClick={() => {
          setIsFilterShown((prev) => !prev);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Form>
  );
}

export default SidebarFilter;
