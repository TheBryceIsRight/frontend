<template>
  <v-container>
    <v-container>
    <v-row class="text-center">
      
      <!-- Introduction -->
      <v-col class="mb-8"  >
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-xs-h4 text-md-h3 text-lg-h2">{{project.Title}}
        </h1>
      </v-col>
    <v-col cols="12">
      <v-card style="max-width:300px" color="#001724" variant="outlined" >
          <v-list-item two-line>
          <v-list-item-header>
            <v-list-item-title class="display-2 text-left">My Role</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.Role}}</v-list-item-subtitle>
            <br/>
            <v-list-item-title class="display-2 text-left">Company</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.Company}}</v-list-item-subtitle>
            <br/>
            <v-list-item-title class="display-2 text-left">Time Frame</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.TimeFrame}}</v-list-item-subtitle>
            <br/>
            <v-list-item-title class="display-2 text-left">Team Style</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.TeamStyle}}</v-list-item-subtitle>
            <br/>
            <v-list-item-title class="display-2 text-left">Class</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.Class}}</v-list-item-subtitle>
            <br/>
            <v-list-item-title class="display-2 text-left">Tools</v-list-item-title>
            <v-list-item-subtitle class="display-2 text-left">{{project.Tools}}</v-list-item-subtitle>
          </v-list-item-header>
        </v-list-item>
        </v-card>
    </v-col>
    <v-col cols="12">
        <!-- Undraw hero illustration -->
        <svg width="100%" height="949" viewBox="0 0 893 949" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_80_22093)">
          <path d="M585.389 427.856C627.012 427.856 660.754 394.113 660.754 352.49C660.754 310.867 627.012 277.125 585.389 277.125C543.766 277.125 510.023 310.867 510.023 352.49C510.023 394.113 543.766 427.856 585.389 427.856Z" fill="#FF6584"/>
          <path d="M792.121 408.682C792.287 408.652 792.412 408.536 792.605 408.565C792.521 408.239 792.41 407.92 792.275 407.611C792.035 407.938 791.79 408.272 791.576 408.564L792.121 408.682Z" fill="white"/>
          <path d="M286.632 530.865C287.073 547.308 289.827 563.606 294.814 579.281C294.928 579.645 295.047 580.003 295.167 580.367H325.699C325.667 580.041 325.634 579.677 325.602 579.281C323.566 555.876 311.828 413.43 325.862 389.07C324.635 391.046 284.265 456.499 286.632 530.865Z" fill="#E6E6E6"/>
          <path d="M288.924 579.28C289.179 579.644 289.445 580.008 289.716 580.366H312.621C312.447 580.057 312.247 579.693 312.013 579.28C308.229 572.451 297.029 552.032 286.633 530.864C275.46 508.117 265.21 484.506 266.073 475.961C265.807 477.888 258.076 536.641 288.924 579.28Z" fill="#E6E6E6"/>
          <path d="M526.939 583.197C526.555 597.532 524.154 611.741 519.806 625.406C519.706 625.724 519.602 626.036 519.498 626.353H492.879C492.908 626.069 492.936 625.752 492.965 625.406C494.739 605.002 504.972 480.816 492.737 459.578C493.807 461.301 529.002 518.363 526.939 583.197Z" fill="#E6E6E6"/>
          <path d="M524.941 625.405C524.719 625.723 524.487 626.04 524.25 626.352H504.281C504.433 626.082 504.608 625.765 504.811 625.405C508.11 619.451 517.875 601.65 526.939 583.196C536.679 563.364 545.615 542.78 544.863 535.33C545.095 537.01 551.835 588.232 524.941 625.405Z" fill="#E6E6E6"/>
          <path d="M222.584 161.173L234.997 151.245C225.354 150.181 221.391 155.44 219.77 159.603C212.236 156.474 204.034 160.574 204.034 160.574L228.871 169.591C227.618 166.244 225.437 163.324 222.584 161.173V161.173Z" fill="#3F3D56"/>
          <path d="M596.467 110.067L608.881 100.139C599.237 99.0751 595.275 104.334 593.653 108.497C586.12 105.369 577.918 109.469 577.918 109.469L602.755 118.486C601.502 115.139 599.321 112.219 596.467 110.067V110.067Z" fill="#3F3D56"/>
          <path d="M779.109 502.69C779.109 510.917 778.823 519.076 778.249 527.168C773.828 591.01 751.691 652.354 714.327 704.308C709.444 711.123 704.317 717.747 698.946 724.179C685.029 740.871 669.577 756.22 652.793 770.025L579.221 726.854L535.233 624.188C535.233 624.188 600.865 491.301 778.992 493.71C779.067 496.693 779.106 499.686 779.109 502.69Z" fill="#3F3D56"/>
          <path d="M778.25 527.168C774.865 574.875 761.629 621.363 739.376 663.698C717.124 706.032 686.338 743.295 648.961 773.135L580.612 733.032L541.603 641.978C541.603 641.978 604.814 513.995 778.25 527.168Z" fill="#004D78"/>
          <path d="M714.327 704.307C709.444 711.122 704.317 717.746 698.946 724.178C662.956 767.42 616.969 801.238 564.966 822.705C554.436 827.047 543.658 830.875 532.633 834.19C453.023 855.361 368.681 850.006 292.388 818.937C216.934 785.26 155.96 725.783 120.417 651.191C115.64 641.149 111.345 630.853 107.53 620.301C174.053 571.569 305.136 501.787 448.001 569.594C487.52 588.351 522.807 605.448 553.863 620.885C632.667 659.948 685.115 688.109 714.327 704.307Z" fill="#3F3D56"/>
          <path d="M698.947 724.178C661.743 768.765 613.924 803.28 559.888 824.548C505.853 845.816 447.337 853.153 389.723 845.884C332.11 838.616 277.249 816.975 230.189 782.953C183.129 748.931 145.381 703.621 120.417 651.19C175.975 607.255 304.117 528.302 444.743 595.038C480.907 612.202 513.194 627.848 541.603 641.977C624.42 683.024 675.435 710.92 698.947 724.178Z" fill="#004D78"/>
          <path d="M600.886 805.392C589.252 811.842 577.259 817.622 564.966 822.705C523.131 839.945 478.314 848.789 433.066 848.733C379.524 848.711 326.716 836.278 278.79 812.409C230.863 788.539 189.123 753.884 156.847 711.164C239.494 702.45 467.946 690.699 600.886 805.392Z" fill="#3F3D56"/>
          <path d="M564.966 822.705C500.095 849.379 428.656 855.733 360.096 840.926C291.537 826.119 229.087 790.85 181.006 739.782C211.067 735.366 447.077 705.04 564.966 822.705Z" fill="#004D78"/>
          <path d="M721.068 310.795V310.806C473.976 128.114 190.878 256.702 188.691 257.689V257.679C220.779 225.595 258.881 200.156 300.815 182.82C342.748 165.483 387.69 156.589 433.066 156.647C553.194 156.647 659.024 217.862 721.068 310.795Z" fill="#E6E6E6"/>
          <path d="M208.51 509.398C250.309 501.861 271.729 426.612 256.352 341.323C240.975 256.034 194.623 193.003 152.823 200.54C111.023 208.076 89.6035 283.326 104.981 368.615C120.358 453.903 166.71 516.934 208.51 509.398Z" fill="#3F3D56"/>
          <path d="M219.252 609.004C216.774 421.668 154.094 245.864 153.461 244.111L147.745 246.173C148.375 247.917 210.711 422.8 213.176 609.087L219.252 609.004Z" fill="#004D78"/>
          <path d="M108.045 333.776L106.175 339.559L181.215 363.827L183.085 358.044L108.045 333.776Z" fill="#004D78"/>
          <path d="M249.202 327.262L187.374 376.229L191.147 380.993L252.976 332.027L249.202 327.262Z" fill="#004D78"/>
          <path d="M409.499 482.391C455.46 482.391 492.719 406.368 492.719 312.59C492.719 218.811 455.46 142.789 409.499 142.789C363.539 142.789 326.28 218.811 326.28 312.59C326.28 406.368 363.539 482.391 409.499 482.391Z" fill="#3F3D56"/>
          <path d="M401.815 590.525C435.145 390.55 402.15 191.298 401.813 189.311L395.33 190.409C395.665 192.387 428.47 390.592 395.328 589.446L401.815 590.525Z" fill="#004D78"/>
          <path d="M336.233 276.078L333.131 281.877L408.384 322.128L411.486 316.329L336.233 276.078Z" fill="#004D78"/>
          <path d="M487.805 296.239L412.562 336.514L415.665 342.312L490.909 302.038L487.805 296.239Z" fill="#004D78"/>
          <path d="M770.979 427.771C740.445 410.628 708.545 396.043 675.604 384.165C493.464 318.258 312.853 343.659 242.158 437.982C297.175 322.429 493.486 286.095 691.59 357.777C714.647 366.112 737.212 375.752 759.175 386.649C763.96 400.098 767.902 413.832 770.979 427.771V427.771Z" fill="#E6E6E6"/>
          <path d="M524.987 241.823L537.4 231.895C527.757 230.831 523.795 236.09 522.173 240.253C514.639 237.125 506.438 241.225 506.438 241.225L531.275 250.241C530.022 246.895 527.84 243.975 524.987 241.823Z" fill="#3F3D56"/>
          </g>
          <defs>
          <clipPath id="clip0_80_22093">
          <rect width="692.605" height="748.733" fill="white" transform="translate(100 100)"/>
          </clipPath>
          </defs>
          </svg>

      </v-col>
            <v-col class="mb-8"  >
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-xs-h6 text-md-h5 text-lg-h4">{{project.IntroHeadline}}
        </h2>
        <br/>
        <p class="display-1 mb-3 text-xs-body-2 text-md-body-1 text-lg-h5">{{project.IntroDescription}}
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Goals
        </h1>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Goals1Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Goals1Description}}
        </h3>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Goals2Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Goals2Description}}
        </h3>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Goals3Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Goals3Description}}
        </h3>
        <br/>

        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Information Architecture
        </h1>
        <br/>
        <v-img
                :src= "project.SiteMapURL"
                class="white--text align-end"
                style="border-radius: 4px"
                cover
              >
        </v-img>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Baseline Research
        </h1>
        <v-img
                :src= "project.ResearchSlideURL"
                class="white--text align-end"
                cover
                style="border-radius: 4px"
              >
        </v-img>
        <br/>
        <br/>
        <p class="display-1 mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Description}}
        </p>
        <br/>
        <br/>
        <p class="display-1 mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Description2}}
        </p>
        <br/>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Refined Wireframes
        </h1>
        <br/>
        <v-img
                :src= "project.LowFiURL"
                class="white--text align-end"
                style="border-radius: 4px"
                width="100%"
                cover
              >
        </v-img>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">High Fidelity Design
        </h1>
        <br/>
        <v-img
                :src= "hifi"
                class="white--text align-end"
                style="border-radius: 4px"
                width="100%"
                cover
              >
        </v-img>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Device Mockups
        </h1>
        <br/>
        <br/>
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                width="100%" 
                height="800"
                title="Figma prototype" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOT5w89thotQdKVT5D02guR%2FPortfolio%3Fkind%3D%26node-id%3D192%253A2723%26page-id%3D192%253A2509%26scaling%3Dscale-down%26viewport%3D663%252C421%252C0.26979386806488037" 
                allowfullscreen>
        </iframe>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-left text-xs-h4 text-md-h3 text-lg-h2">Takeaways
        </h1>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Takeaway1Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Takeaway1Description}}
        </h3>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Takeaway2Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left  text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Takeaway2Description}}
        </h3>
        <br/>
        <h2 class="display-1 font-weight-light mb-3 text-left text-xs-h6 text-md-h5 text-lg-h4">{{project.Takeaway3Headline}}
        </h2>
        <br/>
        <h3 class="display-1 font-weight-light mb-3 text-left text-xs-body-2 text-md-body-1 text-lg-h5">{{project.Takeaway3Description}}
        </h3>
        <br/>
        <br/>
        <h1 class="display-1 font-weight-light mb-3 text-xs-h4 text-md-h3 text-lg-h2">Thank you for reading!</h1>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
</template>

<script>
// import axios from 'axios'
// import mixpanel from 'mixpanel-browser';
// mixpanel.track('Air Toxcity', {
//   'source': "Air Toxcity page",
//   'Air Toxcity Page Visited': true,
// });
export default {
  name: 'CDCProject',
  title: 'Air Toxicity Project',
  data: () => ({

    images: [],
    error: null,
    hifi: "",

  }),
  computed: {
    project: function() { return this.$store.getters.getCDCProjects },
  },
  async mounted () {
    try {
      // const qs = require('qs');
      // const query = qs.stringify(
      //   {
      //     populate: {
      //       Image: {
      //         populate: '*'
      //       }
      //     }
      //   },
      //   {
      //     encodeValuesOnly: true
      //   }
      // );
      // get request
      // const Response= await axios.get(
      //   `${process.env.VUE_APP_API_ENDPOINT}api/articles/3?populate=*`
      // );
      // console.log(Response.data.data);
      // this.project = this.$store.getters.getCDCProjects;
      // this.$store.commit('setCDCProjects', Response.data.data);
      // console.log('Get CDC Projects Test:\n');
      // console.log(this.$store.getters.getCDCProjects);
      this.hifi = this.project.HighFi.hifi01URL;


    } catch (error) {
      this.error = error;
    }
  }
}
</script>
