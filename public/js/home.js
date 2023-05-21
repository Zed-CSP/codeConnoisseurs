document.addEventListener('DOMContentLoaded', () => {
    const postCards = document.querySelectorAll('.post-card');
  
    postCards.forEach((card) => {
        card.addEventListener('click', () => {
            const postId = card.id;
        // ADD ROUTE TO POST PAGE
            console.log('Clicked on post:', postId);
            localStorage.setItem('postId', postId);
            window.location.href = '/post';
        });
    });
});