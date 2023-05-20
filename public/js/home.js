document.addEventListener('DOMContentLoaded', () => {
    const postCards = document.querySelectorAll('.post-card');
  
    postCards.forEach((card) => {
        card.addEventListener('click', () => {
            const postId = card.id;
            console.log('Clicked on post:', postId);
            window.location.href = `/recipe/${postId}`
        });
    });
});