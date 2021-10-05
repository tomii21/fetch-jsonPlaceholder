const request  = async () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
 .then(data => data.json())
    .then(result => result.forEach(e => {
        return(
            document.getElementById('posts').innerHTML +=
            '<li> <strong>Id:</strong> '+e.userId+'</li><li><strong>Title:</strong> '+e.title+'</li><li><strong>Body:</strong> '+e.body+'</li>'
        )}))
    .catch(err => console.log(err))
}

request()