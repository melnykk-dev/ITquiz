const roles = {
  "Software Dev": 0,
  "Game Dev": 0,
  "Data": 0,
  "Cyber": 0,
  "DevOps": 0,
  "UI/UX": 0,
  "PM": 0,
  "SysAdmin": 0,
  "AI": 0,
  "Web Dev": 0
};

const fullNames = {
  "Software Dev": "Software Developer",
  "Game Dev": "Game Developer",
  "Data": "Data Analyst",
  "Cyber": "Cybersecurity Specialist",
  "DevOps": "DevOps Engineer",
  "UI/UX": "UI/UX Designer",
  "PM": "Project Manager",
  "SysAdmin": "System Administrator",
  "AI": "AI Specialist",
  "Web Dev": "Web Developer"
};

const descriptions = {
  "Software Dev": "You enjoy solving problems and building tools that help others.",
  "Game Dev": "You love turning fun ideas into real games that people can play.",
  "Data": "You’re curious and enjoy discovering patterns in numbers and charts.",
  "Cyber": "You want to protect people and companies from digital threats.",
  "DevOps": "You like making sure apps and websites run fast and without crashes.",
  "UI/UX": "You love making things look good and feel great to use.",
  "PM": "You enjoy organizing things and helping teams stay on track.",
  "SysAdmin": "You want to make sure computers and systems always work smoothly.",
  "AI": "You’re excited about teaching computers to think and learn.",
  "Web Dev": "You enjoy making websites that people use every day."
};

const extraInfo = {
  "Software Dev": {
    salary: "$65k–$85k",
    companies: ["Shopify", "FreshBooks", "JuniorDev.io"],
    tools: ["JavaScript", "Python", "GitHub"],
    path: "Build simple apps, take beginner coding courses, and join open source."
  },
  "Game Dev": {
    salary: "$55k–$75k",
    companies: ["Ubisoft", "Game Jams", "Behaviour Interactive"],
    tools: ["Unity", "C#", "Godot"],
    path: "Start with a small game idea, watch tutorials, and join game jams."
  },
  "Data": {
    salary: "$60k–$80k",
    companies: ["Startups", "Banks", "Government"],
    tools: ["Excel", "Python", "PowerBI"],
    path: "Learn to organize data, use spreadsheets, and create simple charts."
  },
  "Cyber": {
    salary: "$70k–$100k",
    companies: ["CrowdStrike", "CyberStart", "Field Effect"],
    tools: ["VPNs", "Firewalls", "Password tools"],
    path: "Learn online safety, take courses, and try CTF games."
  },
  "DevOps": {
    salary: "$75k–$105k",
    companies: ["Amazon", "SaaS startups", "DigitalOcean"],
    tools: ["Linux", "Cloud", "Docker"],
    path: "Understand servers and automate simple deployments."
  },
  "UI/UX": {
    salary: "$60k–$80k",
    companies: ["Freelance", "Agencies", "Startups"],
    tools: ["Figma", "Canva", "Adobe XD"],
    path: "Redesign your favorite apps, share mockups, get feedback."
  },
  "PM": {
    salary: "$70k–$90k",
    companies: ["Agencies", "Tech teams", "Startups"],
    tools: ["Trello", "Notion", "Slack"],
    path: "Learn agile basics, lead small projects, use planning tools."
  },
  "SysAdmin": {
    salary: "$60k–$80k",
    companies: ["Schools", "Hospitals", "Corporate IT"],
    tools: ["WiFi routers", "Windows", "Scripting"],
    path: "Learn how computers connect and solve common issues."
  },
  "AI": {
    salary: "$75k–$110k",
    companies: ["OpenAI", "AI startups", "Research labs"],
    tools: ["Python", "ChatGPT", "ML models"],
    path: "Explore smart tools and create fun AI experiments."
  },
  "Web Dev": {
    salary: "$60k–$85k",
    companies: ["Remote jobs", "Startups", "Freelance"],
    tools: ["HTML", "CSS", "React"],
    path: "Make websites, take beginner courses, and freelance."
  }
};

const questions = [
  {
    q: "Which sounds most fun?",
    a: {
      "Making a website": ["Web Dev"],
      "Creating a game": ["Game Dev"],
      "Designing an app": ["UI/UX"],
      "Solving puzzles": ["Software Dev"]
    }
  },
  {
    q: "In a team project, you’d love to...",
    a: {
      "Plan and organize": ["PM"],
      "Make things pretty": ["UI/UX"],
      "Write the code": ["Software Dev"],
      "Protect the app": ["Cyber"]
    }
  },
  {
    q: "You enjoy...",
    a: {
      "Finding patterns": ["Data"],
      "Creating websites": ["Web Dev"],
      "Keeping things secure": ["Cyber"],
      "Teaching machines": ["AI"]
    }
  },
  {
    q: "Pick a tool to master:",
    a: {
      "Design software": ["UI/UX"],
      "Website builder": ["Web Dev"],
      "Planning app": ["PM"],
      "AI trainer": ["AI"]
    }
  },
  {
    q: "Your dream job?",
    a: {
      "Fixing tech in offices": ["SysAdmin"],
      "Building software": ["Software Dev"],
      "Making games": ["Game Dev"],
      "Running stable websites": ["DevOps"]
    }
  },
  {
    q: "How do you like to work?",
    a: {
      "Alone, building things": ["Software Dev", "AI"],
      "With teams, managing stuff": ["PM"],
      "Drawing/sketching ideas": ["UI/UX"],
      "Behind-the-scenes tech": ["DevOps", "SysAdmin"]
    }
  }
];

let current = 0;
let answers = [];

document.getElementById("start-btn").onclick = () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  renderQuestion();
};

document.getElementById("next-btn").onclick = () => {
  const selected = document.querySelector(".option-btn.selected");
  if (!selected) return alert("Please select an answer!");
  answers.push(selected.dataset.value);
  current++;
  if (current >= questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
};

document.getElementById("restart-btn").onclick = () => {
  current = 0;
  answers = [];
  Object.keys(roles).forEach(r => roles[r] = 0);
  document.getElementById("result").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
};

function renderQuestion() {
  const q = questions[current];
  document.getElementById("question-title").innerText = q.q;
  const container = document.getElementById("options");
  container.innerHTML = "";

  for (const text in q.a) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = text;
    btn.dataset.value = text;
    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    };
    container.appendChild(btn);
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  answers.forEach((val, i) => {
    const roleList = questions[i].a[val];
    roleList.forEach(role => roles[role]++);
  });

  const topRole = Object.keys(roles).reduce((a, b) => roles[a] > roles[b] ? a : b);
  const total = answers.length;
  const percentages = {};
  Object.keys(roles).forEach(role => {
    percentages[role] = Math.round((roles[role] / total) * 100);
  });

  const info = extraInfo[topRole];
  const title = fullNames[topRole];
  document.getElementById("final-role").innerText = title;
  document.getElementById("role-description").innerHTML = `
    <p><strong>${descriptions[topRole]}</strong></p>
    <p><strong>💰 Salary:</strong> ${info.salary}</p>
    <p><strong>🏢 Companies:</strong> ${info.companies.join(', ')}</p>
    <p><strong>🛠 Tools:</strong> ${info.tools.join(', ')}</p>
    <p><strong>📚 Roadmap:</strong> ${info.path}</p>
  `;

  new Chart(document.getElementById("chart"), {
    type: "radar",
    data: {
      labels: Object.keys(roles),
      datasets: [{
        label: "Your Match %",
        data: Object.values(percentages),
        backgroundColor: "rgba(255, 235, 59, 0.2)",
        borderColor: "#ffeb3b",
        borderWidth: 2,
        pointBackgroundColor: "#ffeb3b"
      }]
    },
    options: {
      responsive: false,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 20,
            color: '#ffeb3b',
            backdropColor: 'transparent'
          },
          pointLabels: {
            color: '#ffeb3b',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          grid: {
            color: '#555'
          }
        }
      }
    }
  });
}
