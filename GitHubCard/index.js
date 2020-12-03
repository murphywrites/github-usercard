/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const githubData = axios.get(URL =  'https://api.github.com/users/murphywrites')
.then( response => {
  return response.data
})
.catch( err => {
  console.log(err);
  // deal with the error in here
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function buildDom(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const userImg = document.createElement('img');
  userImg.src = obj.avatar_url;
  cardDiv.appendChild(userImg);
  const cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add('card-info');
  cardDiv.appendChild(cardInfoDiv);
  const nameOfUser = document.createElement('h3');
  nameOfUser.classList.add('name');
  nameOfUser.textContent=obj.name
  cardInfoDiv.appendChild(nameOfUser);
  const username = document.createElement('p');
  username.classList.add('name');
  username.textContent=obj.name
  cardInfoDiv.appendChild(username);

  const userLocation = document.createElement('p');
  userLocation.textContent=`Location= ${obj.location}`
  cardInfoDiv.appendChild(userLocation);

  const userProfileHeading = document.createElement('p');
  userProfileHeading.textContent="Profile: "
  cardInfoDiv.appendChild(userProfileHeading);

  const profLink = document.createElement('a');
  profLink.href = obj.url ;
  profLink.textContent = obj.url ;
  userProfileHeading.appendChild(profLink);
  // <a href={address to users github page}>{address to users github page}</a>

  const userFollowers = document.createElement('p');
  userFollowers.textContent="Followers: "+obj.followers
  cardInfoDiv.appendChild(userFollowers);
  // <p>Followers: {users followers count}</p>
  
  const userFollowing = document.createElement('p');
  userFollowing.textContent="Following: "+obj.following
  cardInfoDiv.appendChild(userFollowing);
  // <p>Following: {users following count}</p>
  
  const userBio = document.createElement('p');
  userBio.textContent="Bio: "+obj.bio;
  cardInfoDiv.appendChild(userBio);
  // <p>Bio: {users bio}</p>
return cardDiv;
}

const githubCard = buildDom(githubData);
const cardsContainer = document.querySelector('.cards');
cardsContainer.appendChild(githubCard);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
