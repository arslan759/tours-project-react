import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="container w-50 d-flex justify-content-center mt-5">
      <main>
        <div>
          <h1 className="text-center mb-4">Our Tours</h1>
        </div>
        <div>
          {tours.map((item) => {
            return <Tour key={item.id} {...item} removeTour={removeTour} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Tours;
