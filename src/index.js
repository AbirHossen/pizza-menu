import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        //react fragments
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. Al from
            our stone over,all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
//destructing props
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //conditional rendering with multiple return
  // if (pizzaObj.soldOut) return null;
  return (
    <li class={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // const str =
  //   hour >= openHour && hour <= closeHour ? "We are open!" : "We are closed!";
  // alert(str);

  // return React.createElement("footer", null, "We're currently open!");

  //IF I HAD TO MUST USE IF ELSE THEN USE IT OUTSIDE FSX AND INCLUDE IT IN A {}
  // let msg = "";
  // if (isOpen) {
  //   msg = "We're open until" + closeHour + ":00. Come visit us or order oline.";
  // } else {
  //   msg =
  //     "We are happy to welcome you betweetn " +
  //     openHour +
  //     ":00 to " +
  //     closeHour +
  //     ":00.";
  // }
  // return (
  //   <footer className="footer">
  //     <p>{msg}</p>
  //   </footer>
  // );

  // if (!isOpen)
  //   return (
  //     <p>
  //       We are happy to welcome you betweetn {openHour}:00 to {closeHour}:00.
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        //extracting JSX into a new component
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We are happy to welcome you betweetn {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
//destructing props
function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 to {closeHours}:00. Come visit us or
        order oline.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
