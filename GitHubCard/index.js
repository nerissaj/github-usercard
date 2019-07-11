/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
           
*/
const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/nerissaj')
.then(data =>{
  console.log('response', data)

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


 
 const img = data.data.avatar_url


 const name = data.data.name
 const userName = data.data.login
const userLoc = data.data.location

const a = data.data.avatar_url
const followers = data.data.followers
const following = data.data.following
const bio = data.data.bio
const element = createGithubCard(data)


cards.appendChild(element)
})
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray[0] = "tetondan";
followersArray[1] = "dustinmyers";
followersArray[2] = "justsml";
followersArray[3] = "luishrd";


//document.querySelector('.username').textContent = 
//followersArray.forEach
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function createGithubCard(data){
const card = document.createElement('div')
const img = document.createElement('img')
const cardInfo = document.createElement('div')
const name = document.createElement('h3')
const userName = document.createElement('p')
const userLoc = document.createElement('p')
const profile = document.createElement('p')
const a = document.createElement('a')
a.href="https://avatars0.githubusercontent.com/u/24694613?v=4"
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')
card.classList.add('card')
img.classList.add('user-img')
img.src =`${data.data.avatar_url}`
cardInfo.classList.add('card-info')
name.classList.add('name')
userName.classList.add('username')
userLoc.classList.add('location')
profile.classList.add('profile')
a.classList.add('a')
followers.classList.add('followers')
following.classList.add('following')
bio.classList.add('bio')
name.textContent=`${data.data.name}`
userName.textContent = `${data.data.login}`
userLoc.textContent =`${data.data.location}`
a.href = "https://avatars0.githubusercontent.com/u/24694613?v=4";
followers.textContent = `${data.data.followers}`
following.textContent =`${data.data.following}`
bio.textContent = `${data.data.bio}`

card.appendChild(img)
card.appendChild(cardInfo)
card.appendChild(name)
card.appendChild(userName)
card.appendChild(userLoc)
card.appendChild(profile)
card.appendChild(a)
card.appendChild(followers)
card.appendChild(following)
card.appendChild(bio)






return card
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
}