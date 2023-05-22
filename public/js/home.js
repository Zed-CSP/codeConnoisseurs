
document.addEventListener('DOMContentLoaded', () => {
    // get calue of the usercard id
    // const userCards = document.querySelectorAll('.author');
    // userCards.forEach((card) => {
    //     card.addEventListener('click', (e) => {
    //         e.stopPropagation();
    //         const userId = card.id;
    //         console.log('Clicked on user:', userId);
    //         window.location.href = `/profile/${userId}`;
    //     });
    // });


    const postCards = document.querySelectorAll('.post-card');
  
    postCards.forEach((card) => {
        card.addEventListener('click', () => {
            const postId = card.id;
        // ADD ROUTE TO POST PAGE
            console.log('Clicked on post:', postId);
            window.location.href = `/recipe/${postId}`;
        });
    });

    
});