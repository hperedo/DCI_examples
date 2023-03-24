////lets take input value and put it into localStorage





const input = document.querySelector('input')

 

const oldValue = localStorage.getItem("inputValue");
console.log(oldValue);

if (oldValue) {
  input.value = oldValue;
}




const url = "https://jsonplaceholder.typicode.com/posts";

const response = await fetch(url);
const posts = await response.json();
//   console.log(posts)

posts.forEach((post) => {
  const li = document.createElement("li");

  li.innerText = post.title;

  document.getElementById("posts").append(li);
});

document.getElementById("submit").addEventListener("click", () => {
  const text = document.querySelector("input").value;




  localStorage.setItem("inputValue", text);




  const config = {
    method: "POST",
    body: JSON.stringify({
      title: text,
      body: "dlkvndoiv ndfn oipjivdf",
      userId: 1,
    }),

    headers: {
      "Content-type": "application/json",
    },
  };

  fetch(url, config)
    .then((response) => response.json())
    .then((post) => {
      const li = document.createElement("li");

      li.innerText = post.title;
      document.getElementById("posts").prepend(li);
    })
    .catch((err) => {
      console.log(err);
    });
});
