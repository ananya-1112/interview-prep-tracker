import "./styles/app.css";
import Header from "./components/Header";
import TopicForm from "./components/TopicForm";
import TopicItem from "./components/TopicItem";
import { useState } from "react";

function App() {
  const [topics, setTopics] = useState([]);

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

  return (
    <div className="container">
      <Header />
      <TopicForm addTopic={addTopic} />

      <h3>Topics</h3>

     <ul>
  {topics.map((topic, index) => (
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