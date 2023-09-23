export default function displayData(data) {
  const app = document.getElementById("app");
  const p = document.createElement("p");
  p.textContent = data.quote;

  app.append(p);
}
