fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((res: Response) => {
    return res.json();
  })
  .then((data: any[]) =>
    data.filter((currentUser) => {
      if (currentUser.id % 2 === 0) return true;
      else return false;
    })
  )
  .then((data: any[]) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
  .then((resp: Response) => {
    return resp.json();
  })
  .then((data1: any[]) =>
    data1.filter((currentPhoto) => {
      if (currentPhoto.title[0] === "a") return true;
      else return false;
    })
  )
  .then((data1: any[]) => console.log(data1));

fetch("https://jsonplaceholder.typicode.com/users/1/albums")
  .then((response: Response) => {
    return response.json();
  })
  .then((data2: any[]) =>
    data2.filter((currentAlbums) => {
      if (currentAlbums.id > 5) return true;
      else return false;
    })
  )
  .then((data2: any[]) => console.log(data2));
