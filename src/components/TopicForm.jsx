import { useState } from "react";

function TopicForm({ addTopic }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  addTopic(topic);

  setTopic("");
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter topic (e.g. DSA - Arrays)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TopicForm;