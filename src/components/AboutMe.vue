<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- Undraw hero illustration -->
                <h1 class="display-2 font-weight-light mb-3">
          About Me page
        </h1>
      </v-col>
      <!-- Introduction -->
      <v-col class="mb-4">

        <br/>
        <br/>
        <v-img
            src= "https://res.cloudinary.com/bryce-portfolio/image/upload/v1649799100/about_me_gttbgu.png"
            style = "border-radius: 4px"
        >

        </v-img>
        <br/>
        <p class="display-1 mb-3 text-left text-xs-caption text-md-caption text-lg-caption">Photo Credit Georgia Tech Institute Communications</p>
        <br/>
        <v-img
            src= "https://res.cloudinary.com/bryce-portfolio/image/upload/v1649814809/ATL_fkik0q.png"
            style = "border-radius: 4px"
        >

        </v-img>
        <br/>
        <br/>
        <br/>

        <p class="display-1 mb-3 text-center text-xs-subtitle-2 text-md-subtitle-1 text-lg-h5">I'm a UX Designer living in Atlanta, Georgia. When I'm not making the next feature in Figma, I'm riding my bike, reading the Kingkiller Chronicles, listening to Frank Ocean, and playing Hades by Supergiant Games.</p>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe',
  title: 'About Me',

  data: () => ({

    blogs: [],
    projects: [],
    images: [],
    error: null,

  })
}
</script>
