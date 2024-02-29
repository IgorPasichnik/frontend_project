"use strict";
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => {
    return res.json();
})
    .then((data) => data.filter((currentUser) => {
    if (currentUser.id % 2 === 0)
        return true;
    else
        return false;
}))
    .then((data) => console.log(data));
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((resp) => {
    return resp.json();
})
    .then((data1) => data1.filter((currentPhoto) => {
    if (currentPhoto.title[0] === "a")
        return true;
    else
        return false;
}))
    .then((data1) => console.log(data1));
fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((response) => {
    return response.json();
})
    .then((data2) => data2.filter((currentAlbums) => {
    if (currentAlbums.id > 5)
        return true;
    else
        return false;
}))
    .then((data2) => console.log(data2));
