const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
///SELECTING DOM ELEMENTS

let btn = document.querySelector(".btn-open");
let form = document.querySelector(".fact-form");
let factsList = document.querySelector(".facts-list");

//CREATE DOM ELEMENTS: RENDER FACTS IN LIST
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();
async function loadFacts() {
  let res = await fetch(
    "https://ihpibeftrhmaucxunwez.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocGliZWZ0cmhtYXVjeHVud2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NTM4MjAsImV4cCI6MjA4MjAyOTgyMH0.VHseKkrGr98jTfJ3irt8JN57jIL9Ez7uxEtGrab24Z8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocGliZWZ0cmhtYXVjeHVud2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0NTM4MjAsImV4cCI6MjA4MjAyOTgyMH0.VHseKkrGr98jTfJ3irt8JN57jIL9Ez7uxEtGrab24Z8",
      },
    }
  );
  let data = await res.json();
  //const filteredData = data.filter((fact) => fact.category === "society");
  //console.log(data);
  createFactsList(data);
}

function createFactsList(dataArray) {
  let htmlArr = dataArray.map(
    (fact) => ` <li class="fact">
<p>
  ${fact.text}
  <a class="source" href="${fact.source}" target="_blank" >(Source)</a>
</p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }"
  >${fact.category}</span>


</li>`
  );
  let html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//TOGGLE VISIBILITY
btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "CLOSE";
  } else {
    form.classList.add("hidden");
    btn.textContent = "SHARE A FACT";
  }
});

console.dir(factsList);

// let allCategories = CATEGORIES.map((obj) => obj.name);
// console.log(allCategories);

// let factAges = initialFacts.map(
//   (el) => new Date().getFullYear() - el.createdIn
// );
// console.log(factAges.join("-"));
