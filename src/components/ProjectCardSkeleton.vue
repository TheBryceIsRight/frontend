<template>
    <div class="container">
      <v-progress-linear
      indeterminate
      color="cyan"
    ></v-progress-linear>
  <div class="profile-card">
    <div class="profile-info">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span />
      <h3 />
      <p />
    </div>
  </div>
  <div class="profile-card">
    <div class="profile-info">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span />
      <h3 />
      <p />
    </div>
  </div>
    </div>
    <div class="container">
  <div class="profile-card">
    <div class="profile-info">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span />
      <h3 />
      <p />
    </div>
  </div>
  <div class="profile-card">
    <div class="profile-info">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <span />
      <h3 />
      <p />
    </div>
  </div>
    </div>
</template>

<style scoped>
.profile-card {
  animation: pulse-bg2 1s infinite;
}
.profile-info {
  width: 100%;
  height: 16px;
  display: block;
  border-radius: 3px;
  animation: pulse-bg 1s infinite;
}
.profile-title {
  width: 100px;
  height: 24px;
  border-radius: 3px;
  animation: pulse-bg 1s infinite;
}

.profile-subtitle {
  width: 100px;
  height: 24px;
  border-radius: 3px;
  animation: pulse-bg 1s infinite;
}
.profile-description {
  width: 80%;
  height: 16px;
  border-radius: 3px;
  animation: pulse-bg 1s infinite;
}
@keyframes pulse-bg {
  0% {
    background-color: #004D78;
  }
  50% {
    background-color: #2B698C;
  }
  100% {
    background-color: #004D78;
  }
}
@keyframes pulse-bg2 {
  0% {
    background-color: #FFF;
  }
  50% {
    background-color: #F0F0F0;
  }
  100% {
    background-color: #FFF;
  }
}
</style>