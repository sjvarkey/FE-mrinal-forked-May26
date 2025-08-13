function checkAge(age) {
  if (age < 18) {
    throw "Underage!"; // Throws a string
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (err) {
  console.error("Error caught:", err);
}