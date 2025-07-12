document.getElementById('startBtn').addEventListener('click', async () => {
  const name = document.getElementById('name').value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }

  try {
    const res = await fetch('/api/save-name', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });

    if (res.ok) {
      // Redirect to next page or show success message
      window.location.href = '/thank-you.html';
    } else {
      alert("Failed to save name.");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
});
