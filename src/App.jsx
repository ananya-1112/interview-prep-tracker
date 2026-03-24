import "./styles/app.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TopicForm from "./components/TopicForm";
import TopicItem from "./components/TopicItem";

function App() {

 const [topics, setTopics] = useState(() => {
  const savedTopics = localStorage.getItem("topics");
  return savedTopics ? JSON.parse(savedTopics) : [];
});

  const [filter, setFilter] = useState("all");

  const addTopic = (newTopic) => {
  const topicObj = {
    text: newTopic,
    completed: false,
  };

  setTopics([...topics, topicObj]);
};

const toggleComplete = (indexToToggle) => {
  const updatedTopics = topics.map((topic, index) => {
    if (index === indexToToggle) {
      return { ...topic, completed: !topic.completed };
    }
    return topic;
  });

  setTopics(updatedTopics);
};

const deleteTopic = (indexToDelete) => {
  const updatedTopics = topics.filter((_, index) => index !== indexToDelete);
  setTopics(updatedTopics);
};

const filteredTopics = topics.filter((topic) => {
  if (filter === "completed") return topic.completed;
  if (filter === "pending") return !topic.completed;
  return true;
});


  useEffect(() => {
  localStorage.setItem("topics", JSON.stringify(topics));
}, [topics]);

  return (
    <div className="container">
      <Header />
      <TopicForm addTopic={addTopic} />

      <h3>Topics</h3>

       <div>
  <button style={{ fontWeight: filter === "all" ? "bold" : "normal" }} onClick={() => setFilter("all")}>All</button>
  <button style={{ fontWeight: filter === "completed" ? "bold" : "normal" }} onClick={() => setFilter("completed")}>Completed</button>
  <button style={{ fontWeight: filter === "pending" ? "bold" : "normal" }} onClick={() => setFilter("pending")}>Pending</button>
</div>

     <ul>
  {filteredTopics.map((topic, index) => (
    <TopicItem
      key={index}
      topic={topic}
      index={index}
      deleteTopic={deleteTopic}
      toggleComplete={toggleComplete}
    />
  ))}

 
</ul>
    </div>
  );
}

export default App;