import { Form } from "@remix-run/react";

function SidebarFilter({ isFilterShown, setIsFilterShown }) {
  return (
    <Form
      method="get"
      className={`sidebar-form ${!isFilterShown ? "hidden" : ""}`}
    >
      {isFilterShown ? (
        <div className="sidebar-container">
          <div className="price-filter">
            <p className="price-filter__title">Price</p>
            <div className="price-filter__range">
              <span>MIN</span>
              <input type="number" name="min" id="price" />
            </div>
            <div className="price-filter__range">
              <span>MAX</span>
              <input type="number" name="max" id="price" />
            </div>
          </div>
          <div className="category-filter">
            <p className="price-filter__title">Category</p>
            <div className="category-filter__type">
              <input type="checkbox" name="category" id="top" value="top" />
              <label htmlFor="top">Top</label>
            </div>
            <div className="category-filter__type">
              <input
                type="checkbox"
                name="category"
                id="bottom"
                value="bottom"
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
            <div className="category-filter__type">
              <input type="checkbox" name="category" id="shoes" value="shoes" />
              <label htmlFor="shoes">Shoes</label>
            </div>
          </div>
          <div className="gender-filter">
            <p className="price-filter__title">Gender</p>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <button type="submit">Submit</button>
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
