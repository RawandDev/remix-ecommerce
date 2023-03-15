import { Form } from "@remix-run/react";

function SidebarFilter() {
  return (
    <Form method="get">
      <div className="sidebar-container">
        <div className="price-filter">
          <p>Price</p>
          <span>MIN</span>
          <input type="number" name="min" id="price" />
          <span>MAX</span>
          <input type="number" name="max" id="price" />
        </div>
        <div className="category-filter">
          <p>Category</p>
          <label htmlFor="top">Top</label>
          <input type="checkbox" name="category" id="top" value="top" />
          <label htmlFor="bottom">Bottom</label>
          <input type="checkbox" name="category" id="bottom" value="bottom" />
          <label htmlFor="shoes">Shoes</label>
          <input type="checkbox" name="category" id="shoes" value="shoes" />
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
}

export default SidebarFilter;
