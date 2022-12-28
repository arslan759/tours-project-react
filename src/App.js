import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    const url = "https://course-api.com/react-tours-project";

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4>No tours to display</h4>
        <Button onClick={() => fetchTours()} variant="primary">
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
