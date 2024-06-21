// import "./oneComponents.css";

function SecondComponent() {
  return (
    <div className="container">
      <div className="components">
        <div className="components_left">
          <div className="components_count">
            <span className="count_span">99</span>
          </div>
          <div className="components_title">
            <h2 className="title_sub_components">Add tags for solutions</h2>
            <p className="text_sub_components">
              Easier to search for solutions based on a specific stack.
            </p>
            <button className="components_btn">Enhancement</button>
          </div>
        </div>
        <div className="conponents_right">
          <span className="count_span">9</span>
        </div>
      </div>
    </div>
  );
}
export default SecondComponent;
