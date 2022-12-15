import React, { useState } from "react";
import Table, { TableStyle } from "./components/table";
import testData from "./data.json";

function App() {
  const [tableStyle, setTableStyle] = useState<TableStyle>(TableStyle.StyleOne);

  return (
    <div className="App">
      <button
        onClick={() =>
          setTableStyle(
            tableStyle === TableStyle.StyleOne
              ? TableStyle.StyleTwo
              : TableStyle.StyleOne
          )
        }>
        Toggle Style
      </button>

      <div className="tableContainer">
        <Table title="Seasoncard Holder" data={testData} style={tableStyle} />
      </div>
    </div>
  );
}

export default App;
