import "./styles/app.css";
import Header from "./components/Header";
import TopicForm from "./components/TopicForm";
import { useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);

  const addTopic = (newTopic) => {
    setTopics([...topics, newTopic]);
  };

  return (
    <div className="container">
      <Header />
      <TopicForm addTopic={addTopic} />

      <h3>Topics</h3>

      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;