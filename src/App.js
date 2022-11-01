function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </div>
  );
}

function ProductTable({ products }) {
  const fruit = [];
  const veg = [
    <ProductCategoryRow category={"Vegetables"} key={"Vegetables"} />
  ];
  fruit.push(<ProductCategoryRow category={"Fruit"} key={"Fruits"} />);

  products.forEach((x) => {
    if (x.category === "Fruits") {
      fruit.push(<ProductRow items={x} key={x.name} />);
    } else {
      veg.push(<ProductRow items={x} key={x.name} />);
    }
  });

  return (
    <div>
      <table>
        <th>
          <td>Name</td>
          <td>Price</td>
        </th>
        <tbody>
          {fruit}
          {veg}
        </tbody>
      </table>
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ items }) {
  return (
    <tr>
      <td>{items.name}</td>
      <td>{items.price}</td>
    </tr>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
