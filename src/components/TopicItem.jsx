function TopicItem({ topic, index, deleteTopic, toggleComplete }) {
  return (
    <li>
  <span
    onClick={() => toggleComplete(index)}
    style={{
      textDecoration: topic.completed ? "line-through" : "none",
      cursor: "pointer",
      flex: 1,
    }}
  >
    {topic.text}
  </span>

  <button
  onClick={() => deleteTopic(index)}
  style={{
   background: "var(--danger)",
    marginLeft: "10px",
  }}
>
  Delete
</button>
</li>
  );
}

export default TopicItem;