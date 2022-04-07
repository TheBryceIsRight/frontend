<template>
  <v-app>
    <v-app-bar
        color="#004D78"
        dark
      >
        <template v-slot:prepend>
          <v-btn icon dark color='white' aria-label="Three line menu" to="/" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white"/>
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
          <v-btn aria-label="LinkedIn Profile" icon dark href="https://www.linkedin.com/in/bryce-watson-gatech" target="_blank" color='white' >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="white"/>
            </svg>
          </v-btn>
      </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      blogs: [],
      error: null
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
