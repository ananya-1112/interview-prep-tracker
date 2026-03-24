function TopicItem({ topic, index, deleteTopic, toggleComplete }) {
  return (
    <li>
      <span
        onClick={() => toggleComplete(index)}
        style={{
          textDecoration: topic.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {topic.text}
      </span>

      <button onClick={() => deleteTopic(index)}>Delete</button>
    </li>
  );
}

export default TopicItem;