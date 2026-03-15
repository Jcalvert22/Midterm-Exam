async function handleSubmit(event) {
  event.preventDefault();
  const userName = document.getElementById('userName').value;
  const response = await fetch('/api/get-name', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userName })
  });
  const result = await response.json();
  if (result.name) {
    document.getElementById('result').textContent = `${result.name} ${result.emoji}`;
  } else {
    document.getElementById('result').textContent = result.error || 'Not found';
  }
}

async function initData() {
  const response = await fetch('/api/init-emoji');
  const result = await response.json();
  document.getElementById('init-status').textContent = result.message || 'Done';
}

document.getElementById('nameForm').addEventListener('submit', handleSubmit);
