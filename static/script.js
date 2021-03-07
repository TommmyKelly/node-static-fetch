const fun = async () => {
  const response = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Tommy",
      job: "developer",
    }),
  });
  const data = await response.json();

  console.log(data);
};
