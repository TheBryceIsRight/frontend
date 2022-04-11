<template>
  <v-app>
    <usage-example
    v-model="model"
    name="v-tooltip"
  >
    <v-defaults-provider
      :defaults="{
        VTooltip: {}
      }"
    >
    <v-app-bar
        color="#004D78"
        dark
      >
        <template v-slot:prepend>
          <v-btn icon dark color='white' aria-label="Home button" to="/" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20.5V14.5H14V20.5H19V12.5H22L12 3.5L2 12.5H5V20.5H10Z" fill="white"/>
            </svg>
            </v-btn>
        </template>

        <v-app-bar-title class="text-white font-weight-light">Bryce's Portfolio</v-app-bar-title>
        <v-spacer/>
          <v-btn icon dark color='white' aria-label="Three dot menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="white"/>
            </svg>
          </v-btn>

          <v-btn icon dark color='white' aria-label="GitHub Profile" href="https://github.com/TheBryceIsRight" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="white"/>
          </svg>
          </v-btn>
          <v-btn
            color="white"
            dark
            icon
            aria-label="LinkedIn Profile" 
            href="https://www.linkedin.com/in/bryce-watson-gatech" 
            target="_blank"
            v-bind="props"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="white"/>
            </svg>
          </v-btn>
      </v-app-bar>
    <v-main class="mx-4 px-5">
      <router-view />
      
    </v-main>
  </v-defaults-provider>
  </usage-example>
  </v-app>
  

</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      blogs: [],
      error: null,
      model: 'default',
      options: ['label', 'outlined'],
    }
  },
  async mounted () {
    try {
      axios.get('http://localhost:1337/api/blogs').then(response => {
        console.log(response);
      });
      const response = await axios.get('http://localhost:1337/api/blogs')
      this.blogs = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
