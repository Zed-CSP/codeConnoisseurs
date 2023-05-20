

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
    const formData = new FormData(document.querySelector('#signup-form'));
    const first_name = formData.get('firstName');
    const last_name = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const body = {first_name, last_name, email, password};
    console.log(first_name, last_name, email, password, body);

    try {
      const res = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
      });
      const data = await res.json();
      console.log(data);
      if(res.ok) {
        document.location.replace('/recipe/add');
      } else {
        alert(data.message);
      }
      } catch (error) {
      console.error(error);
      };

    });
    
   