const USER_URL = 'https://jsonplaceholder.typicode.com/users/1';
console.log("🛰 Requesting user data...");
fetch(USER_URL)
 .then(response => {
 if (!response.ok) throw new Error("User not found");
 return response.json();
 })
 .then(user => {
 console.log(`✅ Name: ${user.name} | City: ${user.address.city}`);
 })
 .catch(err => console.error("❌ Fetch Error:", err.message));

 // Com Async/Await
 async function getMyTasks() {
 const TODO_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
 try {
 const response = await fetch(TODO_URL);
 if (!response.ok) throw new Error("Failed to load tasks");
 const tasks = await response.json();

 console.log("📋 YOUR TOP 5 TASKS:");
 tasks.forEach(task => {
 const status = task.completed ? "✅" : "⏳";
 console.log(`${status} ${task.title}`);
 });
 } catch (error) {
 console.error("❌ API Connection Issue:", error.message);
 }
}
getMyTasks();