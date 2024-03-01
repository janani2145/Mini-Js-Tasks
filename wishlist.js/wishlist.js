const wishlistItems = [];
function updateWishlist() {
    const wishlistElement = document.getElementById('wishlist');
    wishlistElement.innerHTML = '';
    wishlistItems.forEach((item,i)=> {
        wishlistElement.innerHTML += `<li>${item} <button class="btn btn-danger mt-2 ms-3" onclick="removeFunction('${i}')"><i class="fa-solid fa-x text-white"></i></button></li>`;
    });
}
function addFunction(productName) {
    wishlistItems.push(productName);
    updateWishlist();
}
function removeFunction(i){
        wishlistItems.splice(i, 1);
        updateWishlist();
};