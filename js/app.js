Vue.component("food-blog-title", {
  template: "<span>Food Blog</span>",
});

Vue.component("food-blog-nav", {
  data: function () {
    return {
      links: ["Home", "Recipes", "Lifestyles", "Videos", "About"],
    };
  },
  template: `
        <nav class="food-blog-nav" aria-label="Main navigation">
            <a v-for="link in links" :key="link" href="#">{{ link }}</a>
        </nav>
    `,
});

Vue.component("comments-heading", {
  template: "<h2>Comments</h2>",
});

Vue.component("blog-post", {
  props: ["post", "profilePlaceholder"],
  template: `
        <article class="post">
            <div class="post-author">
                <img
                    class="profile-image"
                    :src="profilePlaceholder"
                    :alt="'View profile for ' + post.author"
                    @click="$emit('show-author-info', post.author)"
                    @keydown.enter="$emit('show-author-info', post.author)"
                    tabindex="0"
                    title="Click to view author profile">
                <span class="author">{{ post.author }}</span>
                <span aria-hidden="true">—</span>
                <span class="date">{{ post.date }}</span>
                <span class="reply">{{ post.reply }}</span>
            </div>
            <p>{{ post.comment }}</p>
        </article>
    `,
});

new Vue({
  el: "#container",
  data: {
    chiliImage: "./images/chili.jpg",
    profilePlaceholder: "./images/profile-placeholder.png",
    selectedAuthor: null,
    authors: [
      {
        name: "Brianna",
        foodieLevel: "Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!",
      },
      {
        name: "LINH",
        foodieLevel: "Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
      {
        name: "CATHERINE LEONARDO",
        foodieLevel: "Mentor",
        bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!",
      },
      {
        name: "KALI",
        foodieLevel: "Novice",
        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
    posts: [
      {
        id: 1,
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        reply: "REPLY",
        comment:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
      },
      {
        id: 2,
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        reply: "REPLY",
        comment:
          "I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
      },
      {
        id: 3,
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        reply: "REPLY",
        comment:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
      },
      {
        id: 4,
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        reply: "REPLY",
        comment:
          "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
      },
    ],
  },
  methods: {
    showAuthorInfo: function (authorName) {
      this.selectedAuthor =
        this.authors.find(function (author) {
          return author.name.toLowerCase() === authorName.toLowerCase();
        }) || null;
    },
    closeAuthorInfo: function () {
      this.selectedAuthor = null;
    },
  },
});
