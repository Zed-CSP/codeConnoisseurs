loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');
    const body = {username, password};
    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
});

