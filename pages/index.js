import { useState, useEffect } from "react";
import Layout from "../components/layout";
import Filter from "../components/filter";
import Card from "../components/card";
import Axios from "axios";

const Index = () => {
  const [currentFilter, setCurrentFilter] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("/api/products")
      .then(response => {
        const data = response.data;
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentFilter]);

  return (
    <Layout>
      <h1 className="text-green-800 text-2xl text-center font-semibold py-2">
        Seleccionar tu experiencia
      </h1>
      <Filter active={currentFilter} setFilter={setCurrentFilter} />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between font-nunito">
          {products
            .filter(item => {
              if (!currentFilter) {
                return true;
              }

              return item.category.indexOf(currentFilter) !== -1;
            })
            .map((item, index) => (
              <Card
                key={item.name}
                name={item.name}
                description={item.description}
                image={item.image}
                url={item.url}
                category={item.category}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
