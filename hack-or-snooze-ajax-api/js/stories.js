"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);
  let showStar = Boolean(currentUser);
  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
      <div>
        ${showDeleteBtn ? getDeleteBtnHTML() : ""}
        ${showStar ? getStarHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <div class="story-author">by ${story.author}</div>
        <div class="story-user">posted by ${story.username}</div>
        <hr>
        </div>
    `);
}

function getDeleteBtnHTML() {
  return `
      <span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`;
}

function getStarHTML(story, user) {
  const isFavorite = user.isFavorite(story);
  const starType = isFavorite ? "fas" : "far";
  return `
      <span class="star">
        <i class="${starType} fa-star"></i>
      </span>`;
}

function putUserStoriesOnPage() {
  $myStories.empty();
  console.log(currentUser.ownStories.length);
  if (currentUser.ownStories.length === 0) {
    $myStories.append("<h5>No stories added by user yet!</h5>");
  } else {
    for (let story of currentUser.ownStories) {
      const $story = generateStoryMarkup(story, true);
      $myStories.append($story);
    }
  }

  $myStories.show();
}
// $navMyStories.on("click", putUserStoriesOnPage);


function putFavoritesListOnPage() {
  console.log(currentUser.favorites.length);
  $favoritesList.empty();
  if (currentUser.favorites.length === 0) {
    $favoritesList.append("<h5>No favorites added!</h5>");
  } else {
    for (let story of currentUser.favorites) {
      const $story = generateStoryMarkup(story);
      $favoritesList.append($story);
    }
  }

  $favoritesList.show();
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");
  $allStoriesList.empty();
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


async function submitStoryForm (evt) {
  evt.preventDefault();

  let storyData = { 
    storyTitle: $("#story-title").val(),
    storyAuthor: $("#story-author").val(),
    storyUrl: $("#story-url").val()
   };
  console.log(storyData);
  const story = await storyList.addStory(currentUser, storyData);
  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  $submitStoryBtn.slideUp("slow");
  $submitStoryBtn.on("submit", submitNewStory);
}
$submitStoryBtn.on("click", submitStoryForm);

//Deleting a story

async function deleteStory(evt) {
  let $closestLi = $(evt.target).closest("li");
  let storyId = $closestLi.attr("id");

  await storyList.removeStory(currentUser, storyId);
  putUserStoriesOnPage();
}
$myStories.on("click", ".trash-can", deleteStory);



//Favorite/unfavorite a story

async function toggleStoryFavorite(evt) {
  const $closestLi = $(evt.target).closest("li");
  let story = storyList.stories.find(s=>s.storyId === $closestLi.attr("id"));

  if ($(evt.target).hasClass("fas")) {
    await currentUser.removeFavorite(story);
    $(evt.target).closest("i").toggleClass("fas far");
  } else {
    await currentUser.addFavorite(story);
    $(evt.target).closest("i").toggleClass("fas far");
  }

}
$allStoriesList.on("click", "i", toggleStoryFavorite);

function displayFavorites() {
  hidePageComponents();
  $favoritesList.show();
}

$navFavoriteStories.on("click", displayFavorites);

