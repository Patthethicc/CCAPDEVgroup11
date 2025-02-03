export function getRandomDeadline() {
  const now = new Date();
  const randomOffset = Math.floor(Math.random() * (60 + 60 + 1)); // -60 to +60 days
  const deadline = new Date();
  deadline.setDate(now.getDate() + randomOffset);
  deadline.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
  );
  return deadline.toISOString();
}

export function calculateDeadlineProgress(deadline) {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();
  const timeLeft = deadlineDate - currentDate;
  const totalDuration =
    deadlineDate - new Date(currentDate.setDate(currentDate.getDate() - 30)); // Assuming 30 days
  return timeLeft <= 0
    ? 100
    : Math.max(0, ((totalDuration - timeLeft) / totalDuration) * 100);
}

export function formatDeadline(deadline) {
  const deadlineDate = new Date(deadline);
  return `<span>Deadline: </span>${deadlineDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })}`;
}
