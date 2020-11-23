import "./Container.css";

const Container = ({ bgColor, title, body, children }) => {
  return (
    <section
      className="container"
      style={{
        backgroundSize: "cover",
        backgroundColor: bgColor,
      }}
    >
      <h1> {title} </h1>
      <p> {body} </p>

      {children}
    </section>
  );
};

export default Container;
